import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
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
    height: "98%",
    margin: "1%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function DisplayWindow({ location }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.displayWindow}>
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/bonus" component={Bonus} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default withRouter(DisplayWindow);
