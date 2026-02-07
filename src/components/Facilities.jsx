import React from 'react';
import { Wifi, Monitor, BookOpen, Users, Clock, Coffee, Wind, Shield } from 'lucide-react';
import { COLORS, SHADOWS } from '../constants/theme';

const Facilities = () => {
    const facilities = [
        { icon: Monitor, emoji: '🖥️', title: 'Smart Classrooms', description: 'Digital boards and projectors for interactive learning.' },
        { icon: Wind, emoji: '❄️', title: 'AC Classrooms', description: 'Comfortable, air-conditioned learning environment.' },
        { icon: BookOpen, emoji: '📚', title: 'Study Materials', description: 'Comprehensive notes and practice papers provided.' },
        { icon: Users, emoji: '👥', title: 'Small Batches', description: 'Maximum 15 students per batch for focused attention.' },
        { icon: Wifi, emoji: '📱', title: 'Digital Resources', description: 'Access to online learning materials.' },
        { icon: Clock, emoji: '🕐', title: 'Doubt Sessions', description: 'Extra sessions for doubt clearing and revision.' },
        { icon: Coffee, emoji: '☕', title: 'Break Area', description: 'Comfortable space for students during breaks.' },
        { icon: Shield, emoji: '🛡️', title: 'Safe Environment', description: 'CCTV monitored premises for student safety.' },
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
