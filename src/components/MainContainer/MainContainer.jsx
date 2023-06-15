import { Container } from "@mui/material";
import React from "react";

const MainContainer = ({ children, ...props }) => {
  const sxStyle = {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <>
      <Container sx={sxStyle} container="main" maxWidth="xs" {...props}>
        {children}
      </Container>
    </>
  );
};

export default MainContainer;
