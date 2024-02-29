import "./ServicesDisplayPage.scss";
import { ServicesPageThumbsUpModel } from "../ServicesPageThumbsUpModel/ServicesPageThumbsUpModel";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { ArrowButton } from "../ArrowButton/ArrowButton";
import { useEffect, useRef } from "react";
import gsap from "gsap/all";

export const ServicesDisplayPage = () => {
  // Reference to the div whose visibility will trigger the animation
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggerElement = triggerRef.current;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth > 1200) {
            // alert(entry.isIntersecting);
            // Perform the animation when the trigger div is visible
            gsap.to(".services-model", { rotate: 70, x: "55vw", duration: 2 });
            // Optional: Unobserve the element after animation
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Adjust the root margin and threshold as needed
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the target is visible
      }
    );

    if (triggerElement) {
      observer.observe(triggerElement);
    }

    // Cleanup function to unobserve when component unmounts
    return () => {
      if (triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className="services-display-page-main-div">
      <div className="services-display-corner-rounded-div">
        <ServicesPageThumbsUpModel />
        <div className="digital-marketing-service-card first-service">
          <div className="content">
            <div className="header">
              <h3>Digital Marketing Services</h3>
            </div>
            <div className="lower">
              <div className="learn-more">
                <p>learn more!</p>
                {/* <PrimaryButton text="GET A FREE DEMO" background="#1b35c7" /> */}
                {window.innerWidth > 800 ? (
                  <ArrowButton background="#1b35c7" />
                ) : (
                  <PrimaryButton text="GET A FREE DEMO" background="#f2f2f2" />
                )}
              </div>
              <div className="para">
                Unlock the full potential of your online presence with Motivo's Digital Marketing Services. From SEO to social media
                management, we employ a blend of honesty, effort, and efficiency to ensure your brand stands out. Discover how we can
                elevate your digital footprint.
              </div>
            </div>
          </div>
        </div>
        <div ref={triggerRef} className="digital-marketing-service-card second-service">
          <div className="content">
            <div className="header">
              <h3>Advertising services</h3>
            </div>
            <div className="lower">
              <div className="learn-more">
                <p>learn more!</p>
                {/* <PrimaryButton text="GET A FREE DEMO" background="#1b35c7" /> */}
                {window.innerWidth > 800 ? (
                  <ArrowButton background="#1b35c7" />
                ) : (
                  <PrimaryButton text="GET A FREE DEMO" background="#f2f2f2" />
                )}
              </div>
              <div className="para">
                Amplify your message with Motivo's Advertising Services. With a foundation built on integrity and patience, we craft
                compelling advertising strategies that resonate with your target audience. See the difference our dedicated approach makes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
