import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Cinzel Decorative',
    body: 'PT Serif',
  },
  colors: {
    primary: '#AC8435',
    yellow: {
      200: '#ECE1CE',
      100: '#F7F2E9',
    },
    brown: {
      900: '#2B292B',
      700: '#403C34',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'yellow.100',
        color: 'brown.900',
      },
    },
  },
});
