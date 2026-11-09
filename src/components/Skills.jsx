
import "../styles/skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBrain,
  FaCode,
  FaCheckCircle,
  FaBookOpen,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Programming",
    skills: [
      { icon: <FaCode />, name: "C" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiPython />, name: "Python" },
      { icon: <FaDatabase />, name: "SQL" },
    ],
  },

  {
    title: "Web Development",
    skills: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
    ],
  },

  {
    title: "Core Concepts",
    skills: [
      { icon: <FaCode />, name: "Data Structures & Algorithms" },
      { icon: <FaCode />, name: "Object-Oriented Programming" },
    ],
  },

  {
    title: "Databases & Tools",
    skills: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <FaCode />, name: "VS Code" },
      { icon: <FaBrain />, name: "Google Gemini Vision API" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">

      {/* Heading */}

      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>

        <p>
          My technical toolkit and technologies I use
          to build practical software and AI-powered solutions.
        </p>
      </motion.div>

      {/* Skills Grid */}

      <div className="skills-grid">

        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >

            <h3>{group.title}</h3>

            <div className="skill-items">

              {group.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <span>{skill.icon}</span>
                  <p>{skill.name}</p>
                </div>
              ))}

            </div>

          </motion.div>
        ))}

      </div>

      {/* Currently Learning */}

      <motion.div
        className="learning-box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h3>
          <FaBookOpen className="learning-title-icon" />
          Currently Learning
        </h3>

        <ul>

          <li>
            <FaCheckCircle className="check-icon" />
            Data Structures & Algorithms
          </li>

          <li>
            <FaCheckCircle className="check-icon" />
            Software Engineering & Development
          </li>

          <li>
            <FaCheckCircle className="check-icon" />
            Artificial Intelligence & Machine Learning
          </li>

          <li>
            <FaCheckCircle className="check-icon" />
            Fairness & Explainability in AI Systems
          </li>

          <li>
            <FaCheckCircle className="check-icon" />
            Skin-Tone Bias in Skin Disease Classifiers
          </li>

        </ul>

      </motion.div>

      {/* Tech Stack */}

      <motion.div
        className="tech-stack"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h3>⚡ Tech Stack</h3>

        <div className="stack-tags">
          <span>C</span>
          <span>C++</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>React</span>
          <span>SQL</span>
          <span>MySQL</span>
          <span>PostgreSQL</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Google Gemini Vision API</span>
        </div>

      </motion.div>

    </section>
  );
}
