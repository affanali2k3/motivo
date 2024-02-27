import Marquee from "react-fast-marquee";
import "./ValuesPage.scss";
import { useGSAP } from "@gsap/react";

export const ValuesPage = () => {
  useGSAP(() => {
    // gsap.to(".values-page-main-div", {
    //   y: "-10vh",
    //   // marginBottom: "-10vh",
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: ".homepage-main-div",
    //     start: "0% bottom",
    //   },
    // });
  }, []);
  return (
    <section id="values-page" className="values-page-main-div">
      <div className="we-are-here-to-help">
        <h2>WE ARE HERE TO HELP YOU IN YOUR SOCIAL MEDIA MARKETING JOURNEY </h2>
      </div>
      <Marquee speed={window.innerWidth > 800 ? 200 : 100} className="values-page-moving-values">
        <strong> HONESTY, PATIENCE, EFFICIENCY, EFFORT, INTEGRITY</strong>,{" "}
      </Marquee>
    </section>
  );
};
