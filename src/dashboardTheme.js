import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // The props to change the default for.
        contained: {
          // backgroundColor: 'red!important'
        }, // No more ripple, on the whole application 💣!
      },
    },
  },
  palette: {
    primary: {
      main: "#bada55",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  spacing: [4, 8, 12, 16, 20]
  // theme.spacing(4)
});
