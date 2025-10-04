"use client";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import { useState } from "react";

import {
  DynamicFormProps,
  FieldType,
  FormValue,
  FormValues,
} from "./DynamicForm.types";

export const DynamicForm = ({ fields, onChange }: DynamicFormProps) => {
  const initialValues = fields.reduce<FormValues>((acc, field) => {
    if (field.defaultValue !== undefined) acc[field.name] = field.defaultValue;
    return acc;
  }, {});
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = (name: string, value: FormValue) => {
    console.log("Handling change for", name, "with value", value);
    const newValues: FormValues = { ...values, [name]: value };
    setValues(newValues);
    onChange?.(newValues);
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "background.paper",
        maxWidth: 400,
        mx: "auto",
      }}
    >
      <Stack spacing={3}>
        {fields.map((field) => {
          if (
            field.type === FieldType.Text ||
            field.type === FieldType.Search
          ) {
            return (
              <TextField
                key={field.name}
                id={`${field.name}-field`}
                type={field.type}
                label={field.label}
                variant="outlined"
                fullWidth={field.fullWidth ?? true}
                value={values[field.name] ?? ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                multiline
                data-testid={`form-field-${field.name}`}
              />
            );
          }

          if (field.type === FieldType.Select) {
            return (
              <FormControl key={field.name} fullWidth>
                <InputLabel id={`${field.name}-label`}>
                  {field.label}
                </InputLabel>
                <Select
                  labelId={`${field.name}-label`}
                  id={`${field.name}-field`}
                  value={values[field.name] ?? ""}
                  label={field.label}
                  displayEmpty={field.allowEmpty}
                  data-testid={`form-field-${field.name}`}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  renderValue={(selected) => {
                    if (selected === "") {
                      return "";
                    }
                    const option = field.options.find(
                      (opt) => opt.value === selected
                    );
                    return option ? option.label : "";
                  }}
                >
                  {field.allowEmpty && (
                    <MenuItem value="">
                      <em>-- {field.emptyOptionLabel} --</em>
                    </MenuItem>
                  )}
                  {field.options.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            );
          }

          return null;
        })}
      </Stack>
    </Box>
  );
};

export default DynamicForm;
