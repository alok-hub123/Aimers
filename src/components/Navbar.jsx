import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search } from 'lucide-react';
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
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
  }, { scope: navRef });

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for navbar styling
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
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
    <div style={{
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
        padding: isScrolled ? '12px 24px' : '0',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderRadius: isScrolled ? '100px' : '0',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        border: isScrolled ? '1px solid rgba(255, 255, 255, 0.8)' : 'none',
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
              color: 'var(--color-primary)',
              letterSpacing: '-0.02em',
              fontFamily: 'Poppins, sans-serif',
            }}>
              Aimers
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  padding: '10px 18px',
                  borderRadius: '8px',
                  color: activeSection === link.id ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  background: activeSection === link.id ? 'rgba(30, 27, 75, 0.06)' : 'transparent',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.id) {
                    e.target.style.color = 'var(--color-primary)';
                    e.target.style.background = 'rgba(30, 27, 75, 0.04)';
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
              background: 'var(--color-primary)',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '100px',
              fontWeight: 600,
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 27, 75, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
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
              color: 'var(--color-primary)',
              background: mobileMenuOpen ? 'rgba(30, 27, 75, 0.1)' : 'transparent',
              borderRadius: '10px',
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
                  color: activeSection === link.id ? 'var(--color-primary)' : 'var(--color-text-main)',
                  padding: '14px 20px',
                  borderRadius: '10px',
                  background: activeSection === link.id ? 'rgba(30, 27, 75, 0.08)' : 'transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.name}
              </a>
            ))}
            <button style={{
              background: 'var(--color-primary)',
              color: 'white',
              padding: '14px',
              borderRadius: '10px',
              fontWeight: 600,
              marginTop: '8px',
              width: '100%',
              border: 'none',
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
      `}</style>
      </nav>
    </div>
  );
};

export default Navbar;
