import React from "react";
import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormikContext } from "formik";

// we created our text input for the form
// to reduce the code for validation and styling
// see EventForm.jsx
export default function MyDateInput({ label, ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  // !! -> casting to a boolean
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => setFieldValue(field.name, value)}
      />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
