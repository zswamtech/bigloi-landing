export function CallToActionDiferenciado() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Message */}
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🚀 Únete a la Transformación del Eje Cafetero
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            El momento es ahora. La tecnología está lista. El ecosistema está preparado.
            BigLoI está listo para revolucionar la gestión farmacéutica regional.
          </p>
          <div className="inline-flex items-center space-x-3 bg-white/20 rounded-full px-6 py-3 backdrop-blur-lg">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-lg font-semibold">2.27M beneficiarios esperando solución</span>
          </div>
        </div>

        {/* Differentiated CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Universities */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Para Universidades</h3>
            <p className="text-sm opacity-90 mb-6">
              Lidera la investigación en blockchain farmacéutico. Accede a financiamiento MinCiencias.
              Publica en journals de alto impacto.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:universities@bigloi.com?subject=Participación%20Universidad%20en%20BigLoI&body=Universidad:%20%0D%0AFacultad:%20%0D%0AContacto:%20%0D%0ATelefono:%20%0D%0A%0D%0AEstamos%20interesados%20en%20participar%20en%20el%20consorcio%20de%20investigación%20BigLoI."
                className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300"
              >
                Unirse al Consorcio
              </a>
              <div className="text-xs opacity-75">
                ✅ Financiamiento hasta $800M COP<br />
                ✅ Red internacional de contactos
              </div>
            </div>
          </div>

          {/* Hospitals */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white text-center">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Para Hospitales</h3>
            <p className="text-sm opacity-90 mb-6">
              Reduce pérdidas 40%, mejora reposición 60%. Trazabilidad 100%.
              ROI en 18 meses garantizado.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hospitals@bigloi.com?subject=Demo%20Personalizada%20BigLoI&body=Hospital:%20%0D%0ACargo:%20%0D%0AContacto:%20%0D%0ATelefono:%20%0D%0A%0D%0ASolicitamos%20una%20demo%20personalizada%20de%20BigLoI%20para%20nuestro%20hospital."
                className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition duration-300"
              >
                Solicitar Demo
              </a>
              <div className="text-xs opacity-75">
                ✅ Piloto sin costo inicial<br />
                ✅ Integración con HIS existente
              </div>
            </div>
          </div>

          {/* Government */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Para Gobierno</h3>
            <p className="text-sm opacity-90 mb-6">
              Impacto social medible. Reducción 70% quejas ciudadanas.
              Transparencia total en gastos farmacéuticos.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:government@bigloi.com?subject=Impacto%20Social%20BigLoI&body=Entidad:%20%0D%0ACargo:%20%0D%0AContacto:%20%0D%0ATelefono:%20%0D%0A%0D%0AQueremos%20conocer%20el%20impacto%20social%20de%20BigLoI%20para%20nuestro%20territorio."
                className="block w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition duration-300"
              >
                Conocer Impacto
              </a>
              <div className="text-xs opacity-75">
                ✅ Datos para políticas públicas<br />
                ✅ Modelo replicable nacional
              </div>
            </div>
          </div>

          {/* Investors */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Para Inversionistas</h3>
            <p className="text-sm opacity-90 mb-6">
              Mercado $1.4B COP. Tecnología validada.
              Tracción documentada. Escalabilidad regional.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:investors@bigloi.com?subject=Oportunidad%20Inversión%20BigLoI&body=Fondo/Empresa:%20%0D%0AContacto:%20%0D%0ATelefono:%20%0D%0A%0D%0AEstamos%20interesados%20en%20las%20oportunidades%20de%20inversión%20en%20BigLoI."
                className="block w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition duration-300"
              >
                Descubrir Modelo
              </a>
              <div className="text-xs opacity-75">
                ✅ Valoración Serie A: $10M USD<br />
                ✅ Contratos gubernamentales
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">🤝 Contacto Directo del Equipo</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl">👨‍💻</span>
                  </div>
                  <div>
                    <div className="font-semibold">Andrés Soto - Líder Técnico</div>
                    <div className="text-sm opacity-90">andressoto@bigloi.com</div>
                    <div className="text-xs opacity-75">Arquitectura y Desarrollo</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🏛️</span>
                  </div>
                  <div>
                    <div className="font-semibold">Universidad de Caldas</div>
                    <div className="text-sm opacity-90">investigaciones@ucaldas.edu.co</div>
                    <div className="text-xs opacity-75">Vicerrectoría de Investigaciones</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🏥</span>
                  </div>
                  <div>
                    <div className="font-semibold">Hospital Universitario Caldas</div>
                    <div className="text-sm opacity-90">innovacion@hospitalcaldas.gov.co</div>
                    <div className="text-xs opacity-75">Dirección de Innovación</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">📱 Acceso Inmediato</h3>
              <div className="space-y-4">
                <a
                  href="http://localhost:5173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 transition duration-300"
                >
                  🖥️ Demo Dashboard Live
                </a>
                <a
                  href="http://localhost:3001/api/v1/medicamentos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 transition duration-300"
                >
                  🔗 API Endpoints Públicos
                </a>
                <a
                  href="https://github.com/bigloi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 transition duration-300"
                >
                  📚 Documentación Técnica
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center text-white mt-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg italic mb-6 opacity-90">
              "BigLoI es más que una plataforma, es empatía en acción. Es la sonrisa que tranquiliza,
              la solidaridad con rigor tecnológico para un futuro farmacéutico más humano."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <span className="text-sm">🌟</span>
                <span className="text-sm font-semibold">Finalista Hackathon Salud Digital 2024</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <span className="text-sm">🏆</span>
                <span className="text-sm font-semibold">Reconocimiento MinCiencias</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <span className="text-sm">🚀</span>
                <span className="text-sm font-semibold">Programa Aceleración BIOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
}