import React from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
  PressableProps,
} from 'react-native';
import { Colors, Radius, Spacing } from '../../constants/theme';
import { ThemedText } from './ThemedText';

export type CardVariant = 'default' | 'elevated' | 'active' | 'ghost';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps {
  children?: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

interface CardHeaderProps {
  title?: string;
  subtitle?: string;
  rightAccessory?: React.ReactNode;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface CardFooterProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Footer: React.FC<CardFooterProps>;
} = ({
  children,
  variant = 'default',
  padding = 'lg',
  onPress,
  style,
  testID,
}) => {
  const containerStyle = [
    styles.base,
    styles[variant],
    styles[`padding_${padding}`],
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        testID={testID}
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [
          containerStyle,
          pressed && styles.pressed,
        ]}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View testID={testID} style={containerStyle}>
      {children}
    </View>
  );
};

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  rightAccessory,
  children,
  style,
}) => {
  return (
    <View style={[styles.header, style]}>
      {children ? (
        children
      ) : (
        <>
          <View style={styles.headerTextGroup}>
            {title ? <ThemedText variant="cardHeading">{title}</ThemedText> : null}
            {subtitle ? (
              <ThemedText variant="caption" style={styles.headerSubtitle}>
                {subtitle}
              </ThemedText>
            ) : null}
          </View>
          {rightAccessory ? <View style={styles.rightAccessory}>{rightAccessory}</View> : null}
        </>
      )}
    </View>
  );
};

const CardFooter: React.FC<CardFooterProps> = ({ children, style }) => {
  return <View style={[styles.footer, style]}>{children}</View>;
};

Card.Header = CardHeader;
Card.Footer = CardFooter;

const styles = StyleSheet.create({
  base: {
    borderRadius: Radius.lg,
    borderCurve: 'continuous',
    borderWidth: 1,
    overflow: 'hidden',
  },
  default: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
  },
  elevated: {
    backgroundColor: Colors.surfaceElevated,
    borderColor: Colors.border,
  },
  active: {
    backgroundColor: Colors.surface,
    borderColor: Colors.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: Colors.border,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },

  // Paddings
  padding_none: {
    padding: 0,
  },
  padding_sm: {
    padding: Spacing.sm,
  },
  padding_md: {
    padding: Spacing.md,
  },
  padding_lg: {
    padding: Spacing.lg,
  },
  padding_xl: {
    padding: Spacing.xl,
  },

  // Compound styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  headerTextGroup: {
    flex: 1,
  },
  headerSubtitle: {
    marginTop: Spacing.xs - 2,
  },
  rightAccessory: {
    marginLeft: Spacing.md,
  },
  footer: {
    marginTop: Spacing.md,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.borderSubtle,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
