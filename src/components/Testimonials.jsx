import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { COLORS } from '../constants/theme';

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

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" style={{
            padding: '120px 24px',
            backgroundColor: 'white',
        }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 400,
                        color: '#1b1b1b',
                        lineHeight: 1.15,
                        marginBottom: '20px',
                        letterSpacing: '-0.02em',
                    }}>
                        What parents say
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#54656f',
                    }}>
                        Real feedback from our academy families
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div style={{
                    position: 'relative',
                    padding: '0 60px',
                }}>
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: '#f0f2f5',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#e4e6e9'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#f0f2f5'}
                    >
                        <ChevronLeft size={24} color="#54656f" />
                    </button>

                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: '#f0f2f5',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#e4e6e9'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#f0f2f5'}
                    >
                        <ChevronRight size={24} color="#54656f" />
                    </button>

                    {/* Testimonial Card */}
                    <div style={{
                        textAlign: 'center',
                        padding: '48px',
                        background: '#f0f2f5',
                        borderRadius: '24px',
                    }}>
                        <Quote size={40} color={COLORS.primary} style={{ marginBottom: '24px', opacity: 0.5 }} />

                        <p style={{
                            fontSize: '1.35rem',
                            color: '#1b1b1b',
                            lineHeight: 1.7,
                            marginBottom: '32px',
                            fontStyle: 'italic',
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
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                overflow: 'hidden',
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
                                    fontWeight: 600,
                                    color: '#1b1b1b',
                                    fontSize: '1.05rem',
                                }}>
                                    {testimonials[currentIndex].name}
                                </h4>
                                <span style={{
                                    color: '#54656f',
                                    fontSize: '0.9rem',
                                }}>
                                    {testimonials[currentIndex].relation}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '8px',
                        marginTop: '24px',
                    }}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                style={{
                                    width: currentIndex === index ? '24px' : '8px',
                                    height: '8px',
                                    borderRadius: '100px',
                                    background: currentIndex === index ? COLORS.primary : '#d1d5db',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
