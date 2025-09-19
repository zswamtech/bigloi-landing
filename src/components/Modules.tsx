export function Modules() {
  const modules = [
    { title: 'Inventario Inteligente', points: ['EOQ', 'Alertas stock bajo', 'Movimientos normalizados'] },
    { title: 'Tokenización', points: ['Lotes XRPL', 'Hash verificable', 'Eventos críticos'] },
    { title: 'Compliance & Auditoría', points: ['Historial íntegro', 'Roles y permisos', 'Reportes básicos'] },
    { title: 'Financiamiento Futuro', points: ['ISO 20022 base', 'Pagos programables', 'Trazabilidad a facturación'] }
  ];
  return (
    <section className="py-24 bg-slate-50" id="modulos">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 tracking-tight">Módulos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map(m => (
            <div key={m.title} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col">
              <h3 className="font-semibold mb-3 text-brand-700">{m.title}</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                {m.points.map(p => <li key={p}>• {p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
