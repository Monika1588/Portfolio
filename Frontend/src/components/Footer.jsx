import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-brand">
            <h2>Monika Verma</h2>
            <p>
              Frontend Developer focused on crafting clean, scalable and
              user-centric digital experiences.
            </p>
          </div>
    

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
        © 2026 Monika Verma. All rights reserved.
        </div>
      </footer>


      {showTop && (
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
