interface Alerta {
  tipo: string;
  mensagem: string;
  acao: string;
}

interface AlertCardProps {
  alerta: Alerta;
}

export default function AlertCard({ alerta }: AlertCardProps) {
  return (
    <div className="flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-xl p-4">
      <div className="flex items-center gap-2 text-yellow-800">
        <span className="text-xl">⚠️</span>
        <span>{alerta.mensagem}</span>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded-lg">
        {alerta.acao}
      </button>
    </div>
  );
}
