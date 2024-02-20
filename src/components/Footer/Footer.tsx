import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnet } from '@fortawesome/free-solid-svg-icons';


export const Footer = () => {
  return (
    <footer className="footer-main-div">
      <div className="footer-align-div">
        <h1 className="footer-main-heading">
          Schedule a time with the <span>MOTIVO</span> team to:
        </h1>
        <div className="footer-points-cta-div">
          <ul className="footer-points">
            <li><FontAwesomeIcon id="fontIconMag" icon={faMagnet} rotation={90} style={{color: "#1b35c7",}} />  Get live walkthrough of how we work</li>
            <li><FontAwesomeIcon id="fontIconMag" icon={faMagnet} rotation={90} style={{color: "#1b35c7",}} />  Explore use cases for your team</li>
            <li><FontAwesomeIcon id="fontIconMag" icon={faMagnet} rotation={90} style={{color: "#1b35c7",}} />  Explore best pricing plan for you</li>
            <p className="contact-support">
              looking for support? connect with our <span>Support Team</span>
            </p>
          </ul>
          <PrimaryButton text="GET A FREE DEMO" background="#1b35c7" />
        </div>
      </div>
    </footer>
  );
};
