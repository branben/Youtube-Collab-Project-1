import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Home.css";
const URL = "AIzaSyDG9ehFjejGANZ0RdIQGrj7BNzJ7IN0t9E";
// process.env.REACT_APP_API_BASE_URL;
export default function Home() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (searchInput.length > 0) {
      const result = JSON.parse(window.localStorage.getItem(searchInput));
      if (!result) {
        fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchInput}&key=${URL}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data, "data");
            if (!data.error) {
              setSearchInput("");
              window.localStorage.setItem(
                searchInput,
                JSON.stringify(data.items)
              );
              setData(data.items);
            }
            // setData(data.items)
          })
          .catch((error) => console.error(error));
      } else {
        setData(result);
      }
    }
  }
  console.log(data);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
          />
          <input type="submit" value="🔍" />
        </div>
      </form>
      <Dropdown/>
      <ul>
        {data.map((v, index) => {
           
          return (
            <div>

            <li key={v.snippet.channelId}>
             
              {v.snippet.title}
              <br />
              <Link to={`/videos/${v.id.videoId}`} key={index}>
                <img src={v.snippet.thumbnails.default.url} />
              </Link>
              <br />
              {v.snippet.description}
            </li>
         
            </div>
            );
          })}
      </ul>
    </div>
  );
}
