"use client";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  SelectChangeEvent,
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
    const newValues: FormValues = { ...values, [name]: value };
    setValues(newValues);
    onChange?.(newValues);
  };

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => {
    handleChange(fieldName, e.target.value);
  };

  const handleSelectChange = (
    e: SelectChangeEvent<FormValue>,
    fieldName: string
  ) => {
    handleChange(fieldName, e.target.value);
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
                onChange={(e) => handleTextChange(e, field.name)}
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
                  value={
                    values[field.name] ??
                    (field.type === FieldType.Select && field.allowEmpty
                      ? ""
                      : undefined)
                  }
                  label={field.label}
                  displayEmpty={field.allowEmpty}
                  data-testid={`form-field-${field.name}`}
                  onChange={(e) => handleSelectChange(e, field.name)}
                  renderValue={(selected) => {
                    if (selected === "") {
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
