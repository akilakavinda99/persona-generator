import { CenteredBox } from "../../styles/componentStyles/centeredBox";

export default function AgeBox({ age, occupation, gender }) {
  return (
    <>
      <ul style={{}}>
        <li style={{ fontFamily: "lexend", color: "white" }}>Age- {age}</li>
        <li style={{ fontFamily: "lexend", color: "white" }}>
          Gender- {gender}
        </li>
        <li style={{ fontFamily: "lexend", color: "white" }}>
          Occupation - {occupation}
        </li>
      </ul>
    </>
  );
}
