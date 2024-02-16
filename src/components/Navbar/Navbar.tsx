import "./Navbar.scss";
export const Navbar = () => {
  let isMenuOpen: boolean = false;
  const openNavar = () => {
    isMenuOpen = !isMenuOpen;

    const navbarIcon = document.getElementById("navbar-icon");
    const mobileMenu = document.getElementById("mobile-menu");

    if (isMenuOpen) {
      navbarIcon!.style.transform = "rotate(180deg)";
      mobileMenu!.style.display = "flex";
    } else {
      navbarIcon!.style.transform = "rotate(0deg)";
      mobileMenu!.style.display = "none";
    }
  };
  return (
    <nav className="navbar-main-div">
      <h1 className="navbar-brand-name">MOTIVO</h1>
      <ul className="navbar-navigation-items">
        <li>SERVICES</li>
        <li>ABOUT US</li>
        <li>PORTFOLIO</li>
      </ul>
      <img
        onClick={openNavar}
        id="navbar-icon"
        className="navbar-menu"
        src="/images/menu.png"
        alt=""
      ></img>
    </nav>
  );
};
