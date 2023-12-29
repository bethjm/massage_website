import React from "react";

import "./TinyButton.css";

function TinyButton(props) {
  const buttonStyle = {
    backgroundColor: props.color || "#F9CEE0",
    borderColor: props.color || "#F9CEE0",
    "--button-hover-color": props.hoverColor || "var(--dark-blue)",
    borderRadius: "2rem",
  };

  return (
    <>
      <a href={props.to} target="_blank" rel="noopener noreferrer">
        <button
          className="tiny_button"
          onClick={props.onClick}
          type={props.type || "tiny_button"}
          style={buttonStyle}
        >
          {props.children}
        </button>
      </a>
    </>
  );
}

export default TinyButton;
