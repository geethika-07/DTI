import React from 'react';
import { LucideIcon, LucideProps } from 'lucide-react-native';
import { Colors, IconSizes, IconSizeToken } from '../../constants/theme';

export interface IconProps extends Omit<LucideProps, 'size' | 'color'> {
  icon: LucideIcon;
  size?: IconSizeToken | number;
  color?: string;
  strokeWidth?: number;
}

export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 'md',
  color = Colors.textPrimary,
  strokeWidth = 2,
  ...props
}) => {
  const resolvedSize = typeof size === 'number' ? size : IconSizes[size];

  return (
    <IconComponent
      size={resolvedSize}
      color={color}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
};
