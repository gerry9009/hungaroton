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

import { DynamicFormProps, FieldType } from "./DynamicForm.types";

export const DynamicForm = ({ fields, onChange }: DynamicFormProps) => {
  const initialValues = fields.reduce((acc, field) => {
    if (field.defaultValue !== undefined) acc[field.name] = field.defaultValue;
    return acc;
  }, {} as Record<string, any>);
  const [values, setValues] = useState<Record<string, any>>(initialValues);

  const handleChange = (name: string, value: string | number | null) => {
    const newValues = { ...values, [name]: value };
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
                  // value={values[field.name] ?? ""}
                  value={
                    values[field.name] ??
                    (field.type === FieldType.Select && field.allowEmpty
                      ? ""
                      : undefined)
                  }
                  label={field.label}
                  displayEmpty={field.allowEmpty}
                  onChange={(e: SelectChangeEvent) =>
                    handleChange(field.name, e.target.value)
                  }
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
