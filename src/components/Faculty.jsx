import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';
import { COLORS, SHADOWS } from '../constants/theme';

const Faculty = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const teachers = [
        {
            name: 'Dr. Suresh Kumar',
            subject: 'Mathematics',
            experience: '15+ Years',
            qualification: 'M.Sc., B.Ed.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Mrs. Priya Desai',
            subject: 'Science',
            experience: '12+ Years',
            qualification: 'M.Sc., B.Ed.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Mr. Rajesh Sharma',
            subject: 'English',
            experience: '10+ Years',
            qualification: 'M.A., B.Ed.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Mrs. Anjali Patel',
            subject: 'Primary Classes',
            experience: '8+ Years',
            qualification: 'B.A., D.Ed.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Mr. Vikram Singh',
            subject: 'Hindi',
            experience: '10+ Years',
            qualification: 'M.A., B.Ed.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
        },
    ];

    // Responsive visible cards - we use 1 for mobile, 2 for tablet, 3 for desktop
    // Using window check with fallback for SSR
    const getVisibleCards = () => {
        if (typeof window === 'undefined') return 3;
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 900) return 2;
        return 3;
    };

    const [visibleCards, setVisibleCards] = React.useState(getVisibleCards());

    React.useEffect(() => {
        const handleResize = () => {
            setVisibleCards(getVisibleCards());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, teachers.length - visibleCards);

    // Reset currentIndex if it exceeds maxIndex after resize
    React.useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    const handleNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    return (
        <section id="faculty" style={{
            padding: '140px 24px',
            backgroundColor: COLORS.white,
            overflow: 'hidden',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Content Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '450px 1fr',
                    gap: '60px',
                    alignItems: 'start',
                }}>
                    {/* Left - Title & Controls */}
                    <div style={{ position: 'sticky', top: '0px', zIndex: 10 }}>
                        <h2 style={{
                            fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                            fontWeight: 600,
                            color: COLORS.dark,
                            lineHeight: 1.1,
                            marginBottom: '24px',
                            letterSpacing: '-0.03em',
                        }}>
                            Meet our{' '}
                            <span style={{ color: COLORS.primary }}>expert</span> teachers
                        </h2>
                        <p style={{
                            fontSize: '1.15rem',
                            color: COLORS.darkSecondary,
                            lineHeight: 1.7,
                            marginBottom: '40px',
                        }}>
                            Dedicated educators committed to nurturing every student's potential.
                        </p>

                        {/* Slider Controls */}
                        <div style={{
                            display: 'flex',
                            gap: '12px',
                        }}>
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    border: `2px solid ${COLORS.dark}`,
                                    background: currentIndex === 0 ? COLORS.light : COLORS.white,
                                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    opacity: currentIndex === 0 ? 0.5 : 1,
                                }}
                            >
                                <ChevronLeft size={24} color={COLORS.dark} />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex === maxIndex}
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    border: `2px solid ${COLORS.dark}`,
                                    background: currentIndex === maxIndex ? COLORS.light : COLORS.primaryLight,
                                    cursor: currentIndex === maxIndex ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    opacity: currentIndex === maxIndex ? 0.5 : 1,
                                    boxShadow: currentIndex === maxIndex ? 'none' : SHADOWS.brutalist,
                                }}
                            >
                                <ChevronRight size={24} color={COLORS.dark} />
                            </button>
                        </div>

                        {/* Progress Indicator */}
                        <div style={{
                            marginTop: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <span style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: COLORS.primary,
                            }}>
                                0{currentIndex + 1}
                            </span>
                            <div style={{
                                flex: 1,
                                height: '4px',
                                background: COLORS.light,
                                borderRadius: '2px',
                                overflow: 'hidden',
                            }}>
                                <div style={{
                                    width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
                                    height: '100%',
                                    background: COLORS.primary,
                                    transition: 'width 0.3s ease',
                                    borderRadius: '2px',
                                }} />
                            </div>
                            <span style={{
                                fontSize: '1rem',
                                color: COLORS.darkSecondary,
                            }}>
                                0{maxIndex + 1}
                            </span>
                        </div>
                    </div>

                    {/* Right - Slider */}
                    <div style={{
                        overflow: 'hidden',
                        paddingBottom: '12px',
                        paddingRight: '24px',
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '24px',
                            transform: `translateX(-${currentIndex * (300 + 24)}px)`,
                            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}>
                            {teachers.map((teacher, index) => (
                                <div
                                    key={index}
                                    style={{
                                        minWidth: '300px',
                                        background: COLORS.white,
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        border: `2px solid ${COLORS.dark}`,
                                        boxShadow: SHADOWS.brutalist,
                                        transition: 'opacity 0.3s ease',
                                        opacity: index < currentIndex ? 0.3 : 1,
                                    }}
                                >
                                    {/* Image */}
                                    <div style={{
                                        height: '280px',
                                        overflow: 'hidden',
                                        background: COLORS.light,
                                    }}>
                                        <img
                                            src={teacher.image}
                                            alt={teacher.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </div>

                                    {/* Info */}
                                    <div style={{ padding: '24px' }}>
                                        <h3 style={{
                                            fontSize: '1.25rem',
                                            fontWeight: 600,
                                            color: COLORS.dark,
                                            marginBottom: '4px',
                                        }}>
                                            {teacher.name}
                                        </h3>
                                        <p style={{
                                            color: COLORS.primary,
                                            fontWeight: 600,
                                            fontSize: '1rem',
                                            marginBottom: '4px',
                                        }}>
                                            {teacher.subject}
                                        </p>
                                        <span style={{
                                            fontSize: '0.9rem',
                                            color: COLORS.darkSecondary,
                                        }}>
                                            {teacher.experience} • {teacher.qualification}
                                        </span>
                                    </div>

                                    {/* Separator */}
                                    <div style={{
                                        height: '2px',
                                        background: COLORS.dark,
                                        margin: '0 24px',
                                    }} />

                                    {/* CTAs */}
                                    <div style={{
                                        padding: '20px 24px',
                                        display: 'flex',
                                        gap: '12px',
                                    }}>
                                        <button style={{
                                            flex: 1,
                                            padding: '12px',
                                            borderRadius: '100px',
                                            border: `2px solid ${COLORS.dark}`,
                                            background: COLORS.primaryLight,
                                            color: COLORS.dark,
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            transition: 'all 0.3s ease',
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = COLORS.dark;
                                                e.currentTarget.style.color = COLORS.white;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = COLORS.primaryLight;
                                                e.currentTarget.style.color = COLORS.dark;
                                            }}
                                        >
                                            <Phone size={16} /> Contact
                                        </button>
                                        <button style={{
                                            flex: 1,
                                            padding: '12px',
                                            borderRadius: '100px',
                                            border: `2px solid ${COLORS.dark}`,
                                            background: COLORS.white,
                                            color: COLORS.dark,
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            transition: 'all 0.3s ease',
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = COLORS.dark;
                                                e.currentTarget.style.color = COLORS.white;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = COLORS.white;
                                                e.currentTarget.style.color = COLORS.dark;
                                            }}
                                        >
                                            <Mail size={16} /> Email
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 1100px) {
                    #faculty > div > div {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                    #faculty > div > div > div:first-child {
                        position: static !important;
                        text-align: center;
                    }
                    #faculty > div > div > div:first-child > div:nth-child(3) {
                        justify-content: center;
                    }
                    #faculty > div > div > div:first-child > div:nth-child(4) {
                        max-width: 300px;
                        margin: 24px auto 0;
                    }
                }
                @media (max-width: 900px) {
                    #faculty > div > div > div:last-child {
                        padding-right: 12px !important;
                    }
                }
                @media (max-width: 600px) {
                    #faculty {
                        padding: 80px 16px !important;
                    }
                    #faculty > div > div > div:last-child > div > div {
                        min-width: 280px !important;
                    }
                    #faculty > div > div > div:last-child {
                        padding-right: 8px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Faculty;
