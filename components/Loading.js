export default function Loading({ mTop, src }) {
  return (
    <>
      <div style={{ marginTop: mTop }}>
        <img src={src} style={{ width: "400px", height: "400px" }} />
      </div>
    </>
  );
}
