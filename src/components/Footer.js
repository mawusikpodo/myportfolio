import { Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export const Footer = () => {
  return (
    <footer
      position="static"
      style={{
        backgroundColor: "#fafafa",
        height: "100%",
      }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Toolbar>
          <Typography variant="body1" color="inherit">
            &copy; 2021 mawusikpodo
          </Typography>
        </Toolbar>
      </Container>
    </footer>
  );
};
