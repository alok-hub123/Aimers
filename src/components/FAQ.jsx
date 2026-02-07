import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { COLORS, SHADOWS } from '../constants/theme';

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
            padding: '140px 24px',
            backgroundColor: COLORS.white,
        }}>
            <div style={{
                maxWidth: '800px',
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
                        Got{' '}
                        <span style={{ color: COLORS.primary }}>questions</span>?
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: COLORS.darkSecondary,
                        maxWidth: '500px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                    }}>
                        Find answers to common questions about our academy
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                background: openIndex === index ? COLORS.primaryLight : COLORS.white,
                                borderRadius: '16px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                border: `2px solid ${COLORS.dark}`,
                                boxShadow: openIndex === index ? SHADOWS.brutalist : 'none',
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
                                    fontSize: '1.15rem',
                                    fontWeight: 600,
                                    color: COLORS.dark,
                                }}>
                                    {faq.question}
                                </span>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: openIndex === index ? COLORS.primary : COLORS.light,
                                    border: `2px solid ${COLORS.dark}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'all 0.3s ease',
                                }}>
                                    {openIndex === index ? (
                                        <Minus
                                            size={18}
                                            color={COLORS.white}
                                            strokeWidth={3}
                                        />
                                    ) : (
                                        <Plus
                                            size={18}
                                            color={COLORS.dark}
                                            strokeWidth={3}
                                        />
                                    )}
                                </div>
                            </button>
                            <div style={{
                                maxHeight: openIndex === index ? '200px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.3s ease',
                            }}>
                                <p style={{
                                    padding: '0 28px 24px',
                                    color: COLORS.darkSecondary,
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
                    marginTop: '60px',
                }}>
                    <p style={{
                        color: COLORS.dark,
                        marginBottom: '20px',
                        fontSize: '1.15rem',
                        fontWeight: 500,
                    }}>
                        Still have questions?
                    </p>
                    <a
                        href="#contact"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '14px 32px',
                            background: COLORS.primaryLight,
                            color: COLORS.dark,
                            borderRadius: '100px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            textDecoration: 'none',
                            border: `2px solid ${COLORS.dark}`,
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Contact us →
                    </a>
                </div>
            </div>

            <style>{`
                @media (max-width: 600px) {
                    #faq {
                        padding: 80px 16px !important;
                    }
                    #faq > div > div:nth-child(2) > div button {
                        padding: 20px !important;
                    }
                    #faq > div > div:nth-child(2) > div button span {
                        font-size: 1rem !important;
                    }
                    #faq > div > div:nth-child(3) {
                        padding: 32px 24px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default FAQ;
