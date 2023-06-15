import React from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useData } from '../../DataContext';
import { InsertDriveFile } from '@mui/icons-material';
import PrimaryButton from '../../components/Button/PrimaryButton';
// import swal from "sweetalert";

const Result = () => {
  const sxStyle = {
    marginBottom: '15px'
  };
  const { data } = useData();

  const { files, ...entries } = data;

  const parsedEntries = Object.keys(entries)
    .map((key) => ({ key, value: entries[key] }))
    .filter((entry) => entry.value);

  // const onSubmit = async () => {
  //   const formData = new FormData();

  //   if (data.files) {
  //     files.forEach((file) => {
  //       formData.append("files", file, file.name);
  //     });
  //   }

  //   entries.forEach((entry) => {
  //     formData.append(entry[0], entry[1]);
  //   });

  //   const res = await fetch("https://localhost: 4000", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   if (res.status === 200) {
  //     swal.fire("Your form was sent!");
  //   }
  // };

  return (
    <>
      <MainContainer>
        <Typography components="h2" variant="h5">
          Form Values
        </Typography>
        <TableContainer sx={{ marginTop: '20px', marginBottom: '15px' }} component={Paper}>
          <Table sx={sxStyle}>
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {parsedEntries.map((entry) => (
                <TableRow key={entry.key}>
                  <TableCell>{entry.key}</TableCell>
                  <TableCell align="right">{entry.value.toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {files && (
          <>
            <Typography components="h2" variant="h5">
              Files
            </Typography>
            <List>
              {files.map((file, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={file.name} secondary={file.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}
        <PrimaryButton>Submit</PrimaryButton>
        {/* <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton> */}
        <Link style={{ color: 'black', marginTop: '15px', fontSize: '18px' }} to="/">
          Start Over
        </Link>
      </MainContainer>
    </>
  );
};

export default Result;