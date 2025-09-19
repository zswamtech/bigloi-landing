export function Team() {
  const team = [
    { name: 'Andrés Soto', role: 'CTO / Arquitectura de Datos', focus: 'Modelo unificado & tokenización XRPL' },
    { name: 'Equipo AI/Inventario', role: 'Optimización & Alertas', focus: 'EOQ, métricas y forecast' },
    { name: 'Asesor Compliance', role: 'Regulación Sanitaria', focus: 'Auditoría y cumplimiento' },
  ];
  return (
    <section className="py-24 bg-slate-50" id="equipo">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 tracking-tight">Equipo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map(m => (
            <div key={m.name} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-semibold text-lg mb-1">{m.name}</h3>
              <p className="text-sm text-brand-700 mb-2">{m.role}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{m.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
