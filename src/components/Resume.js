import { Container } from "@material-ui/core";
import React from "react";

export const Resume = () => {
  return (
    <Container>
      <iframe
        src="https://drive.google.com/file/d/1_U-gDxdZAy4CYU_Cqdb7fhzXsvHWbRF6/view?usp=sharing"
        title="Resume"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "630px",
        }}
        frameBorder="0"
      ></iframe>
    </Container>
  );
};
