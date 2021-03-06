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
import Divider from "@material-ui/core/Divider";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles((theme) => ({
  mobileView: {
    maxWidth: 425,
    height: "95%",
    width: "90%",
    margin: "30px 0",
    padding: "10px",
    paddingBottom: "30px",
    borderRadius: "6px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    textAlign: 'center'
  },
  title: { textAlign: "center" },
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
  divider: {
    margin: "1rem 0 1rem 0",
    backgroundColor: "rgba(35, 255, 64, 0.4)",
    boxShadow: "0px 0px 5px rgba(35,255,64,0.3)",
  },
  carousel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  improveList: {
    padding: "8px",
    margin: 0,
    marginTop: "-0.5rem",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.43,
    letterSpacing: "0.01071em",
    color: "rgba(255,255,255,0.7)",
  },
  listItem: {
    marginBottom: "0.5rem",
    listStyle: "none",
  },
  carouselImg: { height: "170px", borderRadius: "8px" },
  carouselIndicator: { color: theme.palette.primary[500], fontSize: "3rem" },
  carouselIndicatorActive: { fontSize: "3rem" },
  buttons: {
    justifyContent: "center",
  },
  buttonContainer: {},
  backBtn: { margin: 0, padding: 0, textAlign: "left", minWidth: "36px" },
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
      <div className={classes.buttonContainer}>
        <Button className={classes.backBtn} onClick={back}>
          <KeyboardBackspaceIcon />
        </Button>
      </div>
      <CardHeader className={classes.title} title={project.title}></CardHeader>

      <CardMedia className={classes.media} image={project.img}>
        {/* leaving this Carousel in as an option - remove before deployment */}
        {/* <Carousel
          className={classes.carousel}
          navButtonsAlwaysVisible={false}
          indicators={true}
          indicatorProps={{ className: `${classes.carouselIndicator}` }}
          activeIndicatorProps={{
            className: `${classes.carouselIndicatorActive}`,
          }}
        >
          {project.moreImgs.map((img) => (
            <img className={classes.carouselImg} src={img} alt="" />
          ))}
        </Carousel> */}
      </CardMedia>
      <CardContent>
        <Divider className={classes.divider} />
        <Typography variant="h5" className={classes.gridHeader}>
          Project Description
        </Typography>
        <Divider className={classes.divider} />
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="center"
        >
          {project.descText}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="h5" className={classes.gridHeader}>
          Future Improvements
        </Typography>
        <Divider className={classes.divider} />

        <ul className={classes.improveList}>
          {project.improvements.map((i) => (
            <li key={i} className={classes.listItem}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="center"
              >
                {i}
              </Typography>
            </li>
          ))}
        </ul>
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
      </CardActions>
    </Card>
  );
}
