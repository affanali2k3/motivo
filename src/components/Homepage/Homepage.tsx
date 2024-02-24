import { useEffect, useState } from "react";
import { HomepageStandingModel } from "../HomepageStandingModel/HomepageStandingModel";
import "./Homepage.scss";

export const Homepage = () => {
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
    <section
      id="homepage"
      className="homepage-main-div"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      <HomepageStandingModel />
      <div className="homepage-content">
        <h1 className="homepage-content-title">WELCOME TO MOTIVO!</h1>
        <div className="homepage-message-div">
          <h2 className="homepage-message-title">HOME PAGE TITLE TEXT</h2>
          <p className="homepage-message-para">
            auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
            Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
            Curabitur vel bibendum lorem. Morbi convallis convallis diam sit
            amet lacinia. Aliquam in elementum tellus.
          </p>
        </div>
      </div>
    </section>
  );
};
