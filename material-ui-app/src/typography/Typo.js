import React from "react";
import Typography from "@material-ui/core/Typography";
export const Typo = () => {
  return (
    <>
      <div>
        <Typography
          variant="h2"
          color="primary"
          align="center"
          paragraph="true"
        >
          Typography-Tutorial
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography
          variant="h4"
          color="secondary"
          display="inline"
          gutterBottom
        >
          Sub-Heading
        </Typography>
        <Typography display="inline" color="textSecondary">
          something else
        </Typography>
        <Typography
          variant="body1"
          noWrap="true"
          align="left"
          color="error"
          gutterBottom
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </div>
    </>
  );
};
