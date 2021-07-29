import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    // height: "auto",
    margin: "2em",
    // flex: "1 1 0",
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={props.url} target="_blank" rel="noreferrer">
        <CardMedia
          component="img"
          alt=""
          height="140"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom component="h2">
            {props.title}
          </Typography>
          <Typography color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <a
          href={props.code}
          target="_blank"
          rel="noreferrer"
          style={{ color: `white`, textDecoration: `none` }}
        >
          <Button size="small" color="primary">
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
