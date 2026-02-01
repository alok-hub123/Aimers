import React, { useRef } from 'react';
import { Users, Brain, TrendingUp, ClipboardCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Features = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    const features = [
        {
            icon: <Users size={28} />,
            title: 'Small Batch Sizes',
            desc: 'We limit class sizes to ensure every student gets the personal attention they need to thrive.',
            gradient: 'linear-gradient(135deg, #e63946 0%, #ff6b7a 100%)',
            bgGradient: 'linear-gradient(135deg, rgba(230, 57, 70, 0.1) 0%, rgba(255, 107, 122, 0.05) 100%)',
        },
        {
            icon: <Brain size={28} />,
            title: 'Concept-Based Teaching',
            desc: 'Moving beyond rote learning, we focus on deep understanding and practical application of concepts.',
            gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
            bgGradient: 'linear-gradient(135deg, rgba(30, 27, 75, 0.1) 0%, rgba(67, 56, 202, 0.05) 100%)',
        },
        {
            icon: <TrendingUp size={28} />,
            title: 'Experienced Mentors',
            desc: 'Our teachers are subject matter experts dedicated to guiding students through their academic journey.',
            gradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
            bgGradient: 'linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, rgba(52, 211, 153, 0.05) 100%)',
        },
        {
            icon: <ClipboardCheck size={28} />,
            title: 'Regular Assessments',
            desc: 'Frequent tests and detailed feedback help track progress and identify areas for improvement early.',
            gradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
            bgGradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(167, 139, 250, 0.05) 100%)',
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
            immediateRender: false, // Prevents opacity:0 from applying immediately
            scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            }
        });

        // Feature cards staggered entrance
        gsap.from(cardsRef.current.children, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            immediateRender: false, // Prevents opacity:0 from applying immediately
            scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="features" style={{
            padding: '120px 0',
            background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background Decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(230, 57, 70, 0.03) 0%, transparent 70%)',
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
                        background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.08) 0%, rgba(67, 56, 202, 0.04) 100%)',
                        border: '1px solid rgba(30, 27, 75, 0.1)',
                        marginBottom: '24px',
                    }}>
                        <span style={{
                            color: 'var(--color-primary)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}>
                            Why Choose Us
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        marginBottom: '20px',
                        letterSpacing: '-0.02em',
                    }}>
                        Why Choose{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, var(--color-accent) 0%, #ff6b7a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Aimers Academy?
                        </span>
                    </h2>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '1.15rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        We don't just teach; we shape the future of our students with proven methodologies.
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div ref={cardsRef} style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '28px',
                }}>
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            style={{
                                padding: '36px 32px',
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                borderRadius: 'var(--radius-xl)',
                                border: '1px solid rgba(255, 255, 255, 0.9)',
                                boxShadow: '0 4px 24px rgba(30, 27, 75, 0.06)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 48px rgba(30, 27, 75, 0.12)';
                                e.currentTarget.style.borderColor = 'rgba(230, 57, 70, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 24px rgba(30, 27, 75, 0.06)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.9)';
                            }}
                        >
                            {/* Hover Background Effect */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: feature.bgGradient,
                                opacity: 0,
                                transition: 'opacity 0.4s ease',
                                pointerEvents: 'none',
                            }}
                                className="hover-bg"
                            />

                            {/* Icon */}
                            <div style={{
                                marginBottom: '24px',
                                background: feature.gradient,
                                width: '64px',
                                height: '64px',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                boxShadow: `0 8px 24px ${feature.gradient.includes('e63946') ? 'rgba(230, 57, 70, 0.3)' :
                                    feature.gradient.includes('1e1b4b') ? 'rgba(30, 27, 75, 0.3)' :
                                        feature.gradient.includes('059669') ? 'rgba(5, 150, 105, 0.3)' :
                                            'rgba(124, 58, 237, 0.3)'}`,
                                position: 'relative',
                                zIndex: 1,
                            }}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: 'var(--color-primary)',
                                marginBottom: '14px',
                                position: 'relative',
                                zIndex: 1,
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.7,
                                fontSize: '0.95rem',
                                position: 'relative',
                                zIndex: 1,
                            }}>
                                {feature.desc}
                            </p>

                            {/* Number Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '24px',
                                right: '24px',
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: 'rgba(241, 245, 249, 0.8)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                color: 'var(--color-text-light)',
                            }}>
                                0{idx + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
