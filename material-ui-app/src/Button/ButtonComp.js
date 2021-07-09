import React from "react";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import Icon from "@material-ui/core/Icon";
export const ContainedButton = () => {
  return (
    <>
      <Typography variant="h3" color="textSecondary" gutterBottom>
        Contained Button
      </Typography>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary" size="small">
        Secondary
      </Button>
      <Button
        variant="contained"
        color="primary"
        href="#"
        size="large"
        onClick={() => {
          alert("hi");
        }}
      >
        Link
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button
        variant="contained"
        color="danger"
        startIcon={<DeleteIcon />}
        endIcon={<Edit />}
        disableElevation
      >
        {" "}
        No Elevetion
      </Button>
    </>
  );
};

export const TextButton = () => {
  return (
    <>
      <Typography variant="h3" color="textSecondary" paragraph>
        Text Button{" "}
      </Typography>
      <Button> Default</Button>
      <Button color="primary"> Default</Button>
      <Button color="secondary"> Default</Button>
    </>
  );
};

export const OutLineBtn = () => {
  return (
    <>
      <Typography variant="h3" color="textSecondary" gutterBottom>
        Outlined Button
      </Typography>
      <Button variant="outlined"> Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" href="#">
        Link
      </Button>
      <Button variant="outlined" disabled>
        {" "}
        Disabled
      </Button>
    </>
  );
};

export const IconButtonComp = () => {
  return (
    <>
      <Typography variant="h3" color="textSecondary" gutterBottom>
        Icon Button
      </Typography>
      <IconButton aria-label="delete" color="secondary">
        <DeleteIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="delete" color="primary">
        <Edit />
      </IconButton>
      <IconButton>
        <Icon className="fa fa-plus-circle"></Icon>
      </IconButton>
    </>
  );
};
