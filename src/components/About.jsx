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
            I'm a Web Developer and Application Developer focused on building mobile and web solutions 
            with Flutter, React Native, Node.js, and TypeScript. My work involves creating secure, 
            scalable systems with multi-role access and smooth API integrations.
          </p>
          <p>
            I've developed transactional applications handling real-time data sync and built systems 
            that prioritize both performance and user experience. When I'm not coding, you'll find me 
            experimenting with AI tools or making espresso.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="tech-stack-section">
          <h2 className="stack-title">STACK</h2>
          
          <div className="stack-categories">
            <div className="stack-category">
              <h3 className="category-label">INFRASTRUCTURE</h3>
              <div className="tech-badges">
                <span className="tech-badge">Linux</span>
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">Cisco</span>
                <span className="tech-badge">CLI</span>
              </div>
            </div>

            <div className="stack-category">
              <h3 className="category-label">PROGRAMMING</h3>
              <div className="tech-badges">
                <span className="tech-badge">SQL</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Git</span>
                <span className="tech-badge">Java</span>
              </div>
            </div>

            <div className="stack-category">
              <h3 className="category-label">DESIGN & IOT</h3>
              <div className="tech-badges">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">IoT Integration</span>
              </div>
            </div>
          </div>

          <div className="stack-categories">
            <div className="stack-category">
              <h3 className="category-label">MOBILE DEVELOPMENT</h3>
              <div className="tech-badges">
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">Dart</span>
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">Kotlin</span>
              </div>
            </div>

            <div className="stack-category">
              <h3 className="category-label">WEB DEVELOPMENT</h3>
              <div className="tech-badges">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Express</span>
                <span className="tech-badge">Tailwind CSS</span>
              </div>
            </div>

            <div className="stack-category">
              <h3 className="category-label">AI & BACKEND</h3>
              <div className="tech-badges">
                <span className="tech-badge">OpenAI API</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">PostgreSQL</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">Supabase</span>
                <span className="tech-badge">RESTful APIs</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
