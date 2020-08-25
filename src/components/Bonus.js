import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: { height: "90%", width: "80%" },
}));

export default function Bonus() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.header}>
        <Typography variant="h3">Bonus Recipes</Typography>
        <Typography variant="body2">
          I love to cook in my spare time. Here's some of my favourites:
        </Typography>
      </Container>
    </div>
  );
}
