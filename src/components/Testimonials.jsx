import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { COLORS, SHADOWS } from '../constants/theme';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Mrs. Sharma',
            relation: 'Parent of Priya (10th Std)',
            quote: 'Aimers Academy transformed my daughter\'s approach to studies. The teachers are dedicated and the personal attention helped her score 98.5% in boards.',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
        },
        {
            name: 'Mr. Patel',
            relation: 'Parent of Arjun (8th Std)',
            quote: 'The small batch sizes and regular doubt sessions make all the difference. My son\'s confidence in Mathematics has improved tremendously.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        },
        {
            name: 'Mrs. Verma',
            relation: 'Parent of Ananya (7th Std)',
            quote: 'What I appreciate most is the regular communication and progress updates. The teachers genuinely care about each student\'s growth.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
        },
    ];

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" style={{
            padding: '140px 24px',
            backgroundColor: COLORS.white,
        }}>
            <div style={{
                maxWidth: '900px',
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
                        What parents{' '}
                        <span style={{ color: COLORS.primary }}>say</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: COLORS.darkSecondary,
                        maxWidth: '500px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        Real feedback from our academy families
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div style={{
                    position: 'relative',
                    padding: '0 70px',
                }}>
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: COLORS.white,
                            border: `2px solid ${COLORS.dark}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = COLORS.primaryLight;
                            e.currentTarget.style.boxShadow = SHADOWS.brutalist;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = COLORS.white;
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <ChevronLeft size={24} color={COLORS.dark} />
                    </button>

                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: COLORS.white,
                            border: `2px solid ${COLORS.dark}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = COLORS.primaryLight;
                            e.currentTarget.style.boxShadow = SHADOWS.brutalist;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = COLORS.white;
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <ChevronRight size={24} color={COLORS.dark} />
                    </button>

                    {/* Testimonial Card */}
                    <div style={{
                        textAlign: 'center',
                        padding: '48px',
                        background: COLORS.primaryLight,
                        borderRadius: '24px',
                        border: `2px solid ${COLORS.dark}`,
                        boxShadow: SHADOWS.brutalist,
                        overflow: 'hidden',
                    }}>
                        {/* Animated Content Wrapper */}
                        <div
                            key={currentIndex}
                            className="testimonial-content"
                            style={{
                                animation: 'fadeSlideIn 0.5s ease-out',
                            }}
                        >
                            <Quote size={40} color={COLORS.primary} style={{ marginBottom: '24px' }} />

                            <p style={{
                                fontSize: '1.35rem',
                                color: COLORS.dark,
                                lineHeight: 1.7,
                                marginBottom: '32px',
                                fontStyle: 'italic',
                                fontWeight: 500,
                            }}>
                                "{testimonials[currentIndex].quote}"
                            </p>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '16px',
                            }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: `3px solid ${COLORS.dark}`,
                                    boxShadow: '4px 4px 0px #1b1b1b',
                                }}>
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <h4 style={{
                                        fontWeight: 700,
                                        color: COLORS.dark,
                                        fontSize: '1.15rem',
                                    }}>
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <span style={{
                                        color: COLORS.darkSecondary,
                                        fontSize: '0.95rem',
                                    }}>
                                        {testimonials[currentIndex].relation}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '12px',
                        marginTop: '32px',
                    }}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                style={{
                                    width: currentIndex === index ? '32px' : '12px',
                                    height: '12px',
                                    borderRadius: '100px',
                                    background: currentIndex === index ? COLORS.primary : COLORS.light,
                                    border: `2px solid ${COLORS.dark}`,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @media (max-width: 700px) {
                    #testimonials {
                        padding: 80px 16px !important;
                    }
                    #testimonials > div > div:nth-child(2) {
                        padding: 0 50px !important;
                    }
                    #testimonials > div > div:nth-child(2) > button {
                        width: 44px !important;
                        height: 44px !important;
                    }
                    #testimonials > div > div:nth-child(2) > div:first-of-type {
                        padding: 32px 24px !important;
                    }
                    #testimonials > div > div:nth-child(2) > div:first-of-type p {
                        font-size: 1.1rem !important;
                    }
                }
                @media (max-width: 500px) {
                    #testimonials > div > div:nth-child(2) {
                        padding: 0 !important;
                    }
                    #testimonials > div > div:nth-child(2) > button {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
