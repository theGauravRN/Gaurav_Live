import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      year: '2019',
      title: 'Diploma in Computer Science',
      institution: 'Govt. Polytechnic Aurai Bhadohi',
      board: 'Board of Technical Institute',
      icon: <FaGraduationCap />,
    },
    {
      year: '2016',
      title: 'Intermediate',
      institution: 'R.S.M. Sr. Sec. School Gorakhpur (U.P.)',
      board: 'Central Board of Secondary Education',
      icon: <FaSchool />,
    },
    {
      year: '2014',
      title: 'High School',
      institution: 'R.S.M. Sr. Sec. School Gorakhpur (U.P.)',
      board: 'Central Board of Secondary Education',
      icon: <FaSchool />,
    },
  ];

  const strengths = [
    'Passionate for good programming',
    'Focused on writing optimized and good quality code',
    'Ability to lead projects with team',
    'Honest and dedicated to my work',
    'Confidence to implement new ideas',
    'Good learner and self-confidence person',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline" />
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Education</h3>
            <motion.div
              className="education-timeline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="education-icon">{edu.icon}</div>
                  <div className="education-content">
                    <span className="education-year">{edu.year}</span>
                    <h4>{edu.title}</h4>
                    <p className="institution">{edu.institution}</p>
                    <p className="board">{edu.board}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-strengths"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Strengths</h3>
            <motion.div
              className="strengths-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  className="strength-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                >
                  <span className="strength-icon">✓</span>
                  <p>{strength}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

