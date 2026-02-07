import React, { useRef, useEffect, useState } from 'react';
import { COLORS } from '../constants/theme';

const Achievements = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        { value: 500, suffix: '+', label: 'Happy Students' },
        { value: 10, suffix: '+', label: 'Years Experience' },
        { value: 95, suffix: '%', label: 'Success Rate' },
        { value: 50, suffix: '+', label: 'Top Rankers' },
    ];

    const toppers = [
        { name: 'Priya Sharma', score: '98.5%', class: '10th (2024)', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200' },
        { name: 'Rahul Verma', score: '97.2%', class: '10th (2024)', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
        { name: 'Ananya Patel', score: '96.8%', class: '10th (2024)', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
        { name: 'Arjun Singh', score: '95.5%', class: '10th (2023)', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
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
                        Numbers that speak excellence
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#54656f',
                        maxWidth: '600px',
                        margin: '0 auto',
                    }}>
                        Our track record reflects our commitment to quality education
                    </p>
                </div>

                {/* Stats Grid */}
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
                                textAlign: 'center',
                                padding: '40px 20px',
                            }}
                        >
                            <div style={{
                                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                                fontWeight: 300,
                                color: COLORS.primary,
                                fontFamily: 'system-ui, sans-serif',
                                lineHeight: 1,
                                marginBottom: '12px',
                            }}>
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div style={{
                                fontSize: '1rem',
                                color: '#54656f',
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
                        fontWeight: 500,
                        color: '#1b1b1b',
                        textAlign: 'center',
                        marginBottom: '48px',
                    }}>
                        Our Star Performers
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '24px',
                    }}>
                        {toppers.map((topper, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    padding: '32px',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '0 auto 20px',
                                    border: `3px solid ${COLORS.primary}`,
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
                                <h4 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: '#1b1b1b',
                                    marginBottom: '4px',
                                }}>
                                    {topper.name}
                                </h4>
                                <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 600,
                                    color: COLORS.primary,
                                    marginBottom: '4px',
                                }}>
                                    {topper.score}
                                </div>
                                <span style={{
                                    fontSize: '0.9rem',
                                    color: '#54656f',
                                }}>
                                    {topper.class}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    #achievements > div > div:nth-child(2) {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Achievements;
