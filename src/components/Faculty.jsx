import React from 'react';
import { COLORS } from '../constants/theme';

const Faculty = () => {
    const teachers = [
        {
            name: 'Dr. Suresh Kumar',
            subject: 'Mathematics',
            experience: '15+ Years',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Mrs. Priya Desai',
            subject: 'Science',
            experience: '12+ Years',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Mr. Rajesh Sharma',
            subject: 'English',
            experience: '10+ Years',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Mrs. Anjali Patel',
            subject: 'Primary Classes',
            experience: '8+ Years',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
        },
    ];

    return (
        <section id="faculty" style={{
            padding: '120px 24px',
            backgroundColor: 'white',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '80px',
                    alignItems: 'start',
                }}>
                    {/* Left - Title */}
                    <div style={{ position: 'sticky', top: '120px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: 400,
                            color: '#1b1b1b',
                            lineHeight: 1.15,
                            marginBottom: '24px',
                            letterSpacing: '-0.02em',
                        }}>
                            Meet our expert teachers
                        </h2>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#54656f',
                            lineHeight: 1.7,
                        }}>
                            Dedicated educators committed to nurturing every student's potential with years of experience.
                        </p>
                    </div>

                    {/* Right - Faculty Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '24px',
                    }}>
                        {teachers.map((teacher, index) => (
                            <div
                                key={index}
                                style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    background: '#f0f2f5',
                                    transition: 'transform 0.3s ease',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                {/* Image */}
                                <div style={{ height: '240px', overflow: 'hidden' }}>
                                    <img
                                        src={teacher.image}
                                        alt={teacher.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.4s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>

                                {/* Info */}
                                <div style={{ padding: '24px' }}>
                                    <h3 style={{
                                        fontSize: '1.15rem',
                                        fontWeight: 600,
                                        color: '#1b1b1b',
                                        marginBottom: '4px',
                                    }}>
                                        {teacher.name}
                                    </h3>
                                    <p style={{
                                        color: COLORS.primary,
                                        fontWeight: 500,
                                        marginBottom: '8px',
                                    }}>
                                        {teacher.subject}
                                    </p>
                                    <span style={{
                                        fontSize: '0.9rem',
                                        color: '#54656f',
                                    }}>
                                        {teacher.experience} Experience
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #faculty > div > div {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                    #faculty > div > div > div:first-child {
                        position: static !important;
                    }
                    #faculty > div > div > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Faculty;
