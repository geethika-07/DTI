import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';
import { ThemedText } from './ThemedText';

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'outline';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  label?: string;
  children?: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  dotColor?: string;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  dotColor,
  icon,
  style,
  textStyle,
}) => {
  const textColor = getBadgeTextColor(variant);
  const activeDotColor = dotColor || textColor;

  return (
    <View style={[styles.badge, styles[variant], styles[`size_${size}`], style]}>
      {dot ? (
        <View style={[styles.dot, { backgroundColor: activeDotColor }]} />
      ) : null}

      {icon ? <View style={styles.iconContainer}>{icon}</View> : null}

      {label ? (
        <ThemedText
          style={[
            styles.text,
            { color: textColor },
            styles[`text_${size}`],
            textStyle,
          ]}
          numberOfLines={1}
        >
          {label}
        </ThemedText>
      ) : (
        children
      )}
    </View>
  );
};

function getBadgeTextColor(variant: BadgeVariant): string {
  switch (variant) {
    case 'primary':
      return Colors.primary;
    case 'secondary':
      return Colors.textSecondary;
    case 'success':
      return Colors.secondary;
    case 'danger':
      return Colors.danger;
    case 'warning':
      return Colors.warning;
    case 'info':
      return Colors.competitorBlue;
    case 'outline':
      return Colors.textPrimary;
  }
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.full,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: Radius.full,
    marginRight: Spacing.xs + 2,
  },
  iconContainer: {
    marginRight: Spacing.xs,
  },
  text: {
    fontWeight: Typography.weights.semibold,
    letterSpacing: 0.3,
  },

  // Variants
  primary: {
    backgroundColor: Colors.primaryMuted,
    borderColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.surfaceElevated,
    borderColor: Colors.border,
  },
  success: {
    backgroundColor: Colors.secondaryMuted,
    borderColor: Colors.secondary,
  },
  danger: {
    backgroundColor: Colors.dangerMuted,
    borderColor: Colors.danger,
  },
  warning: {
    backgroundColor: Colors.warningMuted,
    borderColor: Colors.warning,
  },
  info: {
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    borderColor: Colors.competitorBlue,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: Colors.border,
  },

  // Sizes
  size_sm: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
  },
  size_md: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  size_lg: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xs + 2,
  },

  text_sm: {
    fontSize: Typography.sizes.xs - 1,
    lineHeight: 14,
  },
  text_md: {
    fontSize: Typography.sizes.xs,
    lineHeight: 16,
  },
  text_lg: {
    fontSize: Typography.sizes.sm,
    lineHeight: 18,
  },
});
