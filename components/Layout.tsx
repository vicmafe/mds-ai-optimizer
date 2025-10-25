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
        <Link 
          href="/"
          className="h-16 flex items-center justify-center font-bold text-xl border-b"
        >
          MDS AI
        </Link>
        <nav className="flex-1 p-4 space-y-2">
          <Link 
            href="/campaigns"
            className="block p-2 rounded hover:bg-gray-200 border 1px border-color gray"
          >
          Campanhas
          </Link>
          <Link 
            href="/relatorios" className="block p-2 rounded hover:bg-gray-200 border 1px border-color gray"
          >
            Relatórios
          </Link>
          <Link 
            href="/alertas"
            className="block p-2 rounded hover:bg-gray-200 border 1px border-color gray"
          >
            Alertas
          </Link>
          <Link 
            href="/configuracoes"
            className="block p-2 rounded hover:bg-gray-200 border 1px border-color gray"
          >
            Configurações
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-lg">Agência xyz</h1>
        </header>
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  ); 
}
