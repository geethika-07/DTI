import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet, TextStyle } from 'react-native';
import { Colors, Typography } from '../../constants/theme';

export type TextVariant =
  | 'largeHeading'
  | 'sectionHeading'
  | 'cardHeading'
  | 'body'
  | 'bodySecondary'
  | 'caption'
  | 'statNumber'
  | 'statLabel'
  | 'label';

export interface ThemedTextProps extends RNTextProps {
  variant?: TextVariant;
  color?: string;
  weight?: keyof typeof Typography.weights;
  align?: TextStyle['textAlign'];
}

export const ThemedText: React.FC<ThemedTextProps> = ({
  variant = 'body',
  color,
  weight,
  align,
  style,
  children,
  ...props
}) => {
  const variantStyle = Typography.presets[variant as keyof typeof Typography.presets] || Typography.presets.body;

  const customStyle: TextStyle = {
    ...(color ? { color } : {}),
    ...(weight ? { fontWeight: Typography.weights[weight] } : {}),
    ...(align ? { textAlign: align } : {}),
  };

  return (
    <RNText
      style={[styles.base, variantStyle, customStyle, style]}
      {...props}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  base: {
    color: Colors.textPrimary,
  },
});
