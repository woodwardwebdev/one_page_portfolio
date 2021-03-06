import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mugshot from "../img/mugshot.jpg";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  window: {
    height: "100%",
  },
  gridContainer: {
    padding: "8%",
  },
  gridBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridbox2: {},
  photo: {
    width: "75%",
    borderRadius: "10px",
  },
  divider: {
    margin: "1rem 0 1rem 0",
    backgroundColor: "rgba(35, 255, 64, 0.4)",
    boxShadow: "0px 0px 5px rgba(35,255,64,0.3)",
  },
  paragraph: {
    marginTop: "1rem",
  },
  greenLink: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: "rgba(35, 255, 64, 0.6)",
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const { changeLocation } = props;
  const { isSmall } = props.media;
  useEffect(() => {
    changeLocation(props.location.pathname);
  });
  return (
    <Container className={classes.window}>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item sm={12} md={5} className={classes.gridBox}>
          <img
            className={classes.photo}
            src={mugshot}
            alt="Colin Woodward"
          ></img>
        </Grid>
        <Grid item sm={12} md={7} className={classes.gridBox2}>
          <Typography variant="h3" align={isSmall ? "center" : "left"}>
            Hi, I'm Colin.
          </Typography>
          <Typography variant="h6" align={isSmall ? "center" : "left"}>
            Web developer, sound engineer and all-round tech enthusiast.
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="body2" className={classes.paragraph}>
            After a decade on the road in the live sound industry, I'm looking
            for a new, exciting and challenging career. I'm self-taught and
            addicted to the feeling of making things work.
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            I work mostly in the Javascript MERN stack, with a special interest
            in React.
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            Outside of work I love to play guitar, cook delicious food, ride
            motorcycles and train in Olympic-style weightlifting.
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            I'm currently working on a freelance basis with several clients and constantly learning.
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            If you're hiring and looking for a dedicated and driven junior
            developer, or if you just want to swap recipes, get in touch!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
