import React, { useRef } from 'react';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
    const sectionRef = useRef(null);
    const leftCloudRef = useRef(null);
    const rightCloudRef = useRef(null);
    const mainFrameRef = useRef(null);
    const contentRef = useRef(null);
    const headlineRef = useRef(null);
    const buttonsRef = useRef(null);

    useGSAP(() => {
        // Left cloud - moves left on scroll
        gsap.to(leftCloudRef.current, {
            x: -150,
            opacity: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 3,
            }
        });

        // Right cloud - moves right on scroll
        gsap.to(rightCloudRef.current, {
            x: 150,
            opacity: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 3,
            }
        });

        // Main frame - moves slower (less movement) for depth effect
        gsap.to(mainFrameRef.current, {
            y: -80,
            scale: 1.05,
            opacity: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        });

        // Initial entrance animations for clouds and frame
        gsap.from(leftCloudRef.current, {
            x: -80,
            opacity: 0,
            duration: 4,
            delay: 0.5,
            ease: 'power3.out',
        });

        gsap.from(rightCloudRef.current, {
            x: 100,
            opacity: 0,
            duration: 4,
            delay: 0.3,
            ease: 'power3.out',
        });

        gsap.from(mainFrameRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
        });

        // Content entrance animations
        gsap.fromTo(headlineRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
        );

        // Buttons staggered entrance
        gsap.fromTo(buttonsRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.5, stagger: 0.15, ease: 'power3.out' }
        );

    }, { scope: sectionRef }); // scope for automatic cleanup

    return (
        <section ref={sectionRef} id="hero" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'url("../background.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>


            {/* Clouds */}
            <div className="clouds-overlay" style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
            }}>
                <div ref={leftCloudRef} className="left-cloud" style={{
                    flex: 1,
                }}>
                    <img src="../cloud-left.png" alt="Clouds" />
                </div>
                <div ref={rightCloudRef} className="right-cloud" style={{
                    flex: 1
                }}>
                    <img src="../cloud-right.png" alt="Clouds" />
                </div>
            </div>

            {/* Main Frame */}
            <div ref={mainFrameRef} className="main-frame" style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10,
            }}>
                <img src="../top-frame.png" alt="Frame" />
            </div>

            <div ref={contentRef} className="container" style={{
                width: '60%',
                display: 'flex',
                paddingTop: '10%',
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 99,
            }}>
                {/* Content */}
                <div style={{ opacity: 1 }}>
                    {/* Headline */}
                    <h1 ref={headlineRef} style={{
                        fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        lineHeight: 1.08,
                        marginBottom: '28px',
                        letterSpacing: '-0.03em',
                        textAlign: 'center',
                    }}>
                        Building Strong{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, var(--color-accent) 0%, #ff6b7a 50%, var(--color-primary) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Foundations
                        </span>
                        <br />
                        for Tomorrow's
                        <br />
                        Achievers
                    </h1>

                    {/* CTAs */}
                    <div ref={buttonsRef} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <button style={{
                            background: 'linear-gradient(135deg, var(--color-primary) 0%, #312e81 50%, #4338ca 100%)',
                            backgroundSize: '200% 200%',
                            color: 'white',
                            padding: '12px 28px',
                            borderRadius: 'var(--radius-md)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 8px 32px rgba(30, 27, 75, 0.25), 0 4px 12px rgba(30, 27, 75, 0.15)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: 'none',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(30, 27, 75, 0.3), 0 6px 16px rgba(30, 27, 75, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(30, 27, 75, 0.25), 0 4px 12px rgba(30, 27, 75, 0.15)';
                            }}
                        >
                            Enroll Now <ArrowRight size={20} />
                        </button>

                        <button style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            color: 'var(--color-primary)',
                            padding: '12px 28px',
                            borderRadius: 'var(--radius-md)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            border: '2px solid rgba(30, 27, 75, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                            transition: 'all 0.3s ease',
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'white';
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                                e.currentTarget.style.borderColor = 'rgba(30, 27, 75, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--color-accent) 0%, #ff6b7a 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Play size={12} fill="white" color="white" />
                            </div>
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 968px) {
                    .container { grid-template-columns: 1fr !important; text-align: center; }
                    #hero { padding-top: 120px !important; min-height: auto !important; padding-bottom: 60px !important; }
                    #hero p { margin: 0 auto 40px auto; }
                    #hero .hero-visual { display: none !important; }
                    #hero > div:first-child > div:nth-child(2),
                    #hero > div:first-child > div:nth-child(3) { display: none; }
                }
                @media (max-width: 968px) {
                    #hero > .container > div:last-child { display: none !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
