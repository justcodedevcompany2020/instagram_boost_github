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
import LikeSlider from "../../components/Likes/LikeSlider";
import CommentSlider from "../../components/Comments/CommentSlider";
import FollowerSlider from "../../components/Followers/FollowerSlider";
import CardSlider from "../../components/Cards/CardSlider";
function Home() {
  return (
    <div className="homepage">
      <Header />
      <Cards />
      <CardSlider/>
      <TryIt />
      <TryitMob/>
      <Likes />
      <LikeSlider/>
      <Comments />
      <CommentSlider/>
      <Followers />
      <FollowerSlider/>
      <Faq />
    </div>
  );
}

export default Home;
