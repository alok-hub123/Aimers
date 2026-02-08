import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { COLORS } from '../constants/theme';

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
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
  }, { scope: navRef });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'achievements', 'why-choose', 'facilities', 'methodology', 'classes', 'faculty', 'faq', 'testimonials', 'contact'];
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
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Classes', href: '#classes', id: 'classes' },
    { name: 'Faculty', href: '#faculty', id: 'faculty' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <div id="navbar-wrapper" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: isScrolled ? '12px 24px' : '16px 40px',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <nav ref={navRef} style={{
        maxWidth: isScrolled ? '1160px' : '100%',
        margin: '0 auto',
        padding: isScrolled ? '10px 20px' : '0',
        background: isScrolled ? COLORS.white : COLORS.white,
        borderRadius: isScrolled ? '100px' : '0',
        boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.08)' : 'none',
        border: isScrolled ? `2px solid ${COLORS.dark}` : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
        }}>
          {/* Logo */}
          <a href="#hero" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              overflow: 'hidden',
            }}>
              <img
                src="/aimers-logo.jpg"
                alt="Aimers Academy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: COLORS.primary,
              letterSpacing: '-0.02em',
            }}>
              Aimers
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  padding: '10px 18px',
                  borderRadius: '100px',
                  color: activeSection === link.id ? COLORS.dark : COLORS.darkSecondary,
                  background: activeSection === link.id ? COLORS.primaryLight : 'transparent',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.id) {
                    e.target.style.color = COLORS.dark;
                    e.target.style.background = COLORS.light;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.id) {
                    e.target.style.color = COLORS.darkSecondary;
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
              background: COLORS.primaryLight,
              color: COLORS.dark,
              padding: '12px 28px',
              borderRadius: '100px',
              fontWeight: 600,
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: `2px solid ${COLORS.dark}`,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS.dark;
              e.currentTarget.style.color = COLORS.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS.primaryLight;
              e.currentTarget.style.color = COLORS.dark;
            }}
          >
            Enroll Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '10px',
              color: COLORS.dark,
              background: mobileMenuOpen ? COLORS.light : 'transparent',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
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
                  color: activeSection === link.id ? COLORS.primary : COLORS.dark,
                  padding: '14px 20px',
                  borderRadius: '12px',
                  background: activeSection === link.id ? COLORS.primaryLight : 'transparent',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
              >
                {link.name}
              </a>
            ))}
            <button style={{
              background: COLORS.primaryLight,
              color: COLORS.dark,
              padding: '14px',
              borderRadius: '100px',
              fontWeight: 600,
              marginTop: '8px',
              width: '100%',
              border: `2px solid ${COLORS.dark}`,
              cursor: 'pointer',
            }}>
              Enroll Now
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
        @media (max-width: 768px) {
          #navbar-wrapper {
            padding: 10px 16px !important;
          }
          nav {
            border-radius: 20px !important;
          }
        }
        @media (max-width: 480px) {
          #navbar-wrapper {
            padding: 8px 12px !important;
          }
          nav {
            border-radius: 16px !important;
            padding: 8px 12px !important;
          }
        }
      `}</style>
      </nav>
    </div>
  );
};

export default Navbar;
