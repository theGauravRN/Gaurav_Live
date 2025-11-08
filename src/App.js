import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
    mass: 0.5
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => {
      window.removeEventListener('resize', checkDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDesktop]);

  return (
    <div className="App">
      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />

      {/* Cursor Effect */}
      {isDesktop && (
        <motion.div
          className="cursor"
          animate={{
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.8 : 0.6,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            mass: 0.5
          }}
        />
      )}

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © 2024 Gaurav Kumar. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}

export default App;
