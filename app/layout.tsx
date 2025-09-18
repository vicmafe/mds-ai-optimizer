import "@/styles/globals.css";
import { Layout } from "@/components/Layout";

export const metadata = {
  title: "MDS AI Optimizer",
  description: "Refinamento heurístico de textos - MVP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
