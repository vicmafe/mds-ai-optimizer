import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CampaignCard({ id, title, description, status, createdAt }: any) {
  const statusColor =
    status === "Ativa"
      ? "bg-green-100 text-green-700"
      : status === "Pausada"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-gray-100 text-gray-700";

  return (
    <Link href={`/campaigns/${id}`}>
      <div className="border rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-gray-300 transition bg-white cursor-pointer">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className={`px-2 py-1 text-xs rounded-md font-medium ${statusColor}`}>
            {status}
          </span>
          <span className="text-xs text-gray-400">{createdAt}</span>
        </div>
      </div>
    </Link>
  );
}
