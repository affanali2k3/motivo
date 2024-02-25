import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import "./MeetOurTeamPage.scss";
export const MeetOurTeamPage = () => {
  return (
    <section className="meet-our-team-page-main-div">
      <div className="text-div">
        <h1 className="we-are-motivo">
          WE ARE <span>MOTIVO</span>
        </h1>
        <p className="main-description">
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.nostra, per inceptos himenaeos.
        </p>
        <h2 className="meet-motivo-family">
          MEET THE <span>MOTIVO FAMILY</span>
        </h2>
        <p className="meet-family-description">our people are well seasoned creatives from all walks of life</p>

        <div className="button-align-div">
          <PrimaryButton text="CONNECT WITH US!" background="#1b35c7" />
        </div>
      </div>
      <div className="image-div">
        <img src="/images/maria.jpeg" alt="" />
        <div className="image-name-post">
          <h3 className="name">MARIA FERREIRA</h3>
          <h4 className="post"> FOUNDER</h4>
        </div>
      </div>
    </section>
  );
};
