import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CataloguePage from "./pages/CataloguePage";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route
            path="/cart"
            element={
              <div className="min-h-screen bg-[#EEF5F0] flex items-center justify-center pb-14">
                <p className="text-[#6B7280]">Cart Page - Coming Soon</p>
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="min-h-screen bg-[#EEF5F0] flex items-center justify-center pb-14">
                <p className="text-[#6B7280]">Profile Page - Coming Soon</p>
              </div>
            }
          />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
