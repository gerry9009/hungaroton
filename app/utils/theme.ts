"use client";

import { createTheme } from "@mui/material/styles";
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
});

export default theme;
