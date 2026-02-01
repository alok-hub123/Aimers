import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register plugins
gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef(null);

  // GSAP entrance animation
  useGSAP(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
  }, { scope: navRef });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['hero', 'features', 'classes', 'approach', 'testimonials'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Why Us', href: '#features', id: 'features' },
    { name: 'Classes', href: '#classes', id: 'classes' },
    { name: 'Approach', href: '#approach', id: 'approach' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  ];

  return (
    <nav ref={navRef} style={{
      position: 'fixed',
      top: isScrolled ? '12px' : '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      width: isScrolled ? 'min(95%, 1100px)' : 'min(90%, 1200px)',
      padding: isScrolled ? '12px 24px' : '16px 32px',
      borderRadius: isScrolled ? 'var(--radius-xl)' : 'var(--radius-2xl)',
      background: isScrolled
        ? 'rgba(255, 255, 255, 0.85)'
        : 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: `1px solid ${isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)'}`,
      boxShadow: isScrolled
        ? '0 8px 32px rgba(30, 27, 75, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05)'
        : '0 4px 24px rgba(30, 27, 75, 0.08)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          transition: 'transform 0.3s ease'
        }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(30, 27, 75, 0.15)',
          }}>
            <img
              src="/aimers-logo.jpg"
              alt="Aimers Academy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--color-primary) 0%, #4338ca 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Aimers
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(241, 245, 249, 0.6)',
          padding: '6px',
          borderRadius: 'var(--radius-full)',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                padding: '10px 18px',
                borderRadius: 'var(--radius-full)',
                color: activeSection === link.id ? 'var(--color-primary)' : 'var(--color-text-muted)',
                background: activeSection === link.id ? 'white' : 'transparent',
                boxShadow: activeSection === link.id ? '0 2px 8px rgba(30, 27, 75, 0.1)' : 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== link.id) {
                  e.target.style.color = 'var(--color-primary)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.id) {
                  e.target.style.color = 'var(--color-text-muted)';
                  e.target.style.background = 'transparent';
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="desktop-nav"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent) 0%, #ff6b7a 100%)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 'var(--radius-full)',
            fontWeight: 600,
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 16px rgba(230, 57, 70, 0.3)',
            transition: 'all 0.3s ease',
            border: 'none',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px) scale(1.02)';
            e.target.style.boxShadow = '0 6px 24px rgba(230, 57, 70, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 4px 16px rgba(230, 57, 70, 0.3)';
          }}
        >
          <Sparkles size={16} />
          Join Now
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            padding: '10px',
            color: 'var(--color-primary)',
            background: mobileMenuOpen ? 'rgba(30, 27, 75, 0.1)' : 'transparent',
            borderRadius: 'var(--radius-md)',
            transition: 'all 0.2s ease',
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={{
        maxHeight: mobileMenuOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: activeSection === link.id ? 'var(--color-primary)' : 'var(--color-text-main)',
                padding: '14px 20px',
                borderRadius: 'var(--radius-md)',
                background: activeSection === link.id ? 'rgba(30, 27, 75, 0.08)' : 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              {link.name}
            </a>
          ))}
          <button style={{
            background: 'linear-gradient(135deg, var(--color-accent) 0%, #ff6b7a 100%)',
            color: 'white',
            padding: '14px',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
            marginTop: '8px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 16px rgba(230, 57, 70, 0.3)',
          }}>
            <Sparkles size={16} />
            Join Now
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
