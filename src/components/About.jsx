import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <motion.div
        ref={ref}
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>

        <motion.div variants={itemVariants} className="about-text">
          <p>
            I'm a passionate Web Developer with expertise in building modern web applications. 
            I love creating elegant solutions to complex problems and continuously learning new technologies 
            to stay at the forefront of web development.
          </p>
          <p>
            With a strong foundation in both frontend and backend development, I specialize in creating 
            seamless user experiences and robust server-side architectures. My approach combines clean code, 
            best practices, and innovative thinking.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
            and sharing knowledge with the developer community.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="skills-container">
          <motion.div 
            className="skill-category"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Frontend</h3>
            <ul>
              <li>React / Next.js</li>
              <li>TypeScript / JavaScript</li>
              <li>HTML5 / CSS3</li>
              <li>Tailwind CSS</li>
            </ul>
          </motion.div>

          <motion.div 
            className="skill-category"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Backend</h3>
            <ul>
              <li>Node.js / Express</li>
              <li>Python / Django</li>
              <li>RESTful APIs</li>
              <li>GraphQL</li>
            </ul>
          </motion.div>

          <motion.div 
            className="skill-category"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Tools & Others</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>MongoDB / PostgreSQL</li>
              <li>AWS / Cloud Services</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
