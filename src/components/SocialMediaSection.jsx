import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import { COLORS } from '../constants/theme';

const SocialMediaSection = () => {
    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://instagram.com/aimersacademy',
            color: '#E4405F',
        },
        {
            name: 'YouTube',
            icon: Youtube,
            url: 'https://youtube.com/@aimersacademy',
            color: '#FF0000',
        },
    ];

    return (
        <section style={{
            padding: '80px 24px',
            backgroundColor: COLORS.lightGray,
            textAlign: 'center',
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '20px',
                    color: COLORS.darkGray,
                }}>
                    Follow Us
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: COLORS.mediumGray,
                    marginBottom: '50px',
                }}>
                    Connect with us on social media for updates, tips, and student success stories
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '40px',
                    flexWrap: 'wrap',
                }}>
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '15px',
                                    textDecoration: 'none',
                                    transition: 'transform 0.3s ease, color 0.3s ease',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${social.color}, ${social.color}99)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
                                }}
                                >
                                    <Icon size={40} color="white" strokeWidth={1.5} />
                                </div>
                                <span style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: social.color,
                                }}>
                                    {social.name}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SocialMediaSection;
