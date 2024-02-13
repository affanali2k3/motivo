import "./ServicesDisplayPage.scss";
import { ServicesPageThumbsUpModel } from "../ServicesPageThumbsUpModel/ServicesPageThumbsUpModel";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
export const ServicesDisplayPage = () => {
  return (
    <section className="services-display-page-main-div">
      <div className="digital-marketing-service-card">
        <ServicesPageThumbsUpModel />
        <div className="content">
          <div className="header">
            <h3>Digital marketing & advertising services</h3>
          </div>
          <div className="lower">
            <div className="learn-more">
              <p>learn more!</p>
              <PrimaryButton text="GET A FREE DEMO" background="#1b35c7" />
            </div>
            <div className="para">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.Corem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.ac aliquet odio
              mattis.Nunc vulputate libero et velit interdum, ac aliquet odio
              mattis.ac aliquet odio mattis.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
