import "./Navbar.scss";
export const MobileMenu = () => {
  return (
    <div id="mobile-menu" className="mobile-menu">
      <div className="mobile-align-div">
        <ul>
          <li>HOME</li>
          <li>SERVICES</li>
          <li>ABOUT US</li>
          <li>PORTFOLIO</li>
        </ul>
        <div className="socials">
          <img src="/images/facebook.png" alt="" />
          <img src="/images/instagram.png" alt="" />
          <img src="/images/linkedn.png" alt="" />
        </div>
      </div>
    </div>
  );
};
