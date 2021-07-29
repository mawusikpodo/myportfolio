import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Fab,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import * as React from "react";
import SideDrawer from "./SideDrawer";
import BackToTop from "./BackToTop";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fafafa",
    borderBottom: "1px solid #bfbfbf",
  },

  navbarDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  navListDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkText: {
    textDecoration: "none",
    textTransform: `uppercase`,
    color: `#1c1818`,
  },
});

const navLinks = [
  // { title: "GitHub", path: `https://github.com/mawusikpodo` },
  // { title: "Projects", path: "/projects" },
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/contacts" },
];

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.root} elevation={0}>
        <Toolbar component="nav">
          <Container className={classes.navbarDisplayFlex}>
            <IconButton edge="start" aria-label="home">
              <Link
                to="/"
                style={{
                  color: `#7510F7`,
                  textDecoration: `none`,
                  textTransform: `uppercase`,
                }}
              >
                <Typography color="initial"> RMK </Typography>
              </Link>
            </IconButton>

            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navListDisplayFlex}
              >
                {navLinks.map(({ title, path }) => (
                  <Link to={path} key={title} className={classes.linkText}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>

      <Toolbar id="back-to-top-anchor" />

      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
