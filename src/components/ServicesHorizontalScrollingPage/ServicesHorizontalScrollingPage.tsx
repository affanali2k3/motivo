import gsap from "gsap";
import "./ServicesHorizontalScrollingPage.scss";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
export const ServicesHorizontalScrollingPage = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.config({ ignoreMobileResize: true });
    /*
    This is the logic for horizontal scrolling of the services page.

    The scroll amount should be equal to the total width of services page - screen width. E.g if services width is 900px and
    device width is 300px that means the amount to scroll should be 900px-300px = 600px
    
     */
    const servicesWord: HTMLElement | null = document.getElementById("services-word");

    if (!servicesWord) return;

    const amountToScroll: number = 1 * (servicesWord.scrollWidth - window.innerWidth);

    const tween = gsap.to(servicesWord, {
      x: -amountToScroll,
      duration: 3,
      ease: "none",
    });

    /*
      Scroll trigger is created to trigger horizontal scrolling when the services page covers 100% of viewport height. It will end
      with amount relative to starting position
    */
    ScrollTrigger.create({
      trigger: ".services-page-main-div",
      start: "top 0%",
      end: window.innerWidth > 800 ? "+=" + amountToScroll : "+=" + amountToScroll / 2,
      pin: true,
      animation: tween,
      // anticipatePin: 4,
      scrub: 1, // For easing the animation
      markers: false, // Shows markers for debugging
      // onLeave: () => {
      //   const element = document.getElementById('services-word');
      //   if (element) {
      //     // Apply the desired CSS properties
      //     element.style.position = 'fixed';
      //   } else {
      //     console.error("Element with ID 'myElementId' not found.");
      //   }

      // } ,
    });
  }, []);
  return (
    <section id="services-horizontal-scrolling-page" className="services-page-main-div">
      <h2 id="services-word" className="services-page-letters">
        SERVICES
      </h2>
    </section>
  );
};
