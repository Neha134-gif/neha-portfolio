import "../styles/footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2>
          Neha<span>.</span>
        </h2>

        <p>
          Aspiring Software Engineer • AI Enthusiast • Building intelligent
          software with modern web technologies.
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/Neha134-gif"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/neha-mishra-405702310/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:nehamishraaaa11@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Neha Mishra. Built with React
            <FaHeart className="heart" />
          </p>

        </div>

      </div>

    </footer>
  );
}