import "./ServicesDisplayPage.scss";
import { ServicesPageThumbsUpModel } from "../ServicesPageThumbsUpModel/ServicesPageThumbsUpModel";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { ArrowButton } from "../ArrowButton/ArrowButton";
export const ServicesDisplayPage = () => {
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
              Unlock the full potential of your online presence with Motivo's Digital Marketing Services. From SEO to social media management, we employ a blend of honesty, effort, and efficiency to ensure your brand stands out. Discover how we can elevate your digital footprint.
              </div>
            </div>
          </div>
        </div>
        <div className="digital-marketing-service-card second-service">
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
              Amplify your message with Motivo's Advertising Services. With a foundation built on integrity and patience, we craft compelling advertising strategies that resonate with your target audience. See the difference our dedicated approach makes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
