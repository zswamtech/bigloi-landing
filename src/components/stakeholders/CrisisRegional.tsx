export function CrisisRegional() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            La Crisis Farmacéutica Regional Documentada
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            El eje cafetero enfrenta una crisis farmacéutica sistémica con impactos medibles
            en la salud de 2.27 millones de habitantes
          </p>
        </div>

        {/* Main Crisis Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Crisis Financiera Hospitalaria</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">Deudas Nueva EPS Total</span>
                <span className="text-2xl font-bold text-red-600">$260.9B COP</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">Hospitales en Alerta Roja</span>
                <span className="text-xl font-bold text-orange-600">Risaralda + Quindío</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-600">UCI Especializadas Cerradas</span>
                <span className="text-xl font-bold text-red-600">Múltiples</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Colapso de Gestores</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">Audifarma Suspendida</span>
                <span className="text-xl font-bold text-red-600">Feb 2025</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">Tiempo Reposición Actual</span>
                <span className="text-xl font-bold text-orange-600">7-10 días</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-600">Normativa Requerida</span>
                <span className="text-xl font-bold text-green-600">48 horas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Critical Medications */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Medicamentos Críticos en Desabastecimiento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-3xl mb-3">💉</div>
              <h4 className="font-bold text-slate-900 mb-2">Endocrinológicos</h4>
              <p className="text-sm text-slate-600">Insulina humana cristalina</p>
              <div className="mt-3 text-red-600 font-bold">25% demanda</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl mb-3">❤️</div>
              <h4 className="font-bold text-slate-900 mb-2">Cardiovasculares</h4>
              <p className="text-sm text-slate-600">Metropolol, Hidralazina, Atenolol</p>
              <div className="mt-3 text-orange-600 font-bold">40% demanda</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-3">🧠</div>
              <h4 className="font-bold text-slate-900 mb-2">Neurológicos</h4>
              <p className="text-sm text-slate-600">Clobazam, Quetiapina</p>
              <div className="mt-3 text-blue-600 font-bold">20% demanda</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl mb-3">🎗️</div>
              <h4 className="font-bold text-slate-900 mb-2">Oncológicos</h4>
              <p className="text-sm text-slate-600">Tratamientos múltiples</p>
              <div className="mt-3 text-purple-600 font-bold">15% demanda</div>
            </div>
          </div>
        </div>

        {/* Geographic Challenges */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Desafíos Geográficos Únicos</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 text-xl">🏔️</span>
                  <div>
                    <h4 className="font-bold">Geografía Montañosa</h4>
                    <p className="text-slate-300 text-sm">99.47% servicios farmacéuticos en zonas urbanas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 text-xl">❄️</span>
                  <div>
                    <h4 className="font-bold">Cadena de Frío</h4>
                    <p className="text-slate-300 text-sm">Interrupciones frecuentes en municipios apartados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">📈</span>
                  <div>
                    <h4 className="font-bold">Incremento Quejas</h4>
                    <p className="text-slate-300 text-sm">70% aumento ante Defensoría del Pueblo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-orange-400 mb-2">$2.8M</div>
                <div className="text-lg text-white mb-1">Pérdida mensual promedio</div>
                <div className="text-slate-300 text-sm">por medicamentos vencidos/hospital</div>
                <div className="mt-4 text-2xl font-bold text-red-400">$1.4B</div>
                <div className="text-slate-300 text-sm">Pérdida anual estimada regional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-8">
            La crisis está documentada. La oportunidad de transformación es ahora.
          </p>
          <a
            href="#solucion"
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition duration-300"
          >
            Ver la Solución BigLoI →
          </a>
        </div>
      </div>
    </section>
  );
}