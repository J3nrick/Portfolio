import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const contactMethods = [
    {
      name: "Email",
      value: "jenerick.101@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:jenerick.101@gmail.com"
    },
    {
      name: "GitHub",
      value: "github.com/J3nrick",
      icon: <FaGithub />,
      link: "https://github.com/J3nrick"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/jenrick-ambalong",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jenrick-ambalong/"
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
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          CONTACT
        </motion.h2>

        <motion.p 
          className="contact-description"
          variants={itemVariants}
        >
          I'm always open to new opportunities, collaborations, and interesting projects. 
          Feel free to reach out through any of the following channels.
        </motion.p>

        <motion.div className="contact-links" variants={containerVariants}>
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-link"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="contact-icon">{method.icon}</div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  {method.name}
                </div>
                <span>{method.value}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
