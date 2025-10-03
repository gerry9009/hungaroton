"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: "#fff",
    },
    secondary: {
      main: green[300],
      contrastText: "#000",
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: "#E0E0E0",
      secondary: grey[400],
    },
    divider: grey[700],
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
  },
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#E0E0E0",
          "&.Mui-selected": {
            backgroundColor: green[500],
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: green[600],
            },
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
