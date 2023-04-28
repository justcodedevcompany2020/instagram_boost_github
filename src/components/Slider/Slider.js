import React from "react";
// import Carousel from "react-carousel";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
          centerMode: true,
          centerPadding: '60px',
          className: 'centered-slide' 
        },
      },
    ],
  };


  return (
    <Slider {... settings}>
      <span className="slider-card-span">
          <div className="slider-card">
            <h4>Personal</h4>
            <p>$19</p>
            <p className="slider-p">
              All the basic features to boost your <br /> freelance career
            </p>
            <div className="horizontal-line"></div>
            <div className="slider-point">
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Full Access to Landingfolio</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>100 GB Free Storage</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Unlimited Visitors</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>10 Agents</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
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
      <span className="slider-card-span">
          <div className="slider-card">
            <h4>Personal</h4>
            <p>$19</p>
            <p className="slider-p">
              All the basic features to boost your <br /> freelance career
            </p>
            <div className="horizontal-line"></div>
            <div className="slider-point">
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Full Access to Landingfolio</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>100 GB Free Storage</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Unlimited Visitors</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>10 Agents</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
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
      <span className="slider-card-span">
          <div className="slider-card">
            <h4>Personal</h4>
            <p>$19</p>
            <p className="slider-p">
              All the basic features to boost your <br /> freelance career
            </p>
            <div className="horizontal-line"></div>
            <div className="slider-point">
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Full Access to Landingfolio</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>100 GB Free Storage</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>Unlimited Visitors</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
                <img src={require("../../public/images/Icon.png")} alt="" />
                <p>10 Agents</p>
                <img src={require("../../public/images/Icon1.png")} alt="" />
              </div>
              <div className="sp-one">
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
      
    </Slider>
  );
}

<div></div>;
// <Carousel {...settings}>
//   {slides.map((slide, index) => (
//     <div key={index}>
//       <div className="slider-all">
//         <div className="like_card">
//           <h4>{slide.heading}</h4>
//           <p>
//             <span>{slide.span}</span>
//             {slide.month}
//           </p>
//           <p className="carre">
//             {slide.desc} <br /> {slide.br}
//           </p>
//           <div className="horizontal-line"></div>
//           <div className="points">
//             <div className="one-item">
//               <img src={require(`../../public/${slide.img}`)} alt="" />
//               <p>{slide.point1}</p>
//               <img src={require(`../../public/${slide.img1}`)} alt="" />
//             </div>
//             <div className="one-item">
//               <img src={require(`../../public/${slide.img}`)} alt="" />
//               <p>{slide.point2}</p>
//               <img src={require(`../../public/${slide.img1}`)} alt="" />
//             </div>
//             <div className="one-item">
//               <img src={require(`../../public/${slide.img}`)} alt="" />
//               <p>{slide.point3}</p>
//               <img src={require(`../../public/${slide.img1}`)} alt="" />
//             </div>
//             <div className="one-item">
//               <img src={require(`../../public/${slide.img}`)} alt="" />
//               <p>{slide.point4}</p>
//               <img src={require(`../../public/${slide.img1}`)} alt="" />
//             </div>
//             <div className="one-item">
//               <img src={require(`../../public/${slide.img}`)} alt="" />
//               <p>{slide.point5}</p>
//               <img src={require(`../../public/${slide.img1}`)} alt="" />
//             </div>
//             <span className="border">
//               <button className="free-trial">{slide.free}</button>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
// </Carousel>

export default Sliders;
