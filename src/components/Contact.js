import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContactForm from "./ContactForm";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { width: "80%", height: "90%", margin: "auto" },
  header: { textAlign: "center" },
}));

export default function Contact(props) {
  const classes = useStyles();
  const { changeLocation } = props;
  const { isMed } = props.media;
  useEffect(() => {
    changeLocation(props.location.pathname);
  });
  return (
    <div className={classes.root}>
      <Box mb={3}>
        <Typography
          variant={isMed ? "h3" : "h5"}
          mb={30}
          className={classes.header}
        >
          Get in Touch
        </Typography>
      </Box>
      <ContactForm />
    </div>
  );
}
