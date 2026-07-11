import "../styles/projects.css";
import { motion } from "framer-motion";

import aqds from "../assets/images/aqds.png";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

export default function Projects() {
  return (
    <section className="projects" id="projects">

      {/* ================= Heading ================= */}

      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>

        <p>
          A selection of projects showcasing my skills in web development,
          AI-powered applications and open-source contributions.
        </p>
      </motion.div>

      {/* ================= Featured Project ================= */}

      <motion.div
        className="featured-project"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="project-image">

          <img
            src={aqds}
            alt="Agentic Quality Detection System"
          />

        </div>

        <div className="project-content">

          <span className="project-category">
            <FaStar />
            Featured AI Project
          </span>

          <h3>
            Agentic Quality Detection System
          </h3>

          <h4>
            AI-powered Visual Quality Inspection Platform
          </h4>

          <p>
            AQDS is an AI-powered quality inspection platform designed
            to detect manufacturing defects using computer vision and
            Generative AI. The current version focuses on building a
            responsive frontend architecture, with future integration
            of Machine Learning and OpenCV-based defect detection.
          </p>

          <div className="project-tags">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Gemini Vision</span>
            <span>Responsive UI</span>

          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/Neha134-gif/AQDS-System"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <FaGithub />
              GitHub
            </a>

            <button
              className="demo-btn"
              disabled
            >
              <FaExternalLinkAlt />
              Live Demo (Coming Soon)
            </button>

          </div>

        </div>

      </motion.div>

      {/* ================= Other Projects ================= */}

      <div className="other-projects">

        <motion.div
          className="small-project"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          viewport={{ once: true }}
        >

          <h3>🌐 Personal Portfolio</h3>

          <p>
            A modern developer portfolio built with React,
            Framer Motion and responsive design to showcase
            my projects, technical skills and achievements.
          </p>

          <div className="mini-tags">

            <span>React</span>
            <span>CSS</span>
            <span>Framer Motion</span>

          </div>

        </motion.div>

        <motion.div
          className="small-project"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
        >

          <h3>✨ EaseMotion CSS</h3>

          <p>
            Reusable CSS animation components developed during
            GirlScript Summer of Code 2026, focused on building
            modern and reusable UI effects.
          </p>

          <div className="mini-tags">

            <span>CSS</span>
            <span>Animations</span>
            <span>Open Source</span>

          </div>

        </motion.div>

        <motion.div
          className="small-project coming-soon"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
        >

          <h3>🚀 More Projects Coming Soon</h3>

          <p>
            Currently building projects in Machine Learning,
            Backend Development and Computer Vision.
            More exciting projects will be added soon.
          </p>

        </motion.div>

      </div>

    </section>
  );
}