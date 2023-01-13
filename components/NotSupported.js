import { NotSupportedImg } from "../styles/componentStyles/notSupportedStyles";
import AlertBox from "./Alert";

export default function NotSupported(props) {
  return (
    <>
      <AlertBox
        errorType="error"
        errorTitle="Error"
        errorMessage="This application is not supported on mobile devices or small screen sizes."
      />
      <NotSupportedImg src="https://i.postimg.cc/h48BjsBK/124524-error-404.gif" />
    </>
  );
}
