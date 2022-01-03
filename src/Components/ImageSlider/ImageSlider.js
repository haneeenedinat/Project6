import React, { useState } from "react";
import "./ImageSlider.css";

export default function ImageSlider() {
  let SliderImg = [
    {
      src: "../img/img.jpg",
    },
    {
      src: "../img/Services3.png",
    },
    {
      src: "../img/Services2.jpg",
    },

    {
      src: "../img/Services12.jpg",
    },
  ];
  const [current, setcurrent] = useState(0);
  const length = SliderImg.length;

  const prevImage = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextImage = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);

  return (
      <div className="OurWork">
          <h2>Our Work</h2>
    <div className="ImageSlider">
      <i class="fas fa-arrow-circle-left" onClick={prevImage}></i>
      {SliderImg.map((element,index) => {
        return (
          <div >

              {index===current &&(
            <img src={element.src} alt="img slider" />
              )}
          </div>
        );
      })}
      <i class="fas fa-arrow-circle-right" onClick={nextImage}></i>
    </div>
    </div>
  );
}
