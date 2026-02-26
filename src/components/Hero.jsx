import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState('next');

    const slides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1920',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1920',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920',
        },
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setDirection('next');
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const goToSlide = useCallback((index) => {
        setDirection(index > currentSlide ? 'next' : 'prev');
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    }, [currentSlide]);

    const nextSlide = useCallback(() => {
        setDirection('next');
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setDirection('prev');
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    }, [slides.length]);

    return (
        <section id="hero" style={{
            padding: '80px 20px 24px',
            backgroundColor: 'white',
        }}>
           

            {/* Carousel Container */}
            <div style={{
                position: 'relative',
                width: '100%',
                height: 'calc(100vh - 100px)',
                minHeight: '500px',
                maxHeight: '800px',
                borderRadius: '24px',
                overflow: 'hidden',
            }}>

                
                {/* Slides Container - Horizontal Slider */}
                <div style={{
                    display: 'flex',
                    width: `${slides.length * 100}%`,
                    height: '100%',
                    transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
                    transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            style={{
                                width: `${100 / slides.length}%`,
                                height: '100%',
                                flexShrink: 0,
                            }}
                        >
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    style={{
                        position: 'absolute',
                        left: '24px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        border: 'none',
                        color: '#1e1b4b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                        zIndex: 10,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                    }}
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    style={{
                        position: 'absolute',
                        right: '24px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        border: 'none',
                        color: '#1e1b4b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                        zIndex: 10,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                    }}
                >
                    <ChevronRight size={24} />
                </button>

                {/* Slide Indicators */}
                <div style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '10px',
                    zIndex: 10,
                }}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            style={{
                                width: currentSlide === index ? '32px' : '10px',
                                height: '10px',
                                borderRadius: '100px',
                                background: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.4s ease',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                            }}
                            onMouseEnter={(e) => {
                                if (currentSlide !== index) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (currentSlide !== index) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                                }
                            }}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    #hero {
                        padding: 70px 16px 24px !important;
                    }
                    #hero > div {
                        height: 60vh !important;
                        min-height: 350px !important;
                        border-radius: 16px !important;
                    }
                    #hero button[aria-label="Previous slide"],
                    #hero button[aria-label="Next slide"] {
                        width: 40px !important;
                        height: 40px !important;
                    }
                    #hero button[aria-label="Previous slide"] { left: 12px !important; }
                    #hero button[aria-label="Next slide"] { right: 12px !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
