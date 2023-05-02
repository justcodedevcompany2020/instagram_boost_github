import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Likes/likeslider.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
function FollowerSlider() {
  const [width, setWidth] = React.useState(0);
  const ref = useRef(null)

  useEffect(()=>{
    // when the component gets mounted
    setWidth(ref.current.offsetWidth);
    // to handle page resize
    const getwidth = () => {
      setWidth(ref.current.offsetWidth);
    };
    window.addEventListener("resize", getwidth);
    // remove the event listener before the component gets unmounted
    return () => window.removeEventListener("resize", getwidth);
  },[])
  console.log(width)
  return (
    <div  ref = {ref} className="swiper">
      <h2 className="swiper-h2">Follower</h2>
   
        {width <=425 && 

        
       <div className="container ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
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
            <div className="carts swiper-slide">
              <h4 className="slide-h4">Personal</h4>
              <p className="price">$19</p>
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
                <span className="border2">
                  <button className="free-trial2">
                    Get 14 Days Free Trial
                  </button>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carts swiper-slide">
              <h4 className="slide-h4">Proffesional</h4>
              <p className="price">$49</p>
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
                <span className="border2">
                  <button className="free-trial2">
                    Get 14 Days Free Trial
                  </button>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carts swiper-slide">
              <h4 className="slide-h4">Busines</h4>
              <p className="price">$99</p>
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
                <span className="border2">
                  <button className="free-trial2">
                    Get 14 Days Free Trial
                  </button>
                </span>
              </div>
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
  }
    </div>
  );
}
export default FollowerSlider;