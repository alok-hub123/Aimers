import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Classes from './components/Classes';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import HeroParallex from './components/HeroParallex';
import './App.css';

function App() {
  // Note: GSAP ScrollTrigger in each component now handles scroll animations
  // No need for IntersectionObserver

  return (
    <div className="App">
      <Navbar />
      <main>
        {/* <Hero /> */}
        <HeroParallex />
        <Features />
        <Classes />
        <Approach />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
