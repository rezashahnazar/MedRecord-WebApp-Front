import IRANSansX from "./fonts/iransans/woff2/IRANSansX-Regular.woff2";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSansX, Roboto",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'IRANSansX';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('IRANSansX'), local('IRANSansX-Regular'), url(${IRANSansX}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const MUIFont = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default MUIFont;
