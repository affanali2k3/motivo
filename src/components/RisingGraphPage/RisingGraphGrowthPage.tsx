import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import "./RisingGraphPage.scss";
export const RisingGraphGrowthPage = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    /*
      This tween is used to animate the left most div on scroll. This is later on linked
      with Scroll trigger and acts as a pin to not allow to scroll to bottom sections unless
      all of the graphs have completed
    */
    const tween = gsap.to(`.rise-growth-1`, {
      height: "100vh",
      duration: 2,
      ease: "none",
    });

    /*
      This animation is used to close the gaps between the rising graphs as in the final
      animation there should be no gaps. The end for this is same (1900) as the first div. 
     */
    gsap.to(".rising-graphs-growth-main-div", {
      gap: 0,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: ".rising-graphs-growth-main-div",
        start: "top 0%",
        end: "+=" + 1900,

        scrub: 1,
        markers: false,
      },
    });

    /*
      This for loop will trigger animations of all the divs other than the first one that is why
      the loop is starting from i=2 and not from i=1. They are given scrolltriggers but are not
      pinned because only one pin is required and its done from the first div.
    */
    for (let i = 2; i <= 10; i++) {
      gsap.to(`.rise-growth-${i}`, {
        height: "100vh",
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".rising-graphs-growth-main-div",
          start: "top 0%",
          end: "+=" + (2000 - 170 * i),
          scrub: 1,
          markers: false,
        },
      });
    }

    /*
      The actual scroll trigger of the first div. Tried giviing it inside the scrollTrigger
      attribute but that did not work thats why its given seperately over here
    */
    ScrollTrigger.create({
      trigger: ".rising-graphs-growth-main-div",
      start: "top 0%",
      end: "+=" + 1900,
      pin: true,
      animation: tween,
      scrub: 1,
    });
  }, []);

  return (
    <section className="rising-graphs-growth-main-div">
      <h1 className="rising-graphs-background-text">GROWTH</h1>

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
