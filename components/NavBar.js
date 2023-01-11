import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Popover,
  styled,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import InterestsIcon from "@mui/icons-material/Interests";
import MailIcon from "@mui/icons-material/Mail";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { style } from "@mui/system";
import BadgeIcon from "@mui/icons-material/Badge";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { headingFont } from "../styles/theme";

export const NavBar = () => {
  const MenuItem1 = styled(MenuItem)({
    root: {
      justifyContent: "flex-end",
    },
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")({
    backgroundColor: "white",
    width: "40%",
    borderRadius: "10px",
    paddingLeft: "10px",
  });
  const IconLogo = styled("div")({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  });

  const Icons = styled("div")({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    cursor: "pointer",
  });
  const UserBox = styled("div")({
    display: "flex",
    gap: "5px",
    alignItems: "center",
    cursor: "pointer",
  });
  return (
    <>
      <AppBar
        position="sticky"
        style={{
          background:
            "radial-gradient(circle, rgba(55,77,83,1) 35%, rgba(22,40,44,1) 100%, rgba(0,212,255,1) 100%)",

          boxShadow: "none",
        }}
      >
        <StyledToolbar>
          <IconLogo>
            <BadgeIcon sx={{ marginRight: "5px" }} />
            <ThemeProvider theme={headingFont}>
              <Typography
                variant="h6"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Persona Generator
              </Typography>
            </ThemeProvider>
          </IconLogo>
          <ThemeProvider theme={headingFont}>
            <Typography
              variant="h6"
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              Persona Generator
            </Typography>
          </ThemeProvider>
          <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
            <GitHubIcon />
            <LinkedInIcon />
            <Tooltip title="Portfolio">
              <Avatar
                sx={{ width: "40px", height: "40px" }}
                alt="Remy Sharp"
                src="https://i.postimg.cc/bv69wQFL/Dark-Red-Neon-Futuristic-Instagram-Profile-Picture.png"
              />
            </Tooltip>
          </Icons>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ display: { xs: "block", sm: "none" } }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon color="white" />
          </IconButton>
          <Popover
            open={open}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem1 onClick={handleClose}>
              <GitHubIcon />
              Github
            </MenuItem1>
            <MenuItem1 onClick={handleClose}>
              <LinkedInIcon />
              LinkedIn
            </MenuItem1>
            <MenuItem1 onClick={handleClose}>
              <Tooltip title="Portfolio">
                <Avatar
                  sx={{ width: "20px", height: "20px" }}
                  alt="Remy Sharp"
                  src="https://i.postimg.cc/bv69wQFL/Dark-Red-Neon-Futuristic-Instagram-Profile-Picture.png"
                />
              </Tooltip>
              Portfolio
            </MenuItem1>
          </Popover>
        </StyledToolbar>
      </AppBar>
    </>
  );
};
