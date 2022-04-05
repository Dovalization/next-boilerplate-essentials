const theme = {
  colors: {
    text: {
      dark: "#171923",
      light: "#F7FAFC",
    },
    primary: "#FFA600",
    secondary: "#2D3748",
    background: "#F7FAFC",
  },
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    extraLarge: "4rem",
  },
  // mobile first
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
    highRes: "1440px",
    ultraHighRes: "2560px",
  },
  fonts: {
    primary: "Inter, Helvetica, sans-serif",
    // secondary: "Open Sans, sans-serif",
  },
};

export default theme;
export type ThemeType = typeof theme;
