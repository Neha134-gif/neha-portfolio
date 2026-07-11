import "../styles/about.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBrain,
  FaLaptopCode,
  FaCode,
  FaMapMarkerAlt,
  FaCertificate,
} from "react-icons/fa";

import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Heading */}

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>

          <p>
            Get to know me better
          </p>
        </motion.div>

        {/* Content */}

        <div className="about-grid">

          {/* Left */}

          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3>
              Building intelligent software with
              <span> AI & Modern Technologies.</span>
            </h3>

            <p>
              I'm currently pursuing a B.Tech in Computer Science and Engineering
              with a strong interest in Artificial Intelligence, Machine Learning
              and Software Development.
            </p>

            <p>
              I enjoy solving Data Structures & Algorithms problems, building
              modern web applications and exploring research-oriented AI
              systems. My goal is to contribute to impactful technology while
              continuously learning and growing as a developer.
            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="info-card">
              <FaGraduationCap />
              <div>
                <h4>Education</h4>
                <p>B.Tech CSE (2024–2028)</p>
              </div>
            </div>

            <div className="info-card">
              <FaBrain />
              <div>
                <h4>Interest</h4>
                <p>Artificial Intelligence & Machine Learning</p>
              </div>
            </div>

            <div className="info-card">
              <FaLaptopCode />
              <div>
                <h4>Focus</h4>
                <p>Software Development & DSA</p>
              </div>
            </div>

            <div className="info-card">
              <FaCode />
              <div>
                <h4>Open Source</h4>
                <p>GSSoC Contributor</p>
              </div>
            </div>

            <div className="info-card">
              <FaCertificate />
              <div>
                <h4>Certification</h4>
                <p>Oracle Cloud AI Foundations</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>Greater Noida, India</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}