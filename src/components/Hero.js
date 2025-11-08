import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <motion.div
          className="gradient-orb orb-1"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
        <motion.div
          className="gradient-orb orb-2"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
        <motion.div
          className="gradient-orb orb-3"
          animate={{
            x: [0, 50, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hero-avatar"
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="avatar-circle">
            {!imageError ? (
              <img 
                src={`${process.env.PUBLIC_URL}/images/profile.jpg`} 
                alt="Gaurav Kumar" 
                className="avatar-image"
                onError={() => setImageError(true)}
              />
            ) : (
              <span>GK</span>
            )}
          </div>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="greeting">Hello, I'm</span>
          <span className="name">Gaurav Kumar</span>
        <motion.span
          className="title-text"
          variants={itemVariants}
        >
          Full-Stack Developer
        </motion.span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          React Native • ReactJS • Node.js • IoT Embedded Communication
        </motion.p>

        <motion.p className="hero-description" variants={itemVariants}>
          Innovative and detail-oriented Mobile Application Developer with over 5 years of experience
          in designing and building high-performance mobile apps across Android and iOS platforms.
          Skilled in bridging mobile software with embedded systems.
        </motion.p>

        <motion.div className="hero-contact-info" variants={itemVariants}>
          <motion.a
            href="tel:+919532249616"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone /> +(91) 9532249616
          </motion.a>
          <motion.a
            href="mailto:theGauravRN@gmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope /> theGauravRN@gmail.com
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMapMarkerAlt /> Noida Sec-66, UTTAR PRADESH
          </motion.div>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>

        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1]
          }}
        >
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

