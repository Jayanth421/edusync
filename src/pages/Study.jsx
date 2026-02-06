import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import ActionButton from "../components/ActionButton";

export default function Study() {
  return (
    <>
      <Navbar />

      <div className="p-6 space-y-6">
        <SectionTitle
          title="Study Session"
          subtitle="Focus to earn gaming credits"
        />

        <div className="bg-[#121826] p-4 rounded-xl space-y-4">
          <p className="text-sm text-gray-400">
            Active Session
          </p>

          <h2 className="text-3xl font-bold text-green-400">
            00:45:20
          </h2>

          <ActionButton label="Start Study" />
          <ActionButton label="End Session" />
        </div>

        <div className="bg-[#121826] p-4 rounded-xl">
          <p className="text-sm text-gray-400 mb-2">
            Credits Rule
          </p>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• 1 hour study = 20 credits</li>
            <li>• 3 hours study = 1 hour gaming</li>
            <li>• Health balance gives bonus</li>
          </ul>
        </div>
      </div>
    </>
  );
}
