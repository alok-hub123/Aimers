import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { COLORS } from '../constants/theme';

const Classes = () => {
    const [activeTab, setActiveTab] = useState('primary');

    const classCategories = {
        primary: {
            label: 'Primary',
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
            subtitle: '6th - 8th Std',
            classes: [
                { name: '6th Std', subjects: 'Maths, Science, English', fee: '₹2,500' },
                { name: '7th Std', subjects: 'Maths, Science, English', fee: '₹2,500' },
                { name: '8th Std', subjects: 'Maths, Science, English', fee: '₹2,800' },
            ],
        },
        secondary: {
            label: 'Secondary',
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
            padding: '120px 24px',
            backgroundColor: '#f0f2f5',
        }}>
            <div style={{
                maxWidth: '1000px',
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
                        Classes & Fee Structure
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#54656f',
                    }}>
                        Affordable fees with quality education
                    </p>
                </div>

                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '48px',
                    background: 'white',
                    padding: '8px',
                    borderRadius: '100px',
                    width: 'fit-content',
                    margin: '0 auto 48px',
                }}>
                    {Object.entries(classCategories).map(([key, category]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            style={{
                                padding: '12px 32px',
                                borderRadius: '100px',
                                border: 'none',
                                background: activeTab === key ? COLORS.primary : 'transparent',
                                color: activeTab === key ? 'white' : '#54656f',
                                fontWeight: 500,
                                fontSize: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Fee Table */}
                <div style={{
                    background: 'white',
                    borderRadius: '24px',
                    overflow: 'hidden',
                }}>
                    {/* Table Header */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1.5fr 120px',
                        padding: '20px 32px',
                        background: '#f8f9fa',
                        borderBottom: '1px solid #e9edef',
                    }}>
                        <span style={{ fontWeight: 600, color: '#54656f', fontSize: '0.9rem' }}>CLASS</span>
                        <span style={{ fontWeight: 600, color: '#54656f', fontSize: '0.9rem' }}>SUBJECTS</span>
                        <span style={{ fontWeight: 600, color: '#54656f', fontSize: '0.9rem', textAlign: 'right' }}>FEE/MONTH</span>
                    </div>

                    {/* Table Body */}
                    {classCategories[activeTab].classes.map((classItem, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1.5fr 120px',
                                padding: '24px 32px',
                                borderBottom: index < classCategories[activeTab].classes.length - 1 ? '1px solid #e9edef' : 'none',
                                alignItems: 'center',
                            }}
                        >
                            <span style={{ fontWeight: 600, color: '#1b1b1b', fontSize: '1.05rem' }}>
                                {classItem.name}
                            </span>
                            <span style={{ color: '#54656f' }}>
                                {classItem.subjects}
                            </span>
                            <span style={{ fontWeight: 700, color: COLORS.primary, fontSize: '1.1rem', textAlign: 'right' }}>
                                {classItem.fee}
                            </span>
                        </div>
                    ))}

                    {/* Footer - What's Included */}
                    <div style={{
                        padding: '24px 32px',
                        background: '#f8f9fa',
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
                                gap: '8px',
                            }}>
                                <Check size={16} color={COLORS.primary} />
                                <span style={{ color: '#54656f', fontSize: '0.9rem' }}>{item}</span>
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
                            padding: '16px 32px',
                            background: '#1b1b1b',
                            color: 'white',
                            borderRadius: '100px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'transform 0.2s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Enroll Now <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Classes;
