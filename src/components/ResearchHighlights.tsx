"use client";
import { useEffect, useState } from "react";

interface ResearchSummary {
  version: number;
  lastUpdated: string;
  findings: {
    problem: {
      region: string;
      populationAffected: number;
      hospitalDebtCOPBn: number;
      stockoutIncreasePct: number;
    };
    ensemble: {
      demandErrorReductionPct: [number, number];
      abcAccuracyPct: number;
      wasteReductionPct: [number, number];
    };
  };
  recommendations: string[];
}

export default function ResearchHighlights() {
  const [data, setData] = useState<ResearchSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/research-summary.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => setError("No se pudo cargar el resumen de investigación"));
  }, []);

  if (error) {
    return (
      <div className="bg-red-50 text-red-700 p-4 rounded-xl">{error}</div>
    );
  }
  if (!data) {
    return (
      <div className="bg-slate-50 text-slate-600 p-4 rounded-xl">Cargando investigación…</div>
    );
  }

  const f = data.findings;
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">
        Hallazgos de Investigación (Resumen)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
          <div className="text-sm text-slate-600">Población afectada</div>
          <div className="text-3xl font-bold text-blue-700">
            {new Intl.NumberFormat("es-CO").format(f.problem.populationAffected)}
          </div>
          <div className="text-xs text-slate-500">{f.problem.region}</div>
        </div>
        <div className="p-6 bg-green-50 rounded-xl border border-green-100">
          <div className="text-sm text-slate-600">Deuda hospitalaria</div>
          <div className="text-3xl font-bold text-green-700">${"$"}
            {f.problem.hospitalDebtCOPBn}B
          </div>
          <div className="text-xs text-slate-500">COP</div>
        </div>
        <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
          <div className="text-sm text-slate-600">Aumento de desabastecimiento</div>
          <div className="text-3xl font-bold text-orange-700">{f.problem.stockoutIncreasePct}%</div>
          <div className="text-xs text-slate-500">Defensoría del Pueblo</div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
          <div className="text-sm text-slate-600">Reducción error predicción</div>
          <div className="text-3xl font-bold text-purple-700">
            {f.ensemble.demandErrorReductionPct[0]}–{f.ensemble.demandErrorReductionPct[1]}%
          </div>
        </div>
        <div className="p-6 bg-teal-50 rounded-xl border border-teal-100">
          <div className="text-sm text-slate-600">Precisión ABC</div>
          <div className="text-3xl font-bold text-teal-700">{f.ensemble.abcAccuracyPct}%</div>
        </div>
        <div className="p-6 bg-amber-50 rounded-xl border border-amber-100">
          <div className="text-sm text-slate-600">Reducción de desperdicios</div>
          <div className="text-3xl font-bold text-amber-700">
            {f.ensemble.wasteReductionPct[0]}–{f.ensemble.wasteReductionPct[1]}%
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-3">Recomendaciones clave</h4>
        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          {data.recommendations.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
        <div className="text-xs text-slate-400 mt-4">
          Última actualización: {new Date(data.lastUpdated).toLocaleString("es-CO")}
        </div>
      </div>
    </div>
  );
}
