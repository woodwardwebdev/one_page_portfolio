import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90%",
    width: "80%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionListItem: {
    marginBottom: "1rem",
  },
  accordianLink: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "rgb(35, 255, 64)",
    },
  },
}));

export default function Skills() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box mb={3}>
        <Typography variant="h3" mb={30}>
          Skills:
        </Typography>
      </Box>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Frontend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                CORE
                <Typography variant="body2">
                  HTML5, CSS3, JavaScript (ES6)
                </Typography>
              </Typography>
            </li>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                FRAMEWORKS
                <Typography variant="body2">React.js, Bootstrap 4</Typography>
              </Typography>
            </li>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                LIBRARIES
                <Typography variant="body2">
                  JQuery, Material UI, React-Bootstrap
                </Typography>
              </Typography>
            </li>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                AREAS OF INTEREST
                <Typography variant="body2">
                  Responsive, interactive designs that are functional,
                  accessible and beautiful
                </Typography>
              </Typography>
            </li>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                FUTURE GOALS
                <Typography variant="body2">
                  Develop a stronger knowledge of React.js, building larger apps
                  with state management tools; expand my framework knowledge, to
                  include Vue.js; hone CSS skills, using pre-processors and
                  other tools to create dynamic and exciting looking pages
                </Typography>
              </Typography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Backend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                RUNTIME ENV - node.js
                <Typography variant="body2">
                  I've focused on node.js as my runtime environment to develop
                  backend solutions in. I particularly enjoy the modular nature
                  of NPM packages and the toolkit approach to development that
                  it allows
                </Typography>
              </Typography>
            </li>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                FRAMEWORKS
                <Typography variant="body2">Express.js</Typography>
              </Typography>
            </li>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                DATABASES
                <Typography variant="body2">MongoDB, PostgreSQL</Typography>
              </Typography>
            </li>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                AREAS OF INTEREST
                <Typography variant="body2">
                  REST API creation and consumption; careful and organised
                  routing; efficient algorithms; data modelling and structures
                </Typography>
              </Typography>
            </li>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                FUTURE GOALS
                <Typography variant="body2">
                  Build larger and more complex apps, integrating more database
                  tools; develop a strong understanding of web security and
                  authentication strategies; solidify REST API development
                  skills; learn new languages such as TypeScript and Python to
                  have access to optimal tools for specific jobs
                </Typography>
              </Typography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Key Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                VERSION CONTROL - Git
                <Typography variant="body2">
                  I use Git to control my development process, along with GitHub
                  for repository storage. You can take a look at my public
                  GitHub page either by{" "}
                  <a
                    className={classes.accordianLink}
                    href="http://www.github.com/woodwardwebdev"
                  >
                    clicking here
                  </a>{" "}
                  or on the icon in the navbar.
                </Typography>
              </Typography>
            </li>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                SOFT SKILLS
                <Typography variant="body2">
                  Project management; scheduling and organization; working to
                  tight deadlines; flexible and adaptable work patterns; problem
                  solving; collaboration
                </Typography>
              </Typography>
            </li>
            <li className={classes.accordionListItem}>
              <Typography variant="h5">
                OTHER TECHNICAL
                <Typography variant="body2">
                  Computer networking; computer hardware maintenance; audio
                  recording and editing to professional level; video and image
                  editing; electrical repair
                </Typography>
              </Typography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
