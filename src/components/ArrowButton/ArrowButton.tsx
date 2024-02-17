import React from "react";
import "./ArrowButton.scss";

interface props {
  background: string;
}
export const ArrowButton: React.FC<props> = (props) => {
  return (
    <button
      style={{ backgroundColor: props.background }}
      className="arrow-button-main-div"
    >
      <img src="/images/arrow.png" alt="" />
    </button>
  );
};
