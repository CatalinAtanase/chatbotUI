import { createTheme } from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0057B8",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#A1CDFFFF",
      contrastText: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
