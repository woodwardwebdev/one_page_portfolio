import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import projectsData from "../content/projectsData";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mobileView: {
    maxWidth: 345,
    height: "95%",
    width: "90%",
    overflow: "scroll",
    padding: "10px",
    borderRadius: "6px",
    textAlign: "center",
  },
  media: { height: "200px", borderRadius: "6px" },
  cardButtons: {
    margin: "10px",
    alignItems: "center",
    justifyContent: "center",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
}));

export default function MobileProjectView(props) {
  const classes = useStyles();
  const toFind = props.match.params.project;
  const findingProject = projectsData.filter(
    (project) => project["slug"] === toFind
  );
  const project = findingProject[0];

  const back = () => {
    props.history.goBack();
  };

  return (
    <Card className={classes.mobileView}>
      <CardHeader title={project.title}></CardHeader>
      <CardMedia className={classes.media} image={project.img}></CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.descText}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardButtons}>
        {project.gitLink !== "" ? (
          <Button variant="outlined">
            <a
              href={project.gitLink}
              className={classes.buttonLink}
              target="blank"
            >
              GitHub
            </a>
          </Button>
        ) : null}
        {project.liveLink !== "" ? (
          <Button variant="outlined">
            <a
              href={project.liveLink}
              className={classes.buttonLink}
              target="blank"
            >
              Live Demo
            </a>
          </Button>
        ) : null}
        <div className={classes.backBtn}>
          <Button onClick={back} variant="outlined">
            Back
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
