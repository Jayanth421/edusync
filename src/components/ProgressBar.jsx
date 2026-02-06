export default function ProgressBar({ value, max }) {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
      <div
        className="h-3 bg-green-400 transition-all duration-500"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
