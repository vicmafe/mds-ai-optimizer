import "../styles/globals.css";
import type { Metadata } from "next";
import Layout from "../components/Layout";

export const metadata: Metadata = {
  title: "MDS AI Optimizer",
  description: "Dashboard de campanhas e relatórios",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
