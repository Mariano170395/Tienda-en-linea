import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";


//npm i react-hook-form@6.15.1, hookform version 7 cambia todo

const FormInput = ({ name,label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required
      />
    </Grid>
  );
};

export default FormInput;
