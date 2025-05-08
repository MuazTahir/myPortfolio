import React from "react";
import { FaComputer } from "react-icons/fa6";
import { GiServerRack } from "react-icons/gi";
import { MdOutlineDeveloperMode } from "react-icons/md";

export default function About() {
  return (
    <div className="about">
      <div className="about-container1">
        <div className="skills-about">
          <div className="line-about"></div>
          <FaComputer className="icon-laptop" />
          <h1>MERN Stak Developer</h1>
        </div>
        <div className="skills-about">
          <div className="line-about"></div>
          <MdOutlineDeveloperMode className="icon-laptop" />
          <h1>Backend Development</h1>
        </div>
        <div className="skills-about">
          <div className="line-aboutout"></div>
          <GiServerRack className="icon-laptop" />
          <h1>Website Hosting</h1>
        </div>
      </div>
      <div className="about-container2">
        <h1>About Me</h1>
        <p>
          As a web developer specializing in the MERN stack,
          my main priorities are responsive and clear frontend interfaces.
          I practice full-stack web development, including UI design with
          React and API programming with Express on Node,
          alongside a database on MongoDB.
          <span className="newSpan">
            Let’s connect and create something impactful together!
          </span>

        </p>
        <div className="last-slide">
          <div>
            <h1>
              120 <span>+</span>
            </h1>

            <p>
              Completed <br /> Projects
            </p>
          </div>
          <div>
            <h1>
              95 <span>%</span>
            </h1>

            <p>
              Project <br />
              Completion
            </p>
          </div>
          <div>
            <h1>
              1 <span>+</span>
            </h1>

            <p>
              Years of <br />
              experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
