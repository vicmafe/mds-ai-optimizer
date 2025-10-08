import CampaignCard from "@/components/CampaignCard";
import { campaigns } from "@/lib/data/campaigns";

export default function CampaignsPage() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Campanhas</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((c) => (
          <CampaignCard key={c.id} {...c} />
        ))}
      </div>
    </main>
  );
}
