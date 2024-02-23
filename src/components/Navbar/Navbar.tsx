import "./Navbar.scss";
export const Navbar = () => {
  let isMenuOpen: boolean = false;
  const openNavar = () => {
    isMenuOpen = !isMenuOpen;

    const navbarIcon = document.getElementById("navbar-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    const navbarDiv = document.getElementsByClassName("navbar-main-div")[0];

    if (isMenuOpen) {
      navbarIcon!.style.transform = "rotate(180deg)";
      mobileMenu!.style.display = "flex";
      navbarDiv.setAttribute("style", "background: none; backdrop-filter: none; border: none; box-shadow: none; z-index: 4;");
    } else {
      navbarIcon!.style.transform = "rotate(0deg)";
      mobileMenu!.style.display = "none";
      navbarDiv.setAttribute(
        "style",
        "background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1); z-index: 4;"
      );
    }
  };
  return (
    <nav className="navbar-main-div">
      <a
        /*         As the position of navbar and homepage was fixed I couldnt scroll based on id.         So instead I scrolled to the starting position x = 0 and y = 0 and it works.       */ onClick={() => {
          window.location.href = "/";
        }}
      >
        <h1 className="navbar-brand-name">MOTIVO</h1>{" "}
      </a>
      <ul className="navbar-navigation-items">
        <a href="#services-horizontal-scrolling-page">
          <li>SERVICES</li>
        </a>
        <a href="#values-page">
          <li>ABOUT US</li>
        </a>
        <a href="#portfolio-horizontal-scrolling-page">
          <li>PORTFOLIO</li>
        </a>
      </ul>
      <img onClick={openNavar} id="navbar-icon" className="navbar-menu" src="/images/menu.png" alt=""></img>
    </nav>
  );
};
