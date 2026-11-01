import React from 'react';
import {
  Pressable,
  ActivityIndicator,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
  PressableProps,
} from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../constants/theme';
import { ThemedText } from './ThemedText';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<PressableProps, 'style' | 'children'> {
  title?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  style,
  textStyle,
  onPress,
  ...pressableProps
}) => {
  const isDisabled = disabled || loading;

  const contentColor = getContentColor(variant, isDisabled);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        styles[`size_${size}`],
        fullWidth && styles.fullWidth,
        pressed && !isDisabled && styles[`pressed_${variant}`],
        isDisabled && styles.disabled,
        style,
      ]}
      {...pressableProps}
    >
      {loading ? (
        <ActivityIndicator size="small" color={contentColor} />
      ) : (
        <View style={styles.contentRow}>
          {leftIcon ? <View style={styles.leftIconContainer}>{leftIcon}</View> : null}
          {title ? (
            <ThemedText
              style={[
                styles.textBase,
                styles[`text_${variant}`],
                styles[`textSize_${size}`],
                textStyle,
              ]}
              numberOfLines={1}
            >
              {title}
            </ThemedText>
          ) : (
            children
          )}
          {rightIcon ? <View style={styles.rightIconContainer}>{rightIcon}</View> : null}
        </View>
      )}
    </Pressable>
  );
};

function getContentColor(variant: ButtonVariant, disabled: boolean): string {
  if (disabled) return Colors.textMuted;
  switch (variant) {
    case 'primary':
      return Colors.textInverse;
    case 'destructive':
      return Colors.textPrimary;
    case 'secondary':
      return Colors.textPrimary;
    case 'outline':
      return Colors.primary;
    case 'ghost':
      return Colors.textPrimary;
  }
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.lg,
    borderCurve: 'continuous',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  leftIconContainer: {
    marginRight: Spacing.sm,
  },
  rightIconContainer: {
    marginLeft: Spacing.sm,
  },

  // Variants
  primary: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.surfaceElevated,
    borderColor: Colors.border,
  },
  destructive: {
    backgroundColor: Colors.danger,
    borderColor: Colors.danger,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: Colors.border,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },

  // Pressed states
  pressed_primary: {
    opacity: 0.85,
    transform: [{ scale: 0.985 }],
  },
  pressed_secondary: {
    backgroundColor: Colors.surfaceHighlight,
    transform: [{ scale: 0.985 }],
  },
  pressed_destructive: {
    opacity: 0.85,
    transform: [{ scale: 0.985 }],
  },
  pressed_outline: {
    backgroundColor: Colors.surfaceElevated,
    transform: [{ scale: 0.985 }],
  },
  pressed_ghost: {
    backgroundColor: Colors.surfaceElevated,
  },

  // Disabled state
  disabled: {
    opacity: 0.45,
  },

  // Sizes
  size_sm: {
    paddingVertical: Spacing.xs + 2,
    paddingHorizontal: Spacing.md,
    minHeight: 34,
  },
  size_md: {
    paddingVertical: Spacing.sm + 4,
    paddingHorizontal: Spacing.lg,
    minHeight: 46,
  },
  size_lg: {
    paddingVertical: Spacing.md + 2,
    paddingHorizontal: Spacing.xl,
    minHeight: 54,
  },

  // Text Styles
  textBase: {
    fontWeight: Typography.weights.semibold,
    textAlign: 'center',
  },
  text_primary: {
    color: Colors.textInverse,
    fontWeight: Typography.weights.bold,
  },
  text_secondary: {
    color: Colors.textPrimary,
  },
  text_destructive: {
    color: '#FFFFFF',
    fontWeight: Typography.weights.bold,
  },
  text_outline: {
    color: Colors.textPrimary,
  },
  text_ghost: {
    color: Colors.textPrimary,
  },

  textSize_sm: {
    fontSize: Typography.sizes.sm,
    lineHeight: 18,
  },
  textSize_md: {
    fontSize: Typography.sizes.base,
    lineHeight: 22,
  },
  textSize_lg: {
    fontSize: Typography.sizes.lg,
    lineHeight: 24,
  },
});
