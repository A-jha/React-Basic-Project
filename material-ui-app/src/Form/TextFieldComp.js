import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import Visiblity from "@material-ui/icons/Visibility";
import Visiblityoff from "@material-ui/icons/VisibilityOff";
import FormHelperText from "@material-ui/core/FormHelperText";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export const BasicTextField = () => {
  const classes = useStyles();
  return (
    <>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Name" />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          color="secondary"
          required
          fullWidth
          className={classes.field}
        />
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          multiline
          rows={4}
          fullWidth
          className={classes.field}
        />
      </form>
    </>
  );
};

export const SelectMenuItemsTF = () => {
  const [currency, setCurrency] = React.useState("Rupee");
  const classes = useStyles();
  return (
    <>
      <form noValidate autoComplete="off">
        <TextField
          id="std-select-curr"
          select
          label="select"
          value={currency}
          size="small"
          onChange={(e) => setCurrency(e.target.value)}
          helperText="please select your currency"
        >
          {options.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </TextField>
      </form>
    </>
  );
};

const options = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "Rupee",
    label: "R",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const IconsAndTF = () => {
  const classes = useStyles();
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          className={classes.margin}
          id="input-with-icon-adors"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield1"
        label="Textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export const HideAndReveilPassword = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="std-andornment-password">Password</InputLabel>
        <Input
          id="std-andornment-password"
          type={values.showPassword ? "text" : "password"}
          values={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                arial-label="toggle-password-visiblity"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visiblity /> : <Visiblityoff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};
