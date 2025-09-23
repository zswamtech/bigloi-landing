"use client";
import { useEffect, useState } from 'react';

type Obj = { name: string; updated_at?: string };

export default function IntakeStatusPanel() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hospital, setHospital] = useState<Obj[]>([]);
  const [feedback, setFeedback] = useState<Obj[]>([]);

  useEffect(() => {
    const load = async () => {
      setLoading(true); setError(null);
      try {
        const res = await fetch('/api/intake/status', { cache: 'no-store' });
        const data = await res.json();
        setHospital(data?.hospital || []);
        setFeedback(data?.feedback || []);
      } catch (e: any) {
        setError(e?.message || 'Error cargando estado');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow p-6 border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Estado de Ingesta (últimos)</h3>
        {loading && <span className="text-xs text-slate-500">Cargando…</span>}
      </div>
      {error && <div className="text-xs text-red-600">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <div>
          <div className="text-sm text-slate-500 mb-2">Hospital</div>
          <ul className="space-y-1 text-xs text-slate-700">
            {hospital.length === 0 && <li className="text-slate-400">Sin registros</li>}
            {hospital.map((o, i) => (
              <li key={i} className="truncate">{o.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm text-slate-500 mb-2">Feedback</div>
          <ul className="space-y-1 text-xs text-slate-700">
            {feedback.length === 0 && <li className="text-slate-400">Sin registros</li>}
            {feedback.map((o, i) => (
              <li key={i} className="truncate">{o.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
