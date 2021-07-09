import React from "react";
import { Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#454322",
    },
    type: "dark",
  },
  typography: {
    fontFamily: "Anonymous Pro",
  },
});
export const Test = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography
          align="center"
          fontFamily="Roboto"
          variant="h3"
          color="primary"
        >
          {"kya haal hai. . . "}
        </Typography>
      </ThemeProvider>
    </>
  );
};
