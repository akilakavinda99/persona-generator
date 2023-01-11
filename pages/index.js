import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AlertBox from "../components/Alert";
import ConnectionCheck from "../components/ConnectionCheck";
import TextInput from "../components/Input";
import { NavBar } from "../components/NavBar";
import NotSupported from "../components/NotSupported";
import styles from "../styles/Home.module.css";
import { CenteredHeading } from "../styles/componentStyles/centeredHeading";
import {
  Box,
  Button,
  CircularProgress,
  Slide,
  ThemeProvider,
} from "@mui/material";
import { headingFont } from "../styles/theme";
import { GradientHeading } from "../styles/componentStyles/gradientHeading";
import { CenteredBox } from "../styles/componentStyles/centeredBox";
import GraidentButton from "../components/Button";
var mobile = require("is-mobile");

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(1000);
  const [left, setLeft] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setLeft(true);
    console.log("Sdsdsd");
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  var isMobile = mobile();
  return (
    <>
      <NavBar />
      {isMobile ? (
        <>
          <NotSupported />
        </>
      ) : windowWidth < 1000 ? (
        <>
          <NotSupported />
        </>
      ) : (
        <>
          <ConnectionCheck>
            <ThemeProvider theme={headingFont}>
              <CenteredHeading>
                Create Your Persona Using <GradientHeading>AI</GradientHeading>
              </CenteredHeading>
            </ThemeProvider>

            {left ? (
              <>
                <Box sx={{ width: "100%", display: "flex" }}>
                  <Slide
                    direction="right"
                    in={checked}
                    mountOnEnter
                    unmountOnExit
                    timeout={{ appear: 100, enter: 900, exit: 100 }}
                  >
                    <Box sx={{ width: "50%" }}>
                      {
                        <CenteredBox>
                          <TextInput
                            inputHeight="100px"
                            inputWidth="400px"
                            label="Enter your description.."
                            placeholder="Describe your application or scenario, it will generate the details for a random user if you want you can be more specific..."
                          />
                          <GraidentButton
                            width="150px"
                            text="Generate"
                            height="50px"
                            onClick={() => handleChange()}
                          />
                        </CenteredBox>
                      }
                    </Box>
                  </Slide>
                  <Slide
                    direction="left"
                    in={checked}
                    mountOnEnter
                    unmountOnExit
                    timeout={{ appear: 100, enter: 900, exit: 100 }}
                  >
                    <Box sx={{ width: "50%" }}>
                      {
                        <CenteredBox>
                          <CircularProgress color="success" />
                        </CenteredBox>
                      }
                    </Box>
                  </Slide>
                </Box>
              </>
            ) : (
              <>
                <CenteredBox>
                  <TextInput
                    inputHeight="100px"
                    inputWidth="800px"
                    label="Enter your description.."
                    placeholder="Describe your application or scenario, it will generate the details for a random user if you want you can be more specific..."
                  />
                  <GraidentButton
                    width="150px"
                    text="Generate"
                    height="50px"
                    onClick={() => handleChange()}
                  />
                </CenteredBox>
              </>
            )}
          </ConnectionCheck>
        </>
      )}
    </>
  );
}
