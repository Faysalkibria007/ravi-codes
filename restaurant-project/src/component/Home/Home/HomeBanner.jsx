import React, { useEffect, useState } from "react";
import img1 from "../../../../public/Images/i1.jpg";
import img3 from "../../../../public/Images/ii2.jpg";
import img4 from "../../../../public/Images/i2.webp";

import HomeCard from "./HomeCard";

const HomeBanner = () => {


  const [chefs, setChefs] = useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/chefs')
          .then(res => res.json())
          .then(data => setChefs(data));
}, []);

  return (
    <div>
      <div className="h-screen">
        <div className="carousel w-full h-[800px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1
          style={{ fontFamily: "Dancing Script, cursive", fontWeight: 700 }}
          className="flex justify-center mt-2 text-4xl text-black mb-4"
        >
          Our Chef
        </h1>
        {chefs.map((chef) => (
          <HomeCard key={chef.id} chef = {chef}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
