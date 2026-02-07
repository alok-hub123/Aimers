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

    // Border & misc
    border: '#e9edef',
    borderLight: '#f0f0f0',
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
