import './About.css';
import text_decor from "../../assets/title_decor.png";
import AboutTab from './AboutTab';

const About = () => {
  return (
    <div className='about' id="about">
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={text_decor} alt="text decor" />
      </div>
      <AboutTab />
    </div>
    
  )
}

export default About
