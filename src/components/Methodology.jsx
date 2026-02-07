import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COLORS, SHADOWS } from '../constants/theme';

const Methodology = () => {
    const steps = [
        {
            number: '01',
            emoji: '📋',
            title: 'Assessment',
            description: 'Understanding each student\'s current level and learning style.',
        },
        {
            number: '02',
            emoji: '📝',
            title: 'Personalized Plan',
            description: 'Custom study plans based on individual strengths and goals.',
        },
        {
            number: '03',
            emoji: '💡',
            title: 'Concept Teaching',
            description: 'Building strong conceptual understanding with real examples.',
        },
        {
            number: '04',
            emoji: '✏️',
            title: 'Practice & Testing',
            description: 'Regular tests and assignments to reinforce learning.',
        },
        {
            number: '05',
            emoji: '🚀',
            title: 'Feedback & Growth',
            description: 'Continuous feedback and doubt clearing for steady progress.',
        },
    ];

    return (
        <section id="methodology" style={{
            padding: '140px 24px',
            backgroundColor: COLORS.white,
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
                        How we{' '}
                        <span style={{ color: COLORS.primary }}>teach</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: COLORS.darkSecondary,
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        Our proven 5-step approach ensures every student achieves their potential
                    </p>
                </div>

                {/* Steps - Horizontal Flow Path */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    position: 'relative',
                    gap: '16px',
                }}>
                    {/* Connecting Line */}
                    <div style={{
                        position: 'absolute',
                        top: '44px',
                        left: '60px',
                        right: '60px',
                        height: '12px',
                        background: COLORS.primaryLight,
                        borderRadius: '100px',
                        border: `2px solid ${COLORS.dark}`,
                        boxShadow: '4px 4px 0px #1b1b1b',
                        zIndex: 0,
                        overflow: 'hidden',
                    }}>
                        {/* Progress indicator */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: COLORS.primaryLight,
                        }} />
                    </div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            {/* Step Circle with Number */}
                            <div style={{
                                width: '88px',
                                height: '88px',
                                borderRadius: '50%',
                                background: COLORS.white,
                                border: `3px solid ${COLORS.dark}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px',
                                boxShadow: SHADOWS.brutalist,
                                position: 'relative',
                            }}>
                                <span style={{ fontSize: '2rem' }}>{step.emoji}</span>
                                {/* Step number badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-8px',
                                    right: '-8px',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: index === 0 ? COLORS.primary : COLORS.primaryLight,
                                    border: `2px solid ${COLORS.dark}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    color: index === 0 ? COLORS.white : COLORS.dark,
                                }}>
                                    {step.number}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 style={{
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                color: COLORS.dark,
                                marginBottom: '10px',
                                letterSpacing: '-0.01em',
                            }}>
                                {step.title}
                            </h3>
                            <p style={{
                                fontSize: '0.95rem',
                                color: COLORS.darkSecondary,
                                lineHeight: 1.6,
                                maxWidth: '180px',
                            }}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Banner - Neo-brutalist style */}
                <div style={{
                    marginTop: '100px',
                    padding: '48px',
                    background: COLORS.primaryLight,
                    borderRadius: '24px',
                    border: `2px solid ${COLORS.dark}`,
                    boxShadow: SHADOWS.brutalist,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '24px',
                }}>
                    <div>
                        <h3 style={{
                            fontSize: '1.75rem',
                            fontWeight: 600,
                            color: COLORS.dark,
                            marginBottom: '8px',
                        }}>
                            Ready to experience our teaching?
                        </h3>
                        <p style={{
                            fontSize: '1.1rem',
                            color: COLORS.darkSecondary,
                        }}>
                            Book a free demo class and see the difference
                        </p>
                    </div>
                    <a
                        href="#contact"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '16px 32px',
                            background: COLORS.dark,
                            color: COLORS.white,
                            borderRadius: '100px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            textDecoration: 'none',
                            border: `2px solid ${COLORS.dark}`,
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = COLORS.white;
                            e.currentTarget.style.color = COLORS.dark;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = COLORS.dark;
                            e.currentTarget.style.color = COLORS.white;
                        }}
                    >
                        Book Demo <ArrowRight size={18} />
                    </a>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #methodology > div > div:nth-child(2) {
                        flex-direction: column !important;
                        align-items: center !important;
                        gap: 48px !important;
                    }
                    #methodology > div > div:nth-child(2) > div:first-child {
                        display: none !important;
                    }
                    #methodology > div > div:nth-child(2) > div:not(:first-child) {
                        max-width: 300px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Methodology;
