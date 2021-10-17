import React from "react";
import "./Arrows.css";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",

        borderRadius: "50%",
        padding: "4px",
        marginLeft: "-2px",
        zIndex: "40",
      }}
      onClick={onClick}
    ></div>
  );
};

export default PrevArrow;
