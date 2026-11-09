import "../styles/projects.css";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

// ===========================
// FEATURED PROJECTS
// ===========================

const featuredProjects = [
  {
    id: "aqds",
    title: "Agentic Quality Detection System (AQDS)",
    subtitle: "AI-Powered Visual Quality Inspection Platform",
    description:
      "Manual product inspection can be time-consuming for manufacturers, while dedicated inspection hardware can be expensive. AQDS is a browser-based quality inspection system that analyzes product images using Gemini 2.5 Flash Vision API. It identifies cracks, scratches, dents and discoloration, then provides Accept/Reject verdicts with confidence scores and severity levels. It also supports image validation, downloadable reports and inspection statistics.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Gemini 2.5 Flash Vision API",
      "Computer Vision",
    ],
    github: "https://github.com/Neha134-gif/AQDS",
    demo: null,
  },
  {
    id: "synapse",
    title: "SynapseOS",
    subtitle: "Multi-Agent Document Intelligence Platform",
    description:
      "Searching and extracting information from documents manually can be time-consuming. SynapseOS is a full-stack AI platform being developed to help specialised agents retrieve, summarize and work with documents. The current implementation includes JWT authentication, document upload and RAG-based question answering with semantic search. LangGraph-based agent orchestration is currently in development.",
    tags: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "ChromaDB",
      "LangChain",
      "Gemini API",
    ],
    github: "https://github.com/Neha134-gif/SynapseOS",
    demo: null,
  },
];

// ===========================
// OTHER PROJECTS
// ===========================

const otherProjects = [
  {
    id: "expenseflow",
    title: "ExpenseFlow",
    subtitle: "Personal Expense Tracking Project",
    description:
      "A personal web development project available as a deployed web application. The project is included with direct access to its source code and live version. Explore the implementation and available functionality through the repository and demo.",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/Neha134-gif/-ExpenseFlow",
    demo: "https://neha134-gif.github.io/-ExpenseFlow/",
  },
  {
    id: "northpeak",
    title: "NorthPeak Digital Agency",
    subtitle: "Responsive Digital Agency Website",
    description:
      "Developed a responsive website for a digital agency using semantic HTML, CSS and vanilla JavaScript. Implemented responsive navigation, interactive UI elements and client-side form validation, with mobile-friendly layouts for a consistent browsing experience across screen sizes.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
    github: "https://github.com/Neha134-gif/northpeak-digital-agency",
    demo: "https://northpeak-digital-agency-rho.vercel.app/",
  },
];

// ===========================
// PROJECT BUTTONS
// ===========================

function ProjectButtons({ github, demo }) {
  return (
    <div className="project-buttons">
      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          <FaGithub />
          GitHub
        </a>
      ) : (
        <button
          className="demo-btn coming-soon-btn"
          disabled
        >
          <FaGithub />
          GitHub (Coming Soon)
        </button>
      )}

      {demo ? (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="demo-btn live-btn"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>
      ) : (
        <button
          className="demo-btn coming-soon-btn"
          disabled
        >
          <FaExternalLinkAlt />
          Live Demo (Coming Soon)
        </button>
      )}
    </div>
  );
}

// ===========================
// FEATURED PROJECT CARD
// ===========================

function FeaturedProjectCard({ project, index }) {
  return (
    <motion.article
      className="featured-project project-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.12 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="project-content">
        <span className="project-category">
          <FaStar />
          Featured Project
        </span>

        <h3>{project.title}</h3>

        <h4>{project.subtitle}</h4>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <ProjectButtons
          github={project.github}
          demo={project.demo}
        />
      </div>
    </motion.article>
  );
}

// ===========================
// OTHER PROJECT CARD
// ===========================

function OtherProjectCard({ project, index }) {
  return (
    <motion.article
      className="small-project project-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <span className="project-category">
        <FaStar />
        Other Project
      </span>

      <h3>{project.title}</h3>

      <h4>{project.subtitle}</h4>

      <p>{project.description}</p>

      <div className="mini-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <ProjectButtons
        github={project.github}
        demo={project.demo}
      />
    </motion.article>
  );
}

// ===========================
// MAIN PROJECTS COMPONENT
// ===========================

export default function Projects() {
  return (
    <section className="projects" id="projects">

      {/* SECTION HEADING */}

      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>

        <p>
          A selection of projects where I apply software
          development and AI concepts to build practical solutions.
        </p>
      </motion.div>

      {/* FEATURED PROJECTS */}

      <div className="featured-projects-list">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* OTHER PROJECTS HEADING */}

      <motion.div
        className="other-projects-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Other Projects</h3>

        <p>
          More projects showcasing my web development practice.
        </p>
      </motion.div>

      {/* OTHER PROJECTS */}

      <div className="other-projects">
        {otherProjects.map((project, index) => (
          <OtherProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

    </section>
  );
}
