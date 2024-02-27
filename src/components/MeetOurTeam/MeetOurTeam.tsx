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
              {window.innerWidth > 800 ? <ArrowButton background="#17161b" /> : <PrimaryButton text="MEET OUR TEAM" background="#f2f2f2" />}
            </a>
          </div>

          <div className="meet-our-team-para">
            <p>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Corem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.ac aliquet
              odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </div>
      <div className="meet-our-team-model-div">
        <MeetOurTeamHuggingModel />
        <img src="/images/meet-our-team-background.jpeg" alt=""></img>
      </div>
    </section>
  );
};
