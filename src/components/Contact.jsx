import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { COLORS, SHADOWS } from '../constants/theme';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        class: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const classOptions = [
        { value: 'Jr. KG - Sr. KG', label: 'Jr. KG - Sr. KG', emoji: '🎒' },
        { value: '1st - 5th', label: '1st - 5th Std', emoji: '📚' },
        { value: '6th - 8th', label: '6th - 8th Std', emoji: '📖' },
        { value: '9th - 10th', label: '9th - 10th Std', emoji: '🎓' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: '', phone: '', email: '', class: '', message: '' });
    };

    const contactInfo = [
        { icon: MapPin, label: 'Address1', value: 'Marwadi Compound, Gaon Devi Mandir, Dhaniv Baug, Nalasopara East, Maharashtra 401209' },
        { icon: MapPin, label: 'Address2', value: 'Near Virar Phata Highway, Virar East, Maharashtra 401209' },
        { icon: Phone, label: 'Phone', value: 'Adarsh Sir: 8433517305 | Rohan Sir: 7666398748' },
        { icon: Mail, label: 'Email', value: 'aimersacademy.education@gmail.com' },
        { icon: Clock, label: 'Timings', value: 'Mon - Sat: 2 PM - 8 PM' },
    ];

    const inputStyle = {
        padding: '16px 20px',
        borderRadius: '12px',
        border: `2px solid ${COLORS.dark}`,
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.2s ease',
        background: COLORS.white,
    };

    return (
        <section id="contact" style={{
            padding: '140px 24px',
            backgroundColor: COLORS.white,
        }}>
            <div style={{
                maxWidth: '1100px',
                margin: '0 auto',
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                        fontWeight: 600,
                        color: COLORS.dark,
                        lineHeight: 1.1,
                        marginBottom: '20px',
                        letterSpacing: '-0.03em',
                    }}>
                        Get in{' '}
                        <span style={{ color: COLORS.primary }}>touch</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: COLORS.darkSecondary,
                        maxWidth: '500px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        Ready to enroll? We'd love to hear from you
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '48px',
                }}>
                    {/* Contact Form */}
                    <div style={{
                        background: COLORS.primaryLight,
                        padding: '40px',
                        borderRadius: '24px',
                        border: `2px solid ${COLORS.dark}`,
                        boxShadow: SHADOWS.brutalist,
                    }}>
                        {isSubmitted ? (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '60px 20px',
                                textAlign: 'center',
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: COLORS.white,
                                    border: `3px solid ${COLORS.dark}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px',
                                    boxShadow: '4px 4px 0px #1b1b1b',
                                }}>
                                    <CheckCircle size={40} color={COLORS.primary} />
                                </div>
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: COLORS.dark, marginBottom: '8px' }}>
                                    Message Sent!
                                </h4>
                                <p style={{ color: COLORS.darkSecondary, fontSize: '1.1rem' }}>
                                    We'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={inputStyle}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = COLORS.dark;
                                        e.target.style.boxShadow = '4px 4px 0px ' + COLORS.dark;
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = COLORS.dark;
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number *"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    style={inputStyle}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = COLORS.dark;
                                        e.target.style.boxShadow = '4px 4px 0px ' + COLORS.dark;
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = COLORS.dark;
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={inputStyle}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = COLORS.dark;
                                        e.target.style.boxShadow = '4px 4px 0px ' + COLORS.dark;
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = COLORS.dark;
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                                {/* Custom Styled Dropdown */}
                                <div style={{ position: 'relative' }}>
                                    {/* Dropdown Trigger */}
                                    <div
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        style={{
                                            ...inputStyle,
                                            width: '100%',
                                            boxSizing: 'border-box',
                                            color: formData.class ? COLORS.dark : '#94a3b8',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            boxShadow: isDropdownOpen ? '4px 4px 0px ' + COLORS.dark : 'none',
                                        }}
                                    >
                                        <span>
                                            {formData.class
                                                ? classOptions.find(opt => opt.value === formData.class)?.emoji + ' ' + classOptions.find(opt => opt.value === formData.class)?.label
                                                : 'Select Class *'
                                            }
                                        </span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke={COLORS.dark}
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{
                                                transition: 'transform 0.2s ease',
                                                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                            }}
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>

                                    {/* Dropdown Options Container */}
                                    {isDropdownOpen && (
                                        <>
                                            {/* Backdrop to close dropdown */}
                                            <div
                                                onClick={() => setIsDropdownOpen(false)}
                                                style={{
                                                    position: 'fixed',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    zIndex: 99,
                                                }}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                top: 'calc(100% + 8px)',
                                                left: 0,
                                                right: 0,
                                                background: COLORS.white,
                                                border: `2px solid ${COLORS.dark}`,
                                                borderRadius: '12px',
                                                boxShadow: '6px 6px 0px ' + COLORS.dark,
                                                overflow: 'hidden',
                                                zIndex: 100,
                                                animation: 'dropdownSlide 0.2s ease',
                                            }}>
                                                {classOptions.map((option, index) => (
                                                    <div
                                                        key={option.value}
                                                        onClick={() => {
                                                            setFormData({ ...formData, class: option.value });
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        style={{
                                                            padding: '14px 20px',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '12px',
                                                            background: formData.class === option.value ? COLORS.primaryLight : COLORS.white,
                                                            borderBottom: index < classOptions.length - 1 ? `1px solid ${COLORS.border || '#e5e7eb'}` : 'none',
                                                            transition: 'all 0.15s ease',
                                                            fontWeight: formData.class === option.value ? 600 : 400,
                                                            color: COLORS.dark,
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            if (formData.class !== option.value) {
                                                                e.currentTarget.style.background = COLORS.warmBg || '#f9fafb';
                                                            }
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            if (formData.class !== option.value) {
                                                                e.currentTarget.style.background = COLORS.white;
                                                            }
                                                        }}
                                                    >
                                                        <span style={{ fontSize: '1.2rem' }}>{option.emoji}</span>
                                                        <span style={{ fontSize: '1rem' }}>{option.label}</span>
                                                        {formData.class === option.value && (
                                                            <svg
                                                                width="18"
                                                                height="18"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke={COLORS.primary}
                                                                strokeWidth="3"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                style={{ marginLeft: 'auto' }}
                                                            >
                                                                <polyline points="20 6 9 17 4 12" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{
                                        ...inputStyle,
                                        resize: 'vertical',
                                        fontFamily: 'inherit',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = COLORS.dark;
                                        e.target.style.boxShadow = '4px 4px 0px ' + COLORS.dark;
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = COLORS.dark;
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        padding: '16px 32px',
                                        borderRadius: '100px',
                                        border: `2px solid ${COLORS.dark}`,
                                        background: COLORS.dark,
                                        color: COLORS.white,
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        marginTop: '8px',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = COLORS.white;
                                        e.currentTarget.style.color = COLORS.dark;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = COLORS.dark;
                                        e.currentTarget.style.color = COLORS.white;
                                    }}
                                >
                                    <Send size={18} />
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {contactInfo.map((info, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    padding: '24px',
                                    background: COLORS.white,
                                    borderRadius: '16px',
                                    border: `2px solid ${COLORS.dark}`,
                                    transition: 'all 0.3s ease',
                                    cursor: 'default',
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = SHADOWS.brutalist;
                                        e.currentTarget.style.transform = 'translate(-3px, -3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.transform = 'translate(0, 0)';
                                    }}
                                >
                                    <div style={{
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: '50%',
                                        background: COLORS.primaryLight,
                                        border: `2px solid ${COLORS.dark}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <info.icon size={22} color={COLORS.primary} />
                                    </div>
                                    <div>
                                        <span style={{
                                            fontSize: '0.85rem',
                                            color: COLORS.darkSecondary,
                                            display: 'block',
                                            marginBottom: '4px',
                                            fontWeight: 500,
                                        }}>
                                            {info.label}
                                        </span>
                                        <span style={{
                                            fontWeight: 600,
                                            color: COLORS.dark,
                                            fontSize: '1.05rem',
                                        }}>
                                            {info.value}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map */}
                        <div style={{
                            marginTop: '24px',
                            height: '180px',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: `2px solid ${COLORS.dark}`,
                            boxShadow: SHADOWS.brutalist,
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.3524965039646!2d72.85127427498699!3d19.44036328184069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9aff921778b%3A0xc25591a96b1c3417!2sAimer's%20academy!5e0!3m2!1sen!2sin!4v1770571625719!5m2!1sen!2sin"

                                // src="https://www.google.com/maps/place/%E0%A4%AE%E0%A4%BE%E0%A4%81+%E0%A4%A6%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%BE+%E0%A4%B2%E0%A5%87%E0%A4%A1%E0%A5%80%E0%A4%9C+%E0%A4%9F%E0%A5%87%E0%A4%B2%E0%A4%B0/@19.4709912,72.8850429,19z/data=!4m6!3m5!1s0x3be7a86e75b5958b:0x8ce4bbd604701e8!8m2!3d19.4709498!4d72.8852451!16s%2Fg%2F11rtv680dx?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Aimer's Academy Location"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes dropdownSlide {
                    from {
                        opacity: 0;
                        transform: translateY(-8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @media (max-width: 900px) {
                    #contact > div > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 600px) {
                    #contact {
                        padding: 80px 16px !important;
                    }
                    #contact > div > div:last-child > div:first-child {
                        padding: 32px 24px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
