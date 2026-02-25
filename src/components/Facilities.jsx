import React from 'react';
import { Wifi, Monitor, BookOpen, Users, Clock, Coffee, Wind, Shield } from 'lucide-react';
import { COLORS, SHADOWS } from '../constants/theme';

const Facilities = () => {
    const facilities = [
        { icon: Monitor, emoji: '🎥', title: 'Smart Classrooms', description: 'Projectors for interactive learning.' },
        { icon: Wind, emoji: '🔬', title: 'Microscope', description: 'High-quality microscopes for science experiments.' },
        { icon: BookOpen, emoji: '📚', title: 'Study Materials', description: 'Comprehensive notes and practice papers provided.' },
        { icon: Users, emoji: '👥', title: 'Small Batches', description: 'Maximum 15 students per batch for focused attention.' },
        { icon: Wifi, emoji: '🔭', title: 'Telescope Practicals', description: 'Space Studies with high-quality telescopes.' },
        { icon: Clock, emoji: '🕐', title: 'Doubt Sessions', description: 'Extra sessions for doubt clearing and revision.' },
        { icon: Coffee, emoji: '💡', title: 'Science Practical', description: 'Hands-on science experiments in a safe environment.' },
        { icon: Shield, emoji: '🛡️', title: 'Safe Environment', description: 'Premises for student safety.' },
    ];

    const galleryImages = [
        { src: 'https://images.unsplash.com/photo-1427504494785-cdce204402c3?w=600&h=600&fit=crop', alt: 'Smart Classroom', span: 2, height: 2 },
        { src: 'https://images.unsplash.com/photo-1522202176988-696dba299ef5?w=400&h=400&fit=crop', alt: 'Study Area', span: 1, height: 1 },
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', alt: 'Library', span: 1, height: 1 },
        { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop', alt: 'Break Area', span: 1, height: 2 },
        { src: 'https://images.unsplash.com/photo-1516979187457-635ffe35ff31?w=600&h=400&fit=crop', alt: 'Computer Lab', span: 2, height: 1 },
        { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop', alt: 'Training Room', span: 1, height: 1 },
        { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop', alt: 'Workspace', span: 1, height: 1 },
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', alt: 'Conference Room', span: 2, height: 1 },
    ];

    return (
        <section id="facilities" style={{
            padding: '140px 24px',
            backgroundColor: COLORS.warmBg,
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                        fontWeight: 600,
                        color: COLORS.dark,
                        lineHeight: 1.1,
                        marginBottom: '20px',
                        letterSpacing: '-0.03em',
                    }}>
                        Modern learning{' '}
                        <span style={{ color: COLORS.primary }}>infrastructure</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: COLORS.darkSecondary,
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        State-of-the-art facilities designed for optimal learning
                    </p>
                </div>

                {/* Facilities Grid - Neo-brutalist cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '24px',
                    marginBottom: '100px',
                }}>
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            style={{
                                background: COLORS.white,
                                padding: '32px 24px',
                                borderRadius: '24px',
                                border: `2px solid ${COLORS.dark}`,
                                boxShadow: SHADOWS.brutalist,
                                textAlign: 'center',
                                transition: 'background 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = COLORS.primaryLight;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = COLORS.white;
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                background: COLORS.primaryLight,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                border: `2px solid ${COLORS.dark}`,
                            }}>
                                <span style={{ fontSize: '1.5rem' }}>{facility.emoji}</span>
                            </div>
                            <h3 style={{
                                fontSize: '1.15rem',
                                fontWeight: 600,
                                color: COLORS.dark,
                                marginBottom: '8px',
                            }}>
                                {facility.title}
                            </h3>
                            <p style={{
                                fontSize: '0.95rem',
                                color: COLORS.darkSecondary,
                                lineHeight: 1.6,
                            }}>
                                {facility.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Facilities Image Gallery - Masonry Layout */}
                <div style={{
                    borderTop: `3px solid ${COLORS.dark}`,
                    paddingTop: '80px',
                }}>
                    <h3 style={{
                        fontSize: '2.2rem',
                        fontWeight: 600,
                        color: COLORS.dark,
                        marginBottom: '50px',
                        textAlign: 'center',
                        letterSpacing: '-0.02em',
                    }}>
                        Our <span style={{ color: COLORS.primary }}>Campus</span>
                    </h3>

                    {/* Masonry Grid with Variable Frame Sizes */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '20px',
                        gridAutoRows: '250px',
                    }}>
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                style={{
                                    gridColumn: `span ${image.span}`,
                                    gridRow: `span ${image.height}`,
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: `3px solid ${COLORS.dark}`,
                                    boxShadow: SHADOWS.brutalist,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = `0 12px 24px rgba(0, 0, 0, 0.15)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = SHADOWS.brutalist;
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.08)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                />
                                {/* Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
                                    padding: '20px',
                                    color: 'white',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.02em',
                                }}>
                                    {image.alt}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 1100px) {
                    #facilities > div > div:nth-child(2) {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 600px) {
                    #facilities > div > div:nth-child(2) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Facilities;
