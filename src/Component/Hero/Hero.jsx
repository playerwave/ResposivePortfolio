import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Alex Bennett,</span>
        frontend Developer from USA
      </h1>
      <p>
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
