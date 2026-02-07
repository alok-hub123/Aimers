import React from 'react';

const AboutUs = () => {
    return (
        <section id="about" style={{
            padding: '120px 24px',
            backgroundColor: 'white',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {/* Main Content - Alternating Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '80px',
                    alignItems: 'center',
                }}>
                    {/* Text Content */}
                    <div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: 400,
                            color: '#1b1b1b',
                            lineHeight: 1.15,
                            marginBottom: '24px',
                            letterSpacing: '-0.02em',
                        }}>
                            Nurturing young minds since 2014
                        </h2>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#54656f',
                            lineHeight: 1.7,
                            marginBottom: '24px',
                        }}>
                            At Aimers Academy, we believe every child has unique potential waiting to be unlocked.
                            Our personalized approach ensures each student receives the attention and guidance
                            they need to excel academically.
                        </p>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#54656f',
                            lineHeight: 1.7,
                        }}>
                            With over a decade of experience, we have helped hundreds of students achieve
                            their academic goals and build confidence in their abilities.
                        </p>
                    </div>

                    {/* Image */}
                    <div style={{
                        borderRadius: '32px',
                        overflow: 'hidden',
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
                            alt="Students learning together"
                            style={{
                                width: '100%',
                                height: '480px',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>

                {/* Mission & Vision - Simple Text */}
                <div style={{
                    marginTop: '120px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '60px',
                }}>
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: '#1b1b1b',
                            marginBottom: '16px',
                        }}>
                            Our Mission
                        </h3>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#54656f',
                            lineHeight: 1.7,
                        }}>
                            To provide quality education that empowers students with knowledge,
                            critical thinking skills, and the confidence to achieve their dreams.
                        </p>
                    </div>
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            color: '#1b1b1b',
                            marginBottom: '16px',
                        }}>
                            Our Vision
                        </h3>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#54656f',
                            lineHeight: 1.7,
                        }}>
                            To be the leading tuition academy that transforms every student into
                            a confident learner ready to excel in academics and life.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #about > div > div:first-child {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutUs;
