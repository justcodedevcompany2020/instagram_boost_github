import React from "react";
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="card card1">
        <img src={require("../../public/images/Image (1).png")} alt="" />
        <p>
          You choose the <br /> <span>service you need</span>{" "}
        </p>
      </div>
      <div className="card">
        <img src={require("../../public/images/Image.png")} alt="" />
        <p>
          You choose the <br /> post for which you <br />{" "}
          <span>need the service</span>{" "}
        </p>
      </div>
      <div className="card card1">
        <img src={require("../../public/images/image3.png")} alt="" />
        <p>
          You pay for the order, <br />
          <span>and the work begins</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Cards;
