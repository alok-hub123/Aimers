import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { COLORS, SHADOWS } from '../constants/theme';

const Classes = () => {
    const [activeTab, setActiveTab] = useState('primary');

    const classCategories = {
        primary: {
            label: 'Primary',
            emoji: '📒',
            subtitle: 'Jr. KG - 5th Std',
            classes: [
                { name: 'Jr. KG', subjects: 'All Subjects', fee: '₹1,500' },
                { name: 'Sr. KG', subjects: 'All Subjects', fee: '₹1,500' },
                { name: '1st - 2nd', subjects: 'All Subjects', fee: '₹1,800' },
                { name: '3rd - 4th', subjects: 'All Subjects', fee: '₹2,000' },
                { name: '5th Std', subjects: 'All Subjects', fee: '₹2,200' },
            ],
        },
        middle: {
            label: 'Middle',
            emoji: '📗',
            subtitle: '6th - 8th Std',
            classes: [
                { name: '6th Std', subjects: 'Maths, Science, English', fee: '₹2,500' },
                { name: '7th Std', subjects: 'Maths, Science, English', fee: '₹2,500' },
                { name: '8th Std', subjects: 'Maths, Science, English', fee: '₹2,800' },
            ],
        },
        secondary: {
            label: 'Secondary',
            emoji: '📘',
            subtitle: '9th - 10th Std',
            classes: [
                { name: '9th Std', subjects: 'Maths, Science', fee: '₹3,500' },
                { name: '10th Board', subjects: 'Maths, Science', fee: '₹4,000' },
            ],
        },
    };

    const includes = [
        'All study materials',
        'Weekly tests',
        'Doubt sessions',
        'Progress reports',
    ];

    return (
        <section id="classes" style={{
            padding: '140px 24px',
            backgroundColor: COLORS.warmBg,
        }}>
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.8rem, 5vw, 4rem)',
                        fontWeight: 600,
                        color: COLORS.dark,
                        lineHeight: 1.1,
                        marginBottom: '20px',
                        letterSpacing: '-0.03em',
                    }}>
                        Classes & Fee{' '}
                        <span style={{ color: COLORS.primary }}>Structure</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: COLORS.darkSecondary,
                        lineHeight: 1.7,
                    }}>
                        Affordable fees with quality education
                    </p>
                </div>

                {/* Tabs - Neo-brutalist */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px',
                    marginBottom: '64px',
                    flexWrap: 'wrap',
                }}>
                    {Object.entries(classCategories).map(([key, category]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            style={{
                                padding: '16px 32px',
                                borderRadius: '100px',
                                border: `2px solid ${COLORS.dark}`,
                                background: activeTab === key ? COLORS.primaryLight : COLORS.white,
                                color: COLORS.dark,
                                fontWeight: 600,
                                fontSize: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: activeTab === key ? SHADOWS.brutalist : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <span>{category.emoji}</span>
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Fee Table - Neo-brutalist */}
                <div style={{
                    background: COLORS.white,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: `2px solid ${COLORS.dark}`,
                    boxShadow: SHADOWS.brutalist,
                }}>
                    {/* Table Header */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1.5fr 120px',
                        padding: '20px 32px',
                        background: COLORS.primaryLight,
                        borderBottom: `2px solid ${COLORS.dark}`,
                    }}>
                        <span style={{ fontWeight: 700, color: COLORS.dark, fontSize: '0.9rem', letterSpacing: '0.05em' }}>CLASS</span>
                        <span style={{ fontWeight: 700, color: COLORS.dark, fontSize: '0.9rem', letterSpacing: '0.05em' }}>SUBJECTS</span>
                        <span style={{ fontWeight: 700, color: COLORS.dark, fontSize: '0.9rem', textAlign: 'right', letterSpacing: '0.05em' }}>FEE/MONTH</span>
                    </div>

                    {/* Table Body */}
                    {classCategories[activeTab].classes.map((classItem, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1.5fr 120px',
                                padding: '24px 32px',
                                borderBottom: index < classCategories[activeTab].classes.length - 1 ? `1px solid ${COLORS.border}` : 'none',
                                alignItems: 'center',
                                transition: 'background 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = COLORS.warmBg;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = COLORS.white;
                            }}
                        >
                            <span style={{ fontWeight: 600, color: COLORS.dark, fontSize: '1.1rem' }}>
                                {classItem.name}
                            </span>
                            <span style={{ color: COLORS.darkSecondary, fontSize: '1rem' }}>
                                {classItem.subjects}
                            </span>
                            <span style={{
                                fontWeight: 700,
                                color: COLORS.primary,
                                fontSize: '1.2rem',
                                textAlign: 'right',
                                fontFamily: 'system-ui, sans-serif',
                            }}>
                                {classItem.fee}
                            </span>
                        </div>
                    ))}

                    {/* Footer - What's Included */}
                    <div style={{
                        padding: '24px 32px',
                        background: COLORS.light,
                        borderTop: `2px solid ${COLORS.dark}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '32px',
                        flexWrap: 'wrap',
                    }}>
                        {includes.map((item, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: COLORS.primaryLight,
                                    border: `2px solid ${COLORS.dark}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Check size={14} color={COLORS.primary} strokeWidth={3} />
                                </div>
                                <span style={{ color: COLORS.dark, fontSize: '0.95rem', fontWeight: 500 }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: '48px' }}>
                    <a
                        href="#contact"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '16px 36px',
                            background: COLORS.primaryLight,
                            color: COLORS.dark,
                            borderRadius: '100px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            textDecoration: 'none',
                            border: `2px solid ${COLORS.dark}`,
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
                        Enroll Now <ArrowRight size={18} />
                    </a>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    #classes {
                        padding: 80px 16px !important;
                    }
                }
                @media (max-width: 700px) {
                    #classes {
                        padding: 60px 16px !important;
                    }
                    /* Tab buttons - stack vertically */
                    #classes > div > div:nth-child(2) {
                        flex-direction: column !important;
                        gap: 12px !important;
                        align-items: stretch !important;
                    }
                    #classes > div > div:nth-child(2) button {
                        width: 100% !important;
                        justify-content: center !important;
                        padding: 14px 24px !important;
                    }
                    /* Table header and rows */
                    #classes > div > div:nth-child(3) > div {
                        grid-template-columns: 1fr !important;
                        gap: 8px !important;
                        text-align: left !important;
                        padding: 16px 20px !important;
                    }
                    #classes > div > div:nth-child(3) > div span:last-child {
                        text-align: left !important;
                        font-size: 1.1rem !important;
                    }
                    /* Footer includes - stack vertically */
                    #classes > div > div:nth-child(3) > div:last-child {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 12px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Classes;
