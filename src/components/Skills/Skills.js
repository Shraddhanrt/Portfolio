import React from "react";
import "./Skills.css";
import UiUx from "../../Assets/UiUx.png";
import Mobiledesign from "../../Assets/Mobiledesign.jpg";
import Webdesign from "../../Assets/Webdesign.jpg";
import NavBar from "../NavBar/Navbar";
const Skills = () => {
  return (
    <>
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className=" skillDesc">
          I am skilled and passionate web designer with experience.I thrive on
          turning ideas into visually appealing and intuitive designs. With a
          blend of creativity and technical expertise, I aim to craft websites
          and interfaces that not only look stunning but also deliver an
          exceptional user experience.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UiUx} alt=" " className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p></p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Webdesign} alt=" " className="skillBarImg" />
            <div className="skillBarText">
              <h2> Web Design</h2>
              <p></p>
            </div>
          </div>
          <div className="skillBar">
            <img src={Mobiledesign} alt=" " className="skillBarImg" />
            <div className="skillBarText">
              <h2> Mobile Design</h2>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
