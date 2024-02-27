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
import PreLoader from "../Preloader/Preloader";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (scroll) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [modelLoaded]);
  return (
    <>
      {modelLoaded ? null : <PreLoader />}

      <Homepage
        onModelLoad={() => {
          setModelLoaded(true);
          setScroll(true);
        }}
      />
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
