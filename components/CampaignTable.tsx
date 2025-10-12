interface Campaign {
  id: number;
  nome: string;
  plataforma: string;
  status: string;
  cpc: string;
  conversoes: number;
}

interface CampaignTableProps {
  campaigns: Campaign[];
}

export default function CampaignTable({ campaigns }: CampaignTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-6 py-3 font-medium">Nome da campanha</th>
            <th className="px-6 py-3 font-medium">Plataforma</th>
            <th className="px-6 py-3 font-medium">Status</th>
            <th className="px-6 py-3 font-medium">CPC médio</th>
            <th className="px-6 py-3 font-medium">Conversões</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((camp) => (
            <tr
              key={camp.id}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-3 font-medium text-gray-900">
                {camp.nome}
              </td>
              <td className="px-6 py-3">{camp.plataforma}</td>
              <td
                className={`px-6 py-3 ${
                  camp.status.toLowerCase().includes("alerta")
                    ? "text-red-500 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {camp.status}
              </td>
              <td className="px-6 py-3">{camp.cpc}</td>
              <td className="px-6 py-3">{camp.conversoes}</td>
              <td className="px-6 py-3 text-right">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded-lg">
                  Ver recomendações
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
