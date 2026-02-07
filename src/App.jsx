import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Achievements from './components/Achievements';
import WhyChoose from './components/WhyChoose';
import Facilities from './components/Facilities';
import Methodology from './components/Methodology';
import Classes from './components/Classes';
import Faculty from './components/Faculty';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        {/* 1. Hero - Image Carousel */}
        <Hero />

        {/* 2. About Us */}
        <AboutUs />

        {/* 3. Achievements - Stats & Toppers */}
        <Achievements />

        {/* 4. Why Choose Us */}
        <WhyChoose />

        {/* 5. Facilities */}
        <Facilities />

        {/* 6. Our Methodology */}
        <Methodology />

        {/* 7. Classes & Fee Structure */}
        <Classes />

        {/* 8. Faculty */}
        <Faculty />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. Contact Us */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
