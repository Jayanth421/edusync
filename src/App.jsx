import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Study from "./pages/Study";
import Rewards from "./pages/Rewards";
import Health from "./pages/Health";
// import Leaderboard from "./pages/Leaderboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/study" element={<Study />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/health" element={<Health />} />
        {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
