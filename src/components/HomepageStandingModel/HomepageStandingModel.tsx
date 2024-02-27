import Spline from "@splinetool/react-spline";
import "./HomepageStandingModel.scss";
import React from "react";

interface props {
  onModelLoad: () => void;
}
export const HomepageStandingModel: React.FC<props> = (props) => {
  return (
    <>
      <Spline
        onLoad={() => {
          props.onModelLoad();
        }}
        className="homepage-standing-model-main-div"
        scene="https://prod.spline.design/GJlVXvowVIn90Utr/scene.splinecode"
      />
    </>
  );
};
