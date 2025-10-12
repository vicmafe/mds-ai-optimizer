interface KpiCardProps {
  label: string;
  value: string;
}

export default function KpiCard({ label, value }: KpiCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500">{label}</p>
      <h3 className="text-2xl font-semibold mt-1">{value}</h3>
    </div>
  );
}
