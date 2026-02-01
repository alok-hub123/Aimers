import React, { useRef } from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Heart, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const columnsRef = useRef(null);

    useGSAP(() => {
        // Footer columns staggered entrance
        gsap.from(columnsRef.current.children, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: footerRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
            }
        });
    }, { scope: footerRef });

    return (
        <footer ref={footerRef} style={{
            background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
            padding: '80px 0 32px 0',
            position: 'relative',
        }}>
            {/* Gradient Top Border */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 50%, var(--color-primary) 100%)',
            }} />

            <div className="container">
                <div ref={columnsRef} style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '48px',
                    marginBottom: '64px',
                }}>
                    {/* Brand Column */}
                    <div style={{ maxWidth: '320px' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '24px'
                        }}>
                            <div style={{
                                width: '44px',
                                height: '44px',
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
                            }}>
                                Aimers Academy
                            </span>
                        </div>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '0.95rem',
                            lineHeight: 1.7,
                            marginBottom: '24px',
                        }}>
                            Building strong foundations for tomorrow's achievers through personalized tuition and expert mentorship.
                        </p>

                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {[
                                { icon: <Facebook size={18} />, href: '#', color: '#1877f2' },
                                { icon: <Instagram size={18} />, href: '#', color: '#e4405f' },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        borderRadius: 'var(--radius-md)',
                                        background: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--color-text-muted)',
                                        boxShadow: '0 2px 8px rgba(30, 27, 75, 0.08)',
                                        border: '1px solid rgba(241, 245, 249, 1)',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = social.color;
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = `0 8px 20px ${social.color}25`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--color-text-muted)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(30, 27, 75, 0.08)';
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: 'var(--color-text-main)',
                            marginBottom: '24px',
                            letterSpacing: '0.02em',
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '14px',
                        }}>
                            {[
                                { name: 'Home', href: '#hero' },
                                { name: 'Classes', href: '#classes' },
                                { name: 'Testimonials', href: '#testimonials' },
                                { name: 'Our Approach', href: '#approach' },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        style={{
                                            color: 'var(--color-text-muted)',
                                            fontSize: '0.95rem',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            transition: 'all 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--color-primary)';
                                            e.currentTarget.style.gap = '10px';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--color-text-muted)';
                                            e.currentTarget.style.gap = '6px';
                                        }}
                                    >
                                        {link.name}
                                        <ArrowUpRight size={14} style={{ opacity: 0.5 }} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: 'var(--color-text-main)',
                            marginBottom: '24px',
                            letterSpacing: '0.02em',
                        }}>
                            Contact Us
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '18px',
                        }}>
                            {[
                                { icon: <Phone size={18} />, text: '+91 98765 43210', color: '#10b981' },
                                { icon: <Mail size={18} />, text: 'admissions@aimers.com', color: '#3b82f6' },
                                { icon: <MapPin size={18} />, text: '123, Knowledge Park, City Center', color: '#e63946' },
                            ].map((item, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    gap: '14px',
                                    alignItems: 'flex-start',
                                }}>
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: 'var(--radius-sm)',
                                        background: `${item.color}12`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: item.color,
                                        flexShrink: 0,
                                    }}>
                                        {item.icon}
                                    </div>
                                    <span style={{
                                        color: 'var(--color-text-muted)',
                                        fontSize: '0.95rem',
                                        paddingTop: '6px',
                                    }}>
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(226, 232, 240, 1)',
                    paddingTop: '28px',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}>
                    <div style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-text-light)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                    }}>
                        &copy; {new Date().getFullYear()} Aimers Academy. Made with
                        <Heart size={14} fill="#e63946" color="#e63946" />
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '24px',
                        fontSize: '0.875rem',
                    }}>
                        <a
                            href="#"
                            style={{
                                color: 'var(--color-text-light)',
                                transition: 'color 0.2s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            style={{
                                color: 'var(--color-text-light)',
                                transition: 'color 0.2s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
