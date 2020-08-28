import React from "react";
import recipeData from "../content/recipeData";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    padding: "1rem 0 1rem 0",
  },
  bold: { fontWeight: "bold" },

  recipeGrid: {
    width: "100%",
    margin: "2rem",
    backgroundColor: "rgba(255,255,255,8%)",
    padding: "2rem",
    borderRadius: "8px",
    justifyContent: "center",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
  },
  recipeSelector: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  cardMedia: { height: "200px" },
  recipeIngredients: {},
  ingredientList: {
    backgroundColor: "rgba(255,255,255,8%)",
  },
  recipeBody: {},
  recipeDescription: {
    backgroundColor: "rgba(255,255,255,0.7)",
    color: "black",
    padding: "1rem",
    borderRadius: "8px",
  },
  button: {
    minWidth: "200px",
    margin: "4px",
    textTransform: "none",
    "&:hover": { cursor: "pointer" },
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "10px",
  },
  breadcrumb: {
    color: "rgba(255,255,255,0.5)",
  },
  breadcrumbActive: {
    // color: "rgb(35, 255, 64)",
    color: theme.palette.primary[500],
  },
  divider: {
    margin: "1rem 0 1rem 0",
    backgroundColor: "rgba(35, 255, 64, 0.4)",
    boxShadow: "0px 0px 5px rgba(35,255,64,0.3)",
  },
}));

export default function RecipeView(props) {
  const classes = useStyles();
  const { isBig } = props.media;
  const [recipe, setRecipe] = React.useState(0);
  const chooseRecipe = (i) => {
    setRecipe(i);
  };
  return (
    <Container className={classes.root} disableGutters={true}>
      <Grid container direction="column">
        <Typography variant="h6" align="center">
          I love to cook in my spare time. Here's some of my favourites
        </Typography>
        <Container>
          <Grid
            item
            xs={12}
            className={classes.recipeSelector}
            direction={isBig ? "row" : "column"}
            container
          >
            {recipeData.map((r, key) => (
              <Button
                key={key}
                onClick={() => chooseRecipe(key)}
                className={clsx(
                  key === recipe
                    ? classes.breadcrumbActive
                    : classes.breadcrumb,
                  classes.button
                )}
              >
                <Typography variant="body1">{r.title}</Typography>
              </Button>
            ))}
          </Grid>
        </Container>
      </Grid>
      <Grid container spacing={2} className={classes.recipeGrid}>
        <Grid item sm={12} md={5} className={classes.recipeIngredients}>
          <Card>
            <CardMedia
              className={classes.cardMedia}
              image={recipeData[recipe].img}
            />
            <List className={classes.ingredientList}>
              {recipeData[recipe].ingredients.map((i, key) => (
                <ListItem alignItems="flex-end" key={key}>
                  {i.ingredient} - {i.amount}
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
        <Grid item sm={12} md={7} className={classes.recipeBody}>
          <Typography variant="h5" className={classes.recipeDescription}>
            {recipeData[recipe].desc}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="body1">
            {recipeData[recipe].method.map((m, key) => (
              <p key={key}>{m}</p>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
