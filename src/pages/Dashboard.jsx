import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import ProgressBar from "../components/ProgressBar";
import RankBadge from "../components/RankBadge";
import CreditCard from "../components/CreditCard";
import HealthCard from "../components/HealthCard";

import { FaBook, FaGamepad, FaChartLine } from "react-icons/fa";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <RankBadge rank="Gold" />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <StatCard title="Study Hours" value="3.2h" icon={<FaBook />} />
          <StatCard title="Gaming Time" value="1h" icon={<FaGamepad />} />
          <StatCard title="Productivity" value="82%" icon={<FaChartLine />} />
        </div>

        <CreditCard credits={60} />

        <div className="bg-[#121826] p-4 rounded-xl">
          <p className="text-sm text-gray-400 mb-2">
            Next Gaming Unlock
          </p>
          <ProgressBar value={60} max={100} />
          <p className="text-xs text-gray-400 mt-2">
            40 credits left to unlock 🎯
          </p>
        </div>

        <HealthCard sleep={6.5} stress={45} />
      </div>
    </>
  );
}
