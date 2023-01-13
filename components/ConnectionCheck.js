import { Detector } from "react-detect-offline";

export default function ConnectionCheck(props) {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div>
              <h1>No connection</h1>
            </div>
          )
        }
      />
    </>
  );
}
