export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-[#121826] p-4 rounded-xl flex items-center gap-4">
      <div className="text-2xl text-green-400">{icon}</div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <h2 className="text-xl font-semibold">{value}</h2>
      </div>
    </div>
  );
}
