import React, { useRef } from 'react';
import { BookOpen, PenTool, Layout, MessageCircle, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Approach = () => {
    const sectionRef = useRef(null);
    const leftContentRef = useRef(null);
    const stepsContainerRef = useRef(null);
    const timelineRef = useRef(null);

    const steps = [
        {
            icon: <BookOpen size={22} />,
            title: "Learn Clearly",
            desc: "We break down complex topics into simple, digestible concepts.",
            number: "01"
        },
        {
            icon: <PenTool size={22} />,
            title: "Practice Guided",
            desc: "Hands-on problem solving with immediate teacher assistance.",
            number: "02"
        },
        {
            icon: <Layout size={22} />,
            title: "Regular Tests",
            desc: "Weekly assessments to ensure retention and exam readiness.",
            number: "03"
        },
        {
            icon: <MessageCircle size={22} />,
            title: "Feedback Loop",
            desc: "Continuous updates to parents ensures we stay on the right track.",
            number: "04"
        }
    ];

    useGSAP(() => {
        // Left content entrance
        gsap.from(leftContentRef.current.children, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: leftContentRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        // Timeline line animation (draw effect)
        gsap.from(timelineRef.current, {
            scaleY: 0,
            transformOrigin: 'top center',
            duration: 1.2,
            ease: 'power2.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: stepsContainerRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
            }
        });

        // Steps staggered reveal
        gsap.from(stepsContainerRef.current.querySelectorAll(':scope > div > div'), {
            x: 60,
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
                trigger: stepsContainerRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="approach" style={{
            padding: '120px 0',
            background: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background Decoration */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-100px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(30, 27, 75, 0.03) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />

            <div className="container">
                <div className="approach-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center'
                }}>

                    {/* Left Content */}
                    <div ref={leftContentRef}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 20px',
                            borderRadius: '100px',
                            background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.1) 0%, rgba(255, 107, 122, 0.05) 100%)',
                            border: '1px solid rgba(230, 57, 70, 0.15)',
                            marginBottom: '24px',
                        }}>
                            <CheckCircle size={16} color="var(--color-accent)" />
                            <span style={{
                                color: 'var(--color-accent)',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                            }}>
                                Our Methodology
                            </span>
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                            fontWeight: 800,
                            color: 'var(--color-primary)',
                            marginBottom: '24px',
                            lineHeight: 1.15,
                            letterSpacing: '-0.02em',
                        }}>
                            A Proven Approach to{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, var(--color-accent) 0%, #ff6b7a 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                Academic Excellence
                            </span>
                        </h2>

                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '1.1rem',
                            marginBottom: '36px',
                            lineHeight: 1.7,
                            maxWidth: '480px',
                        }}>
                            We believe every child can excel with the right guidance. Our structured 4-step process ensures no student is left behind.
                        </p>

                        <button style={{
                            padding: '16px 32px',
                            background: 'transparent',
                            border: '2px solid var(--color-primary)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--color-primary)',
                            fontWeight: 600,
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'var(--color-primary)';
                                e.target.style.color = 'white';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 8px 24px rgba(30, 27, 75, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = 'var(--color-primary)';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            View Sample Plan
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Steps - Timeline */}
                    <div ref={stepsContainerRef} style={{ position: 'relative' }}>
                        {/* Connecting Line */}
                        <div ref={timelineRef} style={{
                            position: 'absolute',
                            left: '31px',
                            top: '40px',
                            bottom: '40px',
                            width: '2px',
                            background: 'linear-gradient(180deg, var(--color-primary) 0%, rgba(30, 27, 75, 0.1) 100%)',
                            borderRadius: '2px',
                        }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {steps.map((step, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '24px',
                                    padding: '24px',
                                    borderRadius: 'var(--radius-lg)',
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.9)',
                                    boxShadow: '0 4px 20px rgba(30, 27, 75, 0.04)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateX(12px)';
                                        e.currentTarget.style.boxShadow = '0 12px 32px rgba(30, 27, 75, 0.1)';
                                        e.currentTarget.style.background = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateX(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(30, 27, 75, 0.04)';
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                                    }}
                                >
                                    {/* Icon Circle */}
                                    <div style={{
                                        minWidth: '56px',
                                        height: '56px',
                                        borderRadius: 'var(--radius-md)',
                                        background: 'linear-gradient(135deg, var(--color-primary) 0%, #4338ca 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        boxShadow: '0 8px 20px rgba(30, 27, 75, 0.25)',
                                        position: 'relative',
                                        zIndex: 2,
                                    }}>
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            marginBottom: '8px',
                                        }}>
                                            <h3 style={{
                                                fontSize: '1.15rem',
                                                fontWeight: 700,
                                                color: 'var(--color-primary)',
                                                margin: 0,
                                            }}>
                                                {step.title}
                                            </h3>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                fontWeight: 700,
                                                color: 'var(--color-text-light)',
                                                padding: '4px 10px',
                                                background: 'var(--color-bg-alt)',
                                                borderRadius: 'var(--radius-full)',
                                            }}>
                                                Step {step.number}
                                            </span>
                                        </div>
                                        <p style={{
                                            color: 'var(--color-text-muted)',
                                            fontSize: '0.95rem',
                                            lineHeight: 1.6,
                                            margin: 0,
                                        }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style>{`
                    @media (max-width: 900px) {
                        .approach-grid { 
                            grid-template-columns: 1fr !important; 
                            gap: 48px !important;
                            text-align: center;
                        }
                        .approach-grid > div:first-child p {
                            margin-left: auto;
                            margin-right: auto;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Approach;
