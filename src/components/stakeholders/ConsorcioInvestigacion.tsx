export function ConsorcioInvestigacion() {
  return (
    <section id="consorcio" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            🎓 Consorcio de Investigación - Únete al Futuro
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Grupo de investigación liderado por la Universidad de Caldas para transformar
            la gestión farmacéutica del eje cafetero
          </p>
        </div>

        {/* Leading Institution */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              🏛️ Universidad de Caldas - Institución Líder
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">22 años</div>
                <div className="text-sm text-slate-600">Telesalud Colombia</div>
                <div className="text-xs text-slate-500">Experiencia validada</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">6,000</div>
                <div className="text-sm text-slate-600">Teleconsultas</div>
                <div className="text-xs text-slate-500">Durante pandemia</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">Premio</div>
                <div className="text-sm text-slate-600">USAID</div>
                <div className="text-xs text-slate-500">&quot;Héroe de la pandemia&quot;</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 mb-4">
              <strong>Rol:</strong> Coordinación académica, validación científica, infraestructura de investigación
            </p>
            <p className="text-slate-600">
              <strong>Aporte:</strong> Estudiantes de maestría/doctorado, laboratorios especializados,
              red de contactos institucionales
            </p>
          </div>
        </div>

        {/* Partner Universities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Universidad Tecnológica de Pereira</h3>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-slate-600">Desarrollo tecnológico blockchain</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-slate-600">Integración de sistemas</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-slate-600">Ciberseguridad</span>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              <strong>108 convenios internacionales</strong> • Centro de Innovación CIDT
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Universidad del Quindío</h3>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-slate-600">Estudios de impacto social</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-slate-600">Validación farmacéutica</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-slate-600">Componente regulatorio</span>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              <strong>34 programas de pregrado</strong> • Primer clúster educativo nacional
            </div>
          </div>
        </div>

        {/* Team Structure */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Estructura del Equipo de Investigación
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👨‍🔬</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Investigador Principal</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <div>PhD Sistemas/Salud Pública</div>
                <div>10+ años experiencia</div>
                <div>Dedicación 50%</div>
                <div className="font-semibold text-blue-600">$15M COP/mes</div>
              </div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Arquitecto Blockchain</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <div>Senior XRPL</div>
                <div>Experiencia DeFi</div>
                <div>Dedicación 100%</div>
                <div className="font-semibold text-green-600">Tiempo completo</div>
              </div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🧠</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Científico de Datos</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <div>PhD/MSc Data Science</div>
                <div>IA/ML especialista</div>
                <div>Dedicación 75%</div>
                <div className="font-semibold text-purple-600">EOQ/ROP focus</div>
              </div>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💊</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Coord. Farmacéutico</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <div>Químico Farmacéutico</div>
                <div>Experiencia hospitalaria</div>
                <div>Dedicación 100%</div>
                <div className="font-semibold text-orange-600">Validación clínica</div>
              </div>
            </div>
          </div>
        </div>

        {/* Extended Team */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white p-8 mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Equipo Extendido</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-sm text-slate-300">Desarrolladores Full-Stack</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">2</div>
              <div className="text-sm text-slate-300">Analistas de Datos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-sm text-slate-300">Profesionales Salud</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-2">10</div>
              <div className="text-sm text-slate-300">Estudiantes Maestría/Doctorado</div>
            </div>
          </div>
        </div>

        {/* Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Para Universidades</h3>
            <div className="space-y-3 text-sm text-slate-600 mb-6">
              <div>• Participación en investigación innovadora</div>
              <div>• Acceso a financiamiento MinCiencias</div>
              <div>• Publicaciones de alto impacto</div>
              <div>• Red de contactos internacionales</div>
            </div>
            <a
              href="mailto:research@bigloi.com?subject=Participación%20Universidad&body=Institución:%20%0D%0AFacultad:%20%0D%0AContacto:%20"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300"
            >
              Unirse al Consorcio
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🏥</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Para Hospitales</h3>
            <div className="space-y-3 text-sm text-slate-600 mb-6">
              <div>• Sitio piloto con tecnología avanzada</div>
              <div>• Optimización de inventarios</div>
              <div>• Reducción de pérdidas</div>
              <div>• Casos de estudio reconocidos</div>
            </div>
            <a
              href="mailto:hospitals@bigloi.com?subject=Participación%20Hospital&body=Hospital:%20%0D%0ACargo:%20%0D%0AContacto:%20"
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition duration-300"
            >
              Solicitar Demo
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🏛️</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Para Gobierno</h3>
            <div className="space-y-3 text-sm text-slate-600 mb-6">
              <div>• Impacto social medible</div>
              <div>• Datos para políticas públicas</div>
              <div>• Transparencia total</div>
              <div>• Modelo replicable</div>
            </div>
            <a
              href="mailto:government@bigloi.com?subject=Participación%20Gobierno&body=Entidad:%20%0D%0ACargo:%20%0D%0AContacto:%20"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition duration-300"
            >
              Conocer Impacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}