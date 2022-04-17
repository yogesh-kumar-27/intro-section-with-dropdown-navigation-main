import React from "react";
import img from '../images/image-hero-desktop.png'
import img1 from '../images/image-hero-mobile.png'
import data from '../data'
const Banner = () => {
  return (
    <section className="banner">
      <div className="left">
        <h1>Make <br /> remote work</h1>
        <h1 className="heading">Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="btn">Learn more</button>
        <div className="imgs">
          {
            data.imageData?.map(({image}) => (
              <img key={image} src={image} alt="img" />
            ))
          }
        </div>
      </div>
      <div className="image">
        <img src={img} alt="" />
        <img className="mob" src={img1} alt="" />
      </div>
    </section>
  );
};

export default Banner;
