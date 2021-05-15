import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import LinkIcon from "@material-ui/icons/Link";
import Typography from "@material-ui/core/Typography";
import { Container, IconButton } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    height: "100%",
    minHeight: "630px",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: 345,
    margin: "20px",
  },
});

const projects = [
  {
    id: "1",
    title: "Blog",
    description: "Built with react and material ui",
    url: "https://mawusikpodo.github.io/blog/",
    code: "https://github.com/mawusikpodo/blog",
  },
  {
    id: "2",
    title: "Todoapp",
    description: "Built with react and material ui",
    url: "https://mawusikpodo-todo.herokuapp.com",
    code: "https://github.com/mawusikpodo/todoapp",
  },
  {
    id: "3",
    title: "WeatherApp",
    description: "Built with react, material ui and open weather API",
    url: "https://mawusikpodo.github.io/WeatherApp/",
    code: "https://github.com/mawusikpodo/WeatherApp",
  },
  {
    id: "4",
    title: "Expence tracker",
    description:
      " a full stact application built with react, context api, express, mongodb and material ui",
    url: "https://transactionsapp123.herokuapp.com",
    code: "https://github.com/mawusikpodo/Income-expence-tracker",
  },
];

export function Projects() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      {projects.map((project) => (
        <Card className={classes.content} key={project.id}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton size="small" color="primary">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: `#8e6e71`, textDecoration: `none` }}
              >
                <LinkIcon />
              </a>
            </IconButton>
            <IconButton size="small" color="primary">
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                style={{ color: `#8e6e71`, textDecoration: `none` }}
              >
                <CodeIcon />
              </a>
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}
