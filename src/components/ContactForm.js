import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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
  textInput: {
    margin: "5px",
    borderRadius: "8px",
    width: "100%",
    boxShadow: "0px 8px 10px rgba(0,0,0,0.1)",
  },
  submitBtn: {
    maxWidth: "200px",
    alignSelf: "center",
    marginTop: "10px",
    "&:hover": {
      color: theme.palette.primary[500],
    },
  },
}));

export default function ContactForm(props) {
  const classes = useStyles();
  const [status, setStatus] = React.useState("");
  const [formData, setFormData] = React.useState({
    name: "",
    _replyto: "",
    message: "",
    _gotcha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const stateData = new FormData();
    for (var key in formData) {
      stateData.append(key, formData[key]);
    }
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
    xhr.send(stateData);
  };

  return (
    <ValidatorForm
      className={classes.root}
      onSubmit={(ev) => submitForm(ev)}
      action="https://formspree.io/mlepydob"
      method="POST"
    >
      <input
        className={classes.hpot}
        name="_gotcha"
        onChange={handleChange}
      ></input>
      <TextValidator
        variant="filled"
        label="Name"
        id="name"
        name="name"
        autoComplete="off"
        className={classes.textInput}
        value={formData.name}
        validators={["required"]}
        errorMessages={["this field is required"]}
        onChange={handleChange}
      ></TextValidator>
      <TextValidator
        variant="filled"
        label="Email"
        id="email"
        name="_replyto"
        autoComplete="off"
        className={classes.textInput}
        value={formData._replyto}
        validators={["isEmail"]}
        errorMessages={["Please enter a valid Email"]}
        onChange={handleChange}
      ></TextValidator>
      <TextValidator
        variant="filled"
        multiline
        rows={12}
        label="Say Something!"
        id="message"
        name="message"
        value={formData.message}
        autoComplete="off"
        className={classes.textInput}
        onChange={handleChange}
      ></TextValidator>

      {status === "SUCCESS" ? (
        <p>Thanks!</p>
      ) : (
        <Button className={classes.submitBtn} variant="outlined" type="submit">
          Submit
        </Button>
      )}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </ValidatorForm>
  );
}
