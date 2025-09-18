"use client";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { useState } from "react";
import { normalizeText } from "@/lib/textUtils";

export default function HomePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleProcess = () => {
    setOutput(normalizeText(input));
  };

  return (
    <Card>
      <h1 className="text-xl font-bold mb-4">Hello World 🚀</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Digite seu texto aqui..."
      />
      <Button onClick={handleProcess}>Processar</Button>
      {output && (
        <p className="mt-4">
          <span className="font-semibold">Resultado:</span> {output}
        </p>
      )}
    </Card>
  );
}
