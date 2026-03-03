import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Certifications = () => {
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

  const certifications = [
    {
      name: "IT Specialist - Networking",
      issuer: "Pearson",
      image: "/Networking.png",
      description: "Professional certification in networking fundamentals and infrastructure"
    },
    {
      name: "IT Specialist - Databases",
      issuer: "Pearson",
      image: "/Database.png",
      description: "Professional certification in database design, implementation, and management"
    },
    {
      name: "IT Specialist - Java",
      issuer: "Pearson",
      image: "/Java.png",
      description: "Professional certification in Java programming and application development"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <motion.div
        ref={ref}
        className="certifications-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Certifications
        </motion.h2>

        <motion.div className="certifications-grid" variants={containerVariants}>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.name} className="cert-image" />
              </div>
              <div className="cert-details">
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
