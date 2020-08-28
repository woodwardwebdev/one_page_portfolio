import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContactForm from "./ContactForm";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { width: "80%", height: "90%", margin: "auto" },
  header: { textAlign: "center", marginBottom: "1rem" },
  formContainer: { width: "70%" },
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
      <Typography variant={isBig ? "h3" : "h5"} className={classes.header}>
        Get in Touch
      </Typography>
      <Container className={isBig ? classes.formContainer : null}>
        <ContactForm />
      </Container>
    </div>
  );
}
