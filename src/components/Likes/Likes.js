import React from "react";
import "./like.css";

function Likes() {
  return (
    <div className="likes">
      <h2>Likes</h2>
      <div className="likes-cards">
        <span className="box-span">
          <div className="like_card">
            <h4>Personal</h4>
            <p>
              <span>$19</span>/ month
            </p>
            <p className="carre">
              All the basic features to boost your <br /> freelance career
            </p>
            <div className="horizontal-line"></div>
            <div className="points">
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Full Access to Landingfolio</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>100 GB Free Storage</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Unlimited Visitors</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>10 Agents</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Live Chat Support</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <span className="border">
                <button className="free-trial">Get 14 Days Free Trial</button>
              </span>
            </div>
          </div>
        </span>
        <span className="box-span">
          <div className="like_card">
            <h4>Professional</h4>
            <p>
              <span>$49</span>/ month
            </p>
            <p className="carre">
              All the basic features to boost your <br /> freelance career
            </p>
            <div className="horizontal-line"></div>
            <div className="points">
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Full Access to Landingfolio</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>100 GB Free Storage</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Unlimited Visitors</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>10 Agents</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Live Chat Support</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <span className="border">
                <button className="free-trial">Get 14 Days Free Trial</button>
              </span>
            </div>
          </div>
        </span>
        <span className="box-span">
          <div className="like_card">
            <h4>Business</h4>
            <p>
              <span>$99</span>/ month
            </p>
            <p className="carre">
              All the basic features to boost your <br /> freelance career
            </p>
            <div className="horizontal-line"></div>
            <div className="points">
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Full Access to Landingfolio</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>100 GB Free Storage</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Unlimited Visitors</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>10 Agents</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="one-item">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Live Chat Support</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <span className="border">
                <button className="free-trial">Get 14 Days Free Trial</button>
              </span>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Likes;
