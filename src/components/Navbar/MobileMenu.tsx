import "./Navbar.scss";
export const MobileMenu = () => {
  const closeMenu = () => {
    const navbarIcon = document.getElementById("navbar-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    const navbarDiv = document.getElementsByClassName("navbar-main-div")[0];

    navbarIcon!.style.transform = "rotate(0deg)";
    mobileMenu!.style.display = "none";
    navbarDiv.setAttribute(
      "style",
      "background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1); z-index: 4;"
    );
  };
  return (
    <div id="mobile-menu" className="mobile-menu">
      <div className="mobile-align-div">
        <ul>
          <li>HOME</li>
          <a onClick={closeMenu} href="#services-horizontal-scrolling-page">
            <li>SERVICES</li>
          </a>
          <a onClick={closeMenu} href="#values-page">
            <li>ABOUT US</li>
          </a>
          <a onClick={closeMenu} href="#portfolio-horizontal-scrolling-page">
            <li>PORTFOLIO</li>
          </a>
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
