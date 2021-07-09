# Adding Cutom styles

- import makestyle from material ui styles

- makestyle is a function or named function

  ```jsx
  import { makeStyles } from "@material-ui/styles";
  ```

- create a custom hook useStyle and invoke make style

  ```jsx
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
  ```

- invoke the hook

  ```jsx
  const classes = useStyles();
  ```

- to use the class btn

  ```jsx
  <Button className={classes.btn}>Custom Btn</Button>
  ```
