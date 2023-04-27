import React from "react";
import "./hamburger.css";

function Hamburger() {
  return (
    <div className="cancel">
      <div className="hamb-page">
      <div className="hamb-info">
        <img src={require("../../public/images/Avatar.png")} alt="" />
        <div className="log-info">
          <p className="name">Logged as Kevin</p>
          <p className="nickname">Instagram_666</p>
        </div>
      </div>
      <ul>
        <li>Trial</li>
        <li>Followers</li>
        <li>Likes</li>
        <li>FAQ</li>
      </ul>
    </div>
    </div>
  );
}

export default Hamburger;
