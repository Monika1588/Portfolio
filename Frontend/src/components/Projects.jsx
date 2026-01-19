import { useEffect, useRef } from "react";
import "./Projects.css";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const projects = [
  {
    title: "Pet Care Website",
    img: project1,
    desc: "Converted Figma design into responsive React website.",
    tech: ["React", "CSS", "Figma"],
    demo: "https://euphonious-bublanina-22e0d5.netlify.app/",
    github: "https://github.com/Monika1588/Figma",
  },
  {
    title: "Hospital Management",
    img: project2,
    desc: "Full-stack app for managing patients and appointments.",
    tech: ["HTML","CSS","JavaScript", "Node.js", "Express", "MongoDB Atlas"],
    demo: "https://node-project-4-ks8n.onrender.com",
    github: "https://github.com/Monika1588/Node_project",
  },
  {
    title: "Recipe Master",
    img: project3,
    desc: "Recipe browsing app with clean UI.",
    tech: ["React", "API", "CSS"],
    demo: "#",
    github: "#",
  },
  {
    title: "Study Planner",
    img: project4,
    desc: "Productivity tool with timers and progress tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://startling-starlight-26e4dd.netlify.app",
    github: "https://github.com/Monika1588/Study-Planner",
  },
  {
    title: "Drum Machine",
    img: project5,
    desc: "Interactive drum machine built in React.",
    tech: ["React", "Hooks", "CSS"],
    demo: "https://harmonious-parfait-ac68ac.netlify.app/",
    github: "https://github.com/Monika1588/Drum_Machine",
  },
  {
    title: "Magic Match",
    img: project6,
    desc: "Memory card matching game.",
    tech: ["React", "Game Logic", "CSS"],
    demo: "https://soft-liger-bfc535.netlify.app",
    github: "https://github.com/Monika1588/Node_project",
  },
];

const Projects = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });

      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      const timelineHeight = timelineRef.current.offsetHeight;
      const progress = Math.min(
        Math.max((window.innerHeight - timelineTop) / timelineHeight, 0),
        1
      );

      lineRef.current.style.height = `${progress * 100}%`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="timeline-section">
      <h2 className="section-title">Projects</h2>

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line" ref={lineRef}></div>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"} reveal`}
          >
            <div className="card">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.demo} className="btn primary" target="_blank">
                  Live Demo
                </a>
                <a href={project.github} className="btn secondary" target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
