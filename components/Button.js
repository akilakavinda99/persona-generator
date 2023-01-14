import { Button } from "@mui/material";
import "@fontsource/lexend";

export default function GraidentButton({ width, text, height, ...rest }) {
  return (
    <Button
      sx={{
        "&.MuiButton-root": {
          background:
            "linear-gradient(90deg, rgba(55,77,83,1) 25%, rgba(22,40,44,1) 100%, rgba(0,212,255,1) 100%)!important",
          color: "white",
          fontFamily: "lexend",
          borderRadius: "10px",
        },
        marginTop: "20px",
        marginBottom: "20px",

        width: width,
        height: height,
      }}
      {...rest}
    >
      {text}
    </Button>
  );
}
