import "../styles/contact.css";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully! 🚀");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Get In Touch</h2>

        <p>
          I'm always open to internship opportunities,
          collaborations and exciting AI or Software
          Development projects.
        </p>
      </motion.div>

      <div className="contact-container">
        {/* Left Side */}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Let's Build Something Amazing Together 🚀</h3>

          <p>
            Feel free to reach out if you have an
            opportunity, project or just want to connect.
          </p>

          <div className="info-box">
            <div>
              <FaEnvelope />
              <a href="mailto:nehamishraaaa11@gmail.com">
                Email
              </a>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Greater Noida, Uttar Pradesh, India</span>
            </div>

            <div>
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/neha-mishra-405702310/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div>
              <FaGithub />
              <a
                href="https://github.com/Neha134-gif"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
          >
            <FaPaperPlane />

            <span>
              {loading
                ? "Sending..."
                : "Send Message"}
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}