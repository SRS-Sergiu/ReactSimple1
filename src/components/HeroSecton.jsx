import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSecton() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" alt="tiguan" autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        dignissimos aliquam harum, doloremque recusandae consequatur!
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer <i className="fa fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSecton;
