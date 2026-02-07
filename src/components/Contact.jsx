import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { COLORS } from '../constants/theme';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        class: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: '', phone: '', email: '', class: '', message: '' });
    };

    const contactInfo = [
        { icon: MapPin, label: 'Address', value: '123 Education Street, Mumbai 400001' },
        { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
        { icon: Mail, label: 'Email', value: 'info@aimersacademy.com' },
        { icon: Clock, label: 'Timings', value: 'Mon - Sat: 7 AM - 8 PM' },
    ];

    return (
        <section id="contact" style={{
            padding: '120px 24px',
            backgroundColor: '#f0f2f5',
        }}>
            <div style={{
                maxWidth: '1100px',
                margin: '0 auto',
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 400,
                        color: '#1b1b1b',
                        lineHeight: 1.15,
                        marginBottom: '20px',
                        letterSpacing: '-0.02em',
                    }}>
                        Get in touch
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#54656f',
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
                        background: 'white',
                        padding: '40px',
                        borderRadius: '24px',
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
                                <CheckCircle size={64} color={COLORS.primary} style={{ marginBottom: '20px' }} />
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1b1b1b', marginBottom: '8px' }}>
                                    Message Sent!
                                </h4>
                                <p style={{ color: '#54656f' }}>
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
                                    style={{
                                        padding: '16px 20px',
                                        borderRadius: '12px',
                                        border: '1px solid #e9edef',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s ease',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = COLORS.primary}
                                    onBlur={(e) => e.target.style.borderColor = '#e9edef'}
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number *"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    style={{
                                        padding: '16px 20px',
                                        borderRadius: '12px',
                                        border: '1px solid #e9edef',
                                        fontSize: '1rem',
                                        outline: 'none',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = COLORS.primary}
                                    onBlur={(e) => e.target.style.borderColor = '#e9edef'}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{
                                        padding: '16px 20px',
                                        borderRadius: '12px',
                                        border: '1px solid #e9edef',
                                        fontSize: '1rem',
                                        outline: 'none',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = COLORS.primary}
                                    onBlur={(e) => e.target.style.borderColor = '#e9edef'}
                                />
                                <select
                                    value={formData.class}
                                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                                    style={{
                                        padding: '16px 20px',
                                        borderRadius: '12px',
                                        border: '1px solid #e9edef',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        background: 'white',
                                        color: formData.class ? '#1b1b1b' : '#94a3b8',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = COLORS.primary}
                                    onBlur={(e) => e.target.style.borderColor = '#e9edef'}
                                >
                                    <option value="">Select Class</option>
                                    <option value="Jr. KG - Sr. KG">Jr. KG - Sr. KG</option>
                                    <option value="1st - 5th">1st - 5th Std</option>
                                    <option value="6th - 8th">6th - 8th Std</option>
                                    <option value="9th - 10th">9th - 10th Std</option>
                                </select>
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{
                                        padding: '16px 20px',
                                        borderRadius: '12px',
                                        border: '1px solid #e9edef',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        resize: 'vertical',
                                        fontFamily: 'inherit',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = COLORS.primary}
                                    onBlur={(e) => e.target.style.borderColor = '#e9edef'}
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
                                        border: 'none',
                                        background: COLORS.primary,
                                        color: 'white',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s ease, background 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = COLORS.primaryHover;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = COLORS.primary;
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
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {contactInfo.map((info, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    padding: '24px',
                                    background: 'white',
                                    borderRadius: '16px',
                                }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: COLORS.primaryLight,
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
                                            color: '#54656f',
                                            display: 'block',
                                            marginBottom: '4px',
                                        }}>
                                            {info.label}
                                        </span>
                                        <span style={{
                                            fontWeight: 500,
                                            color: '#1b1b1b',
                                            fontSize: '1rem',
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
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Location"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    #contact > div > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
