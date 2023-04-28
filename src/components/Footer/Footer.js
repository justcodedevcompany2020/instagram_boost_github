import React from "react";
import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { SiInstagram, SiGithub } from "react-icons/si";
import {GrFacebookOption } from "react-icons/gr";
function Footer() {
  return (
    <footer>
      <h2>WH</h2>
      <div className="footer-items">
        <div>
          <h3>Company</h3>
          <p>Trial</p>
          <p>Comments </p>
          <p>Followers</p>
          <p>Likes</p>
        </div>

        <div className="foot-item1">
          {" "}
          <h3>Help</h3>
          <p>Customer Support</p>
          <p>Delivery Details</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="foot-item1">
          {" "}
          <h3>Resources</h3>
          <p>Free eBooks</p>
          <p>Development Tutorial</p>
          <p>How to - Blog</p>
          <p>Youtube Playlist</p>
        </div>
      </div>

      <div className="mob-menu">
        <div className="mob">
          <h3>Company</h3>
          <div className="icons5">
            <div className="icon">
              <BsTwitter size="1.2rem" />
            </div>
            <div className="icon">
              <GrFacebookOption size="1.2rem" />
            </div>
            <div className="icon">
              <SiInstagram size="1.1rem" />
            </div>
            <div className="icon">
              <SiGithub size="1.1rem" />
            </div>
          </div>
        </div>
        <p className="menu-p">Trial</p>
        <p className="menu-p">Comments </p>
        <p className="menu-p">Followers</p>
        <p className="menu-p">Likes</p>
      </div>
      <div className="copyright">
        <p>© Copyright 2022, All Rights Reserved by ClarityUI</p>
        <div className="icons">
          <div className="icon">
            <BsTwitter size="1.2rem" />
          </div>
          <div className="icon">
            <GrFacebookOption size="1.2rem" />
          </div>
          <div className="icon">
            <SiInstagram size="1.1rem" />
          </div>
          <div className="icon">
            <SiGithub size="1.1rem" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
