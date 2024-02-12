import { HomepageStandingModel } from "../HomepageStandingModel/HomepageStandingModel";
import "./Homepage.scss";

export const Homepage = () => {
  return (
    <section className="homepage-main-div">
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
