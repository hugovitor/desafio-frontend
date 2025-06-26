import { extendTheme, StyleFunctionProps, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

export const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#e0f7fa',
      100: '#b2ebf2',
      200: '#80deea',
      300: '#4dd0e1',
      400: '#26c6da',
      500: '#00bcd4',
      600: '#00acc1',
      700: '#0097a7',
      800: '#00838f',
      900: '#006064',
    },
    accent: {
      500: '#ff9800',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full',
      },
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'accent.400' : 'accent.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'accent.300' : 'accent.600',
            boxShadow: 'md',
          },
        }),
      },
    },
    Input: {
      baseStyle: {
        borderRadius: 'full',
      },
    },
  },
})
