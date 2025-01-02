import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./About.scss";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        So <span>Who </span>
        Am I?
      </h2>

      <div className="app__about app__flex">
        <div className="about__content ">
          <div className="about__pic">
            <img src={images.profilePic2} alt="about__pic" />
          </div>
          <div className="about__text">
            <ul class="custom-bullets">
              <li>
                I'm Jechiel, a 28 years old religious guy, from Petah Tikva,
                Israel
              </li>
              <li>
                Served in the military through the "Shiluvim - Hesder" program
                (2 years of Hesder Yeshiva and then 2 years of military service)
                in HaKirya, Tel Aviv as a Human Resources NCO
              </li>
              <li>
                Graduated from Afeka - Academic College of Engineering, Tel Aviv
                with a final grade of 85, and majored in AI - Machine Learning.
                Gained a diverse set of skills and developed a self-learning
                path for continuous growth. During my studies I've acquired
                Java, SQL, Python, C++, C, algorithms, OOP, linux and more.
              </li>
              <li>
                I'm very passionate about exploring full-stack development,
                therefore, for the last year, I've been taking online courses
                and worked on personal projects to challenge myself.
                Technologies I’ve worked with: TypeScript, JavaScript, React,
                HTML, CSS, Node.js, frameworks such as Tailwind, Material UI,
                Bootstrap, and various npm libraries.
              </li>
              <li>
                I'm a quick learner with passion for growth, team player, easy
                to work with, enthusiastic and open to exploring new directions.
                I'm a creative problem-solver, always bringing fresh ideas.
              </li>
              <li>
                Going to the gym on a regular basis. Maintaining a healthy, and
                stable diet is a key factor for me. I enjoy reading books,
                fashion, and extremely fond of gaming and music.
              </li>
              <li>
                My goal is to seek a position to continue exploring and
                improving my skills by bringing innovative ideas, creative
                solutions and deliver impactful results
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
