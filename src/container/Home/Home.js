import Header from "../../components/Header";
import "./style.css";
import React from "react";
import Cards from "../../components/Cards/Cards";
import TryIt from "../../components/TryIt/TryIt";
import Likes from "../../components/Likes/Likes";
import Comments from "../../components/Comments/Comments";
import Followers from "../../components/Followers/Followers";
import Faq from "../../components/FAQ/Faq";
import TryitMob from "../../components/TryIt/Tryit-mob";
import Sliders from "../../components/Slider/Slider"
function Home() {
  return (
    <div className="homepage">
      <Header />
      <Cards />
      <TryIt />
      <TryitMob/>
      <Likes />
      <Sliders/>
      <Comments />
      <Followers />
      <Faq />
    </div>
  );
}

export default Home;
