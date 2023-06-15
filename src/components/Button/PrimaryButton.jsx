import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ children, props }) => {
  const sxStyle = {
    marginTop: "30px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontSize: "15px",
    width: "388px"
  };

  return (
    <Button
      sx={sxStyle}
      type="submit"
      {...props}
      variant="contained"
      color="secondary"
      fullWidth
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
