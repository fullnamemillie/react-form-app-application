import { TextField } from "@mui/material";
import React, { forwardRef } from "react";

export const Input = forwardRef((props, register) => {
  return (
    <>
      <TextField
        color="secondary"
        variant="outlined"
        fullWidth
        {...props}
        inputRef={register}
      ></TextField>
    </>
  );
});
