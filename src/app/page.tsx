'use client';

import { useState } from 'react';
import { ContactForm } from '../components/ContactForm';

export default function InvestigationLandingPage() {
  const [activeForm, setActiveForm] = useState<'university' | 'hospital' | 'government' | null>(null);

  const openForm = (type: 'university' | 'hospital' | 'government') => {
    setActiveForm(type);
  };

  const closeForm = () => {
    setActiveForm(null);
  };
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">Investigación</div>
                <div className="text-xs text-slate-500">Crisis Farmacéutica Colombia</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#problema" className="text-slate-600 hover:text-slate-900 font-medium">El Problema</a>
              <a href="#investigacion" className="text-slate-600 hover:text-slate-900 font-medium">Investigación</a>
              <a href="#solucion" className="text-slate-600 hover:text-slate-900 font-medium">Solución</a>
              <a href="#consorcio" className="text-slate-600 hover:text-slate-900 font-medium">Consorcio</a>
              <a href="#contacto" className="text-slate-600 hover:text-slate-900 font-medium">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Crisis de Inventarios Farmacéuticos<br />
              <span className="text-green-600">en Colombia</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
              Una investigación académica propone transformar la gestión farmacéutica nacional
              mediante tecnología blockchain e inteligencia artificial, iniciando con un piloto en el Eje Cafetero
            </p>
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-3">
              <span className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-blue-800 font-semibold">Propuesta de Investigación Colaborativa Interinstitucional</span>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">
              Dimensión del Problema Regional
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
                <div className="text-3xl font-bold text-red-600 mb-2">2.27M</div>
                <div className="text-sm text-slate-600">Habitantes afectados</div>
                <div className="text-xs text-slate-500 mt-1">Eje Cafetero</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">$1.1B</div>
                <div className="text-sm text-slate-600">Deudas hospitalarias</div>
                <div className="text-xs text-slate-500 mt-1">COP Billones</div>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="text-3xl font-bold text-yellow-600 mb-2">32%</div>
                <div className="text-sm text-slate-600">Hospitales en crisis</div>
                <div className="text-xs text-slate-500 mt-1">Desabastecimiento mensual</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                <div className="text-sm text-slate-600">Incremento quejas</div>
                <div className="text-xs text-slate-500 mt-1">Defensoría del Pueblo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Definition */}
      <section id="problema" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Definición del Problema
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un análisis sistemático de la crisis farmacéutica que afecta a 59 municipios
              del eje cafetero, basado en 440 fuentes documentales verificadas
            </p>
          </div>

          {/* Problem Context */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contexto Demográfico Crítico</h3>
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-bold text-slate-900 mb-3">Envejecimiento Poblacional Acelerado</h4>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Quindío (índice más alto nacional):</span>
                      <span className="font-semibold text-red-600">72.29 adultos mayores/100 jóvenes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Caldas:</span>
                      <span className="font-semibold text-orange-600">67.07</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Risaralda:</span>
                      <span className="font-semibold text-yellow-600">60.61</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span>Promedio Nacional:</span>
                      <span className="font-semibold text-slate-400">40.47</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-slate-900 mb-3">Impacto en Demanda Farmacéutica</h4>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div>• <strong>40%</strong> de la demanda: Medicamentos cardiovasculares</div>
                    <div>• <strong>25%</strong> de la demanda: Tratamientos endocrinológicos</div>
                    <div>• <strong>20%</strong> de la demanda: Neurológicos especializados</div>
                    <div>• <strong>15%</strong> de la demanda: Oncológicos de alto costo</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Crisis Financiera Sistémica</h3>
              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h4 className="font-bold text-red-900 mb-3">Colapso del Sistema de Pagos</h4>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="bg-white/50 rounded-lg p-3">
                      <div className="font-semibold">Nueva EPS (Principal Deudor)</div>
                      <div>• Caldas: $115.222 millones COP</div>
                      <div>• Quindío: $106.677 millones COP</div>
                      <div>• Risaralda: $39.029 millones COP</div>
                      <div className="border-t pt-2 mt-2 font-bold text-red-700">
                        Total: $260.929 millones COP
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-900 mb-3">Consecuencias Operativas</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div>🚨 <strong>Alerta Roja Hospitalaria</strong> en Risaralda y Quindío</div>
                    <div>❌ <strong>Cierre de servicios</strong> a Nueva EPS</div>
                    <div>👥 <strong>Despidos masivos</strong> de personal médico</div>
                    <div>🏥 <strong>Suspensión de UCI</strong> especializadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Crisis */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Crisis Operativa de Gestores Farmacéuticos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-red-400 mb-4">Suspensión de Audifarma</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>📅 <strong>Febrero 2025:</strong> Suspensión oficial</div>
                  <div>🔄 Transición caótica a nuevos operadores</div>
                  <div>⏰ Sistema pico y cédula inefectivo</div>
                  <div>🏪 Generación de mercado negro de turnos</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-orange-400 mb-4">Tiempos de Reposición</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>⚖️ <strong>Normativa:</strong> 48 horas máximo</div>
                  <div>📊 <strong>Realidad actual:</strong> 7-10 días promedio</div>
                  <div>🩺 <strong>Medicamentos críticos:</strong> hasta 30 días</div>
                  <div>🔴 <strong>Emergencias:</strong> Desabastecimiento total</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-blue-400 mb-4">Barreras Geográficas</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>🏔️ <strong>99.47%</strong> servicios en zonas urbanas</div>
                  <div>🚗 Desplazamientos obligatorios población rural</div>
                  <div>❄️ Interrupciones cadena de frío</div>
                  <div>💸 <strong>$2.8M COP/mes</strong> pérdidas por hospital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="investigacion" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Fundamentación Investigativa
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Investigación académica rigurosa que fundamenta la propuesta de solución
              mediante análisis cuantitativo y cualitativo
            </p>
          </div>

          {/* Research Methodology */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Metodología de Investigación</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Recopilación Documental</h4>
                    <p className="text-sm text-slate-600">440 fuentes verificadas de entidades oficiales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Análisis Cuantitativo</h4>
                    <p className="text-sm text-slate-600">Métricas financieras, demográficas y operativas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Validación Institucional</h4>
                    <p className="text-sm text-slate-600">Contraste con actores del ecosistema de salud</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Fuentes Documentales</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">MinSalud Colombia</span>
                  <span className="text-sm font-semibold text-blue-600">16 documentos</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Gobierno Risaralda</span>
                  <span className="text-sm font-semibold text-green-600">24 documentos</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">MinCiencias</span>
                  <span className="text-sm font-semibold text-purple-600">14 documentos</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">ConsultorSalud</span>
                  <span className="text-sm font-semibold text-orange-600">12 documentos</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600">Otras fuentes especializadas</span>
                  <span className="text-sm font-semibold text-slate-600">374 documentos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Hallazgos Principales de la Investigación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏥</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-3">Crisis Sistémica Confirmada</h4>
                <p className="text-sm text-slate-600 mb-4">
                  La crisis trasciende problemas puntuales y constituye una falla sistémica
                  que requiere intervención estructural
                </p>
                <div className="text-xs text-red-600 bg-red-100 rounded-lg p-2">
                  Evidencia: 82 fuentes convergentes
                </div>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-3">Ventana de Oportunidad</h4>
                <p className="text-sm text-slate-600 mb-4">
                  El colapso de gestores tradicionales crea espacio para soluciones
                  tecnológicas disruptivas
                </p>
                <div className="text-xs text-green-600 bg-green-100 rounded-lg p-2">
                  Evidencia: 91 fuentes de innovación
                </div>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-3">Ecosistema Preparado</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Infraestructura académica y tecnológica consolidada para
                  implementar soluciones avanzadas
                </p>
                <div className="text-xs text-blue-600 bg-blue-100 rounded-lg p-2">
                  Evidencia: 102 fuentes de capacidades
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Proposal */}
      <section id="solucion" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Propuesta de Solución Tecnológica
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Una plataforma tecnológica fundamentada científicamente que integra blockchain,
              inteligencia artificial e ingeniería industrial para resolver la crisis farmacéutica nacional
            </p>
          </div>

          {/* Solution Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Trazabilidad Blockchain</h3>
              <div className="space-y-3 text-sm text-slate-600 text-left">
                <div className="bg-white/60 rounded-lg p-3">
                  <div className="font-semibold">Tecnología XRPL</div>
                  <div>• Transacciones 3-5 segundos</div>
                  <div>• Costo &lt; $0.01 USD</div>
                  <div>• Carbon neutral certificado</div>
                </div>
                <div className="bg-white/60 rounded-lg p-3">
                  <div className="font-semibold">Beneficios</div>
                  <div>• Trazabilidad inmutable 100%</div>
                  <div>• Transparencia total</div>
                  <div>• Eliminación intermediarios</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Inteligencia Artificial</h3>
              <div className="space-y-3 text-sm text-slate-600 text-left">
                <div className="bg-white/60 rounded-lg p-3">
                  <div className="font-semibold">Predicción Demanda</div>
                  <div>• Precisión 92% pronósticos</div>
                  <div>• Anticipación 30 días</div>
                  <div>• Optimización automática</div>
                </div>
                <div className="bg-white/60 rounded-lg p-3">
                  <div className="font-semibold">Algoritmos EOQ/ROP</div>
                  <div>• Cantidad Económica Pedido</div>
                  <div>• Puntos Reorden automáticos</div>
                  <div>• Inventario óptimo</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Industria 4.0</h3>
              <div className="space-y-3 text-sm text-slate-600 text-left">
                <div className="bg-white/60 rounded-lg p-3">
                  <div className="font-semibold">Estándares ISO 20022</div>
                  <div>• Compatible banca internacional</div>
                  <div>• Preparado para CBDC</div>
                  <div>• Liquidación automática</div>
                </div>
                <div className="bg-white/60 rounded-lg p-3">
                  <div className="font-semibold">Integración HL7 FHIR</div>
                  <div>• Interoperabilidad sistemas</div>
                  <div>• Historia clínica unificada</div>
                  <div>• Prescripción electrónica</div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Projections */}
          <div className="bg-slate-900 rounded-2xl text-white p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Impacto Proyectado</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-sm text-slate-300">Reducción pérdidas</div>
                <div className="text-xs text-slate-400">por vencimiento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                <div className="text-sm text-slate-300">Mejora reposición</div>
                <div className="text-xs text-slate-400">48h objetivo vs 7-10d actual</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-sm text-slate-300">Trazabilidad</div>
                <div className="text-xs text-slate-400">medicamentos alto costo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">$1.4B</div>
                <div className="text-sm text-slate-300">Ahorros anuales</div>
                <div className="text-xs text-slate-400">COP estimados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consortium */}
      <section id="consorcio" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Propuesta de Consorcio de Investigación
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Invitación a formar una alianza académica estratégica entre instituciones del Eje Cafetero
              con experiencia validada en innovación tecnológica y salud pública
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Leading Institution */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-2xl text-white">🏛️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Universidad de Caldas</h3>
                  <div className="text-blue-600 font-semibold">Propuesta de Institución Líder</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">22 años</div>
                  <div className="text-sm text-slate-600">Telesalud Colombia</div>
                  <div className="text-xs text-slate-500">Experiencia continua</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">6,000</div>
                  <div className="text-sm text-slate-600">Teleconsultas COVID</div>
                  <div className="text-xs text-slate-500">Premio USAID</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">15</div>
                  <div className="text-sm text-slate-600">Municipios conectados</div>
                  <div className="text-xs text-slate-500">Red consolidada</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-bold text-slate-900 mb-3">Capacidades Institucionales</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div>
                    <div>✓ Infraestructura de investigación consolidada</div>
                    <div>✓ Red de contactos con sector salud regional</div>
                    <div>✓ Experiencia en gestión de proyectos grandes</div>
                  </div>
                  <div>
                    <div>✓ Estudiantes maestría/doctorado disponibles</div>
                    <div>✓ Laboratorios especializados</div>
                    <div>✓ Credibilidad institucional establecida</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Universities */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl text-white">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">UTP</h4>
                    <div className="text-sm text-slate-600">Universidad Tecnológica</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>• Desarrollo blockchain</div>
                  <div>• Integración sistemas</div>
                  <div>• 108 convenios internacionales</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl text-white">📊</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Uniquindío</h4>
                    <div className="text-sm text-slate-600">Universidad del Quindío</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div>• Impacto social</div>
                  <div>• Validación farmacéutica</div>
                  <div>• 34 programas pregrado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Strategy */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Estrategia de Financiamiento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">$800M</div>
                <div className="text-sm text-slate-600 mb-2">MinCiencias 949</div>
                <div className="text-xs text-slate-500">Soberanía Sanitaria</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">$212M</div>
                <div className="text-sm text-slate-600 mb-2">SGR Regional</div>
                <div className="text-xs text-slate-500">Sistema Regalías</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">$500K</div>
                <div className="text-sm text-slate-600 mb-2">BID Lab</div>
                <div className="text-xs text-slate-500">USD Cooperación</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-2xl font-bold text-orange-600 mb-2">Privado</div>
                <div className="text-sm text-slate-600 mb-2">Fundaciones</div>
                <div className="text-xs text-slate-500">Luker, EPM, Bancolombia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Únase a la Transformación
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Esta es una invitación a formar parte de un proyecto que puede transformar
              fundamentalmente la gestión farmacéutica en Colombia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Universidades</h3>
              <p className="text-sm text-slate-300 mb-6">
                Participación en investigación de frontera, acceso a financiamiento internacional
              </p>
              <button
                type="button"
                onClick={() => openForm('university')}
                className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300"
              >
                Expresar Interés
              </button>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Hospitales</h3>
              <p className="text-sm text-slate-300 mb-6">
                Oportunidad de ser sitio piloto, optimización demostrable de operaciones
              </p>
              <button
                type="button"
                onClick={() => openForm('hospital')}
                className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition duration-300"
              >
                Conocer Propuesta
              </button>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Colaboración e Integración</h3>
              <p className="text-sm text-slate-300 mb-6">
                Únete como aliado estratégico en la transformación del sector farmacéutico
              </p>
              <button
                type="button"
                onClick={() => openForm('government')}
                className="block w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition duration-300"
              >
                Conocer Oportunidad
              </button>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg italic text-slate-300 mb-6">
                "Esta propuesta de investigación representa una respuesta científicamente
                fundamentada a una crisis nacional que afecta a millones de personas"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-slate-800 rounded-lg px-4 py-2">
                  <div className="text-sm font-semibold">Contacto de Investigación</div>
                  <div className="text-xs text-slate-400">Proyecto Colaborativo</div>
                  <div className="text-xs text-blue-400">contacto@bigloi.com</div>
                </div>
                <div className="bg-slate-800 rounded-lg px-4 py-2">
                  <div className="text-sm font-semibold">Consorcio de Investigación</div>
                  <div className="text-xs text-slate-400">Alianza Académica Estratégica</div>
                  <div className="text-xs text-green-400">Eje Cafetero Colombiano</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="text-white font-bold text-lg">Investigación Farmacéutica</span>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Consorcio de Investigación Farmacéutica.
            Transformando la gestión farmacéutica mediante investigación colaborativa.
          </p>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm
        type={activeForm!}
        isOpen={activeForm !== null}
        onClose={closeForm}
      />
    </main>
  );
}