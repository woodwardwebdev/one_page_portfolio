import React, { useEffect } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Bonus from "./components/Bonus";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  const { changeLocation } = props;
  const isBig = useMediaQuery("(min-width:900px)");
  const isMed = useMediaQuery("(min-width:600px)");
  const isSmall = useMediaQuery("(max-width:599px");
  const media = { isBig, isMed, isSmall };
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
