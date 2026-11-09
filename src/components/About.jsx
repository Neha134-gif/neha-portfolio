
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

const aboutData = [
  {
    icon: FaGraduationCap,
    title: "Education",
    description: "B.Tech in Computer Science & Engineering",
    detail: "2024 – 2028",
  },
  {
    icon: FaBrain,
    title: "AI & Machine Learning",
    description: "Exploring Artificial Intelligence, ML and Generative AI.",
    detail: "Learning & Building",
  },
  {
    icon: FaLaptopCode,
    title: "Development",
    description: "Building full-stack applications and intelligent software solutions.",
    detail: "Web Development",
  },
  {
    icon: FaCode,
    title: "Problem Solving",
    description: "Practicing Data Structures, Algorithms and competitive programming.",
    detail: "DSA Enthusiast",
  },
  {
    icon: FaCertificate,
    title: "Certifications",
    description: "Oracle Cloud AI Foundations and Generative AI certifications.",
    detail: "Oracle Certified",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    description: "Based in Greater Noida, Uttar Pradesh, India.",
    detail: "India",
  },
];

export default function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* Heading */}

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>
            About <span>Me</span>
          </h2>

          <p>
            A little more about my journey, interests and what I do.
          </p>
        </motion.div>

        {/* About Cards */}

        <div className="about-grid">

          {aboutData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="about-card"
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >

                <div className="about-card-icon">
                  <Icon />
                </div>

                <div className="about-card-content">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span>{item.detail}</span>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
