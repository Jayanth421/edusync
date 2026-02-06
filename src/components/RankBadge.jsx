const rankColors = {
  Bronze: "text-orange-400 bg-orange-400/10",
  Silver: "text-gray-300 bg-gray-300/10",
  Gold: "text-yellow-400 bg-yellow-400/10",
  Platinum: "text-cyan-400 bg-cyan-400/10",
  Diamond: "text-purple-400 bg-purple-400/10",
};

export default function RankBadge({ rank }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        rankColors[rank] || "text-gray-400 bg-gray-400/10"
      }`}
    >
      🏆 {rank}
    </span>
  );
}
