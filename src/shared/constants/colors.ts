export const LightColors = {
  white: '#FFFFFF',
  primary: '#1063FD',
  muted: '#3A5A92',
  background: '#EFEEF6',
  text: '#1C1C1E',
  gray: '#6E6E73',
  lightGray: '#DCDCE2',
  green: '#4FEE57',
  meta: '#00A884',
  lightGreen: '#DBFFCB',
  red: '#EF0827',
  yellow: '#FCC70B',
};

export const DarkColors = {
  white: '#FFFFFF',
  primary: '#1063FD',
  muted: '#8A9FBF',
  background: '#121212',
  text: '#FFFFFF',
  gray: '#98989D',
  lightGray: '#2C2C2E',
  green: '#4FEE57',
  lightGreen: '#1C3D1E',
  red: '#FF453A',
  yellow: '#FFD60A',
};

export const Colors = {
  light: LightColors,
  dark: DarkColors,
} as const;

export type ThemeColors = typeof LightColors;