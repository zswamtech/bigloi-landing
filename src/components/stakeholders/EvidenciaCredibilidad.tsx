export function EvidenciaCredibilidad() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            📋 Evidencia y Credibilidad Validada
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Documentación técnica completa, casos de éxito regionales y alianzas institucionales establecidas
          </p>
        </div>

        {/* Technical Documentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Documentación Técnica</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-slate-900">Arquitectura C4 Completa</h4>
                  <p className="text-sm text-slate-600">Context, Container, Component, Code levels</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-slate-900">API RESTful Documentada</h4>
                  <p className="text-sm text-slate-600">Endpoints públicos funcionales y testeados</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-slate-900">Flujos UML de Procesos</h4>
                  <p className="text-sm text-slate-600">Diagramas de procesos críticos validados</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-slate-900">Modelo de Datos 3NF</h4>
                  <p className="text-sm text-slate-600">Base de datos normalizada y optimizada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Prototipos Funcionales</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-slate-900">Backend API Operativo</h4>
                  <p className="text-sm text-slate-600">Node.js + Express, PostgreSQL</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-slate-900">Smart Contracts XRPL</h4>
                  <p className="text-sm text-slate-600">Desplegados en testnet, validados</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-slate-900">Dashboard Analytics</h4>
                  <p className="text-sm text-slate-600">React + Material-UI, tiempo real</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-slate-900">Mobile App React Native</h4>
                  <p className="text-sm text-slate-600">60% completado, offline-first</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Validations */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Validaciones Técnicas Completadas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">10,000</div>
              <div className="text-sm text-slate-600">TPS Sostenidas</div>
              <div className="text-xs text-slate-500 mt-1">Pruebas de carga</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">OWASP</div>
              <div className="text-sm text-slate-600">Top 10</div>
              <div className="text-xs text-slate-500 mt-1">Compliance</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">HL7</div>
              <div className="text-sm text-slate-600">FHIR</div>
              <div className="text-xs text-slate-500 mt-1">Integración validada</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">ISO</div>
              <div className="text-sm text-slate-600">20022</div>
              <div className="text-xs text-slate-500 mt-1">Mensajería validada</div>
            </div>
          </div>
        </div>

        {/* Regional Success Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Hospital Universitario Caldas</h3>
              <div className="text-sm text-blue-600 font-semibold">Único en ranking mundial Newsweek 2023</div>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <div>✅ Historia clínica 100% digital (2019)</div>
              <div>✅ Dispensación robotizada (2021)</div>
              <div>✅ Trazabilidad RFID alto costo (2022)</div>
              <div>✅ Unidad Oncología $28B donaciones</div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-2xl font-bold text-green-600">35%</div>
              <div className="text-xs text-slate-500">Reducción errores medicación</div>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Telesalud Colombia</h3>
              <div className="text-sm text-green-600 font-semibold">22 años operación continua</div>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <div>✅ 6,000 teleconsultas pandemia</div>
              <div>✅ 15 municipios conectados</div>
              <div>✅ Premio USAID &quot;Héroe Pandemia&quot;</div>
              <div>✅ Modelo replicado 8 departamentos</div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-2xl font-bold text-green-600">$2.7B</div>
              <div className="text-xs text-slate-500">COP financiamiento MinCiencias</div>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🧬</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Clúster Biotecnología</h3>
              <div className="text-sm text-purple-600 font-semibold">39 empresas, 26 grupos investigación</div>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <div>✅ Bioinformática medicina personalizada</div>
              <div>✅ Nanomedicina drug delivery</div>
              <div>✅ Diagnóstico molecular point-of-care</div>
              <div>✅ Telemedicina con IA</div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-2xl font-bold text-purple-600">Centro</div>
              <div className="text-xs text-slate-500">BIOS Bioinformática</div>
            </div>
          </div>
        </div>

        {/* Institutional Alliances */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Alianzas Institucionales Establecidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-green-400 mb-4">Cartas de Intención Firmadas</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div>✅ Hospital Universitario de Caldas (piloto)</div>
                <div>✅ ESE San Marcos Chinchiná (rural)</div>
                <div>✅ Secretaría Salud Caldas (institucional)</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-4">En Proceso (60 días)</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div>⏳ Hospital San Jorge Pereira</div>
                <div>⏳ Red Salud Armenia ESE</div>
                <div>⏳ Nueva EPS regional</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-purple-400 mb-4">Memorandos de Entendimiento</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div>📝 BIOS (desarrollo IA)</div>
                <div>📝 Ripple (soporte técnico)</div>
                <div>📝 Microsoft (Azure credits)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Publications and Recognition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-indigo-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">📄 Publicaciones en Desarrollo</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-slate-900">&quot;Blockchain para trazabilidad farmacéutica en países en desarrollo&quot;</h4>
                <p className="text-sm text-slate-600">Target: Journal of Medical Internet Research</p>
                <p className="text-xs text-indigo-600">Estado: 70% completado</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-slate-900">&quot;Optimización EOQ/ROP con IA en hospitales públicos&quot;</h4>
                <p className="text-sm text-slate-600">Target: International Journal of Production Economics</p>
                <p className="text-xs text-green-600">Estado: Revisión metodología</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-orange-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">🏆 Reconocimientos</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-orange-500 text-xl">🥈</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Finalista Hackathon Salud Digital 2024</h4>
                  <p className="text-sm text-slate-600">MinSalud + MinTIC</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 text-xl">🎖️</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Mención Honrosa MinCiencias</h4>
                  <p className="text-sm text-slate-600">Innovación Tecnológica</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">🚀</span>
                <div>
                  <h4 className="font-semibold text-slate-900">Programa Aceleración BIOS</h4>
                  <p className="text-sm text-slate-600">Biotecnología e IA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}