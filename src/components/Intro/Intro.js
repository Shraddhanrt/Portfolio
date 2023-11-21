import React from "react";
import "./Intro.css";
import Bg from "../../Assets/Bg.png";
import Hire from "../../Assets/Hire.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello text-light"> Hello,</span>
        <span className="introText text-light">
          I'm <span className="introName">Shraddha Regmi</span>
          <br /> Web Developer
        </span>
        <p className="introPara text-light">
          I am skilled and passionate web designer with experience in creating
          visually appealing and user-friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img
              src={Hire}
              alt="Hire Me"
              className="rounded me-2"
              height={20}
              width={20}
            />
            Hire Me
          </button>
        </Link>
      </div>

      <img src={Bg} alt="Profile" className="Bg" />
    </section>
  );
};

export default Intro;
