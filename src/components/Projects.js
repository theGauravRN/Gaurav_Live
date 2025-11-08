import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaApple, FaAndroid } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      name: 'Danzflo',
      description: 'Social App - Bug Fixing API Integrate and Make connection with firebase',
      android: 'https://play.google.com/store/apps/details?id=com.denzflow_merch',
      ios: 'https://apps.apple.com/in/app/danzflo/id6444613698',
    },
    {
      name: 'Two Hearts',
      description: 'Love and relationship app',
      android: 'https://play.google.com/store/apps/details?id=com.twoheartslove',
    },
    {
      name: 'Tapitag',
      description: 'NFC card scanning and text reading like google lense',
      android: 'https://play.google.com/store/apps/details?id=com.tapitag',
      ios: 'https://apps.apple.com/in/app/tapitag/id6476366908',
    },
    {
      name: 'Tranquility',
      description: 'Meditation and medical precaution app',
      android: 'https://play.google.com/store/apps/details?id=com.tranquility_app',
      ios: 'https://apps.apple.com/us/app/tranquility-space/id6744059765',
    },
    {
      name: 'Sorgho Squad: Eco-Heroes',
      description: 'Eco-friendly gaming app',
      android: 'https://play.google.com/store/apps/details?id=com.sorghosquad.riseoftheecoheroes',
      ios: 'https://apps.apple.com/us/app/sorgho-squad-eco-heroes/id6743829964',
    },
    {
      name: 'TekSOL',
      description: 'Job portal where Employee find there assign job by admin and time management application',
      android: 'https://play.google.com/store/apps/details?id=com.teksol_app',
      ios: 'https://apps.apple.com/us/app/teksol-electrical/id6738270311',
    },
    {
      name: 'Constitutional',
      description: 'American Law app',
      ios: 'https://apps.apple.com/us/app/constitutional/id1558117839',
    },
    {
      name: 'PGC Gym',
      description: 'Fitness app, class booking and attendance mark, birthday booking, and private coach booking',
      android: 'https://play.google.com/store/apps/details?id=com.pgcgym',
      ios: 'https://apps.apple.com/us/app/pgc-gym/id6740762036',
    },
    {
      name: 'Betterlix',
      description: 'Liver health coach app',
      android: 'https://play.google.com/store/apps/details?id=com.betterlix',
      ios: 'https://apps.apple.com/us/app/betterlix-liver-health-coach/id6469586362',
    },
    {
      name: 'Finolix',
      description: 'Financial management app',
      android: 'https://play.google.com/store/apps/details?id=com.finolix',
      ios: 'https://apps.apple.com/us/app/finolix/id1568036231',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="title-underline" />
          <p className="section-subtitle">Check out some of my published applications</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300,
                damping: 25,
                mass: 0.8
              }}
            >
              <div className="project-header">
                <h3>{project.name}</h3>
                <div className="project-links">
                  {project.android && (
                    <motion.a
                      href={project.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="project-link"
                    >
                      <FaAndroid />
                    </motion.a>
                  )}
                  {project.ios && (
                    <motion.a
                      href={project.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                      className="project-link"
                    >
                      <FaApple />
                    </motion.a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <motion.a
                href={project.android || project.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="project-view-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View App <FaExternalLinkAlt />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

