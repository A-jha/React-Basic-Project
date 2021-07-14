import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TemporaryDrawer,
  SwipableTemproryDrawer,
  ResponsiveDrawer,
} from "./Drawer";
const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
});

export const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <SwipableTemproryDrawer />
        <div className={classes.page}>{children}</div>
      </div>
    </>
  );
};
