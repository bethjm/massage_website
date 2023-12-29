import React from "react";

import "./Collapsed.css";

const Collapsed = ({ children, handleOpen, id, isOpen, color }) => {
  const iconClassName = isOpen ? "rotate-icon" : "";

  const containerStyle = {
    color: color || "var(--text)",
    background: "#fff",
  };

  return (
    <div
      className="collapsed_container"
      onClick={handleOpen}
      data-id={id}
      style={containerStyle}
    >
      <div className="collapsed_text">{children}</div>
      <div className={iconClassName}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 16V32"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 24H32"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Collapsed;
