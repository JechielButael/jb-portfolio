import React from "react";
import "./Header.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AppWrap } from "../../wrapper";

const Header = () => (
  <div className="header app__flex">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="header__img app__flex"
    >
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        src={images.profilePic1}
        alt="profile_pic"
        className="overlay_circle"
      />
    </motion.div>
    <div className="header__title app__flex-column">
      <div className="header__text app__flex-column">
        <p className="p-text">Hello, I'm</p>
        <h1 className="head-text">Jechiel Butael</h1>
        <p className="p-text">Software Engineer</p>
      </div>
      <div className="header__btn">
        <button
          className="btn__color-2"
          onClick={() => {
            window.open("../../../public/JechielButael-resume.pdf", "_blank");
          }}
        >
          Download CV
        </button>
        <button
          className="btn__color-1"
          onClick={() => {
            window.location.href = "./#contact";
          }}
        >
          Contact Info
        </button>
      </div>
      <div className="header__icons">
        <FaGithub
          onClick={() =>
            window.open("https://github.com/jechielbutael", "_blank")
          }
        />
        <FaLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/jechiel-butael-45672b247/",
              "_blank"
            )
          }
        />
      </div>
    </div>
  </div>
);

export default AppWrap(Header, "home");
