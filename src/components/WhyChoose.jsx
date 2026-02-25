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
            description: '100% success rate with numerous students scoring above 90%.',
        },
    ];

    return (
        <section id="why-choose" style={{
            padding: '140px 24px',
            backgroundColor: COLORS.white,
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Content Layout - Alternating Style */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.3fr',
                    gap: '80px',
                    alignItems: 'start',
                }}>
                    {/* Left - Sticky Title */}
                    <div style={{ position: 'sticky', top: '140px', paddingTop: '28px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                            fontWeight: 600,
                            color: COLORS.dark,
                            lineHeight: 1.1,
                            marginBottom: '24px',
                            letterSpacing: '-0.03em',
                        }}>
                            What makes us{' '}
                            <span style={{ color: COLORS.primary }}>different</span>
                        </h2>
                        <p style={{
                            fontSize: '1.25rem',
                            color: COLORS.darkSecondary,
                            lineHeight: 1.7,
                            marginBottom: '32px',
                        }}>
                            Discover why parents trust Aimers Academy for their children's education
                        </p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <div style={{
                                width: '48px',
                                height: '4px',
                                background: COLORS.primary,
                                borderRadius: '2px',
                            }} />
                            <span style={{
                                fontSize: '0.95rem',
                                color: COLORS.darkSecondary,
                                fontWeight: 500,
                            }}>
                                3+ years of excellence
                            </span>
                        </div>
                    </div>

                    {/* Right - Clean Feature List */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    gap: '28px',
                                    padding: '28px 32px',
                                    background: COLORS.white,
                                    border: `2px solid ${COLORS.dark}`,
                                    borderRadius: '20px',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = COLORS.warmBg;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = COLORS.white;
                                }}
                            >
                                {/* Icon */}
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '14px',
                                    background: COLORS.primaryLight,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    border: `2px solid ${COLORS.dark}`,
                                }}>
                                    <feature.icon size={24} color={COLORS.primary} strokeWidth={1.8} />
                                </div>

                                {/* Content */}
                                <div style={{ flex: 1 }}>
                                    <h3 style={{
                                        fontSize: '1.3rem',
                                        fontWeight: 600,
                                        color: COLORS.dark,
                                        marginBottom: '8px',
                                        letterSpacing: '-0.01em',
                                    }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1.05rem',
                                        color: COLORS.darkSecondary,
                                        lineHeight: 1.65,
                                    }}>
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Number indicator */}
                                <div style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 700,
                                    color: COLORS.primary,
                                    alignSelf: 'center',
                                    fontFamily: 'system-ui, sans-serif',
                                    opacity: 0.7,
                                }}>
                                    0{index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #why-choose {
                        padding: 80px 16px !important;
                    }
                    #why-choose > div > div {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                    #why-choose > div > div > div:first-child {
                        position: static !important;
                        text-align: center;
                        padding-top: 0 !important;
                    }
                    #why-choose > div > div > div:first-child > div:last-child {
                        justify-content: center;
                    }
                }
                @media (max-width: 600px) {
                    #why-choose {
                        padding: 60px 16px !important;
                    }
                    #why-choose > div > div {
                        gap: 20px !important;
                    }
                    #why-choose > div > div > div:last-child > div {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 16px !important;
                        padding: 20px !important;
                    }
                    #why-choose > div > div > div:last-child > div > div:first-child {
                        width: 48px !important;
                        height: 48px !important;
                    }
                    #why-choose > div > div > div:last-child > div > div:last-child {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default WhyChoose;
