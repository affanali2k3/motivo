import { Copyright } from "./components/Footer/Copyright";
import { Footer } from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import { MeetOurTeamPage } from "./components/MeetOurTeamPage/MeetOurTeamPage";
import { MobileMenu } from "./components/Navbar/MobileMenu";
import { Navbar } from "./components/Navbar/Navbar";

import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/meet-our-team" element={<MeetOurTeamPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
