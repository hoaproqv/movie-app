import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function FTextField({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          style={{
            backgroundColor: "#f8f8f8",
            borderRadius: 10,
          }}
          variant="filled"
          color="error"
          {...field}
          fullWidth
          {...other}
          error={!!error}
          helperText={error?.message}
          autoComplete="off"
        />
      )}
    />
  );
}

export default FTextField;
