import Head from "next/head";
import { useEffect, useState } from "react";
import AlertBox from "../components/Alert";
import ConnectionCheck from "../components/ConnectionCheck";
import TextInput from "../components/Input";
import { NavBar } from "../components/NavBar";
import NotSupported from "../components/NotSupported";
import { CenteredHeading } from "../styles/componentStyles/centeredHeading";
import { Box, Slide, ThemeProvider } from "@mui/material";
import { headingFont } from "../styles/theme";
import { GradientHeading } from "../styles/componentStyles/gradientHeading";
import { CenteredBox } from "../styles/componentStyles/centeredBox";
import GraidentButton from "../components/Button";
import { StyledListItem } from "../styles/componentStyles/listItemStyles";
import { ParaStyled } from "../styles/componentStyles/paraStyles";
import TitlebarImageList from "../components/ImageList";
import Loading from "../components/Loading";
var mobile = require("is-mobile");
import { useRouter } from "next/router";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(1000);
  const [left, setLeft] = useState(false);
  const [checked, setChecked] = useState(false);
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState([]);
  const [Regnrteresult, setRegnrteResult] = useState();
  const [RegnrteTxt, setRegnerteText] = useState();
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [imgURL, setImageURL] = useState([]);
  const [img, setImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const router = useRouter();

  const selectImage = (image) => {
    if (img == "") {
      setImage("");
      setImage(image);
    } else {
      setImage(image);
    }
  };

  const handleChange = (event) => {
    if (animalInput == "") {
      setInputError(true);
    } else {
      setLeft(true);
      setInputError(false);

      console.log("Sdsdsd");
      setChecked((prev) => !prev);
      setImage("");
      onSubmit(event);
    }
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

  async function onSubmit(event) {
    setImage("");
    setImageLoading(true);
    setRegnerteText(animalInput);
    event.preventDefault();
    setLoading(true);
    const response = await fetch("/api/textGenerate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    if (data.code == 500) {
      setError(true);
    } else {
      setResult(data.result);
      setLoading(false);
      setAnimalInput("");
      var text = data.result[1] + data.result[2] + data.result[3];
      autoImageGenrte(text);
    }
  }

  async function autoImageGenrte(text) {
    setImageLoading(true);
    const response = await fetch("/api/imageGenerate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: text }),
    });
    const data = await response.json();
    setImageURL(data.result);
    setImageLoading(false);
    // setAnimalInput("");
  }
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
      ) : hasError ? (
        <AlertBox
          errorType="error"
          errorTitle="Error"
          errorMessage="An error has occured, please try again"
        />
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
                    <Box sx={{ width: "50%", marginTop: "50px" }}>
                      {
                        <CenteredBox>
                          <TextInput
                            inputHeight="100px"
                            inputWidth="400px"
                            label="Enter your description.."
                            placeholder="Describe your application or scenario, it will generate the details for a random user if you want you can be more specific..."
                            defaultValue={RegnrteTxt}
                            hasError={inputError}
                            helperText={
                              inputError ? "Description cant be blank" : ""
                            }
                            onChange={(event) =>
                              setAnimalInput(
                                event.target.value == ""
                                  ? RegnrteTxt
                                  : event.target.value
                              )
                            }
                            focused
                          />
                          <GraidentButton
                            width="150px"
                            text={loading ? "Loading" : "Regenerate"}
                            height="50px"
                            onClick={(event) => onSubmit(event)}
                            disabled={loading ? true : false}
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
                    <Box sx={{ width: "75%" }}>
                      {
                        <CenteredBox>
                          {loading ? (
                            <Loading
                              mTop="0px"
                              src="https://i.postimg.cc/rmMq2xnR/16391-text-loading.gif"
                            />
                          ) : result.length == 0 ||
                            result[0] == "Irrelevant Data" ||
                            result.filter((string) => string.includes("Name:"))
                              .length == 0 ? (
                            <AlertBox
                              errorType="error"
                              errorTitle="Oopsss"
                              errorMessage="Looks like you have entered an invalid description"
                            />
                          ) : (
                            result.map((item) => (
                              <StyledListItem key={item}>{item}</StyledListItem>
                            ))
                          )}
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
                    onChange={(event) => setAnimalInput(event.target.value)}
                    hasError={inputError}
                    helperText={inputError ? "Description cant be blank" : ""}
                  />
                  <GraidentButton
                    width="150px"
                    text="Generate"
                    height="50px"
                    onClick={(event) => handleChange(event)}
                  />
                </CenteredBox>
              </>
            )}

            {left ? (
              <>
                {imageLoading ? (
                  <CenteredBox>
                    <Loading
                      mTop="10px"
                      src="https://i.postimg.cc/LsS2PGdZ/86075-loading-upload-image.gif"
                    />
                  </CenteredBox>
                ) : (
                  <>
                    <Box sx={{ width: "100%" }}>
                      <TitlebarImageList
                        array={imgURL}
                        onClick={(value) => selectImage(value)}
                        img={img}
                      />
                    </Box>
                  </>
                )}
              </>
            ) : (
              <>
                <ThemeProvider theme={headingFont}>
                  <CenteredHeading>
                    <GradientHeading>Images</GradientHeading>
                  </CenteredHeading>
                </ThemeProvider>
                <CenteredBox>
                  <ParaStyled>
                    We will give a try to generate the user images based on your
                    description, sometimes the images might be a bit weird, no
                    worries you can generate your own !!
                  </ParaStyled>
                </CenteredBox>
              </>
            )}
            {img != "" ? (
              <GraidentButton
                text="Generate Persona"
                onClick={() => {
                  router.push({
                    pathname: "/persona",
                    query: { words: result, img: img },
                  });
                }}
              ></GraidentButton>
            ) : (
              <></>
            )}
          </ConnectionCheck>
        </>
      )}
    </>
  );
}
