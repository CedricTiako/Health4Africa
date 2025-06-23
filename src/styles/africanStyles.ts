import { CSSProperties } from 'react';

type ColorVariant = 'primary' | 'secondary' | 'accent' | 'dark' | 'light' | 'red' | 'brown' | 'yellow';

export const colors: Record<ColorVariant, string> = {
  primary: '#1B1464',
  secondary: '#F4A300',
  accent: '#2E8B57',
  dark: '#0A0A2A',
  light: '#F8F5F0',
  red: '#B22222',
  brown: '#8B4513',
  yellow: '#FFD700',
};

export const gradients = {
  primary: 'linear-gradient(135deg, #1B1464 0%, #4A3A8C 100%)',
  secondary: 'linear-gradient(135deg, #F4A300 0%, #FFD700 100%)',
  accent: 'linear-gradient(135deg, #2E8B57 0%, #3CB371 100%)',
  health: 'linear-gradient(135deg, #1B1464 0%, #2E8B57 100%)',
};

export const shadows = {
  soft: '0 4px 12px rgba(27, 20, 100, 0.1)',
  medium: '0 8px 24px rgba(27, 20, 100, 0.15)',
  strong: '0 16px 48px rgba(27, 20, 100, 0.2)',
};

export const textStyles = {
  heading1: {
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  heading2: {
    fontSize: '2.25rem',
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: '-0.02em',
  },
  heading3: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  body: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  small: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
} as const;

export const borderRadius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
} as const;

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';

export const buttonStyles = (variant: ButtonVariant = 'primary'): CSSProperties => {
  const baseStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.md,
    padding: `${spacing.sm} ${spacing.lg}`,
    fontWeight: 500,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    border: '2px solid transparent',
  };

  switch (variant) {
    case 'primary':
      return {
        ...baseStyle,
        background: gradients.primary,
        color: 'white',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: shadows.medium,
        },
      };
    case 'secondary':
      return {
        ...baseStyle,
        background: gradients.secondary,
        color: colors.dark,
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: shadows.medium,
        },
      };
    case 'accent':
      return {
        ...baseStyle,
        background: gradients.accent,
        color: 'white',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: shadows.medium,
        },
      };
    case 'outline':
      return {
        ...baseStyle,
        border: `2px solid ${colors.primary}`,
        color: colors.primary,
        background: 'transparent',
        '&:hover': {
          background: 'rgba(27, 20, 100, 0.1)',
        },
      };
    case 'ghost':
      return {
        ...baseStyle,
        background: 'transparent',
        color: colors.primary,
        '&:hover': {
          background: 'rgba(27, 20, 100, 0.05)',
        },
      };
    default:
      return baseStyle;
  }
};

export const cardStyles = (elevation: 'none' | 'sm' | 'md' | 'lg' = 'md'): CSSProperties => {
  const baseStyle: CSSProperties = {
    backgroundColor: 'white',
    borderRadius: borderRadius.lg,
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    position: 'relative',
  };

  switch (elevation) {
    case 'sm':
      return { ...baseStyle, boxShadow: shadows.soft };
    case 'md':
      return { ...baseStyle, boxShadow: shadows.medium };
    case 'lg':
      return { ...baseStyle, boxShadow: shadows.strong };
    default:
      return baseStyle;
  }
};

export const africanPatterns = {
  kente: 'african-pattern-1',
  bogolan: 'african-pattern-2',
  adinkra: 'african-pattern-3',
  geometric: 'african-pattern-4',
  weave: 'african-pattern-5',
} as const;
