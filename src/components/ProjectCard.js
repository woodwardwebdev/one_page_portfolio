import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    height: "90%",
    minWidth: 270,
    maxWidth: 760,
    padding: "1%",
    overflow: "scroll",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    marginBottom: "2rem",
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  mediaDesktop: {
    borderRadius: "10px 10px 0 0",
    height: "300px",
    objectFit: "cover",
    objectPosition: "0 0",
    boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",
  },
  mediaMobile: {
    borderRadius: "10px",
    height: "200px",
  },
  cardDescription: {
    marginTop: "1rem",
  },
  gridHeader: {
    marginBottom: "-1.8rem",
  },
  buttons: {
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
  order1: { order: 1 },
  order2: { order: 2 },
  order3: { order: 3 },
  order4: { order: 4 },
  buttonLink: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "rgb(35, 255, 64)",
    },
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const {
    title,
    img,
    gitLink,
    liveLink,
    descText,
    improvements,
  } = props.project;
  const isDesktop = props.isDesktop;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          className={classes.title}
        >
          {title}
        </Typography>
        <CardMedia
          className={isDesktop ? classes.mediaDesktop : classes.mediaMobile}
          image={img}
          title={title}
          component="img"
        />

        <Grid container spacing={5} className={classes.cardDescription}>
          <Grid item xs={12} sm={6} className={classes.order1}>
            <Typography variant="h5" className={classes.gridHeader}>
              Project Description
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className={isDesktop ? classes.order2 : classes.order3}
          >
            <Typography variant="h5" className={classes.gridHeader}>
              Future Improvements
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className={isDesktop ? classes.order3 : classes.order2}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              {descText}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.order4}>
            <div>
              <ul className={classes.improveList}>
                {improvements.map((i) => (
                  <li key={i} className={classes.listItem}>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.buttons}>
        {gitLink !== "" ? (
          <Button size="small">
            <a href={gitLink} className={classes.buttonLink} target="blank">
              GitHub
            </a>
          </Button>
        ) : null}
        {liveLink !== "" ? (
          <Button size="small">
            <a href={liveLink} className={classes.buttonLink} target="blank">
              Live Demo
            </a>
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
}
