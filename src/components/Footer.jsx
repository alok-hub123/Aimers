import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { COLORS, SHADOWS } from '../constants/theme';

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
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Youtube, href: '#', label: 'Youtube' },
        { icon: Twitter, href: '#', label: 'Twitter' },
    ];

    return (
        <footer style={{
            backgroundColor: COLORS.dark,
            padding: '100px 24px 40px',
            color: COLORS.white,
            borderTop: `4px solid ${COLORS.primary}`,
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
                            fontSize: '1.75rem',
                            fontWeight: 700,
                            marginBottom: '16px',
                            color: COLORS.white,
                            letterSpacing: '-0.02em',
                        }}>
                            Aimers{' '}
                            <span style={{ color: COLORS.primary }}>Academy</span>
                        </h3>
                        <p style={{
                            color: 'rgba(255,255,255,0.65)',
                            lineHeight: 1.7,
                            marginBottom: '28px',
                            maxWidth: '280px',
                            fontSize: '1rem',
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
                                    aria-label={item.label}
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '50%',
                                        background: 'transparent',
                                        border: `2px solid rgba(255,255,255,0.3)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = COLORS.primary;
                                        e.currentTarget.style.borderColor = COLORS.primary;
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = '0 4px 0 ' + COLORS.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <item.icon size={18} color="white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: COLORS.white,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '24px',
                        }}>
                            Quick Links
                        </h4>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    style={{
                                        color: 'rgba(255,255,255,0.7)',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                        fontSize: '1rem',
                                        display: 'inline-block',
                                        width: 'fit-content',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = COLORS.primary;
                                        e.currentTarget.style.paddingLeft = '8px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                                        e.currentTarget.style.paddingLeft = '0';
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: COLORS.white,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '24px',
                        }}>
                            Resources
                        </h4>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {resources.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    style={{
                                        color: 'rgba(255,255,255,0.7)',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                        fontSize: '1rem',
                                        display: 'inline-block',
                                        width: 'fit-content',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = COLORS.primary;
                                        e.currentTarget.style.paddingLeft = '8px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                                        e.currentTarget.style.paddingLeft = '0';
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: COLORS.white,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '24px',
                        }}>
                            Contact
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: COLORS.primaryLight,
                                    border: `2px solid ${COLORS.primary}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <MapPin size={16} color={COLORS.primary} />
                                </div>
                                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', lineHeight: 1.5, marginTop: '6px' }}>
                                    123 Education Street, Mumbai 400001
                                </span>
                            </div>
                            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: COLORS.primaryLight,
                                    border: `2px solid ${COLORS.primary}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <Phone size={16} color={COLORS.primary} />
                                </div>
                                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem' }}>
                                    +91 98765 43210
                                </span>
                            </div>
                            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: COLORS.primaryLight,
                                    border: `2px solid ${COLORS.primary}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <Mail size={16} color={COLORS.primary} />
                                </div>
                                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem' }}>
                                    info@aimersacademy.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div style={{
                    height: '2px',
                    background: 'rgba(255,255,255,0.15)',
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
                        <a
                            href="#"
                            style={{
                                color: 'rgba(255,255,255,0.5)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                transition: 'color 0.2s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = COLORS.primary}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            style={{
                                color: 'rgba(255,255,255,0.5)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                transition: 'color 0.2s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = COLORS.primary}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    footer > div > div:first-child {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 40px !important;
                    }
                }
                @media (max-width: 600px) {
                    footer {
                        padding: 60px 20px 32px !important;
                    }
                    footer > div > div:first-child {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                    footer > div > div:last-child {
                        flex-direction: column !important;
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
