import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Drop.css";

const Dropdown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>Filter</span>
        <img
          src="https://t3.ftcdn.net/jpg/03/20/78/84/240_F_320788475_nEiLVViOBewea7taZWqNUR0lJAMTAaSo.jpg"
          alt="User avatar"
          style={{ height: "30px" }}
        />
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <Link id="date">Date</Link>
          </li>
          <li>
            <Link id="rating">Rating</Link>
          </li>
          <li>
            <Link id="relevance">Relevance</Link>
          </li>
          <li>
            <Link id="title">Title</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dropdown;
