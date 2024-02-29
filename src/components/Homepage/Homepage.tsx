import React, { useEffect, useState } from "react";
import { HomepageStandingModel } from "../HomepageStandingModel/HomepageStandingModel";
import "./Homepage.scss";
import { ArrowButton } from "../ArrowButton/ArrowButton";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

interface props {
  onModelLoad: () => void;
}
export const Homepage: React.FC<props> = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 0.95 * window.innerHeight; // 130vh in pixels

    // Hide the element when scrolled past the threshold
    setIsVisible(scrollPosition < threshold);
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="homepage" className="homepage-main-div" style={{ visibility: isVisible ? "visible" : "hidden" }}>
      <HomepageStandingModel onModelLoad={props.onModelLoad} />
      <div className="homepage-content">
        <h1 className="homepage-content-title">WELCOME TO MOTIVO!</h1>
        <div className="homepage-message-div">
          <h2 className="homepage-message-title">Transform Your Digital Presence with Integrity</h2>
          <p className="homepage-message-para">
          Dive into the power of social media marketing, upheld by honesty, patience, and efficiency with Motivo. Embrace effort and integrity as we tailor strategies that speak volumes. Elevate your brand now—let's create something remarkable together.
          </p>
          <a href="/meet-our-team">
              {<PrimaryButton text="Book Your Strategy Session" background="#f2f2f2"/>}
          </a>
        </div>
      </div>
    </section>
  );
};
