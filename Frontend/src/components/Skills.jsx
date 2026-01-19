import { useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("active");
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(ref.current);
  }, []);

  return (
    <section id="skills" className="skills-pro" ref={ref}>
      <h2>Skills</h2>
      <div className="skills-wrapper">
        <div className="skill pro left">⚛ React</div>
        <div className="skill pro top">📜 JavaScript</div>
        <div className="skill pro right">🌐 HTML</div>
        <div className="skill pro left">🎨 CSS</div>
        <div className="skill pro bottom">🟢 Node.js</div>
        <div className="skill pro right">🍃 MongoDB</div>
        <div className="skill pro top">🐙 Git</div>
        <div className="skill pro bottom">🎯 Figma</div>
      </div>
    </section>
  );
};

export default Skills;
