import React from 'react';
import { COLORS, SHADOWS } from '../constants/theme';

const AboutUs = () => {
    return (
        <section id="about" style={{
            padding: '140px 24px',
            backgroundColor: COLORS.warmBg,
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Main Content - Alternating Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '80px',
                    alignItems: 'center',
                }}>
                    {/* Text Content */}
                    <div>
                        <h2 style={{
                            fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                            fontWeight: 600,
                            color: COLORS.dark,
                            lineHeight: 1.1,
                            marginBottom: '28px',
                            letterSpacing: '-0.03em',
                        }}>
                            Nurturing young minds{' '}
                            <span style={{ color: COLORS.primary }}>since 2022</span>
                        </h2>
                        <p style={{
                            fontSize: '1.25rem',
                            color: COLORS.darkSecondary,
                            lineHeight: 1.8,
                            marginBottom: '24px',
                        }}>
                            At Aimers Academy, we believe every child has unique potential waiting to be unlocked.
                            Our personalized approach ensures each student receives the attention and guidance
                            they need to excel academically.
                        </p>
                        <p style={{
                            fontSize: '1.25rem',
                            color: COLORS.darkSecondary,
                            lineHeight: 1.8,
                        }}>
                            With over a decade of experience, we have helped hundreds of students achieve
                            their academic goals and build confidence in their abilities.
                        </p>
                    </div>

                    {/* Image Card - Neo-brutalist */}
                    <div style={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: `2px solid ${COLORS.dark}`,
                        boxShadow: SHADOWS.brutalist,
                        background: COLORS.white,
                        padding: '12px',
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
                            alt="Students learning together"
                            style={{
                                width: '100%',
                                height: '480px',
                                objectFit: 'cover',
                                borderRadius: '24px',
                            }}
                        />
                    </div>
                </div>

                {/* Mission & Vision - Cards */}
                <div style={{
                    marginTop: '120px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px',
                }}>
                    {/* Mission Card */}
                    <div style={{
                        background: COLORS.white,
                        borderRadius: '24px',
                        padding: '40px',
                        border: `2px solid ${COLORS.dark}`,
                        boxShadow: SHADOWS.brutalist,
                    }}>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            background: COLORS.primaryLight,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '24px',
                        }}>
                            <span style={{ fontSize: '1.8rem' }}>🎯</span>
                        </div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: COLORS.dark,
                            marginBottom: '16px',
                        }}>
                            Our <span style={{ color: COLORS.primary }}>Mission</span>
                        </h3>
                        <p style={{
                            fontSize: '1.1rem',
                            color: COLORS.darkSecondary,
                            lineHeight: 1.7,
                        }}>
                            To provide quality education that empowers students with knowledge,
                            critical thinking skills, and the confidence to achieve their dreams.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div style={{
                        background: COLORS.white,
                        borderRadius: '24px',
                        padding: '40px',
                        border: `2px solid ${COLORS.dark}`,
                        boxShadow: SHADOWS.brutalist,
                    }}>
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            background: COLORS.primaryLight,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '24px',
                        }}>
                            <span style={{ fontSize: '1.8rem' }}>🚀</span>
                        </div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: COLORS.dark,
                            marginBottom: '16px',
                        }}>
                            Our <span style={{ color: COLORS.primary }}>Vision</span>
                        </h3>
                        <p style={{
                            fontSize: '1.1rem',
                            color: COLORS.darkSecondary,
                            lineHeight: 1.7,
                        }}>
                            To be the leading tuition academy that transforms every student into
                            a confident learner ready to excel in academics and life.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #about > div > div:first-child {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutUs;
