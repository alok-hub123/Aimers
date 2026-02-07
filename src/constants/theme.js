/**
 * Aimers Academy Theme Constants
 * Colors derived from the logo (red target with arrow)
 */

export const COLORS = {
    // Primary brand colors (from logo)
    primary: '#E31B23',        // Vibrant red from logo
    primaryHover: '#C4161E',   // Darker red for hover states
    primaryLight: '#FDEAEA',   // Light red background

    // Neutral colors
    dark: '#1b1b1b',           // Primary text
    darkSecondary: '#54656f',  // Secondary text
    light: '#f0f2f5',          // Light background
    white: '#ffffff',
    warmBg: '#FFF8F5',         // Warm cream background

    // Border & misc
    border: '#e9edef',
    borderLight: '#f0f0f0',
};

export const SHADOWS = {
    card: '0 4px 24px rgba(0, 0, 0, 0.08)',
    cardHover: '0 8px 32px rgba(0, 0, 0, 0.12)',
    soft: '0 2px 12px rgba(0, 0, 0, 0.06)',
    brutalist: '6px 6px 0px #1b1b1b',
};

export const TYPOGRAPHY = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

export const SPACING = {
    sectionPadding: '120px 24px',
    maxWidth: '1100px',
    borderRadius: {
        small: '12px',
        medium: '16px',
        large: '24px',
        pill: '100px',
    },
};

// Default export for convenience
const theme = { COLORS, TYPOGRAPHY, SPACING };
export default theme;
