import { styled } from "@mui/system";
import "@fontsource/lexend";
import { Typography } from "@mui/material";

export const GradientHeading = styled("span")({
  fontWeight: "1500",
  fontSize: "50px",
  background:
    "radial-gradient(circle, rgba(55,77,83,1) 35%, rgba(22,40,44,1) 100%, rgba(0,212,255,1) 100%)",
  fontFamily: "lexend",
  textAlign: "center",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});
