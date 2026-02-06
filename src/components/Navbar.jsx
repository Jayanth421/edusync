import { FaGamepad, FaBrain, FaHeartbeat } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-[#121826] border-b border-gray-800">
      <h1 className="text-xl font-bold text-green-400">FocusXP</h1>

      <div className="flex gap-6 text-gray-400">
        <FaBrain className="cursor-pointer hover:text-green-400" />
        <FaGamepad className="cursor-pointer hover:text-green-400" />
        <FaHeartbeat className="cursor-pointer hover:text-green-400" />
      </div>
    </div>
  );
}
