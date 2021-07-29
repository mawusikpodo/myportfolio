import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import hero from "./hero.svg";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3em",
    marginTop: "2em",
    flexWrap: "wrap",
    height: "500px",
  },
  title: {
    textAlign: "center",
  },
  button: {
    border: "none",
    color: "white",
    padding: "10px 27px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    marginBottom: "20px",
    cursor: "pointer",
    backgroundColor: "#7510F7",
    borderRadius: "25px",
  },
  headerText: {
    margin: "10px 0px",
  },
  subheaderText: {
    marginBottom: "30px",
  },
  img: {
    margin: "2rem",
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Box className={classes.title}>
          <img
            className={classes.img}
            src={hero}
            alt=""
            width="210px"
            height="auto"
          />
          <Typography className={classes.headerText} variant="body1">
            Hello World! I am Robert Mawusi Kpodo
          </Typography>
          <Typography className={classes.subheaderText} variant="h4">
            UX Designer & Frontend Developer
          </Typography>
          <Link to="/contacts">
            <button type="button" className={classes.button}>
              Let's Talk!
            </button>
          </Link>
        </Box>
      </div>
    </>
  );
}

export default Hero;
