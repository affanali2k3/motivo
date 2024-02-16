import { FindOutMorePage } from "./components/FindOutMorePage/FindOutMorePage";
import { Copyright } from "./components/Footer/Copyright";
import { Footer } from "./components/Footer/Footer";
import { Homepage } from "./components/Homepage/Homepage";
import { MeetOurTeam } from "./components/MeetOurTeam/MeetOurTeam";
import { MobileMenu } from "./components/Navbar/MobileMenu";
import { Navbar } from "./components/Navbar/Navbar";
import { PortfolioHorizontalScrollingPage } from "./components/PortfolioHorizontalScrolling/PortfolioHorizontalScrolling";
import { RisingGraphEfficiencyPage } from "./components/RisingGraphPage/RisingGraphEfficiencyPage";
import { RisingGraphGrowthPage } from "./components/RisingGraphPage/RisingGraphGrowthPage";
import { RisingGraphPage } from "./components/RisingGraphPage/RisingGraphPage";
import { ServicesDisplayPage } from "./components/ServicesDisplayPage/ServicesDisplayPage";
import { ServicesHorizontalScrollingPage } from "./components/ServicesHorizontalScrollingPage/ServicesHorizontalScrollingPage";
import { ValuesPage } from "./components/ValuesPage/ValuesPage";

function App() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Homepage />
      <ValuesPage />
      <ServicesHorizontalScrollingPage />
      <ServicesDisplayPage />
      <RisingGraphPage />
      <MeetOurTeam />
      <RisingGraphEfficiencyPage />
      <PortfolioHorizontalScrollingPage />
      <FindOutMorePage />
      <RisingGraphGrowthPage />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
