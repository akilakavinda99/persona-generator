import { Alert, AlertTitle } from "@mui/material";

export default function AlertBox(props) {
  return (
    <Alert severity={props.errorType}>
      <AlertTitle>{props.errorTitle}</AlertTitle>
      <strong>{props.errorMessage}</strong>
    </Alert>
  );
}
