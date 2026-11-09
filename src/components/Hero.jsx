
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import profile from "../assets/images/profile.png";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-bg"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="hero-left"
          initial={{ x: -35, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >

          <div className="badge">
            <span className="status-dot"></span>
            Open to Internship
          </div>

          <p className="hello">Hello, I'm</p>

          <h1 className="name">
            Neha <span>Mishra</span>
          </h1>

          <div className="typing-wrapper">
            <TypeAnimation
              sequence={[
                "Aspiring Software Engineer",
                2200,
                "Full-Stack Developer",
                2200,
                "AI Application Developer",
                2200,
                "Problem Solver",
                2200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="typing-text"
            />
          </div>

          <p className="description">
          I enjoy building practical software solutions, from AI-powered
          applications to full-stack web projects. I'm strengthening my
          foundations in Data Structures and Algorithms, Software
          Engineering, and Artificial Intelligence while exploring ways
          to build useful, impactful technology.
          </p>

          {/* CONTACT BUTTON */}

          <div className="hero-buttons">
            <a href="#contact" className="btn-secondary">
              Get in Touch
              <FaArrowRight />
            </a>
          </div>

          {/* SOCIAL LINKS */}

          <div className="socials">

  <a
    href="https://github.com/Neha134-gif"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/neha-mishra-405702310/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:nehamishraaaa11@gmail.com"
    aria-label="Email"
  >
    <FaEnvelope />
  </a>

</div>

      

        </motion.div>

        {/* RIGHT PROFILE IMAGE */}

        <motion.div
          className="hero-right"
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          <div className="image-wrapper">
            <img
              src={profile}
              alt="Neha Mishra - Software Developer"
            />
          </div>

        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}

      <div className="section-divider">

        <div className="divider-line"></div>

        <div className="scroll-indicator">
          <a href="#about" aria-label="Scroll to About section">
            <span>↓</span>
          </a>
        </div>

      </div>

    </section>
  );
}
