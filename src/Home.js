import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const URL = process.env.REACT_APP_API_BASE_URL;

export default function Home() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // const keyPath =

 useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${searchInput}&key=${URL}`
    )
    .then((response) => response.json())
      .then((data) => {
        console.log(data,'data')
        if (data) {
          setData(data.items)
        }
        // setData(data.items)
      })
      .catch((error) => console.error(error));
  }, [data]);

  console.log(data);

  function handleChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  function submitHandler() {
    if (searchInput.length > 0) {
      return (
        <div>
          {data.map((d) => {
            return d.snippet.channelTitle.match(searchInput);
          })}
        </div>
      );
    }
    // console.log(data)
  }

  return (
    <div>
      <Link> </Link>
      <form onClick={submitHandler}>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
        <input type="submit" value="submit" />
      </form>
      <ul>
        {data.map((v, index) => {
          return (
            <li key={v.snippet.channelId}>
              {v.snippet.channelTitle}
              <br />
              <Link to={`/videos/${v.id}`} key={index}>
                {" "}
                {v.snippet.thumbnails.default.url}{" "}
              </Link>
              <br />
              {v.snippet.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
