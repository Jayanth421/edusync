import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import RankBadge from "../components/RankBadge";

export default function Rewards() {
  return (
    <>
      <Navbar />

      <div className="p-6 space-y-6">
        <SectionTitle
          title="Rewards"
          subtitle="Unlock cosmetics & ranks"
        />

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-[#121826] p-4 rounded-xl">
            <p className="text-sm text-gray-400">Current Rank</p>
            <RankBadge rank="Gold" />
          </div>

          <div className="bg-[#121826] p-4 rounded-xl">
            <p className="text-sm text-gray-400">Unlocked Skins</p>
            <p className="text-xl font-bold text-green-400">5</p>
          </div>

          <div className="bg-[#121826] p-4 rounded-xl">
            <p className="text-sm text-gray-400">Badges</p>
            <p className="text-xl font-bold text-green-400">8</p>
          </div>
        </div>

        <div className="bg-[#121826] p-4 rounded-xl">
          <p className="text-sm text-gray-400 mb-2">
            Next Unlock
          </p>
          <p className="text-gray-300">
            Study 2 more hours to unlock 🎁 Avatar Skin
          </p>
        </div>
      </div>
    </>
  );
}
