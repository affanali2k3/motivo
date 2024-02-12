import { Homepage } from "./components/Homepage/Homepage";
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
    </>
  );
}

export default App;
