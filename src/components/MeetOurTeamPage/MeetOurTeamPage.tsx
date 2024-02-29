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
        
Meet the Motivo Family. Dive into the diverse world of our digital marketing and advertising experts, driven by honesty, creativity, and a shared mission for your success. Our team's unique blend of skills and passion powers your brand's journey towards exceptional results. Discover the faces behind your digital transformation. 
        </p>
        <h2 className="meet-motivo-family">
          MEET THE <span>MOTIVO FAMILY</span>
        </h2>
        <p className="meet-family-description">our people are seasoned creatives from all walks of life</p>

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
