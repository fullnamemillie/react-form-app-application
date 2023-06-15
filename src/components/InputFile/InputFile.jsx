import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { InsertDriveFile } from "@mui/icons-material";
import s from "./InputFile.module.css";

const InputFile = ({ control, name }) => {
  const handleUploadFiles = (files, current) => {
    return [...Array.from(files), ...current];
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={[]}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
          <Box sx={{display: "flex", justifyContent: "center"}}>
          <input className={s.inputFile}
              type="file"
              id="file"
              name="file"
              multiple
              onChange={(e) =>
                onChange(handleUploadFiles(e.target.files, value))
              }
            />
            <label className={s.label} for="file"><span>Add a file</span></label>
          </Box>
            <List>
              {value.map((f, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}
      />
    </>
  );
};

export default InputFile;
