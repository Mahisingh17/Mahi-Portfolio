import React from "react";
import "./Projects.css";
import { motion } from "framer-motion"; 
import eCommercImage from "../../assets/images/E-Commerce.jpg";
import atsImage from "../../assets/images/ATS.jpg";
import showoffImage from "../../assets/images/Showoff.jpeg"
import Capture from "../../assets/images/Capture.PNG"

const Projects = () => {
  return (
    <div className="container project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">
        Here are some of the latest projects I have worked on. They showcase my
        expertise in full-stack development and UI/UX design.
      </p>

      <div className="row" style={{ rowGap: "24px" }}>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="col-md-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="card project-card rounded">
              <div className="card-image">
                <span className="project-category-badge">{project.category}</span>
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="card-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">{project.title}</h6>
                </div>
                <a className="ad-btn" href={project.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Project Data Array
const projectData = [
  {
    title: "Weather App",
    category: "Frontend",
    image: Capture,
    techStack: ["React", "BootStrap", "Weather Api"],
    link: "https://weather-app-mahima.netlify.app/",
  },
  {
    title: "E-Commerce Website",
    category: "Full Stack",
    image: eCommercImage,
    techStack: ["React.Js", "Node.Js", "Express.Js", "MongoDB"],
    link: "https://github.com/Mahisingh17/E-Commerce-Website",
  },
  {
    title: "Applicant Tracking System",
    category: "Backend",
    image: atsImage,
    techStack: ["Node.Js", "Express.Js", "MongoDB"],
    link: "https://github.com/Mahisingh17/Resume_Version_2.0_Backend",
  },
  {
    title: "SHOWOFF",
    category: "Frontend",
    image: showoffImage,
    techStack: ["HTML", "React", "Tailwind", "Sanity"],
    link: "https://github.com/Mahisingh17/Show-off",
  },
];

export default Projects;
