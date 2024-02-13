import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import "./RisingGraphPage.scss";
export const RisingGraphGrowthPage = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    /*
      This animation is used to increase the height of bars towards total viewport height. This
      is triggered when 99% of the graph page is in viewport. 100% doesn't work sometimes.
     */
    for (let i = 1; i <= 10; i++) {
      gsap.to(`.rise-growth-${i}`, {
        height: "100vh",
        duration: graphAnimationDelay(i),
        scrollTrigger: {
          trigger: ".rising-graphs-growth-main-div",
          start: "99% bottom",
        },
        // pause: true,
      });
    }
  }, []);

  const graphAnimationDelay = (index: number): number => {
    switch (index) {
      case 10:
        return 1;
      case 9:
        return 1.5;
      case 8:
        return 2;
      case 7:
        return 2.1;
      case 6:
        return 2.2;
      case 5:
        return 2.3;
      case 4:
        return 2.4;
      case 3:
        return 2.5;
      case 2:
        return 2.6;
      case 1:
        return 2.7;
    }
    return 1;
  };
  return (
    <section className="rising-graphs-growth-main-div">
      <div className="rising-div rise-growth-1"></div>
      <div className="rising-div rise-growth-2"></div>
      <div className="rising-div rise-growth-3"></div>
      <div className="rising-div rise-growth-4"></div>
      <div className="rising-div rise-growth-5"></div>
      <div className="rising-div rise-growth-6"></div>
      <div className="rising-div rise-growth-7"></div>
      <div className="rising-div rise-growth-8"></div>
      <div className="rising-div rise-growth-9"></div>
      <div className="rising-div rise-growth-10"></div>
    </section>
  );
};
