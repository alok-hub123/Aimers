import React, { useRef } from 'react';
import { GraduationCap, BookOpen, Lightbulb, Target } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Classes = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    const offerings = [
        {
            grade: 'Junior KG – UKG',
            title: 'Foundational Learning',
            desc: 'Play-based learning to spark curiosity and build strong basic skills in reading and numbers.',
            icon: <Lightbulb size={24} />,
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
            accentColor: '#f59e0b',
        },
        {
            grade: 'Classes 1 – 5',
            title: 'Core Concepts',
            desc: 'Focus on literacy, numeracy, and environmental awareness to create a solid academic base.',
            icon: <BookOpen size={24} />,
            gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
            accentColor: '#10b981',
        },
        {
            grade: 'Classes 6 – 8',
            title: 'Academic Strengthening',
            desc: 'In-depth subject knowledge, critical thinking, and preparation for rigorous high school curriculum.',
            icon: <GraduationCap size={24} />,
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
            accentColor: '#3b82f6',
        },
        {
            grade: 'Classes 9 – 10',
            title: 'Board Exam Prep',
            desc: 'Intensive coaching, exam strategies, and regular mock tests to ensure top performance in boards.',
            icon: <Target size={24} />,
            gradient: 'linear-gradient(135deg, #e63946 0%, #ff6b7a 100%)',
            accentColor: '#e63946',
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

        // Offering cards staggered entrance
        gsap.from(cardsRef.current.children, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
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
        <section ref={sectionRef} id="classes" style={{
            padding: '120px 0',
            background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background Decorations */}
            <div style={{
                position: 'absolute',
                top: '-200px',
                right: '-200px',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-150px',
                left: '-150px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        borderRadius: '100px',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%)',
                        border: '1px solid rgba(59, 130, 246, 0.15)',
                        marginBottom: '24px',
                    }}>
                        <GraduationCap size={16} color="#3b82f6" />
                        <span style={{
                            color: '#3b82f6',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}>
                            Our Programs
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        marginBottom: '20px',
                        letterSpacing: '-0.02em',
                    }}>
                        Classes We{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Offer
                        </span>
                    </h2>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '1.15rem',
                        maxWidth: '550px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        Tailored curriculum for every stage of your child's growth.
                    </p>
                </div>

                {/* Cards Grid */}
                <div ref={cardsRef} style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '28px',
                }}>
                    {offerings.map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: 'rgba(255, 255, 255, 0.85)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                borderRadius: 'var(--radius-xl)',
                                padding: '0',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 4px 24px rgba(30, 27, 75, 0.06)',
                                border: '1px solid rgba(255, 255, 255, 0.9)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
                                e.currentTarget.style.boxShadow = `0 24px 48px rgba(30, 27, 75, 0.12), 0 0 0 1px ${item.accentColor}20`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 24px rgba(30, 27, 75, 0.06)';
                            }}
                        >
                            {/* Gradient Top Strip */}
                            <div style={{
                                height: '5px',
                                background: item.gradient,
                            }} />

                            {/* Content */}
                            <div style={{ padding: '32px' }}>
                                {/* Icon & Grade */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: '20px',
                                }}>
                                    <div style={{
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: 'var(--radius-md)',
                                        background: item.gradient,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        boxShadow: `0 8px 20px ${item.accentColor}30`,
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div style={{
                                        padding: '8px 14px',
                                        borderRadius: 'var(--radius-full)',
                                        background: `${item.accentColor}12`,
                                        border: `1px solid ${item.accentColor}20`,
                                    }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            color: item.accentColor,
                                            letterSpacing: '0.05em',
                                        }}>
                                            {item.grade}
                                        </span>
                                    </div>
                                </div>

                                {/* Title & Description */}
                                <h3 style={{
                                    fontSize: '1.35rem',
                                    fontWeight: 700,
                                    color: 'var(--color-text-main)',
                                    marginBottom: '14px',
                                    letterSpacing: '-0.01em',
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    color: 'var(--color-text-muted)',
                                    lineHeight: 1.7,
                                    fontSize: '0.95rem',
                                }}>
                                    {item.desc}
                                </p>

                                {/* Learn More Link */}
                                <div style={{
                                    marginTop: '24px',
                                    paddingTop: '20px',
                                    borderTop: '1px solid rgba(241, 245, 249, 1)',
                                }}>
                                    <a
                                        href="#"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: item.accentColor,
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            transition: 'gap 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                                        onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}
                                    >
                                        Learn More
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;
