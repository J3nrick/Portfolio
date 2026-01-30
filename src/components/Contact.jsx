import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
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
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const socialLinks = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:jenerick.101@gmail.com",
      color: "#ea4335"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/J3nrick",
      color: "#ffffff"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jenrick-ambalong/",
      color: "#0077b5"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/jcolacea/",
      color: "#e4405f"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <motion.div
        ref={ref}
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p 
          className="contact-description"
          variants={itemVariants}
        >
          I'm always open to new opportunities, collaborations, and interesting projects. 
          Feel free to reach out!
        </motion.p>

        <motion.div className="contact-links" variants={containerVariants}>
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target={social.link.startsWith('http') ? '_blank' : undefined}
              rel={social.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-link"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, -10, 10, -10, 0],
                boxShadow: `0 10px 30px ${social.color}60`
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="contact-icon"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {social.icon}
              </motion.div>
              <span>{social.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="contact-email-box"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="email-icon" />
          <a href="mailto:jenerick.101@gmail.com">jenerick.101@gmail.com</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
