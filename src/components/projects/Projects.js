import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
// import facebook from "./facebook.png";
import Card from "./Card";
import projects from "../projectsdata";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    // backgroundColor: "#ffff",
  },
  grid: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    color: theme.palette.text.secondary,
  },
  title: {
    textAlign: "center",
    margin: "1em",
  },
  subTitle: {
    textAlign: "center",
    margin: "1em",
  },
}));

export function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.title} variant="h5">
          My Projects
        </Typography>
        <Typography className={classes.subTitle} variant="body1">
          Here are few projects I have worked on
        </Typography>
        <div className={classes.grid}>
          {projects.map((project) => (
            <Card
              image={project.image}
              title={project.title}
              description={project.description}
              url={project.url}
              code={project.code}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
