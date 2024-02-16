import Marquee from "react-fast-marquee";
import "./ValuesPage.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

export const ValuesPage = () => {
  useGSAP(() => {
    gsap.to(".values-page-main-div", {
      y: -200,
      marginBottom: -200,
      duration: 3,
      scrollTrigger: {
        trigger: ".homepage-main-div",
        start: "0% bottom",
      },
      // pause: true,
    });
  }, []);
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
