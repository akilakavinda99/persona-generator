export default function BioBox({ mTop, heading, description }) {
  return (
    <>
      <div style={{ marginTop: mTop }}>
        <h3 style={{ fontFamily: "lexend", color: "#949494" }}>{heading}</h3>
        <p style={{ color: "white", fontFamily: "lexend", fontSize: "13px" }}>
          {description}
        </p>
      </div>
    </>
  );
}
