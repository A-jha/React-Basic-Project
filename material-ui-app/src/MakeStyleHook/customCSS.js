import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//makestyle if a function im material ui styles
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  btn: {
    fontSize: 30,
    backgroundColor: "#123456",
    borderRadius: 30,
    //apply hover
    "&:hover": {
      backgroundColor: "grey",
      fontWeight: 900,
      color: "white",
    },
  },
  text: {
    textDecoration: "underline",
    fontSize: 40,
    color: "blue",
  },
});
export const MakeStyleHook = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.text}
        align="center"
        variant="h4"
        gutterBottom
      >
        Hello G
      </Typography>
      <Button
        className={classes.btn}
        variant="outlined"
        color="primary"
        fullWidth
      >
        Change Text
      </Button>
    </>
  );
};
