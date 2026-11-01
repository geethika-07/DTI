import { Colors, Typography, Spacing, Radius, IconSizes, Shadows } from '../constants/theme';

export function useTheme() {
  return {
    colors: Colors,
    typography: Typography,
    spacing: Spacing,
    radius: Radius,
    iconSizes: IconSizes,
    shadows: Shadows,
  };
}

export { Colors, Typography, Spacing, Radius, IconSizes, Shadows };
