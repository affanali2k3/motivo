import { Homepage } from "../Homepage/Homepage";
import { ServicesHorizontalScrollingPage } from "../ServicesHorizontalScrollingPage/ServicesHorizontalScrollingPage";
import { ValuesPage } from "../ValuesPage/ValuesPage";
import { MeetOurTeam } from "../MeetOurTeam/MeetOurTeam";
import { PortfolioHorizontalScrollingPage } from "../PortfolioHorizontalScrolling/PortfolioHorizontalScrolling";
import { FindOutMorePage } from "../FindOutMorePage/FindOutMorePage";
import { RisingGraphGrowthPage } from "../RisingGraphPage/RisingGraphGrowthPage";
import { RisingGraphEfficiencyPage } from "../RisingGraphPage/RisingGraphEfficiencyPage";
import { ServicesDisplayPage } from "../ServicesDisplayPage/ServicesDisplayPage";
import { RisingGraphPage } from "../RisingGraphPage/RisingGraphPage";

export default function MainPage() {
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
