import React from "react";
import "./tryit-mob.css";

function TryitMob() {
  return (
    <div className="try-mob">
      <h2>Try for free</h2>
      <div className="like_card">
        <h4>1000</h4>
        <p className="p">
          $50
        </p>
        <p className="carre">
          All the basic features to boost your <br /> freelance career
        </p>
        <div className="horizontal-line"></div>
        <div className="points">
          <div className="one-item">
            <img src={require("../../public/images/Icon1.png")} alt="" />
            <p>Full Access to Landingfolio</p>
            <img src={require("../../public/images/Icon.png")} alt="" />
          </div>
          <div className="one-item">
            <img src={require("../../public/images/Icon1.png")} alt="" />
            <p>100 GB Free Storage</p>
            <img src={require("../../public/images/Icon.png")} alt="" />
          </div>
          <div className="one-item">
            <img src={require("../../public/images/Icon1.png")} alt="" />
            <p>Unlimited Visitors</p>
            <img src={require("../../public/images/Icon.png")} alt="" />
          </div>
          <div className="one-item">
            <img src={require("../../public/images/Icon1.png")} alt="" />
            <p>10 Agents</p>
            <img src={require("../../public/images/Icon.png")} alt="" />
          </div>
          <div className="one-item">
            <img src={require("../../public/images/Icon1.png")} alt="" />
            <p>Live Chat Support</p>
            <img src={require("../../public/images/Icon.png")} alt="" />
          </div>
          <span className="border">
            <button className="free-trial">Get Started Now</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TryitMob;
