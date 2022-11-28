import React, { useRef, useState } from "react";
import { ReactDOM } from "react";
import "./Drop.css";
// import Dropdown from 'react-bootstrap/Dropdown';


const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    const [button, setButton] = useState()

    let dates = [
        ...new Map(data.map((d) => [d.snippet.thumbnail.title, d])).keys(),
      ]
        .sort((a, b) => b.slice(-4) - a.slice(-4))

    function buttonHandler(e){
        setButton(e.target.value)

        if(e.target.value === "title"){
            return(
                
            )
        }

    }
  
    return (
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Filter</span>
          <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li onClick={buttonHandler}><a href="date">Date</a></li>
            <li><a href="rating">Rating</a></li>
            <li><a href="relevance">Relevance</a></li>
            <li><a href="title">Title</a></li>
          </ul>
        </nav>
      </div>
    );
  };

export default Dropdown;
