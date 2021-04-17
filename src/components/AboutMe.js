import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import thumbnail from "./thumbnail.jpeg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import { Avatar, Box, Container, IconButton } from "@material-ui/core";
import img from "./passport.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    boxSizing: "border-box",
  },
  bgimg: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${thumbnail})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "blur(8px)",
    webkitFilter: "blur(8px)",
    height: "630px",
  },
  hero: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    backgroundColor: "rgba(0,0,0, 0.4)" /* Black w/opacity/see-through */,
    color: "white",
    fontWeight: "bold",
    border: "3px solid #f1f1f1",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    width: "80%",
    padding: "20px",
    textAlign: "center",
    alignItems: "center",
  },
  avatorimg: {
    width: theme.spacing(26),
    height: theme.spacing(26),
  },
}));

export function AboutMe() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.bgimg}></div>
      <Box className={classes.root}>
        <Container maxWidth="sm" className={classes.hero}>
          <div>
            <Avatar
              className={classes.avatorimg}
              alt="mawusikpodo"
              src={img}
              style={{ margin: "10px" }}
            />
          </div>
          <div>
            <Typography variant="h3" gutterBottom>
              Hi there!
            </Typography>
            <Typography variant="h5" gutterBottom>
              I'm Mawusi Kpodo!
            </Typography>

            <Typography variant="body1">A FullStack Developer</Typography>
            <Typography variant="body1">(MERN STACK)</Typography>
            <IconButton>
              {" "}
              <a
                href="https://linkedin.com/in/mawusikpodo/"
                target="_blank"
                rel="noreferrer"
                style={{ color: `white`, textDecoration: `none` }}
              >
                <LinkedInIcon />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://github.com/mawusikpodo/"
                target="_blank"
                rel="noreferrer"
                style={{ color: `white`, textDecoration: `none` }}
              >
                <GitHubIcon />{" "}
              </a>
            </IconButton>
            <IconButton>
              <a
                href="mailto:mawusikpodo@yahoo.com"
                style={{ color: `white`, textDecoration: `none` }}
              >
                <EmailIcon />{" "}
              </a>
            </IconButton>
            <IconButton>
              <a
                href="tel:+233247172637"
                style={{ color: `white`, textDecoration: `none` }}
              >
                <CallIcon />{" "}
              </a>
            </IconButton>
          </div>
        </Container>
      </Box>
    </>
  );
}
