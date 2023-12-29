import React from "react";

const Expanded = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

const styles = {
  padding: "15px",
};

export default Expanded;
