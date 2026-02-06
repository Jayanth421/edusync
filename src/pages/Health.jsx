import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import HealthCard from "../components/HealthCard";

export default function Health() {
  return (
    <>
      <Navbar />

      <div className="p-6 space-y-6">
        <SectionTitle
          title="Health & Balance"
          subtitle="Your well-being matters"
        />

        <HealthCard sleep={5.5} stress={75} />

        <div className="bg-[#121826] p-4 rounded-xl">
          <p className="text-sm text-gray-400 mb-2">
            Smart Adjustment
          </p>
          <p className="text-gray-300 text-sm">
            Because your sleep was low, today’s study
            requirement is reduced by 20%.
          </p>
        </div>

        <div className="bg-[#121826] p-4 rounded-xl">
          <p className="text-sm text-gray-400 mb-2">
            Tips
          </p>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Drink water 💧</li>
            <li>• Take 5 min break every hour</li>
            <li>• Sleep before 11 PM 😴</li>
          </ul>
        </div>
      </div>
    </>
  );
}
