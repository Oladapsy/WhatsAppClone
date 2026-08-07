import React from "react";
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
  useColorScheme,
} from "react-native";
import { Colors } from "@/shared/constants/colors";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "title"
  | "subtitle"
  | "body"
  | "caption"
  | "small";

export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";

export interface TypographyProps extends RNTextProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: string;
  secondary?: boolean;
  align?: "auto" | "left" | "right" | "center" | "justify";
  children: React.ReactNode;
}

export function Typography({
  variant = "body",
  weight = "regular",
  color,
  secondary = false,
  align = "left",
  style,
  children,
  ...props
}: TypographyProps) {
  const scheme = useColorScheme();
  const colorScheme = scheme === "dark" ? "dark" : "light";
  const themeColors = Colors[colorScheme];

  const defaultTextColor = secondary ? themeColors.muted : themeColors.text;

  return (
    <RNText
      style={[
        styles.base,
        styles[variant],
        styles[weight],
        { color: color || defaultTextColor, textAlign: align },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}

// Preset Title component for quick exports/usage
export default function Title(props: Omit<TypographyProps, "variant">) {
  return <Typography variant="title" weight="bold" {...props} />;
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
  // Variants
  h1: {
    fontSize: 28,
    lineHeight: 34,
  },
  h2: {
    fontSize: 22,
    lineHeight: 28,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  body: {
    fontSize: 15,
    lineHeight: 20,
  },
  caption: {
    fontSize: 13,
    lineHeight: 18,
  },
  small: {
    fontSize: 11,
    lineHeight: 14,
  },
  // Weights
  regular: {
    fontWeight: "400",
  },
  medium: {
    fontWeight: "500",
  },
  semibold: {
    fontWeight: "600",
  },
  bold: {
    fontWeight: "700",
  },
});
