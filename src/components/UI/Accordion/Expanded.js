const Expanded = ({ children }) => {
  const hrStyle = {
    color: "#67FBE0",
    height: "3px",
    border: "none",
    backgroundColor: "#67FBE0",
    width: "50%",
    margin: "auto",
  };

  return (
    <>
      <hr style={hrStyle} />
      <br />
      <div style={styles}>{children}</div>
    </>
  );
};

const styles = {
  textAlign: "center",
  marginBottom: "2rem",
};

export default Expanded;
