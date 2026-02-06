export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {subtitle && (
        <p className="text-sm text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}
