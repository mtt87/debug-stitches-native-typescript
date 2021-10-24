import {createStitches} from 'stitches-native';

export const {styled, theme, config, ThemeProvider} = createStitches({
  theme: {
    fonts: {},
    fontSizes: {
      1: 14,
      2: 16,
      3: 18,
      4: 20,
      5: 24,
      6: 36,
      7: 50,
    },
    fontWeights: {
      400: '400',
      500: '500',
      700: '700',
    },
    lineHeights: {},
    letterSpacings: {},
    colors: {
      blue500: '#1755FF',
    },
    space: {
      0: 4,
      1: 8,
      2: 16,
      3: 24,
      4: 32,
      5: 40,
      6: 48,
      7: 48,
      8: 56,
      9: 64,
      10: 80,
    },
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: 3,
      2: 6,
      3: 8,
      4: 10,
    },
    zIndices: {},
  },
});
