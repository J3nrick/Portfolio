import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Hakbang Frontend",
      description: "A modern frontend application built with cutting-edge technologies. Features responsive design, smooth animations, and intuitive user interface.",
      technologies: ["Flutter", "Dart", "Mobile App"],
      github: "https://github.com/Shiroe28/Hakbang-Frontend.git",
      live: null,
      color: "#6366f1",
      image: "/Hakbang.png"
    },
    {
      title: "Orase",
      description: "Modern web application showcasing frontend development skills with interactive features and clean design implementation.",
      technologies: ["React", "CSS", "JavaScript", "Responsive Design"],
      github: null,
      live: null,
      color: "#10b981",
      image: "/Orase.png"
    },
    {
      title: "OtoGuide",
      description: "Automotive guide website providing comprehensive information and resources for vehicle maintenance and care.",
      technologies: ["React", "Web Development", "Responsive Design"],
      github: null,
      live: null,
      color: "#f59e0b",
      image: "/otoguideph (3).png"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <motion.div
        ref={ref}
        className="projects-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: `0 20px 40px ${project.color}40`,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="project-card-header"
                style={{ borderTopColor: project.color }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </motion.div>

              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      whileHover={{ scale: 1.1, backgroundColor: project.color }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
