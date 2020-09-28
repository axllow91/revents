import React from "react";
import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

// we created our text input for the form
// to reduce the code for validation and styling
// see EventForm.jsx
export default function MyTextArea({ label, ...props }) {
  const [field, meta] = useField(props);

  // !! -> casting to a boolean
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}