export function Steps() {
  const steps = [
    { n: 1, t: 'Registro de lote', d: 'Captura estructurada y normalización.' },
    { n: 2, t: 'Tokenización XRPL', d: 'Hash y metadatos anclados en ledger.' },
    { n: 3, t: 'Monitoreo Inventario', d: 'Movimientos, EOQ y alertas.' },
    { n: 4, t: 'Reportes & Finanzas', d: 'Auditoría y futura integración pagos.' },
  ];
  return (
    <section className="py-24" id="como-funciona">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 tracking-tight">Cómo Funciona</h2>
        <ol className="space-y-6">
          {steps.map(s => (
            <li key={s.n} className="flex gap-6 items-start">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-600 text-white font-semibold text-lg shadow">{s.n}</div>
              <div>
                <h3 className="font-semibold mb-1">{s.t}</h3>
                <p className="text-sm text-slate-600">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
