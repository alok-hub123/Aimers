import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { COLORS } from '../constants/theme';

const Footer = () => {
    const quickLinks = [
        { label: 'About Us', href: '#about' },
        { label: 'Classes', href: '#classes' },
        { label: 'Faculty', href: '#faculty' },
        { label: 'Contact', href: '#contact' },
    ];

    const resources = [
        { label: 'FAQ', href: '#faq' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Facilities', href: '#facilities' },
        { label: 'Methodology', href: '#methodology' },
    ];

    const social = [
        { icon: Facebook, href: '#' },
        { icon: Instagram, href: '#' },
        { icon: Youtube, href: '#' },
        { icon: Twitter, href: '#' },
    ];

    return (
        <footer style={{
            backgroundColor: '#1b1b1b',
            padding: '80px 24px 32px',
            color: 'white',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
                    gap: '48px',
                    marginBottom: '60px',
                }}>
                    {/* Brand */}
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            marginBottom: '20px',
                            color: 'white',
                        }}>
                            Aimers Academy
                        </h3>
                        <p style={{
                            color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7,
                            marginBottom: '24px',
                            maxWidth: '280px',
                        }}>
                            Empowering students with quality education since 2014.
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '12px',
                        }}>
                            {social.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: 'rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'background 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = COLORS.primary}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                >
                                    <item.icon size={18} color="white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: 'rgba(255,255,255,0.5)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '20px',
                        }}>
                            Quick Links
                        </h4>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    style={{
                                        color: 'rgba(255,255,255,0.7)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = COLORS.primary}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: 'rgba(255,255,255,0.5)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '20px',
                        }}>
                            Resources
                        </h4>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {resources.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    style={{
                                        color: 'rgba(255,255,255,0.7)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = COLORS.primary}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: 'rgba(255,255,255,0.5)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '20px',
                        }}>
                            Contact
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <MapPin size={18} color={COLORS.primary} style={{ flexShrink: 0, marginTop: '3px' }} />
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                                    123 Education Street, Mumbai 400001
                                </span>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <Phone size={18} color={COLORS.primary} />
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                                    +91 98765 43210
                                </span>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <Mail size={18} color={COLORS.primary} />
                                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                                    info@aimersacademy.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div style={{
                    height: '1px',
                    background: 'rgba(255,255,255,0.1)',
                    marginBottom: '32px',
                }} />

                {/* Bottom */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}>
                    <p style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '0.9rem',
                    }}>
                        © 2026 Aimers Academy. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem' }}>
                            Privacy Policy
                        </a>
                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem' }}>
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    footer > div > div:first-child {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
                @media (max-width: 480px) {
                    footer > div > div:first-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
