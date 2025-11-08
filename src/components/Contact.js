import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:theGauravRN@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+(91) 9532249616',
      link: 'tel:+919532249616',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'theGauravRN@gmail.com',
      link: 'mailto:theGauravRN@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: '641 Gali No. 2 Holi Chowk, Noida Sec-66 UTTAR PRADESH',
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline" />
          <p className="section-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h4>{info.label}</h4>
                  {info.link ? (
                    <a href={info.link}>{info.value}</a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

