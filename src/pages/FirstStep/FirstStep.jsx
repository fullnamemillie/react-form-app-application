import React from "react";
import { Input } from "../../components/Input/Input";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../components/Button/PrimaryButton";
import Form from "../../components/Form/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useNavigate } from "react-router-dom";
import { useData } from "../../DataContext";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is reuired field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is reuired field"),
});

const FirstStep = ({ children, ...props }) => {
  const navigation = useNavigate();

  const {data, setValues} = useData(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {firstName: data.firstName, lastName: data.lastName},
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    navigation("/second");
    setValues(data);
  };

  return (
    <>
      <MainContainer>
        <Typography components="h2" variant="h5">
          First step
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("firstName")}
            id="firstName"
            type="text"
            label="First Name"
            sx={{ width: 388, marginTop: 2 }}
            error={!!errors.firstName}
            helperText={errors?.firstName?.message}
          />
          <Input
            {...register("lastName")}
            id="lastName"
            type="text"
            label="Last Name"
            sx={{ width: 388, marginTop: 2 }}
            error={!!errors.lastName}
            helperText={errors?.lastName?.message}
          />
          <PrimaryButton>Next</PrimaryButton>
        </Form>
      </MainContainer>
    </>
  );
};

export default FirstStep;
