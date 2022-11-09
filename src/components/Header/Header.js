import React from "react";
import { VscSearch } from "react-icons/vsc";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="ThreeCircles">
        <div className="circle" style={{ backgroundColor: "red" }}></div>
        <div className="circle" style={{ backgroundColor: "orange" }}></div>
        <div
          className="circle"
          style={{ backgroundColor: "greenyellow" }}
        ></div>
      </div>
      <div className="search">
        <div className="searchMovies">
          <h1>
            WOOKIE <br />
            MOVIES
          </h1>
        </div>
        <div className="inputSearch">
          <VscSearch style={{marginTop:"10px"}} />
          <input  type="text" />
        </div>
      </div>
      <div style={{ height: "3px", backgroundColor: "black" }}></div>
    </div>
  );
}

export default Header;
