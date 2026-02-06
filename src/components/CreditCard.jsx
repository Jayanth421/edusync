export default function CreditCard({ credits }) {
  return (
    <div className="bg-[#121826] rounded-xl p-4 text-center">
      <p className="text-sm text-gray-400">Gaming Credits</p>
      <h2 className="text-3xl font-bold text-green-400">{credits}</h2>
      <p className="text-xs text-gray-500 mt-1">
        60 credits = 1 hour gaming
      </p>
    </div>
  );
}
