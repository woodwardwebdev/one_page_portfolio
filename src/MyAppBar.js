import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import RowingIcon from "@material-ui/icons/Rowing";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import MailIcon from "@material-ui/icons/Mail";
import KitchenIcon from "@material-ui/icons/Kitchen";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    font: "Cutive Mono",
  },
  myBar: {
    backgroundColor: "#121212",
    color: "rgba(255,255,255,0.9)",
    borderBottom: "1px solid white",
    height: "7vh",
    justifyContent: "center",
    fontFamily: "Cutive Mono, Helvetica, Sans Serif",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    marginLeft: "0.9rem",
    marginTop: "0.3rem",
    fontSize: "1.6rem",
    color: "rgba(255,255,255,0.9)",
    "&:hover": {
      textShadow: "20px 20px 20px #fff",
    },
  },
  drawerPaper: {
    marginTop: "7vh",
    backgroundColor: "rgba(80,80,80,1)",
    color: "white",
    padding: "1vw",
  },
  drawerLink: {
    color: "white",
    textDecoration: "none",
  },
  drawerItem: {
    borderRadius: "8px",
    "&:hover $drawerIcon": { color: theme.palette.primary[500] },
  },
  drawerIcon: {},
}));

export default function MyAppBar(props) {
  const classes = useStyles();
  const [drawerOpen, setdrawerOpen] = React.useState(false);
  const { location } = props;
  const { isBig } = props.media;

  const toggleDrawer = () => {
    setdrawerOpen(!drawerOpen);
  };

  const handleChangeLocation = (newLocation) => {
    toggleDrawer();
  };

  const menuItems = [
    { name: "about", display: "About", icon: <PersonIcon /> },
    { name: "skills", display: "Skills", icon: <RowingIcon /> },
    { name: "projects", display: "Projects", icon: <AccountTreeIcon /> },
    { name: "contact", display: "Contact", icon: <MailIcon /> },
    { name: "bonus", display: "Bonus Recipes", icon: <KitchenIcon /> },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.myBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={isBig ? "left" : "top"}
            open={drawerOpen}
            onClose={toggleDrawer}
            classes={{ paper: classes.drawerPaper }}
          >
            <List>
              {menuItems.map((item, index) => (
                <Link
                  to={`/${item.name}`}
                  className={classes.drawerLink}
                  key={index}
                >
                  <ListItem
                    button
                    key={item.name}
                    className={classes.drawerItem}
                    onClick={() => handleChangeLocation(item.display)}
                  >
                    <ListItemIcon
                      className={classes.drawerIcon}
                      color="inherit"
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.display} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
          <Typography variant="h6" className={classes.title} noWrap={true}>
            Colin Woodward {location}
          </Typography>
          <a
            className={classes.navLink}
            href="https://github.com/woodwardwebdev"
            target="new"
            color="inherit"
          >
            <GitHubIcon className={classes.navLink} />
          </a>
          <a
            href="https://linkedin.com/in/colin-woodward-95b628180"
            target="new"
            color="inherit"
          >
            <LinkedInIcon className={classes.navLink} />
          </a>
          <a
            href="https://twitter.com/woodwardaudio"
            target="new"
            color="inherit"
          >
            <TwitterIcon className={classes.navLink} />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
