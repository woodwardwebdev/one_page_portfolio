import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Bonus from "./components/Bonus";
import MobileProjectView from "./components/MobileProjectView";

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

function DisplayWindow(props) {
  const classes = useStyles();
  const { changeLocation, media } = props;
  return (
    <React.Fragment>
      <div className={classes.displayWindow}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/about" />
          </Route>
          <Route
            path="/about"
            render={(props) => (
              <About {...props} changeLocation={changeLocation} media={media} />
            )}
          />
          <Route
            path="/skills"
            render={(props) => (
              <Skills
                {...props}
                changeLocation={changeLocation}
                media={media}
              />
            )}
          />
          <Route
            path="/projects"
            exact
            render={(props) => (
              <Projects
                {...props}
                changeLocation={changeLocation}
                media={media}
              />
            )}
          />
          <Route
            path="/projects/:project"
            exact
            render={(props) => (
              <MobileProjectView
                {...props}
                changeLocation={changeLocation}
                media={media}
              />
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <Contact
                {...props}
                changeLocation={changeLocation}
                media={media}
              />
            )}
          />
          <Route
            path="/bonus"
            render={(props) => (
              <Bonus {...props} changeLocation={changeLocation} media={media} />
            )}
          />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default DisplayWindow;
