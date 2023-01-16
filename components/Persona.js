import { useRef, useState } from "react";
import { CenteredBox } from "../styles/componentStyles/centeredBox";
import GraidentButton from "./Button";
import html2canvas from "html2canvas";
import NameBox from "./personaComponenrs/NameBox";
import AgeBox from "./personaComponenrs/AgeBox";
import BioBox from "./personaComponenrs/Bio";
import removeWords from "../utils/removeWords";

export default function PersonaComp(props) {
  const ref = useRef(null);
  const [downloadLoading, setDownloadLoading] = useState(false);

  const handleDownloadImage = async () => {
    setDownloadLoading(true);
    const element = ref.current;
    const canvas = await html2canvas(element, {
      proxy: "https://html2canvas-proxy-host.vercel.app/?",
      // backgroundColor: "none",
      logging: true,
      scale: 3,

      //to enable cross origin perms
    }).then((canva) => {
      var link = document.createElement("a");
      link.download = `${removeWords(props.array[0]) + " Persona"}.png`;
      link.href = canva.toDataURL();
      // Click the link to download the image
      link.click();
      setDownloadLoading(false);
    });
  };
  return (
    <>
      <CenteredBox>
        <div ref={ref}>
          <div
            style={{
              width: "1000px",
              height: "600px",
              backgroundColor: "#1a1a1a",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "20px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    marginTop: "30px",
                    marginRight: "10px",
                  }}
                >
                  <NameBox name={removeWords(props.array[0])} />
                  <AgeBox
                    age={removeWords(props.array[1])}
                    gender={removeWords(props.array[2])}
                    occupation={removeWords(props.array[3])}
                  />
                  <BioBox
                    mTop="30px"
                    heading="Bio"
                    description={removeWords(props.array[7])}
                  />
                  <BioBox
                    mTop="30px"
                    heading="Devices"
                    description={removeWords(props.array[9])}
                  />
                </div>

                <div
                  style={{
                    marginTop: "10px",
                    marginRight: "20px",
                  }}
                >
                  <BioBox
                    heading="Motivations"
                    description={removeWords(props.array[6])}
                  />{" "}
                  <BioBox
                    mTop="40px"
                    heading="Goals"
                    description={removeWords(props.array[5])}
                  />{" "}
                  <BioBox
                    mTop="50px"
                    heading="Pain Points"
                    description={removeWords(props.array[8])}
                  />
                </div>
              </div>
            </div>
            <img
              width="300px"
              height="550px"
              style={{
                objectFit: "cover",
                marginRight: "20px",
                marginTop: "20px",
                borderRadius: "10px",
              }}
              src={props.img}
            />
          </div>{" "}
        </div>
      </CenteredBox>
      <CenteredBox>
        <GraidentButton
          text={downloadLoading ? "Downloading.." : "Download Persona"}
          height="50px"
          width="250px"
          onClick={handleDownloadImage}
        />
      </CenteredBox>
    </>
  );
}
