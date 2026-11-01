/**
 * run.io Design System Theme Tokens
 * Derived strictly from design.md
 */

import { TextStyle, ViewStyle } from 'react-native';

export const Colors = {
  // Backgrounds & Surfaces
  background: '#0B0F0E',
  surface: '#141B18',
  surfaceElevated: '#1C2521',
  surfaceHighlight: '#222F2A',
  border: '#29332D',
  borderSubtle: 'rgba(41, 51, 45, 0.6)',
  borderFocus: '#B7F34A',

  // Brand & Accents
  primary: '#B7F34A', // Electric Lime
  primaryMuted: 'rgba(183, 243, 74, 0.15)',
  primaryGlow: 'rgba(183, 243, 74, 0.35)',
  secondary: '#79C83D', // Tactical Green
  secondaryMuted: 'rgba(121, 200, 61, 0.15)',

  // Competitor territory accents
  competitorBlue: '#38BDF8',
  competitorOrange: '#FB923C',
  competitorPurple: '#C084FC',
  competitorYellow: '#FACC15',
  competitorPink: '#F472B6',

  // Status & Feedback
  danger: '#FF5B5B',
  dangerMuted: 'rgba(255, 91, 91, 0.15)',
  warning: '#FBBF24',
  warningMuted: 'rgba(251, 191, 36, 0.15)',
  success: '#B7F34A',
  info: '#38BDF8',

  // Typography
  textPrimary: '#F5F7F4',
  textSecondary: '#929D96',
  textMuted: '#58655F',
  textInverse: '#0B0F0E',

  // Overlays & Backdrop
  overlay: 'rgba(11, 15, 14, 0.82)',
  overlayLight: 'rgba(0, 0, 0, 0.5)',
} as const;

export const Typography = {
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    title: 30,
    hero: 36,
    statLarge: 42,
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    black: '900' as const,
  },
  lineHeights: {
    tight: 1.15,
    snug: 1.25,
    normal: 1.4,
    relaxed: 1.5,
  },
  presets: {
    largeHeading: {
      fontSize: 30,
      fontWeight: '700' as const,
      color: Colors.textPrimary,
      letterSpacing: -0.6,
      lineHeight: 36,
    } satisfies TextStyle,
    sectionHeading: {
      fontSize: 22,
      fontWeight: '600' as const,
      color: Colors.textPrimary,
      letterSpacing: -0.3,
      lineHeight: 28,
    } satisfies TextStyle,
    cardHeading: {
      fontSize: 17,
      fontWeight: '600' as const,
      color: Colors.textPrimary,
      letterSpacing: -0.1,
      lineHeight: 22,
    } satisfies TextStyle,
    body: {
      fontSize: 15,
      fontWeight: '400' as const,
      color: Colors.textPrimary,
      lineHeight: 22,
    } satisfies TextStyle,
    bodySecondary: {
      fontSize: 15,
      fontWeight: '400' as const,
      color: Colors.textSecondary,
      lineHeight: 22,
    } satisfies TextStyle,
    caption: {
      fontSize: 13,
      fontWeight: '400' as const,
      color: Colors.textSecondary,
      lineHeight: 18,
    } satisfies TextStyle,
    statNumber: {
      fontSize: 40,
      fontWeight: '800' as const,
      color: Colors.textPrimary,
      letterSpacing: -1,
      fontVariant: ['tabular-nums'],
    } satisfies TextStyle,
    statLabel: {
      fontSize: 12,
      fontWeight: '600' as const,
      color: Colors.textSecondary,
      letterSpacing: 0.8,
      textTransform: 'uppercase' as const,
    } satisfies TextStyle,
  },
} as const;

export const Spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 48,
} as const;

export const Radius = {
  xs: 4,
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  xxl: 28,
  full: 9999,
} as const;

export const IconSizes = {
  xs: 14,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 36,
} as const;

export const Shadows = {
  subtle: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  } satisfies ViewStyle,
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  } satisfies ViewStyle,
  glow: {
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  } satisfies ViewStyle,
} as const;

export type ColorToken = keyof typeof Colors;
export type SpacingToken = keyof typeof Spacing;
export type RadiusToken = keyof typeof Radius;
export type IconSizeToken = keyof typeof IconSizes;
