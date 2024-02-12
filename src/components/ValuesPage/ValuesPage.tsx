import React from "react";
import Marquee from "react-fast-marquee";

import "./ValuesPage.scss";
export const ValuesPage = () => {
  return (
    <section className="values-page-main-div">
      <div className="we-are-here-to-help">
        <h2>WE ARE HERE TO HELP YOU IN YOUR SOCIAL MEDIA MARKETING JOURNEY </h2>
      </div>
      <Marquee className="values-page-moving-values">
        HONESTY, PATIENCE, PERSEVERANCE,{" "}
      </Marquee>
      <div className="want-to-find-out">
        <h2>WANT TO FIND OUT WHAT WE OFFER? </h2>
      </div>
    </section>
  );
};
