import { ArrowButton } from "../ArrowButton/ArrowButton";
import { MeetOurTeamHuggingModel } from "../MeetOurTeamHuggingModel/MeetOurTeamHuggingModel";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import "./MeetOurTeam.scss";
export const MeetOurTeam = () => {
  return (
    <section className="meet-our-team-main-div">
      <div className="meet-our-team-content">
        <div className="meet-our-team-top-div">
          <h2 className="meet-our-team-heading">MEET OUR TEAM</h2>
        </div>
        <div className="meet-our-team-lower-div">
          <div className="learn-more">
            <p>learn more!</p>
            <a href="/meet-our-team">
              {window.innerWidth > 800 ? <ArrowButton background="#1b35c7" /> : <PrimaryButton text="MEET OUR TEAM" background="#f2f2f2" />}
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
      <div className="meet-our-team-model-div">
        <MeetOurTeamHuggingModel />
        <img src="/images/meet-our-team-background.png" alt=""></img>
      </div>
    </section>
  );
};
