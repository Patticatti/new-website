import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
      deep: `#FF00A8`,
      700: `#FF0098`,
      500: `#FB5680`,
      400: `#F87CC7`,
      300: `#FAB9D8`,
    },
    secondary: {
      700: `#FFB321`,
      500: `#52DEEB`,
      300: `#78F3FE`,
    },
    transparent: `#00000000`,
    warning: `#FE8311`,
  };

const components = {
    Button: {
      variants: {
        noStyles: {
          background: `none`,
          padding: `0`,
          height: `auto`,
          position: `relative`,
          alignItems: `auto`,
          whiteSpace: `auto`,
          textAlign: `left`,
          fontWeight: `auto`,
          lineHeight: `auto`,
        },
      },
    },
};

export const chakraTheme = extendTheme({
    colors,
    config: {
      initialColorMode: `light`,
      useSystemColorMode: false,
    },
    components,
  });
  