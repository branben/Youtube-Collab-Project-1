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
              // setButton(button);
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
          <input id="magGlass" type="submit" value="🔍" />
          {/* <Dropdown onChange={buttonHandler} /> */}
        </div>
      </form>

      <ul className="video-list">
        {data.map((v, index) => {
          return (
            <div className="individual">
              <li key={v.snippet.channelId}>
                {v.snippet.title}
                <br />

                <Link to={`/videos/${v.id.videoId}`} key={index}>
                  <img
                    className="vid-imgs"
                    src={v.snippet.thumbnails.medium.url}
                  />
                </Link>
                <br />
                <strong>{v.snippet.description}</strong>
              </li>
            </div>
          );
        })}
      </ul>
      
    </div>
  );
}
