import "./ServicesDisplayPage.scss";
import { ServicesPageThumbsUpModel } from "../ServicesPageThumbsUpModel/ServicesPageThumbsUpModel";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { ArrowButton } from "../ArrowButton/ArrowButton";
export const ServicesDisplayPage = () => {
  return (
    <section className="services-display-page-main-div">
      <div className="services-display-corner-rounded-div">
        <div className="digital-marketing-service-card first-service">
          <ServicesPageThumbsUpModel />
          <div className="content">
            <div className="header">
              <h3>Digital marketing & advertising services</h3>
            </div>
            <div className="lower">
              <div className="learn-more">
                <p>learn more!</p>
                {/* <PrimaryButton text="GET A FREE DEMO" background="#1b35c7" /> */}
                {window.innerWidth > 800 ? <ArrowButton background="#1b35c7" /> : <PrimaryButton text="GET A FREE DEMO" background="#1b35c7" />}
              </div>
              <div className="para">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Corem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis.ac aliquet odio mattis.
              </div>
            </div>
          </div>
        </div>
        <div className="digital-marketing-service-card second-service">
          <div className="content">
            <div className="header">
              <h3>Digital marketing & advertising services</h3>
            </div>
            <div className="lower">
              <div className="learn-more">
                <p>learn more!</p>
                {/* <PrimaryButton text="GET A FREE DEMO" background="#1b35c7" /> */}
                {window.innerWidth > 800 ? <ArrowButton background="#1b35c7" /> : <PrimaryButton text="GET A FREE DEMO" background="#1b35c7" />}
              </div>
              <div className="para">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Corem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis.ac aliquet odio mattis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
