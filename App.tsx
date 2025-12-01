import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

const App: React.FC = () => {
  // Simple effect to handle initial load animations or global setup if needed
  useEffect(() => {
    console.log("Mori Design App Loaded");
  }, []);

  return (
    <div className="font-sans text-mori-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
      </main>
      <Contact />
    </div>
  );
};

export default App;