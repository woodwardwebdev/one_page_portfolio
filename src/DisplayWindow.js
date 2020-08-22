import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Bonus from "./components/Bonus";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  displayWindow: {
    width: "100%",
    margin: "1%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
