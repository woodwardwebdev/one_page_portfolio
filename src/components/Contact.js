import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  contactContainer: {
    width: "70%",
    height: "50%",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Container className={classes.contactContainer}>
      <Typography variant="h3">Get in Touch!</Typography>
      <Typography variant="body2">
        I'd love to hear from you if you're....
      </Typography>
    </Container>
  );
}
