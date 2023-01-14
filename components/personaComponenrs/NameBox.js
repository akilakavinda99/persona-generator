import { CenteredBox } from "../../styles/componentStyles/centeredBox";

export default function NameBox({ name }) {
  return (
    <>
      <CenteredBox>
        <h3 style={{ fontFamily: "lexend", color: "white", fontSize: "30px" }}>
          {name}
        </h3>
      </CenteredBox>
    </>
  );
}
