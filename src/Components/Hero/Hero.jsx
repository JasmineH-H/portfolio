import "./Hero.css";
import profile_img from "../../assets/profile_img.png";

const Hero = ({ onNavigateProjects, onNavigateResume }) => {
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
        <button className="hero-resume" onClick={onNavigateResume} type="button">
          View Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
