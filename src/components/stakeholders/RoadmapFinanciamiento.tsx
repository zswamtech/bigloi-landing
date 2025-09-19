export function RoadmapFinanciamiento() {
  return (
    <section id="financiamiento" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            🗺️ Roadmap y Oportunidades de Financiamiento
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Plan estratégico escalado con fuentes de financiamiento identificadas y
            cronograma de implementación para los próximos 36 meses
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Cronograma de Implementación
          </h3>
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="text-center mt-2">
                  <div className="text-sm font-semibold text-slate-900">Fase 1</div>
                  <div className="text-xs text-slate-500">Meses 1-3</div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 flex-1">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Preparación y Consolidación</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div>
                    <div className="font-semibold mb-2">Actividades:</div>
                    <ul className="space-y-1">
                      <li>• Formalizar consorcio universidades</li>
                      <li>• Aplicación MinCiencias 949</li>
                      <li>• MOUs hospitales piloto</li>
                      <li>• Reclutar equipo core</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Presupuesto: $150M COP</div>
                    <ul className="space-y-1">
                      <li>• Formulación: $50M</li>
                      <li>• Legal: $30M</li>
                      <li>• Viajes: $20M</li>
                      <li>• Personal: $50M</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="text-center mt-2">
                  <div className="text-sm font-semibold text-slate-900">Fase 2</div>
                  <div className="text-xs text-slate-500">Meses 4-9</div>
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 flex-1">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Desarrollo MVP</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div>
                    <div className="font-semibold mb-2">Entregables:</div>
                    <ul className="space-y-1">
                      <li>• Core blockchain desarrollado</li>
                      <li>• Dashboard analytics funcional</li>
                      <li>• Integración HIS piloto</li>
                      <li>• API REST documentada</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Presupuesto: $800M COP</div>
                    <ul className="space-y-1">
                      <li>• Desarrollo: $400M</li>
                      <li>• Infraestructura: $100M</li>
                      <li>• Personal: $250M</li>
                      <li>• Validación: $50M</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="text-center mt-2">
                  <div className="text-sm font-semibold text-slate-900">Fase 3</div>
                  <div className="text-xs text-slate-500">Meses 10-15</div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 flex-1">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Piloto Hospital</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div>
                    <div className="font-semibold mb-2">Métricas:</div>
                    <ul className="space-y-1">
                      <li>• 100 usuarios certificados</li>
                      <li>• 10,000 transacciones</li>
                      <li>• 30% reducción pérdidas</li>
                      <li>• Caso estudio publicable</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Presupuesto: $1,200M COP</div>
                    <ul className="space-y-1">
                      <li>• Implementación: $300M</li>
                      <li>• Soporte: $200M</li>
                      <li>• Personal campo: $400M</li>
                      <li>• Capacitación: $150M</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="text-center mt-2">
                  <div className="text-sm font-semibold text-slate-900">Fase 4</div>
                  <div className="text-xs text-slate-500">Meses 16-24</div>
                </div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 flex-1">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Escalamiento Regional</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div>
                    <div className="font-semibold mb-2">Objetivos:</div>
                    <ul className="space-y-1">
                      <li>• 5 hospitales conectados</li>
                      <li>• 20 farmacias integradas</li>
                      <li>• NOC 24/7 operativo</li>
                      <li>• Modelo SaaS definido</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Presupuesto: $3,000M COP</div>
                    <ul className="space-y-1">
                      <li>• Expansión técnica: $1,000M</li>
                      <li>• Operaciones: $800M</li>
                      <li>• Marketing: $500M</li>
                      <li>• Personal: $700M</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Funding Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">💰 Fuentes Públicas Nacionales</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-slate-900">MinCiencias - Convocatoria 949</h4>
                <div className="text-sm text-slate-600">
                  <div>Monto: Hasta $800M COP</div>
                  <div>Foco: Territorios garantes salud</div>
                  <div>Cierre: Abril 2025</div>
                  <div className="text-green-600 font-semibold">Match: 100% con BigLoI</div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-slate-900">Sistema General de Regalías</h4>
                <div className="text-sm text-slate-600">
                  <div>Disponible región: $212.387M (2024-2025)</div>
                  <div>Por departamento: $70M promedio</div>
                  <div>Requisitos: Aval OCAD + cofinanciación 10%</div>
                  <div className="text-green-600 font-semibold">Probabilidad: Alta</div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-slate-900">Colombia Inteligente (966)</h4>
                <div className="text-sm text-slate-600">
                  <div>Monto: Hasta $500M COP</div>
                  <div>Foco: IA para territorios</div>
                  <div>Cierre: Marzo 2025</div>
                  <div className="text-green-600 font-semibold">Match: 95% con BigLoI</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">🌍 Cooperación Internacional</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-slate-900">BID Lab</h4>
                <div className="text-sm text-slate-600">
                  <div>Monto: Hasta $500K USD</div>
                  <div>Foco: Blockchain para desarrollo</div>
                  <div>Requisito: Contrapartida 1:1</div>
                  <div className="text-green-600 font-semibold">Probabilidad: Alta</div>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-slate-900">USAID DIV</h4>
                <div className="text-sm text-slate-600">
                  <div>Stage 1: $200K USD (prueba concepto)</div>
                  <div>Stage 2: $1.5M USD (piloto)</div>
                  <div>Stage 3: $5M USD (escalamiento)</div>
                  <div className="text-green-600 font-semibold">Enfoque innovación</div>
                </div>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-bold text-slate-900">Banco Mundial</h4>
                <div className="text-sm text-slate-600">
                  <div>Fondo Innovación: $300K USD</div>
                  <div>Foco: Salud digital</div>
                  <div>Requisito: Gobierno como socio</div>
                  <div className="text-blue-600 font-semibold">En evaluación</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Funding Strategy */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Estrategia de Financiamiento Escalonado</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-bold text-blue-400 mb-2">Semilla</h4>
              <div className="text-sm text-slate-300 space-y-1">
                <div>0-6 meses</div>
                <div className="font-bold text-blue-400">$500M COP</div>
                <div>MinCiencias: $300M</div>
                <div>Universidad: $100M</div>
                <div>Fundación: $100M</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-bold text-green-400 mb-2">Piloto</h4>
              <div className="text-sm text-slate-300 space-y-1">
                <div>6-18 meses</div>
                <div className="font-bold text-green-400">$2,000M COP</div>
                <div>SGR Caldas: $800M</div>
                <div>BID Lab: $700M</div>
                <div>Privado: $500M</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-bold text-purple-400 mb-2">Escalamiento</h4>
              <div className="text-sm text-slate-300 space-y-1">
                <div>18-36 meses</div>
                <div className="font-bold text-purple-400">$5,000M COP</div>
                <div>USAID Stage 2: $2,000M</div>
                <div>VC: $2,000M</div>
                <div>Operacional: $1,000M</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h4 className="font-bold text-orange-400 mb-2">Expansión</h4>
              <div className="text-sm text-slate-300 space-y-1">
                <div>36+ meses</div>
                <div className="font-bold text-orange-400">$40,000M COP</div>
                <div>Serie A: $10M USD</div>
                <div>Contratos: $20M USD/año</div>
                <div>Licencias: $5M USD/año</div>
              </div>
            </div>
          </div>
        </div>

        {/* Private Sector */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🏢</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Fundaciones Empresariales</h3>
            <div className="space-y-3 text-sm text-slate-600 mb-6">
              <div><strong>Fundación Luker:</strong> $100-200M COP</div>
              <div><strong>Fundación EPM:</strong> $150-300M COP</div>
              <div><strong>Fundación Bancolombia:</strong> $200-400M COP</div>
            </div>
            <div className="text-xs text-slate-500">
              Foco: Desarrollo regional, impacto social medible
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">💼</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Venture Capital</h3>
            <div className="space-y-3 text-sm text-slate-600 mb-6">
              <div><strong>Velum Ventures:</strong> $500K-2M USD</div>
              <div><strong>Promotora:</strong> $300K-1M USD</div>
              <div><strong>Acumen:</strong> $250K-750K USD</div>
            </div>
            <div className="text-xs text-slate-500">
              Criterios: Mercado &gt;$10M, escalabilidad, tracción
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🏭</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Sector Farmacéutico</h3>
            <div className="space-y-3 text-sm text-slate-600 mb-6">
              <div><strong>Tecnoquímicas:</strong> Alianza estratégica</div>
              <div><strong>Lafrancol:</strong> Optimización distribución</div>
              <div><strong>Procaps:</strong> Integración tecnológica</div>
            </div>
            <div className="text-xs text-slate-500">
              Modelo: Cofinanciación, datos compartidos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}