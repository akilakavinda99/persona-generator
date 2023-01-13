import { MenuItem, styled, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const IconLogo = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const Icons = styled("div")({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  cursor: "pointer",
});

export const MenuItem1 = styled(MenuItem)({
  root: {
    justifyContent: "flex-end",
  },
});
