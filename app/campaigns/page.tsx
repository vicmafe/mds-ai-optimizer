import CampaignCard from "@/components/CampaignCard";
import { marketingActions } from "@/lib/data/marketingActionsMock";

export default function CampaignsPage() {
  return (
    <main className="p-6 max-w-5xl">
      <h1 className="text-2xl font-bold mb-6">Campanhas</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {marketingActions.map((c) => (
          <CampaignCard key={c.id} {...c} />
        ))}
      </div>
    </main>
  );
}
