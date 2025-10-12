// app/campaigns/[id]/page.tsx
import KpiCard from "@/components/KpiCard";
import CampaignTable from "@/components/CampaignTable";
import AlertCard from "@/components/AlertCard";
import { metrics } from "@/lib/data/metricsMock";
import { campaigns } from "@/lib/data/campaignsMock";
import { alertas } from "@/lib/data/alertasMock";

export default function CampaignPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((m, i) => (
          <KpiCard key={i} label={m.label} value={m.value} />
        ))}
      </div>

      {/* Tabela de Campanhas */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Campanhas</h2>
        <CampaignTable campaigns={campaigns} />
      </section>

      {/* Alertas Automáticos */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Alertas automáticos</h2>
        <div className="space-y-2">
          {alertas.map((alerta, i) => (
            <AlertCard key={i} alerta={alerta} />
          ))}
        </div>
      </section>
    </div>
  );
}
