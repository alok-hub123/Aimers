import React, { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Testimonials = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    const reviews = [
        {
            name: 'Priya Sharma',
            role: 'Mother of Class 8 Student',
            text: "Since joining Aimers, my son's confidence in Math has improved tremendously. The teachers are very patient and understanding.",
            rating: 5,
            initials: 'PS',
            gradient: 'linear-gradient(135deg, #e63946 0%, #ff6b7a 100%)',
        },
        {
            name: 'Rajesh Gupta',
            role: 'Father of Class 10 Student',
            text: "Excellent guidance for board exams. The conceptual clarity they provide is unmatched in other tuitions we tried.",
            rating: 5,
            initials: 'RG',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        },
        {
            name: 'Sneha Patel',
            role: 'Student, Class 9',
            text: "I used to fear Science, but now I love it. The way they explain concepts with real examples makes it so easy!",
            rating: 5,
            initials: 'SP',
            gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
        }
    ];

    useGSAP(() => {
        // Header entrance animation
        gsap.from(headerRef.current.children, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            }
        });

        // Testimonial cards staggered entrance
        gsap.from(cardsRef.current.children, {
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="testimonials" style={{
            padding: '120px 0',
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
            backgroundSize: '200% 200%',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background Decorations */}
            <div style={{
                position: 'absolute',
                top: '-100px',
                left: '-100px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(230, 57, 70, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-150px',
                right: '-150px',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(67, 56, 202, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />

            {/* Grid Pattern Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                backgroundSize: '32px 32px',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '72px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        borderRadius: '100px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        marginBottom: '24px',
                    }}>
                        <Star size={16} color="#fbbf24" fill="#fbbf24" />
                        <span style={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}>
                            Testimonials
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800,
                        color: 'white',
                        marginBottom: '20px',
                        letterSpacing: '-0.02em',
                    }}>
                        Trusted by{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Parents & Students
                        </span>
                    </h2>
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '1.15rem',
                        maxWidth: '500px',
                        margin: '0 auto',
                    }}>
                        See what our community says about their experience with us.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div ref={cardsRef} style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '28px',
                }}>
                    {reviews.map((review, idx) => (
                        <div key={idx} style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            padding: '36px',
                            borderRadius: 'var(--radius-xl)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            transition: 'all 0.4s ease',
                            position: 'relative',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            {/* Quote Icon */}
                            <div style={{
                                position: 'absolute',
                                top: '24px',
                                right: '24px',
                                opacity: 0.15,
                            }}>
                                <Quote size={40} color="white" />
                            </div>

                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill="#fbbf24"
                                        color="#fbbf24"
                                        style={{
                                            filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.4))'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: 1.7,
                                marginBottom: '28px',
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontWeight: 400,
                            }}>
                                "{review.text}"
                            </p>

                            {/* Author */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: review.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                                }}>
                                    {review.initials}
                                </div>
                                <div>
                                    <div style={{
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        color: 'white',
                                    }}>
                                        {review.name}
                                    </div>
                                    <div style={{
                                        fontSize: '0.875rem',
                                        color: 'rgba(255, 255, 255, 0.5)',
                                    }}>
                                        {review.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
