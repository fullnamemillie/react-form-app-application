import { FormControl } from "@mui/material";
import React from "react";

const Form = ({ children, ...props }) => {

  return (
    <>
    <form action="" {...props}>
      {children}
    </form>
    </>
  );
};

export default Form;
