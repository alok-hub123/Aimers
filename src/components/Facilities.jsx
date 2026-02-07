import React from 'react';
import { Wifi, Monitor, BookOpen, Users, Clock, Coffee, Wind, Shield } from 'lucide-react';
import { COLORS } from '../constants/theme';

const Facilities = () => {
    const facilities = [
        { icon: Monitor, title: 'Smart Classrooms', description: 'Digital boards and projectors for interactive learning.' },
        { icon: Wind, title: 'AC Classrooms', description: 'Comfortable, air-conditioned learning environment.' },
        { icon: BookOpen, title: 'Study Materials', description: 'Comprehensive notes and practice papers provided.' },
        { icon: Users, title: 'Small Batches', description: 'Maximum 15 students per batch for focused attention.' },
        { icon: Wifi, title: 'Digital Resources', description: 'Access to online learning materials.' },
        { icon: Clock, title: 'Doubt Sessions', description: 'Extra sessions for doubt clearing and revision.' },
        { icon: Coffee, title: 'Break Area', description: 'Comfortable space for students during breaks.' },
        { icon: Shield, title: 'Safe Environment', description: 'CCTV monitored premises for student safety.' },
    ];

    return (
        <section id="facilities" style={{
            padding: '120px 24px',
            backgroundColor: '#f0f2f5',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 400,
                        color: '#1b1b1b',
                        lineHeight: 1.15,
                        marginBottom: '20px',
                        letterSpacing: '-0.02em',
                    }}>
                        Modern learning infrastructure
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#54656f',
                        maxWidth: '500px',
                        margin: '0 auto',
                    }}>
                        State-of-the-art facilities designed for optimal learning
                    </p>
                </div>

                {/* Facilities Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                }}>
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'white',
                                padding: '32px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '20px',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '12px',
                                background: COLORS.primaryLight,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <facility.icon size={22} color={COLORS.primary} />
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: '#1b1b1b',
                                    marginBottom: '6px',
                                }}>
                                    {facility.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: '#54656f',
                                    lineHeight: 1.5,
                                }}>
                                    {facility.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
