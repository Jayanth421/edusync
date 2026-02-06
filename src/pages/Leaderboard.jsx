import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";

export default function Leaderboard() {
  return (
    <>
      <Navbar />

      <div className="p-6 space-y-6">
        <SectionTitle
          title="Leaderboard"
          subtitle="Healthy competition only"
        />

        <div className="bg-[#121826] rounded-xl divide-y divide-gray-800">
          {["Alex", "Ravi", "Sara", "You"].map((name, i) => (
            <div key={i} className="flex justify-between p-4">
              <span>{name}</span>
              <span className="text-green-400">{100 - i * 10} pts</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

