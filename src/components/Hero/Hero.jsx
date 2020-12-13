import React from "react";
import heroImage from "../../assets/illustration-working.svg";
import "./hero.css";

function Hero() {
  return (
    <div className="overflow-protection">
      <div className="container hero-section">
        <div className="flex-space-between my-4">
          <div className="text-area">
            <h1 className="main-text">More than just shorter links</h1>
            <p className="hero-lead">
              Bulid your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <button className="btn btn-hero">Get Started</button>
          </div>
          <div className="image-area">
            <img alt="hero illustration" src={heroImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
