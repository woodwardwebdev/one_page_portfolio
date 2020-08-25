import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { width: "80%", height: "90%" },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box mb={3}>
        <Typography variant="h3" mb={30}>
          Get in Touch:
        </Typography>
      </Box>
    </div>
  );
}
