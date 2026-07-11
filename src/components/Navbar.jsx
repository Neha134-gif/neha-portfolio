import "../styles/navbar.css";
import { useState, useEffect } from "react";

import {
  FaHome,
  FaUser,
  FaCode,
  FaRocket,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  {
    id: "home",
    name: "Home",
    icon: <FaHome />,
  },
  {
    id: "about",
    name: "About",
    icon: <FaUser />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <FaCode />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <FaRocket />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <FaEnvelope />,
  },
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {

        const top = section.offsetTop - 140;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height - 80
        ) {
          setActive(section.id);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >

      <div className="nav-container">

        <a
          href="#home"
          className="logo"
          onClick={() => {
            setActive("home");
            setMenuOpen(false);
          }}
        >
          Neha<span>.</span>
        </a>

        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav>

          <ul
            className={`nav-links ${
              menuOpen ? "open" : ""
            }`}
          >

            {navLinks.map((link) => (

              <li key={link.id}>

                <a
                  href={`#${link.id}`}
                  className={
                    active === link.id
                      ? "active"
                      : ""
                  }
                  aria-current={
                    active === link.id
                      ? "page"
                      : undefined
                  }
                  onClick={() => {
                    setActive(link.id);
                    setMenuOpen(false);
                  }}
                >

                  {link.icon}

                  <span>{link.name}</span>

                </a>

              </li>

            ))}

          </ul>

        </nav>

      </div>

    </header>

  );
}