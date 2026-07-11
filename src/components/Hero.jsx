import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import profile from "../assets/images/profile.png";
import resume from "../assets/resume.pdf";

import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Glow */}

      <div className="hero-bg"></div>

      <div className="hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >

          <span className="badge">
            🚀 Available for Internship
          </span>

          <p className="hello">
            Hello, I'm
          </p>

          <h1 className="name">
          Neha <span>Mishra</span>
         </h1>

          <div className="typing-wrapper">

  <TypeAnimation
    sequence={[
  "B.Tech CSE Student",
  2000,
  "AI/ML Enthusiast",
  2000,
  "Aspiring Software Developer",
  2000,
  "Open Source Contributor",
  2000,
]}
    wrapper="span"
    speed={45}
    repeat={Infinity}
    className="typing-text"
  />

</div>

          <p className="description">
  I'm a B.Tech Computer Science student passionate about
  Artificial Intelligence, Machine Learning and Software
  Development. I enjoy solving DSA problems, building modern
  web applications and exploring research-oriented AI systems.
  My goal is to contribute to impactful technology while
  continuously learning and growing as a developer.
</p>

          <div className="hero-buttons">

            <a
              href={resume}
              download
              className="btn-primary"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="#contact"
              className="btn-secondary"
            >
              Contact
              <FaArrowRight />
            </a>

          </div>

          <div className="socials">

  <a
    href="https://github.com/Neha134-gif"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/neha-mishra-405702310/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://leetcode.com/u/vXebB9USNt/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <SiLeetcode />
  </a>

</div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ scale: .8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="image-wrapper">

            <img
              src={profile}
              alt="Neha"
            />

          </div>

        </motion.div>

      </div>
      <div className="section-divider">
  <div className="divider-line"></div>

  <div className="scroll-indicator">
    <a href="#about">
      <span>⌄</span>
    </a>
  </div>
   </div>

    </section>
  );
}