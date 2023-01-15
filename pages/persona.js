import { useRouter } from "next/router";
import AlertBox from "../components/Alert";
import { NavBar } from "../components/NavBar";
import PersonaComp from "../components/Persona";
import { GradientHeading } from "../styles/componentStyles/gradientHeading";

export default function Persona() {
  const router = useRouter();
  if (router.query.words == undefined || router.query.img == undefined) {
    return (
      <AlertBox
        errorType="error"
        errorTitle="Error"
        errorMessage="An error has occured, please try again"
      />
    );
  }
  const words = router.query.words;
  const img = router.query.img;

  return (
    <>
      <NavBar />
      <PersonaComp array={words} img={img} />
    </>
  );
}
