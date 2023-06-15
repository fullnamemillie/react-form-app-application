import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import Form from "../../components/Form/Form";
import { Input } from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import parsePhoneNumberFromString from "libphonenumber-js";
import { useData } from "../../DataContext";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct")
    .required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {

  const phoneNumber = parsePhoneNumberFromString(value);

  if (!phoneNumber) {
    return value
  }

  return (
    phoneNumber.formatInternational()
  )
}

const SecondStep = ({ children }) => {
  const {data, setValues} = useData();

  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {email: data.email, hasPhone: data.hasPhone, phoneNumber: data.phoneNumber},
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    navigation("/third");
    setValues(data);
  };


  return (
    <>
      <MainContainer>
        <Typography components="h2" variant="h5">
          Second step
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email")}
            type="email"
            label="Email"
            id="email"
            sx={{ width: 388, marginTop: 2 }}
            email={errors.email ? 1 : 0}
            helperText={errors?.email?.message}
          />

          <FormControlLabel
            control={<Checkbox defaultValue={data.hasPhone} defaultChecked={data.hasPhone} {...register("hasPhone")} />}
            label="Do you have a phone?"
          />

          {hasPhone && (
            <Input
              {...register("phoneNumber")}
              id="phoneNumber"
              type="tel"
              label="Phone Number"
              onChange={(event) => {
                event.target.value = normalizePhoneNumber(event.target.value)
              }}
            />
          )}

          <PrimaryButton>Next</PrimaryButton>
        </Form>
      </MainContainer>
    </>
  );
};

export default SecondStep;
