import React, { useRef, useEffect, useState } from 'react';
import { COLORS, SHADOWS } from '../constants/theme';

const Achievements = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        { value: 500, suffix: '+', label: 'Happy Students', emoji: '🎓' },
        { value: 10, suffix: '+', label: 'Years Experience', emoji: '📚' },
        { value: 95, suffix: '%', label: 'Success Rate', emoji: '🏆' },
        { value: 50, suffix: '+', label: 'Top Rankers', emoji: '⭐' },
    ];

    const toppers = [
        { name: 'Priya Sharma', score: '98.5%', class: '10th (2024)', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200' },
        { name: 'Rahul Verma', score: '97.2%', class: '10th (2024)', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
        { name: 'Ananya Patel', score: '96.8%', class: '10th (2024)', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const AnimatedNumber = ({ value, suffix }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isVisible) return;
            let start = 0;
            const duration = 2000;
            const increment = value / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }, [isVisible, value]);

        return <>{count}{suffix}</>;
    };

    return (
        <section ref={sectionRef} id="achievements" style={{
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
                        Numbers that speak{' '}
                        <span style={{ color: COLORS.primary }}>excellence</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: COLORS.darkSecondary,
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        Our track record reflects our commitment to quality education
                    </p>
                </div>

                {/* Stats Grid - Neo-brutalist cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '24px',
                    marginBottom: '100px',
                }}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            style={{
                                background: COLORS.warmBg,
                                borderRadius: '24px',
                                padding: '32px 20px',
                                textAlign: 'center',
                                border: `2px solid ${COLORS.dark}`,
                                boxShadow: SHADOWS.brutalist,
                            }}
                        >
                            <div style={{
                                fontSize: '2rem',
                                marginBottom: '12px',
                            }}>
                                {stat.emoji}
                            </div>
                            <div style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: 700,
                                color: COLORS.primary,
                                fontFamily: 'system-ui, sans-serif',
                                lineHeight: 1,
                                marginBottom: '8px',
                            }}>
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div style={{
                                fontSize: '1rem',
                                color: COLORS.darkSecondary,
                                fontWeight: 500,
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Toppers Section */}
                <div>
                    <h3 style={{
                        fontSize: '1.75rem',
                        fontWeight: 600,
                        color: COLORS.dark,
                        textAlign: 'center',
                        marginBottom: '48px',
                    }}>
                        Our Star <span style={{ color: COLORS.primary }}>Performers</span>
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '28px',
                    }}>
                        {toppers.map((topper, index) => {
                            const rankColors = ['#FFD700', '#C0C0C0', '#CD7F32', '#B8860B'];
                            const rankLabels = ['1st', '2nd', '3rd', '4th'];
                            return (
                                <div
                                    key={index}
                                    style={{
                                        background: COLORS.white,
                                        borderRadius: '16px',
                                        padding: '0',
                                        textAlign: 'center',
                                        border: `3px solid ${COLORS.dark}`,
                                        boxShadow: SHADOWS.brutalist,
                                        position: 'relative',
                                        overflow: 'visible',
                                    }}
                                >
                                    {/* Ribbon Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: rankColors[index] || COLORS.primary,
                                        color: index < 2 ? '#1a1a1a' : '#fff',
                                        padding: '8px 24px',
                                        borderRadius: '100px',
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        border: `2px solid ${COLORS.dark}`,
                                        boxShadow: '0 4px 0 rgba(0,0,0,0.2)',
                                        zIndex: 10,
                                        letterSpacing: '0.05em',
                                    }}>
                                        🏆 {rankLabels[index]} RANK
                                    </div>

                                    {/* Certificate Header */}
                                    <div style={{
                                        background: COLORS.primaryLight,
                                        padding: '40px 24px 20px',
                                        borderBottom: `2px dashed ${COLORS.dark}`,
                                        borderRadius: '16px',
                                    }}>
                                        <div style={{
                                            width: '90px',
                                            height: '90px',
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            margin: '0 auto',
                                            border: `4px solid ${COLORS.white}`,
                                            boxShadow: `0 0 0 3px ${COLORS.dark}`,
                                        }}>
                                            <img
                                                src={topper.image}
                                                alt={topper.name}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Certificate Body */}
                                    <div style={{ padding: '24px' }}>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            color: COLORS.darkSecondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.15em',
                                            marginBottom: '8px',
                                            fontWeight: 500,
                                        }}>
                                            Certificate of Excellence
                                        </div>
                                        <h4 style={{
                                            fontSize: '1.25rem',
                                            fontWeight: 700,
                                            color: COLORS.dark,
                                            marginBottom: '12px',
                                        }}>
                                            {topper.name}
                                        </h4>
                                        <div style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            background: COLORS.warmBg,
                                            padding: '10px 20px',
                                            borderRadius: '100px',
                                            border: `2px solid ${COLORS.dark}`,
                                        }}>
                                            <span style={{
                                                fontSize: '1.4rem',
                                                fontWeight: 800,
                                                color: COLORS.primary,
                                                fontFamily: 'system-ui, sans-serif',
                                            }}>
                                                {topper.score}
                                            </span>
                                        </div>
                                        <div style={{
                                            marginTop: '12px',
                                            fontSize: '0.9rem',
                                            color: COLORS.darkSecondary,
                                            fontWeight: 500,
                                        }}>
                                            📚 {topper.class}
                                        </div>
                                    </div>

                                    {/* Decorative corner accents */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '8px',
                                        left: '8px',
                                        width: '20px',
                                        height: '20px',
                                        borderLeft: `3px solid ${COLORS.primary}`,
                                        borderBottom: `3px solid ${COLORS.primary}`,
                                        borderRadius: '0 0 0 8px',
                                        opacity: 0.5,
                                    }} />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '8px',
                                        right: '8px',
                                        width: '20px',
                                        height: '20px',
                                        borderRight: `3px solid ${COLORS.primary}`,
                                        borderBottom: `3px solid ${COLORS.primary}`,
                                        borderRadius: '0 0 8px 0',
                                        opacity: 0.5,
                                    }} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #achievements > div > div:nth-child(2) {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 500px) {
                    #achievements > div > div:nth-child(2) {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Achievements;
