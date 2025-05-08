import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="first-col">
        <div>
          Hello <span>.</span>
        </div>
        <div className="line-enter">I'm Muhammad Muaz Tahir</div>
        <div className="text-animation">FullStack developer</div>
        <a href="/Resume.pdf"
          download="My_CV.pdf">
          <div className="btn-container">
            <button>Got a project ?</button>
            <button className="left-button">
              My resume
            </button>

          </div>
        </a>
        <div className="social-icons">
          <a href="https://github.com/MuazTahir" target="_blank">
            <BsGithub className="social-iconsName" />
          </a>
          <a href="">
            <CiLinkedin className="social-iconsName set-social" />
          </a>
          <a href="">
            <FaTwitter className="social-iconsName" />
          </a>
          <a href="">
            <AiFillInstagram className="social-iconsName" />
          </a>
        </div>
      </div>
      <div className="secound-col">
        <div className="ring">
          <img src="/remove.png" width={100} height={100} className="picture-set" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
