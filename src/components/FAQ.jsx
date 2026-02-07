import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COLORS } from '../constants/theme';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'What classes do you offer?',
            answer: 'We offer tuition for students from Junior KG to 10th Standard. Our curriculum covers Mathematics, Science, English, and other subjects as per the board syllabus.',
        },
        {
            question: 'What are your batch timings?',
            answer: 'We have multiple batches: Morning (7 AM - 9 AM), Afternoon (2 PM - 4 PM), and Evening (5 PM - 7 PM). Weekend batches are also available.',
        },
        {
            question: 'How do you ensure individual attention?',
            answer: 'We maintain small batch sizes of maximum 15 students. This allows our teachers to focus on each student\'s progress and provide personalized guidance.',
        },
        {
            question: 'What is your fee structure?',
            answer: 'Fees range from ₹1,500/month for primary classes to ₹4,000/month for 10th Board preparation. All study materials and tests are included.',
        },
        {
            question: 'Do you provide study materials?',
            answer: 'Yes, we provide comprehensive study materials including notes, worksheets, practice papers, and previous year question papers at no extra cost.',
        },
        {
            question: 'Is there a trial class available?',
            answer: 'Yes! We offer a free demo class so students can experience our teaching methodology before enrollment. Contact us to schedule your demo.',
        },
    ];

    return (
        <section id="faq" style={{
            padding: '120px 24px',
            backgroundColor: '#f0f2f5',
        }}>
            <div style={{
                maxWidth: '800px',
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
                        Frequently asked questions
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#54656f',
                    }}>
                        Find answers to common questions
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'white',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                style={{
                                    width: '100%',
                                    padding: '24px 28px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '16px',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                }}
                            >
                                <span style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 500,
                                    color: '#1b1b1b',
                                }}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={22}
                                    color="#54656f"
                                    style={{
                                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                                        transition: 'transform 0.3s ease',
                                        flexShrink: 0,
                                    }}
                                />
                            </button>
                            <div style={{
                                maxHeight: openIndex === index ? '200px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.3s ease',
                            }}>
                                <p style={{
                                    padding: '0 28px 24px',
                                    color: '#54656f',
                                    lineHeight: 1.7,
                                    fontSize: '1.05rem',
                                }}>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '48px',
                }}>
                    <p style={{ color: '#54656f', marginBottom: '16px' }}>
                        Still have questions?
                    </p>
                    <a
                        href="#contact"
                        style={{
                            color: COLORS.primary,
                            fontWeight: 600,
                            textDecoration: 'none',
                            fontSize: '1.1rem',
                        }}
                    >
                        Contact us →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
