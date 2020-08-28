import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import projectsData from "../content/projectsData";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Modal from "@material-ui/core/Modal";
import ProjectCard from "./ProjectCard";

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
    width: "90%",
  },
  titles: {
    textAlign: "center",
    margin: "1.5rem auto",
    marginBottom: "2rem",
  },
  greenLink: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "rgb(35, 255, 64)",
    },
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "1.5%",
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
    "&:hover": {
      cursor: "pointer",
    },
  },
  tileImg: {
    "&:hover": {
      filter: "brightness(50%) drop-shadow(0px 0px 5px rgba(0,0,0,0.1))",
    },
  },
  tileBar: {
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  modal: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: 0,
  },
  modalBox: {
    width: "70%",
    outline: 0,
  },
}));

export default function Projects(props) {
  const classes = useStyles();
  const { changeLocation } = props;
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});
  const { isBig, isMed, isSmall } = props.media;

  const toggleOpen = (tile) => {
    setModalContent({
      title: tile.title,
      img: tile.img,
      moreImgs: tile.moreImgs,
      gitLink: tile.gitLink,
      liveLink: tile.liveLink,
      descText: tile.descText,
      improvements: tile.improvements,
    });
    if (!isSmall) {
      setModalOpen(!modalOpen);
    }
  };

  useEffect(() => {
    changeLocation(props.location.pathname);
  });

  return (
    <div className={classes.projectsPage}>
      <Container className={classes.titles}>
        <Typography variant="h5">
          Questions?{" "}
          <Link to="/contact" className={classes.greenLink}>
            {`> Get in Touch <`}
          </Link>
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
              onClick={!isSmall ? () => toggleOpen(tile) : null}
            >
              <img
                src={tile.img}
                alt={tile.title}
                className={classes.tileImg}
              />
              <GridListTileBar
                title={tile.title}
                className={classes.tileBar}
                titlePosition={isSmall ? "top" : "bottom"}
              />
            </GridListTile>
          ))}
        </GridList>
        {isMed ? (
          <Modal
            className={classes.modal}
            open={modalOpen}
            onClose={toggleOpen}
            aria-labelledby={modalContent.title}
            aria-describedby={modalContent.title}
            children={
              <ProjectCard
                project={modalContent}
                isDesktop={isSmall ? false : true}
              />
            }
          >
            {/* <ProjectCard
              project={modalContent}
              isDesktop={isSmall ? false : true}
            /> */}
          </Modal>
        ) : null}
      </Container>
    </div>
  );
}
