"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="h-16 flex items-center justify-center font-bold text-xl border-b">
          MDS AI
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/" className="block p-2 rounded hover:bg-gray-200">
            Campanhas
          </Link>
          <Link href="/relatorios" className="block p-2 rounded hover:bg-gray-200">
            Relatórios
          </Link>
          <Link href="/alertas" className="block p-2 rounded hover:bg-gray-200">
            Alertas
          </Link>
          <Link href="/configuracoes" className="block p-2 rounded hover:bg-gray-200">
            Configurações
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">MDS AI Optimizer</h1>
          <button className="px-3 py-1 rounded bg-gray-800 text-white hover:bg-gray-700">
            Sair
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
