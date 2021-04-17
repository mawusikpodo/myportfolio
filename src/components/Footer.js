import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export const Footer = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#8e6e71",
        height: "100%",
      }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Toolbar>
          <Typography variant="body1" color="inherit">
            &copy; 2021 Mawusikpodo
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
