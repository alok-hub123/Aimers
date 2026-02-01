import React from 'react';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{
            paddingTop: '140px',
            paddingBottom: '100px',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            // background: 'linear-gradient(180deg, #fafbfc 0%, #f1f5f9 100%)',
            background: 'url("../public/background.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            {/* Animated Background Mesh */}
            <div style={{
                position: 'absolute',
                inset: 0,
                // background: `
                //     radial-gradient(at 20% 30%, rgba(230, 57, 70, 0.08) 0px, transparent 50%),
                //     radial-gradient(at 80% 20%, rgba(30, 27, 75, 0.06) 0px, transparent 50%),
                //     radial-gradient(at 60% 80%, rgba(67, 56, 202, 0.05) 0px, transparent 50%),
                //     radial-gradient(at 10% 90%, rgba(230, 57, 70, 0.04) 0px, transparent 40%)
                // `,
                // zIndex: 0,
            }} />

            {/* Floating Decorative Blobs */}
            <div className="animate-blob" style={{
                position: 'absolute',
                top: '10%',
                right: '15%',
                width: '400px',
                height: '400px',
                background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.1) 0%, rgba(255, 107, 122, 0.05) 100%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                zIndex: 0,
                animationDelay: '0s',
            }} />
            <div className="animate-blob" style={{
                position: 'absolute',
                bottom: '20%',
                left: '5%',
                width: '350px',
                height: '350px',
                background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.08) 0%, rgba(67, 56, 202, 0.04) 100%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                zIndex: 0,
                animationDelay: '-5s',
            }} />
            <div className="animate-blob" style={{
                position: 'absolute',
                top: '60%',
                right: '5%',
                width: '250px',
                height: '250px',
                background: 'linear-gradient(135deg, rgba(67, 56, 202, 0.06) 0%, rgba(30, 27, 75, 0.03) 100%)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                zIndex: 0,
                animationDelay: '-10s',
            }} />

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
            }}>
                {/* Content */}
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        borderRadius: '100px',
                        background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.1) 0%, rgba(255, 107, 122, 0.05) 100%)',
                        border: '1px solid rgba(230, 57, 70, 0.2)',
                        marginBottom: '28px',
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: 'var(--color-accent)',
                            animation: 'pulse-glow 2s ease-in-out infinite',
                        }} />
                        <span style={{
                            color: 'var(--color-accent)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            letterSpacing: '0.02em',
                        }}>
                            Admissions Open 2026-27
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        fontSize: 'clamp(2.75rem, 5vw, 4.25rem)',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        lineHeight: 1.08,
                        marginBottom: '28px',
                        letterSpacing: '-0.03em',
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

                    {/* Subheadline */}
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '40px',
                        maxWidth: '520px',
                        lineHeight: 1.7,
                    }}>
                        Personalized tuition from Junior KG to 10th Std. We focus on conceptual clarity, individual attention, and expert mentorship to unlock every child's potential.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <button style={{
                            background: 'linear-gradient(135deg, var(--color-primary) 0%, #312e81 50%, #4338ca 100%)',
                            backgroundSize: '200% 200%',
                            color: 'white',
                            padding: '18px 36px',
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
                            padding: '18px 32px',
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

                    {/* Stats */}
                    <div style={{
                        marginTop: '56px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '40px',
                        padding: '24px 32px',
                        background: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255, 255, 255, 0.8)',
                        boxShadow: '0 8px 32px rgba(30, 27, 75, 0.06)',
                        width: 'fit-content',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: 'var(--radius-md)',
                                background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.1) 0%, rgba(67, 56, 202, 0.1) 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Users size={20} color="var(--color-primary)" />
                            </div>
                            <div>
                                <span style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: 'var(--color-primary)',
                                    fontFamily: 'Poppins, sans-serif',
                                }}>500+</span>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', fontWeight: 500 }}>Students</div>
                            </div>
                        </div>

                        <div style={{
                            width: '1px',
                            height: '40px',
                            background: 'linear-gradient(to bottom, transparent, rgba(30, 27, 75, 0.15), transparent)'
                        }} />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: 'var(--radius-md)',
                                background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.1) 0%, rgba(255, 107, 122, 0.1) 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Award size={20} color="var(--color-accent)" />
                            </div>
                            <div>
                                <span style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: 'var(--color-primary)',
                                    fontFamily: 'Poppins, sans-serif',
                                }}>100%</span>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', fontWeight: 500 }}>Concept Clarity</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual */}
                <div className="animate-fade-in hero-visual" style={{ animationDelay: '0.3s', position: 'relative' }}>
                    {/* Main Image Card */}
                    <div className="animate-float-slow" style={{
                        background: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 'var(--radius-2xl)',
                        padding: '16px',
                        boxShadow: '0 24px 64px rgba(30, 27, 75, 0.12), 0 8px 24px rgba(30, 27, 75, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.8)',
                    }}>
                        <div style={{
                            width: '100%',
                            height: '480px',
                            borderRadius: 'var(--radius-xl)',
                            overflow: 'hidden',
                            position: 'relative',
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
                                alt="Student Learning"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            {/* Gradient Overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(180deg, transparent 60%, rgba(30, 27, 75, 0.3) 100%)',
                            }} />
                        </div>
                    </div>

                    {/* Floating Badge - Top Right */}
                    <div className="animate-float" style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        background: 'white',
                        padding: '16px 20px',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: '0 12px 36px rgba(30, 27, 75, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        animationDelay: '-1s',
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Star size={18} fill="white" color="white" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>Top Rated</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>by Parents</div>
                        </div>
                    </div>

                    {/* Floating Badge - Bottom Left */}
                    <div className="animate-float" style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '-30px',
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, #4338ca 100%)',
                        padding: '18px 24px',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: '0 12px 36px rgba(30, 27, 75, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        color: 'white',
                        animationDelay: '-3s',
                    }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: '#22c55e',
                            boxShadow: '0 0 12px rgba(34, 197, 94, 0.5)',
                        }} />
                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Exceptional Results</span>
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
