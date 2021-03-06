import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import projectsData from "../content/projectsData";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Modal from "@material-ui/core/Modal";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  projectsPage: {
    height: "100%",
    width: "90%",
    margin: "30px 0",
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
    padding: "3% 1.5%",
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
      slug: tile.slug,
      moreImgs: tile.moreImgs,
      gitLink: tile.gitLink,
      liveLink: tile.liveLink,
      descText: tile.descText,
      improvements: tile.improvements,
    });
    if (!isSmall) {
      setModalOpen(!modalOpen);
    }
    if (isSmall) {
      props.history.push(`/projects/${tile.slug}`);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    changeLocation(props.location.pathname);
  });

  return (
    <div className={classes.projectsPage}>
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
              onClick={() => toggleOpen(tile)}
            >
              <img
                src={tile.img}
                alt={tile.title}
                className={isSmall ? null : classes.tileImg}
              />
              <GridListTileBar
                title={tile.title}
                className={classes.tileBar}
                titlePosition={"bottom"}
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
              <React.Fragment>
                <ProjectCard
                  project={modalContent}
                  isDesktop={isSmall ? false : true}
                  closeModal={closeModal}
                />
              </React.Fragment>
            }
          ></Modal>
        ) : null}
      </Container>
    </div>
  );
}
