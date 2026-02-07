import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COLORS } from '../constants/theme';

const Methodology = () => {
    const steps = [
        {
            number: '01',
            title: 'Assessment',
            description: 'We begin with understanding each student\'s current level and learning style through diagnostic tests.',
        },
        {
            number: '02',
            title: 'Personalized Plan',
            description: 'Custom study plans are created based on individual strengths, weaknesses, and goals.',
        },
        {
            number: '03',
            title: 'Concept Teaching',
            description: 'Focus on building strong conceptual understanding with real-life examples and applications.',
        },
        {
            number: '04',
            title: 'Practice & Testing',
            description: 'Regular tests, assignments, and practice sessions to reinforce learning.',
        },
        {
            number: '05',
            title: 'Feedback & Improvement',
            description: 'Continuous feedback and doubt clearing sessions to ensure steady progress.',
        },
    ];

    return (
        <section id="methodology" style={{
            padding: '120px 24px',
            backgroundColor: 'white',
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
                        How we teach
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#54656f',
                        maxWidth: '550px',
                        margin: '0 auto',
                    }}>
                        Our proven 5-step approach ensures every student achieves their potential
                    </p>
                </div>

                {/* Steps - Horizontal Timeline */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0',
                }}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '100px 1fr',
                                gap: '40px',
                                paddingBottom: '48px',
                                borderLeft: '2px solid #e9edef',
                                marginLeft: '24px',
                                paddingLeft: '40px',
                                position: 'relative',
                            }}
                        >
                            {/* Number Circle */}
                            <div style={{
                                position: 'absolute',
                                left: '-18px',
                                top: '0',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: index === 0 ? COLORS.primary : 'white',
                                border: `2px solid ${index === 0 ? COLORS.primary : '#e9edef'}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                color: index === 0 ? 'white' : '#54656f',
                            }}>
                                {step.number}
                            </div>

                            {/* Content */}
                            <div style={{ gridColumn: '1 / -1' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 500,
                                    color: '#1b1b1b',
                                    marginBottom: '12px',
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#54656f',
                                    lineHeight: 1.6,
                                    maxWidth: '600px',
                                }}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div style={{
                    marginTop: '60px',
                    padding: '48px',
                    background: COLORS.primary,
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '24px',
                }}>
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 500,
                            color: 'white',
                            marginBottom: '8px',
                        }}>
                            Ready to experience our teaching?
                        </h3>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255,255,255,0.85)',
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
                            padding: '14px 28px',
                            background: 'white',
                            color: COLORS.primary,
                            borderRadius: '100px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'transform 0.2s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Book Demo <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
