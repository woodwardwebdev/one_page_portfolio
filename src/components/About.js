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
    padding: "10%",
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
  },
  paragraph: {
    marginTop: "1rem",
  },
}));

export default function About(props) {
  const classes = useStyles();
  const { changeLocation } = props;
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
          <Typography variant="h3">Hi, I'm Colin.</Typography>
          <Typography variant="h6">
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
            Outside of work I love to play guitar, cook delicious food and train
            in weightlifting.
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            If you're hiring and looking for a dedicated and driven junior
            developer, or even if you just want to swap BBQ tips, get in touch!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
