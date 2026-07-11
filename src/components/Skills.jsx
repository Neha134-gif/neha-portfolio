import "../styles/skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaBrain,
  FaCode,
  FaCheckCircle,
  FaBookOpen,
} from "react-icons/fa";

import {
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Programming",
    skills: [
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiPython />, name: "Python (Basics)" },
      { icon: <SiMysql />, name: "SQL" },
    ],
  },

  {
    title: "Web Development",
    skills: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
{
  title: "Artificial Intelligence",
  skills: [
    { icon: <FaBrain />, name: "Artificial Intelligence" },
    { icon: <FaBrain />, name: "Generative AI" },
    { icon: <FaBrain />, name: "Prompt Engineering" },
    { icon: <FaBrain />, name: "Machine Learning (Learning)" },
  ],
},

  {
    title: "Tools",
    skills: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <FaCode />, name: "VS Code" },
      { icon: <FaLinux />, name: "Linux" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>

        <p>
        My technical toolkit and the technologies I'm continuously
        learning to build impactful software solutions.
        </p>
      </motion.div>

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
    DSA
</li>

<li>
    <FaCheckCircle className="check-icon" />
    Backend Web Development
</li>

<li>
    <FaCheckCircle className="check-icon" />
    Machine Learning Specialization
</li>

<li>
    <FaCheckCircle className="check-icon" />
    Supervised Machine Learning
</li>

<li>
    <FaCheckCircle className="check-icon" />
    Advanced Learning Algorithms
</li>

<li>
    <FaCheckCircle className="check-icon" />
    Unsupervised Learning, Recommenders & Reinforcement Learning
</li>
</ul>
      </motion.div>
      <motion.div
  className="tech-stack"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h3>⚡ Tech Stack</h3>

  <div className="stack-tags">
    <span>C++</span>
    <span>JavaScript</span>
    <span>React</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>SQL</span>
    <span>Git</span>
    <span>GitHub</span>
    <span>Artificial Intelligence</span>
    <span>Machine Learning</span>
  </div>
</motion.div>
    </section>
  );
}