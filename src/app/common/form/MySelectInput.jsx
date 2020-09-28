import React from "react";
import { useField } from "formik";
import { FormField, Label, Select } from "semantic-ui-react";

// we created our text input for the form
// to reduce the code for validation and styling
// see EventForm.jsx
export default function MyTextInput({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  // !! -> casting to a boolean
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <Select
        clearable
        value={field.value || null}
        onChange={(e, data) => helpers.setValue(data.value)}
        onBlur={() => helpers.setTouched(true)}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
