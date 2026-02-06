export default function ActionButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 rounded-lg bg-green-500 hover:bg-green-600 transition font-medium text-black"
    >
      {label}
    </button>
  );
}
