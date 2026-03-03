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
            I am a Web Developer and Application Developer specialized in delivering comprehensive mobile 
            and web solutions using Flutter, React Native, Node.js, Kotlin, and TypeScript. My expertise lies in 
            architecting secure, scalable multi-role systems and engineering transactional solutions with seamless API integrations.
          </p>
          <p>
            Beyond the code, I actively leverage AI to fuel my continuous learning. When I'm not building apps, I'm 
            usually behind an espresso machine, exploring the art of coffee brewing.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="skills-container">
          <motion.div 
            className="skill-category"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Mobile Development</h3>
            <ul>
              <li>Flutter / Dart</li>
              <li>React Native</li>
              <li>Kotlin</li>
              <li>Java</li>
            </ul>
          </motion.div>

          <motion.div 
            className="skill-category"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Web Development</h3>
            <ul>
              <li>React / Next.js</li>
              <li>TypeScript / JavaScript</li>
              <li>Node.js / Express</li>
              <li>HTML5 / CSS3 / Tailwind</li>
            </ul>
          </motion.div>

          <motion.div 
            className="skill-category"
            whileHover={{ scale: 1.05 }}
          >
            <h3>AI & Backend</h3>
            <ul>
              <li>OpenAI API</li>
              <li>MongoDB / PostgreSQL</li>
              <li>Firebase / Supabase</li>
              <li>RESTful APIs</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
