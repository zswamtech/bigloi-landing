export function ValueProps() {
  const items = [
    {
      title: 'Menos caducidades',
      desc: 'Optimización EOQ y rotación FIFO apoyadas en datos estructurados.'
    },
    {
      title: 'Tokenización verificable',
      desc: 'Registro on-chain (XRPL) de lotes críticos y eventos clave.'
    },
    {
      title: 'Visibilidad unificada',
      desc: 'Inventario y movimientos consolidados en una sola capa de datos.'
    },
    {
      title: 'Preparación regulatoria',
      desc: 'Trazabilidad y auditoría desde el MVP, sin fricción.'
    }
  ];
  return (
    <section className="py-24" id="valor">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 tracking-tight">Valor Clave</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(i => (
            <div key={i.title} className="p-5 rounded-xl bg-white shadow-sm border border-slate-100">
              <h3 className="font-semibold mb-2">{i.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
