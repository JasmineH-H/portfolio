import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img3.png";

const Hero = ({ onNavigateProjects }) => {
  return (
    <div className="hero">
      <div className="hero-img-frame">
        <img className="hero-img" src={profile_img} alt="Jasmine's profile image" />
      </div>
      <h1><span>I'm Jasmine Huang,</span> a software engineer based in Vancouver BC</h1>
      <p>I'm also a UX/UI Designer with experience in digital marketing.</p>
      <div className="hero-action">
        <button className="hero-connect" onClick={onNavigateProjects} type="button">
          Explore My Work
        </button>
        <div className="hero-resume">View Resume</div>
      </div>
    </div>
  );
};

export default Hero;
