import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import { Colors } from '@/shared/constants/colors';
import { Typography, TypographyWeight, TypographyVariant} from '@/shared/components/Typography';

export type ButtonVariant = 'filled' | 'text' | 'outline';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  weight?: TypographyWeight;
  loading?: boolean;
  disabled?: boolean;
  typoVariant?: TypographyVariant;
}

export function Button({
  title,
  variant = 'filled',
  weight = 'bold',
  loading = false,
  disabled = false,
  style,
  typoVariant = 'title',
  onPress,
  ...props
}: ButtonProps) {
  const scheme = useColorScheme();
  const colorScheme = scheme === 'dark' ? 'dark' : 'light';
  const themeColors = Colors[colorScheme];

  const isFilled = variant === 'filled';
  const isText = variant === 'text';

  const textColor = isText
    ? themeColors.primary
    : isFilled
    ? themeColors.white
    : themeColors.primary;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.base,
        isFilled && { backgroundColor: themeColors.primary },
        variant === 'outline' && {
          borderWidth: 1,
          borderColor: themeColors.primary,
        },
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Typography
          variant={typoVariant}
          weight={weight}
          color={textColor}
          align="center"
        >
          {title}
        </Typography>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});