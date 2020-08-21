import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Bonus from "./Bonus";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  displayWindow: {
    width: "100%",
    height: "97%",
    margin: "2%",
    padding: "1%",
    border: "1px solid white",
  },
}));

export default function DisplayWindow(props) {
  const classes = useStyles();
  return (
    <div className={classes.displayWindow}>
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/bonus" component={Bonus} />
      </Switch>
    </div>
  );
}
