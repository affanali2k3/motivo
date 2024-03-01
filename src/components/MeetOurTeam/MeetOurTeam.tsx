import { useEffect, useRef } from "react";
import { ArrowButton } from "../ArrowButton/ArrowButton";
import { MeetOurTeamHuggingModel } from "../MeetOurTeamHuggingModel/MeetOurTeamHuggingModel";
import { MeetOurTeamPeakModelRight } from "../MeetOurTeamHuggingModel/MeetOurTeamPeakModelRight";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import "./MeetOurTeam.scss";
import gsap from "gsap/all";
export const MeetOurTeam = () => {
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
            gsap.to(".meet-our-team-hugging-model-main-div", { rotate: 60, x: "75%", duration: 2 });
            gsap.to(".meet-our-team-peak-model-right-main-div", { rotate: -60, x: "-75%", duration: 2 });
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
    <section ref={triggerRef} className="meet-our-team-main-div">
      <div className="meet-our-team-content">
        <div className="meet-our-team-top-div">
          <h2 className="meet-our-team-heading">MEET OUR TEAM</h2>
        </div>
        <div className="meet-our-team-lower-div">
          <div className="learn-more">
            <p>learn more!</p>
            <a href="/meet-our-team">
              {window.innerWidth > 800 ? <ArrowButton background="#17161b" /> : <PrimaryButton text="MEET OUR TEAM" background="#f2f2f2" />}
            </a>
          </div>

          <div className="meet-our-team-para">
            <p>
              Meet the Heart Behind Motivo. Our team is a blend of creative minds and strategic thinkers, all dedicated to transforming your
              digital journey with honesty, patience, and efficiency. United by a passion for excellence and a commitment to integrity,
              we’re here to elevate your brand to new heights. Get to know the experts dedicated to your success.
            </p>
          </div>
        </div>
      </div>
      <MeetOurTeamHuggingModel />
      <MeetOurTeamPeakModelRight />
    </section>
  );
};
