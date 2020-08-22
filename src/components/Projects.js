import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import projectsData from "./projectsData";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  projectsPage: {
    height: "100%",
  },
  titles: {
    textAlign: "center",
    marginBottom: "1rem",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    // height: "100%",
    padding: "3%",
    backgroundColor: "rgba(255,255,255,8%)",
    borderRadius: "20px",
    marginBottom: "2%",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
  },
  gridList: {
    width: "100%",
  },
  roundTile: {
    borderRadius: "2%",
  },
  tileBar: {
    backgroundColor: "rgba(0,0,0,0.9)",
  },
}));

export default function Projects() {
  const classes = useStyles();
  const isBig = useMediaQuery("(min-width:900px)");
  const isMed = useMediaQuery("(min-width:600px)");
  const isSmall = useMediaQuery("(max-width:599px");
  return (
    <div className={classes.projectsPage}>
      <Container className={classes.titles}>
        <Typography variant="h3">Projects</Typography>
        <Typography variant="body2">
          Various projects I've worked on for fun
        </Typography>
      </Container>
      <Container className={classes.gridContainer}>
        <GridList
          cellHeight={260}
          className={classes.gridList}
          cols={isBig ? 3 : isMed ? 2 : 1}
          spacing={isSmall ? 20 : 8}
        >
          {projectsData.map((tile) => (
            <GridListTile
              key={tile.img}
              cols={tile.cols || 1}
              classes={{ tile: classes.roundTile }}
            >
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                className={classes.tileBar}
                titlePosition={isSmall ? "top" : "bottom"}
              />
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </div>
  );
}
