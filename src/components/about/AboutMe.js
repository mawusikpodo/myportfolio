import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import thumbnail from "./thumbnail.jpeg";
import { Avatar } from "@material-ui/core";
import img from "./passport.jpg";
import "./about.css";

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
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export function AboutMe() {
  const classes = useStyles();

  return (
    <>
      <div className="background">
        <div className="about-container">
          <Avatar
            className={classes.avatorimg}
            alt="mawusikpodo"
            src={img}
            style={{ marginBottom: "-100px", zIndex: "20" }}
          />
          <div className="about-title ">
            <Typography>Hi! My name is Robert Mawusi Kpodo,</Typography>
            <br />I am a UX Designer and a Frontend Developer. <br />I like
            exploring and learning new things
          </div>
          <div className="panel about-table">
            <div className="about-plan">
              <Typography className="about-header">
                Languages I understand
              </Typography>
              <ul className="about-features">
                <li className="about-features-item">JavaScript</li>
                <li className="about-features-item">HTML</li>
                <li className="about-features-item">CSS</li>
              </ul>
            </div>
            <div className="about-plan">
              <Typography className="about-header">
                Tools and frameworks I use
              </Typography>
              <ul className="about-features">
                <li className="about-features-item">React</li>
                <li className="about-features-item">Angular</li>
                <li className="about-features-item">Git</li>
                <li className="about-features-item">VS Code</li>
                <li className="about-features-item">Figma</li>
                <li className="about-features-item">Adobe XD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
