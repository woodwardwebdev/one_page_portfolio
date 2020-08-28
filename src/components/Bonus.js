import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import RecipeView from "./RecipeView";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", width: "100%" },
  header: { textAlign: "center" },
  recipeView: { width: "100%" },
}));

export default function Bonus(props) {
  const classes = useStyles();
  const { media, changeLocation } = props;
  useEffect(() => {
    changeLocation(props.location.pathname);
  });
  return (
    <div className={classes.root}>
      <Container className={classes.recipeView} disableGutters={true}>
        <RecipeView media={media} />
      </Container>
    </div>
  );
}
