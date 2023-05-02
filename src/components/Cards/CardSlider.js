import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Cards/cards.css"
import "../Cards/cardslider.css"
import { Pagination, Navigation } from "swiper";

function CardSlider() {
  return (
    <div className="swiperik">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="card card1">
            <img src={require("../../public/images/Image (1).png")} alt="" />
            <p>
              You choose the <br /> <span>service you need</span>{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card2">
            <img src={require("../../public/images/Image.png")} alt="" />
            <p>
              You choose the <br /> post for which you <br />{" "}
              <span>need the service</span>{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card card1">
            <img src={require("../../public/images/image3.png")} alt="" />
            <p>
              You pay for the order, <br />
              <span>and the work begins</span>{" "}
            </p>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default CardSlider;
