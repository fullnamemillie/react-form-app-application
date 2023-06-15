import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Typography } from "@mui/material";
import PrimaryButton from "../../components/Button/PrimaryButton";
import Form from "../../components/Form/Form";
import InputFile from "../../components/InputFile/InputFile";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useData } from "../../DataContext";

const ThirdStep = () => {
  const { data, setValues } = useData();

  const navigation = useNavigate();

  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  console.log(watch("files"));

  const onSubmit = (data) => {
    navigation("/result");
    setValues(data);
  };

  return (
    <>
      <MainContainer>
        <Typography sx={{marginBottom: "40px"}} components="h2" variant="h5">
          Third Step
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputFile control={control} name={"files"} />
          <PrimaryButton>Next</PrimaryButton>
        </Form>
      </MainContainer>
    </>
  );
};

export default ThirdStep;
