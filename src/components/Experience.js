import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCode, FaRocket } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'React-Native Developer (Team Lead)',
      company: 'ARESOURCEPOOL PVT. LTD',
      location: 'Noida UP',
      period: 'January 2022 - Present',
      projects: [
        {
          name: 'EduAchiever',
          description: 'Build pixel-perfect, buttery smooth UIs across both mobile platforms (EdTech App)',
        },
        {
          name: 'Danzflo',
          description: 'Bug Fixing API Integrate and Make connection with firebase (Social App)',
        },
        {
          name: 'BeannaStyles',
          description: 'Complete project from scratch, Ecommerce: buy and wishlist add to card (E-commerce App)',
        },
        {
          name: 'Brainzeus',
          description: 'Editor (video, image, tone, set wallpaper, set ringtone, schedule notification like alarm) (EdTech App)',
        },
        {
          name: 'Tapitag',
          description: 'NFC card scanning and text reading like google lense (NFC Tap RF Number App)',
        },
        {
          name: 'RediPlan',
          description: 'Australian govt app for maintain Hospital, Animal, Human Right etc.',
        },
        {
          name: 'Professional gymnastics centre (PGC)',
          description: 'Fitness app, class booking and attendance mark, birthday booking, and private coach booking (Health and Fitness app)',
        },
        {
          name: 'PocketLaw',
          description: 'American Law app where mostly cover 14th amendment and In application user also have AI chat feature (LAW App)',
        },
        {
          name: 'TekSOL',
          description: 'Job portal where Employee find there assign job by admin and time management application (Job Portal)',
        },
        {
          name: 'Tranquility',
          description: 'Meditation and medical precaution app (Health App)',
        },
        {
          name: 'AndorraPets',
          description: 'E-commerce App where products is available for Dogs and Cats and payment gateway is redSys (E-Commerce)',
        },
      ],
      technologies: ['Xcode', 'Android Studio', 'Firebase', 'ES6', 'API Integration'],
    },
    {
      title: 'React-Native Developer',
      company: 'AIVOKS TECHNOLOGIES PRIVATE LIMITED',
      location: 'Noida UP',
      period: 'Sep 2021 - Dec 2021',
      projects: [
        {
          name: 'General Development',
          description: 'Able to work on the new project from top to bottom without dependency. Good at react native, redux, flux, and javascript frameworks. Experience implementing application state management with Redux framework.',
        },
      ],
      technologies: ['Firebase', 'AWS', 'Xcode', 'Android Studio', 'Redux'],
    },
    {
      title: 'Junior React-native Developer',
      company: 'AARA TECHNOLOGIES PRIVATE LIMITED',
      location: 'Lucknow UP',
      period: 'August 2020 - June 2021',
      projects: [
        {
          name: 'Core Features',
          description: 'Push Notification, API Integration, React-Native Camera, Google Map, React-Native geocoder, Redux.',
        },
      ],
      technologies: ['Android Studio', 'VS Code'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="title-underline" />
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <FaRocket />
                </div>
                <div className="experience-title-section">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company} • {exp.location}</p>
                  <p className="period">
                    <FaCalendarAlt /> {exp.period}
                  </p>
                </div>
              </div>

              <div className="experience-projects">
                {exp.projects.map((project, pIndex) => (
                  <motion.div
                    key={pIndex}
                    className="project-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: pIndex * 0.08,
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <FaCode className="project-icon" />
                    <div>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="experience-tech">
                {exp.technologies.map((tech, tIndex) => (
                  <motion.span
                    key={tIndex}
                    className="tech-tag"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

