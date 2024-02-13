import { FindOutMorePage } from "./components/FindOutMorePage/FindOutMorePage";
import { Homepage } from "./components/Homepage/Homepage";
import { MeetOurTeam } from "./components/MeetOurTeam/MeetOurTeam";
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
    </>
  );
}

export default App;
