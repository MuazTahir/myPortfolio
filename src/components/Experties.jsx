import React from "react";
import { motion } from "motion/react";

export default function Experties() {
  return (
    <div className="experties">
      <h1 className="textCenter">Skills & Experties</h1>
      <div className="experties-container">
        <motion.div
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ x: 0, opacity: 1 }}
         
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="container1"
        >
          <div className="front-check">
            <h1>Frontend Development</h1>
            <div className="experties-bar">
              <span>React.js</span>
              <span>90%</span>
            </div>
            <div className="experties-lineMain">
              <div className="experties-line">
                <nav className="experties-line-kayanda1"></nav>
              </div>
            </div>
            <div className="experties-bar">
              <span>Next.js</span>
              <span>85%</span>
            </div>
            <div className="experties-lineMain">
              <div className="experties-line">
                <nav className="experties-line-kayanda2"></nav>
              </div>
            </div>
            <div className="experties-bar">
              <span>TypeScript</span>
              <span>80%</span>
            </div>
            <div className="experties-lineMain">
              <div className="experties-line">
                <nav className="experties-line-kayanda3"></nav>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "50%" }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="container1"
       >
          <div className="front-check">
            <h1>Backend Development</h1>
            <div className="experties-bar">
              <span>Node.js</span>
              <span>95%</span>
            </div>
            <div className="experties-lineMain">
              <div className="experties-line">
                <nav className="experties-line-kayanda4"></nav>
              </div>
            </div>
            <div className="experties-bar">
              <span>Express</span>
              <span>81%</span>
            </div>
            <div className="experties-lineMain">
              <div className="experties-line">
                <nav className="experties-line-kayanda5"></nav>
              </div>
            </div>
            <div className="experties-bar">
              <span>MongoDB</span>
              <span>90%</span>
            </div>
            <div className="experties-lineMain">
              <div className="experties-line">
                <nav className="experties-line-kayanda6"></nav>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
