import { TextField } from "@mui/material";
import "@fontsource/lexend";

export default function TextInput({
  id,
  placeholder,
  hasError,
  helperText,
  label,
  inputWidth,
  inputHeight,
  ...rest
}) {
  return (
    <TextField
      id={id}
      label={label}
      placeholder={placeholder}
      error={hasError}
      multiline
      rows={4}
      helperText={helperText}
      sx={{
        "& .MuiInputLabel-root": {
          color: "#062961",
          fontFamily: "lexend",
        },
        width: inputWidth,

        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      }}
      {...rest}
    />
  );
}
