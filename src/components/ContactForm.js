import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", flexDirection: "column" },
  hpot: {
    position: "absolute",
    top: "0",
    left: "0",
    opacity: "0",
    width: "1px",
    height: "1px",
  },
  textInput: { margin: "5px", borderRadius: "8px" },
  submitBtn: { maxWidth: "200px", alignSelf: "center", marginTop: "10px" },
}));

export default function ContactForm(props) {
  const classes = useStyles();
  const [status, setStatus] = React.useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    console.log(form);
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <form
      className={classes.root}
      onSubmit={(ev) => submitForm(ev)}
      action="https://formspree.io/mlepydob"
      method="POST"
    >
      <input className={classes.hpot} name="_gotcha"></input>
      <Textfield
        variant="filled"
        label="Name"
        id="name"
        name="name"
        autoComplete="off"
        className={classes.textInput}
        required
      ></Textfield>
      <Textfield
        variant="filled"
        label="Email"
        id="email"
        name="_replyto"
        autoComplete="off"
        className={classes.textInput}
        required
      ></Textfield>
      <Textfield
        variant="filled"
        multiline
        rows={12}
        label="Say Something!"
        id="message"
        name="message"
        autoComplete="off"
        className={classes.textInput}
        required
      ></Textfield>

      {status === "SUCCESS" ? (
        <p>Thanks!</p>
      ) : (
        <Button className={classes.submitBtn} variant="outlined">
          Submit
        </Button>
      )}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  );
}
