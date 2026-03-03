import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="hero-image-container"
          variants={imageVariants}
        >
          <motion.img
            src="/id.jpg"
            alt="Jenrick Ambalong"
            className="hero-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="hero-image-glow"></div>
        </motion.div>

        <div className="hero-info">
          <motion.h1 variants={itemVariants} className="hero-name">
            Jenrick Ambalong
          </motion.h1>

          <motion.div variants={itemVariants} className="hero-title-container">
            <h2 className="hero-title">Web Developer | Application Developer</h2>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-description">
            Building innovative mobile and web solutions powered by AI. 
            Crafting scalable applications with Flutter, React, and modern technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-social">
            <motion.a
              href="https://github.com/J3nrick"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jenrick-ambalong/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
            <motion.a
              href="https://www.instagram.com/jcolacea/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram /> Instagram
            </motion.a>
            <motion.a
              href="mailto:jenerick.101@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope /> Email
            </motion.a>
          </motion.div>

          <motion.button
            variants={itemVariants}
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
