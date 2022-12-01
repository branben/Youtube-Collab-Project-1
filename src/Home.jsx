import { useState } from "react";
import { Link } from "react-router-dom";
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
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchInput}&key=${URL}`
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
    <>
      <div className="container">
        <div className="videos">
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
                <>
                  <br />
                  <div className="individual">
                    <div className="reccomendation">
                      <div className="preview">
                        <Link to={`/videos/${v.id.videoId}`} key={index}>
                          <img
                            width={168}
                            alt="thumbnail"
                            className="vid-imgs"
                            src={v.snippet.thumbnails.medium.url}
                          />
                        </Link>
                      </div>
                      <div className="info">
                        <Link to={`/videos/${v.id.videoId}`} key={index}>
                          <div className="title">
                            {v.snippet.title}
                            <br />
                            Alot of Views
                            <br />
                            *
                            <br />
                            Some years ago
                          </div>
                        </Link>
                        <div className="username">{v.snippet.channelTitle}</div>
                        <div className="view-info">
                          <div className="description">
                            {v.snippet.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
