import React from 'react';
import { UserCheck, Clock, BookOpen, Target, Award, GraduationCap } from 'lucide-react';
import { COLORS } from '../constants/theme';

const WhyChoose = () => {
    const features = [
        {
            icon: UserCheck,
            title: 'Individual Attention',
            description: 'Small batch sizes ensure every student gets personalized guidance and support.',
        },
        {
            icon: GraduationCap,
            title: 'Expert Faculty',
            description: 'Experienced teachers with proven track records in academic excellence.',
        },
        {
            icon: BookOpen,
            title: 'Concept Clarity',
            description: 'Focus on understanding fundamentals rather than rote memorization.',
        },
        {
            icon: Target,
            title: 'Goal-Oriented',
            description: 'Structured approach aligned with board exam patterns and requirements.',
        },
        {
            icon: Clock,
            title: 'Flexible Timings',
            description: 'Multiple batch options to suit different student schedules.',
        },
        {
            icon: Award,
            title: 'Proven Results',
            description: '95% success rate with numerous students scoring above 90%.',
        },
    ];

    return (
        <section id="why-choose" style={{
            padding: '120px 24px',
            backgroundColor: 'white',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Content Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.2fr',
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
                            What makes us different
                        </h2>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#54656f',
                            lineHeight: 1.7,
                        }}>
                            Discover why parents trust Aimers Academy for their children's education
                        </p>
                    </div>

                    {/* Right - Features List */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                    }}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    gap: '24px',
                                    paddingBottom: '40px',
                                    borderBottom: index < features.length - 1 ? '1px solid #e9edef' : 'none',
                                }}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: COLORS.primaryLight,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <feature.icon size={24} color={COLORS.primary} />
                                </div>
                                <div>
                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 600,
                                        color: '#1b1b1b',
                                        marginBottom: '8px',
                                    }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1.05rem',
                                        color: '#54656f',
                                        lineHeight: 1.6,
                                    }}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #why-choose > div > div {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                    #why-choose > div > div > div:first-child {
                        position: static !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default WhyChoose;
