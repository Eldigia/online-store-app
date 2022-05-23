import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bg: "#FFFFFF",
    },
    a: {
      _hover: {
        color: "#dd3575",
      },
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: "3px",
      outline: "none",
      _focus: {
        boxShadow: "none",
        outline: "none",
      },
    },
    variants: {
      basic: {
        bg: "white",
        color: "black",
      },
      pink: {
        bg: "#dd3575",
        color: "white",
        fontWeight: "bold",
        _hover: {
          opacity: "0.8",
        },
      },
      white: {
        bg: "white",
        color: "grey.500",
        _hover: {
          color: "#dd3575",
        },
      },
    },
  },
};

export const theme = extendTheme({ styles, components });
