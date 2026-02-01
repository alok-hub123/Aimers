import React, { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const CTA = () => {
    const sectionRef = useRef(null);
    const blob1Ref = useRef(null);
    const blob2Ref = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        // Blob 1 continuous animation
        gsap.to(blob1Ref.current, {
            x: 30,
            y: -20,
            scale: 1.1,
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        // Blob 2 continuous animation (offset timing)
        gsap.to(blob2Ref.current, {
            x: -25,
            y: 15,
            scale: 0.95,
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 2,
        });

        // Content entrance animation
        gsap.from(contentRef.current.children, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="cta" style={{
            padding: '100px 0',
            background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        }}>
            <div className="container">
                <div style={{
                    background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
                    backgroundSize: '200% 200%',
                    borderRadius: 'var(--radius-2xl)',
                    padding: '80px 60px',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 32px 64px rgba(30, 27, 75, 0.25)',
                }}>
                    {/* Animated Background Shapes */}
                    <div ref={blob1Ref} style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-20%',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(230, 57, 70, 0.2) 0%, transparent 70%)',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                    }} />
                    <div ref={blob2Ref} style={{
                        position: 'absolute',
                        bottom: '-60%',
                        right: '-15%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(67, 56, 202, 0.25) 0%, transparent 70%)',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                    }} />

                    {/* Grid Pattern */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                        pointerEvents: 'none',
                    }} />

                    {/* Content */}
                    <div ref={contentRef} style={{ position: 'relative', zIndex: 1 }}>
                        {/* Badge */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            borderRadius: '100px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            marginBottom: '28px',
                        }}>
                            <Sparkles size={16} color="#fbbf24" />
                            <span style={{
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                            }}>
                                Limited Seats Available
                            </span>
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 800,
                            marginBottom: '24px',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2,
                            maxWidth: '700px',
                            margin: '0 auto 24px auto',
                        }}>
                            Give Your Child the Right{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                Academic Direction
                            </span>
                            {' '}Today
                        </h2>

                        <p style={{
                            fontSize: '1.2rem',
                            marginBottom: '40px',
                            color: 'rgba(255, 255, 255, 0.8)',
                            maxWidth: '550px',
                            margin: '0 auto 40px auto',
                            lineHeight: 1.7,
                        }}>
                            Join the community of achievers. Admissions open for Junior KG to Class 10.
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <button style={{
                                background: 'white',
                                color: 'var(--color-primary)',
                                padding: '18px 40px',
                                borderRadius: 'var(--radius-md)',
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                border: 'none',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.25)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                                }}
                            >
                                Join Aimers Academy
                                <ArrowRight size={20} />
                            </button>

                            <button style={{
                                background: 'transparent',
                                color: 'white',
                                padding: '18px 36px',
                                borderRadius: 'var(--radius-md)',
                                fontSize: '1.05rem',
                                fontWeight: 600,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                border: '2px solid rgba(255, 255, 255, 0.3)',
                                transition: 'all 0.3s ease',
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                }}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
