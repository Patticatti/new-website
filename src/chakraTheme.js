import { extendTheme } from '@chakra-ui/react';

const colors = {
    primary: `#FF00A8`,
    orange: {
      700: `#FFB321`,
      500: `#52DEEB`,
      300: `#78F3FE`,
    },
    transparent: `#00000000`,
    warning: `#FE8311`,
  };

const global = {
    body: {
        bg: 'white', // Set the background color to white
      },
}

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
    Text:{
        baseStyle: {
        color: 'black', // Your desired text color
        fontFamily: `Outfit`,
    },
},
    Box:{
        baseStyle: {
        background: `white`,
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
    global,
  });
  