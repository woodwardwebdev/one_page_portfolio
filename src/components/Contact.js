import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContactForm from "./ContactForm";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { width: "80%", height: "90%", margin: "auto" },
  header: {
    textAlign: "center",
    marginBottom: "1rem",
    width: "70%",
    margin: "0 auto",
  },
  formContainer: { width: "70%" },
  spaced: { letterSpacing: "0.3rem" },
}));

export default function Contact(props) {
  const classes = useStyles();
  const { changeLocation } = props;
  const { isBig } = props.media;
  useEffect(() => {
    changeLocation(props.location.pathname);
  });
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h5" className={classes.spaced}>
          Send a message{" "}
        </Typography>
      </div>

      <Container className={isBig ? classes.formContainer : null}>
        <ContactForm />
      </Container>
    </div>
  );
}
