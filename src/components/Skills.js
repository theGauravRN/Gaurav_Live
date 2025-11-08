import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaLaptop } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'C++', level: 85 },
        { name: 'Java', level: 90 },
        { name: 'Kotlin', level: 85 },
        { name: 'C', level: 80 },
      ],
    },
    {
      title: 'Frameworks',
      icon: <FaLaptop />,
      skills: [
        { name: 'React Native', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQLite', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Firebase', level: 90 },
        { name: 'NodeJS', level: 85 },
      ],
    },
    {
      title: 'Development Tools',
      icon: <FaTools />,
      skills: [
        { name: 'Android Studio', level: 95 },
        { name: 'Xcode', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Git', level: 85 },
      ],
    },
  ];

  const hardwareSkills = [
    {
      title: 'RS-485 Driver Boards',
      description: 'Integrated vending machine boards (ADH815/ADH812) with Android apps. Implemented polling, RUN, ACK, SCAN, and TEMP commands for real-time aisle, motor, and temperature control.',
    },
    {
      title: 'Lock Systems',
      description: 'Developed communication with lock boards (8–50 positions). Implemented unlock commands, multi-channel unlock, proactive feedback, and electromagnetic lock control via RS-485 protocol.',
    },
    {
      title: 'NFC & UHF',
      description: 'Worked with NFC and UHF antennas (UIC680 chip) for secure authentication, RFID scanning, and inventory management.',
    },
    {
      title: 'SDK Integration',
      description: 'Integrated embedded SDKs such as libserial_port.so and adh_series_sdk.jar to enable direct hardware communication from Android applications.',
    },
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline" />
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="skill-category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, sIndex) => (
                  <motion.div
                    key={sIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: sIndex * 0.08,
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <div className="skill-name-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.2, 
                          delay: sIndex * 0.1, 
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hardware-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="hardware-title">Hardware & IoT Experience</h3>
          <motion.div
            className="hardware-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {hardwareSkills.map((item, index) => (
              <motion.div
                key={index}
                className="hardware-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

