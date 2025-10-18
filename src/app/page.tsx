'use client';

import { useState } from 'react';
import { ContactForm } from '../components/ContactForm';
import ResearchHighlights from '../components/ResearchHighlights';
import ResearchGallery from '../components/ResearchGallery';
import IntakeFormHospital from '../components/IntakeFormHospital';
import IntakeFormFeedback from '../components/IntakeFormFeedback';
import IntakeStatusPanel from '../components/IntakeStatusPanel';

export default function InvestigationLandingPage() {
  const [activeForm, setActiveForm] = useState<'university' | 'hospital' | 'government' | null>(null);

  const openCollaborationForm = () => {
    setActiveForm('government');
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
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#problema" className="text-slate-600 hover:text-slate-900 font-medium">El Problema</a>
              <a href="#investigacion" className="text-slate-600 hover:text-slate-900 font-medium">Investigación</a>
              <a href="#solucion" className="text-slate-600 hover:text-slate-900 font-medium">Solución</a>
              <a href="#consorcio" className="text-slate-600 hover:text-slate-900 font-medium">Consorcio</a>
              <a href="#contacto" className="text-slate-600 hover:text-slate-900 font-medium">Contacto</a>
              <a href="/secop" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium transition-colors">
                📊 Dashboard SECOP
              </a>
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

      {/* Research Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Resultados de Investigación</h2>
            <p className="text-slate-600">Resumen ejecutivo derivado del análisis ensemble farmacéutico</p>
          </div>
          <ResearchHighlights />
          <div className="mt-10">
            <ResearchGallery />
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

          {/* Evidencia y Referencias a Resultados */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-12" id="evidencia">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Evidencia científica que sustenta la solución</h3>
            <p className="text-sm text-slate-700 mb-4">
              Esta propuesta se fundamenta en <strong>12 módulos de Machine Learning</strong> desarrollados y validados,
              incluyendo pipeline integrado (Ridge + K-means), redes neuronales PyTorch, análisis de sentimientos NLP,
              y sistemas de optimización EOQ/ROP. Ver evidencia completa en{' '}
              <a href="#investigacion" className="text-blue-600 hover:underline font-semibold">Resultados de Investigación</a>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-white rounded-lg p-3 border border-slate-100">
                <div className="font-semibold text-blue-600">Modelos Supervisados</div>
                <div>Ridge Regression, RNA PyTorch, Ensemble Methods</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-slate-100">
                <div className="font-semibold text-green-600">Modelos No Supervisados</div>
                <div>K-means Clustering, PCA, Análisis de Componentes</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-slate-100">
                <div className="font-semibold text-purple-600">NLP & Advanced Analytics</div>
                <div>Sentiment Analysis, Time Series, Anomaly Detection</div>
              </div>
            </div>
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

          {/* Arquitectura de Referencia */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Arquitectura de Referencia</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">📥</div>
                <div className="font-semibold mb-1">Capa de Captura</div>
                <div className="text-sm text-slate-600">
                  Integración con HIS, ERP y dispensación (HL7 FHIR) para extraer demanda, inventario y movimientos.
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">🧠</div>
                <div className="font-semibold mb-1">Capa de IA + Optimización</div>
                <div className="text-sm text-slate-600">
                  Pronóstico (ensemble), clasificación ABC y cálculo EOQ/ROP con políticas por criticidad y servicio.
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">🔗</div>
                <div className="font-semibold mb-1">Capa de Trazabilidad</div>
                <div className="text-sm text-slate-600">
                  Registro en XRPL de órdenes, recepciones y custodia. Auditoría inmutable y liquidación ISO 20022.
                </div>
              </div>
            </div>
          </div>

          {/* Plan de Implementación */}
          <div className="bg-gradient-to-br from-slate-50 to-green-50 rounded-2xl p-8 mb-16 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Plan de Implementación</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="text-sm text-slate-500">Fase 1 (0–90 días)</div>
                <div className="font-semibold mb-2">Piloto en 2 IPS</div>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Integración mínima (inventarios y dispensación)</li>
                  <li>Pronóstico + ABC + EOQ/ROP en 100 SKUs críticos</li>
                  <li>XRPL para órdenes y recepciones</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="text-sm text-slate-500">Fase 2 (90–180 días)</div>
                <div className="font-semibold mb-2">Escalado Regional</div>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Ampliar a 1,000 SKUs y 6 IPS</li>
                  <li>Optimización multi-sede y cadena de frío</li>
                  <li>Panel de control con KPIs y alertas</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="text-sm text-slate-500">Fase 3 (180–360 días)</div>
                <div className="font-semibold mb-2">Despliegue Nacional</div>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Interoperabilidad extendida (HIS/ERP)</li>
                  <li>Liquidación ISO 20022 y reglas de negocio</li>
                  <li>Gobernanza y auditoría continua</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pipeline Integrado End-to-End */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Pipeline Integrado End-to-End</h3>
            <p className="text-slate-700 text-center mb-6">
              Integramos modelos supervisados y no supervisados en un flujo único: predicción de riesgo (Ridge),
              segmentación inteligente (K-means), visualización integrada y simulación de escenarios. Listo para
              orquestación y reporting automatizado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">📥</div>
                <div className="font-semibold mb-1">Ingesta y Normalización</div>
                <div className="text-sm text-slate-600">
                  Limpieza y escalado (StandardScaler). Preparación de variable objetivo farmacéutica y features clave.
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold mb-1">Modelo Supervisado (Ridge)</div>
                <div className="text-sm text-slate-600">
                  Predicción estable del riesgo total. Métricas: R² y MSE; residuales para control de sesgo.
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">🏷️</div>
                <div className="font-semibold mb-1">Clustering (K-means)</div>
                <div className="text-sm text-slate-600">
                  Perfiles de consumo para políticas diferenciadas: stock, revisión, alertas y prioridad EOQ/ROP.
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-semibold mb-1">Visualización Integrada</div>
                <div className="text-sm text-slate-600">
                  Panel combinado: desempeño supervisado, distribución de clusters, PCA y variables influyentes.
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">🎛️</div>
                <div className="font-semibold mb-1">Simulador de Escenarios</div>
                <div className="text-sm text-slate-600">
                  Ajuste de costo/frecuencia/rotación para planear presupuestos, contingencias y logística.
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">🔔</div>
                <div className="font-semibold mb-1">Alertas y Reportes</div>
                <div className="text-sm text-slate-600">
                  Alertas automáticas por riesgo y reportes periódicos para Dirección, QF y Compras.
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Basado en el pipeline integrado (ver <a href="#investigacion" className="text-blue-600 hover:underline">Investigación</a>) y alineado con la Arquitectura y el Plan de Implementación.
            </p>
          </div>

          {/* KPIs y SLAs */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">KPIs y SLAs Medibles</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="text-3xl font-bold text-green-700 mb-1">-50%</div>
                <div className="text-sm text-slate-700">Rupturas (stockouts)</div>
                <div className="text-xs text-slate-500">en SKUs clase A</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-3xl font-bold text-blue-700 mb-1">48h</div>
                <div className="text-sm text-slate-700">SLA Reposición</div>
                <div className="text-xs text-slate-500">vs 7–10 días actuales</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-3xl font-bold text-purple-700 mb-1">≥92%</div>
                <div className="text-sm text-slate-700">Precisión Pronóstico</div>
                <div className="text-xs text-slate-500">Métrica R²/MAE</div>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-xl border border-amber-200">
                <div className="text-3xl font-bold text-amber-700 mb-1">100%</div>
                <div className="text-sm text-slate-700">Trazabilidad</div>
                <div className="text-xs text-slate-500">Órdenes y recepciones</div>
              </div>
            </div>
            <p className="text-center text-xs text-slate-500 mt-4">
              Basados en evidencia de la sección <a href="#investigacion" className="text-blue-600 hover:underline">Investigación</a> y metas de piloto.
            </p>
          </div>

          {/* Segmentación y Perfiles de Consumo */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Segmentación y Perfiles de Consumo</h3>
            <p className="text-slate-700 text-center mb-6">
              A partir de clustering K-means sobre variables como costo, rotación, frecuencia y riesgo,
              identificamos perfiles de medicamentos para orientar políticas de stock, revisión y alertas.
              Esta segmentación alimenta la matriz de decisiones y prioriza la optimización EOQ/ROP.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <div className="text-sm text-red-600 font-semibold mb-1">Cluster A</div>
                <div className="font-bold mb-2">Críticos</div>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Stock de seguridad alto</li>
                  <li>Revisión diaria</li>
                  <li>Alertas automáticas y prioridad EOQ alta</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <div className="text-sm text-amber-600 font-semibold mb-1">Cluster B</div>
                <div className="font-bold mb-2">Alta Rotación</div>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>EOQ optimizado para costo/servicio</li>
                  <li>Reabastecimiento automatizado</li>
                  <li>Revisión semanal</li>
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="text-sm text-emerald-600 font-semibold mb-1">Cluster C</div>
                <div className="font-bold mb-2">Estables</div>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Procedimientos estándar</li>
                  <li>Revisión mensual</li>
                  <li>Optimización de costos</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm text-slate-600 font-semibold mb-1">Cluster D</div>
                <div className="font-bold mb-2">Especiales</div>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Análisis individual</li>
                  <li>Estrategia personalizada</li>
                  <li>Reclasificación si aplica</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Evidencia en <a href="#investigacion" className="text-blue-600 hover:underline">Investigación</a>: perfiles por cluster, heatmaps y matriz de decisiones.
            </p>
          </div>

          {/* Gobernanza y Seguridad */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Gobernanza y Seguridad</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="bg-white rounded-xl p-6 border border-slate-100">
                <div className="font-semibold mb-2">Gobernanza</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Roles y permisos por institución (IPS, secretarías, academia)</li>
                  <li>Auditoría end-to-end (datos, decisiones, transacciones XRPL)</li>
                  <li>Comité técnico y mesa de datos para priorización</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-100">
                <div className="font-semibold mb-2">Seguridad & Cumplimiento</div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Privacidad por diseño; datos sensibles fuera de blockchain</li>
                  <li>Firmas digitales, cifrado en tránsito y en reposo</li>
                  <li>Estándares HL7 FHIR / ISO 20022 / mejores prácticas DevSecOps</li>
                </ul>
              </div>
            </div>
          </div>

          

          {/* Modelo Avanzado: Red Neuronal */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Modelo Avanzado: Red Neuronal</h3>
            <p className="text-slate-700 text-center mb-6">
              Complemento al pipeline: una RNA básica en PyTorch para clasificar medicamentos críticos vs estándar.
              Útil cuando hay no linealidades; se usa con control de sobreajuste y métricas por clase.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">🧠</div>
                <div className="font-semibold mb-1">Arquitectura</div>
                <div className="text-sm text-slate-600">Entrada → Capa oculta ReLU (8) → Salida binaria. Optimizador Adam, CrossEntropyLoss.</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-semibold mb-1">Métricas</div>
                <div className="text-sm text-slate-600">Precisión global, Recall y F1 por clase; matriz de confusión para validar criticidad.</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">🎛️</div>
                <div className="font-semibold mb-1">Cuándo usar</div>
                <div className="text-sm text-slate-600">Datos suficientes y no lineales. Se compara vs modelos clásicos y se elige por desempeño y explicabilidad.</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Más detalles en <a href="#investigacion" className="text-blue-600 hover:underline">Investigación</a> (RNA, entrenamiento y visualizaciones).
            </p>
          </div>

          {/* Análisis de Sentimientos (NLP) */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Análisis de Sentimientos (NLP)</h3>
            <p className="text-slate-700 text-center mb-6">
              Monitoreo continuo de percepción de pacientes, personal médico y familias usando NLP especializado
              (diccionarios farmacéuticos + TextBlob). Genera alertas tempranas y priorización de acciones
              operativas alineadas con KPIs y roles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">🧹</div>
                <div className="font-semibold mb-1">Metodología</div>
                <div className="text-sm text-slate-600">
                  Limpieza y normalización de texto; análisis dual con diccionarios farmacéuticos y TextBlob;
                  visualizaciones como distribuciones y nubes de palabras.
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold mb-1">Aplicaciones</div>
                <div className="text-sm text-slate-600">
                  Alertas de satisfacción por servicio y stakeholder; tablero de tendencias; integración con
                  EOQ/ROP para reforzar disponibilidad de SKUs con percepción negativa.
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-2xl mb-2">📈</div>
                <div className="font-semibold mb-1">Métricas & ROI</div>
                <div className="text-sm text-slate-600">
                  Precisión de clasificación de sentimiento, % de satisfacción por stakeholder y servicio;
                  impacto esperado: -40–60% quejas y +30–50% satisfacción; ROI 200–350% (pilotos).
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Evidencia y ejemplos en <a href="#investigacion" className="text-blue-600 hover:underline">Investigación</a> (distribuciones, tendencias, nubes de palabras e insights).
            </p>
          </div>

          {/* Casos de Uso por Rol */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-16 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Casos de Uso por Rol</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="text-sm text-slate-500">Dirección</div>
                <div className="font-semibold mb-2">Tablero Ejecutivo</div>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Métricas de riesgo consolidadas</li>
                  <li>Proyecciones de presupuesto basadas en IA</li>
                  <li>Reportes mensuales automatizados</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="text-sm text-slate-500">QF (Farmacia)</div>
                <div className="font-semibold mb-2">Operación Diferenciada</div>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Simulador de escenarios (costo/frecuencia/rotación)</li>
                  <li>Alertas de riesgo y priorización por cluster</li>
                  <li>EOQ/ROP guiado por perfiles</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="text-sm text-slate-500">Compras</div>
                <div className="font-semibold mb-2">Priorización Inteligente</div>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Listas priorizadas por criticidad</li>
                  <li>Impacto económico por cluster</li>
                  <li>Planificación de pedidos automatizada</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="text-sm text-slate-500">Planeación</div>
                <div className="font-semibold mb-2">Estrategia Basada en Datos</div>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Modelos predictivos para presupuesto</li>
                  <li>Tendencias por categorías y clusters</li>
                  <li>KPIs farmacéuticos automatizados</li>
                </ul>
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

      {/* Contribuye con Datos */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Contribuye con Datos</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Si eres institución de salud o profesional/paciente y deseas apoyar, puedes compartir información usando
              nuestras plantillas. Los envíos se procesan con nuestro pipeline y pueden alimentar el análisis NLP.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow p-6 border border-slate-200">
              <div className="text-sm text-slate-500">Instituciones (IPS/Secretarías)</div>
              <h3 className="font-semibold mb-2">Inventarios y Consumo</h3>
              <p className="text-sm text-slate-600 mb-4">Descarga la plantilla y comparte datos de medicamentos estratégicos (campos compatibles con nuestro modelo).</p>
              <div className="flex gap-3">
                <a className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm" href="/templates/hospital_intake_template.csv" download>
                  Descargar plantilla CSV
                </a>
                <a className="px-4 py-2 rounded-lg bg-slate-800 text-white text-sm" href="mailto:contacto@bigloi.com?subject=Intake%20Hospitalario%20BigLoI">
                  Enviar por correo
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-3">También puedes realizar un POST a <code>/api/intake/hospital</code> con JSON o CSV simple.</p>
              <div className="mt-4">
                <div className="text-xs font-medium text-slate-700 mb-2">Sube tu CSV directamente</div>
                <IntakeFormHospital />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 border border-slate-200">
              <div className="text-sm text-slate-500">Profesionales y Personas</div>
              <h3 className="font-semibold mb-2">Feedback de Servicio</h3>
              <p className="text-sm text-slate-600 mb-4">Comparte experiencias (texto libre) y relación con servicios/medicamentos para fortalecer el análisis de sentimientos.</p>
              <div className="flex gap-3">
                <a className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm" href="/templates/feedback_personas_template.csv" download>
                  Descargar plantilla CSV
                </a>
                <a className="px-4 py-2 rounded-lg bg-slate-800 text-white text-sm" href="mailto:contacto@bigloi.com?subject=Feedback%20Personas%20BigLoI">
                  Enviar por correo
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-3">También puedes realizar un POST a <code>/api/intake/feedback</code> con JSON o CSV simple.</p>
              <div className="mt-4">
                <div className="text-xs font-medium text-slate-700 mb-2">Formulario rápido</div>
                <IntakeFormFeedback />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <IntakeStatusPanel />
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

      {/* Colaboración e Integración */}
      <section id="contacto" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Colaboración e Integración</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Únete como aliado estratégico a una iniciativa respaldada por investigación rigurosa
              para transformar la gestión farmacéutica en Colombia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-start-2 bg-slate-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Postular Alianza</h3>
              <p className="text-sm text-slate-300 mb-6">
                Dinos cómo tu organización puede contribuir e integrarse a este esfuerzo interinstitucional.
              </p>
              <button
                type="button"
                onClick={openCollaborationForm}
                className="block w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition duration-300"
              >
                Abrir formulario de colaboración
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

      {/* SECOP Dashboard Promo Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                📊 Dashboard SECOP Farmacéutico
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Acceso en tiempo real a <strong>346 contratos públicos farmacéuticos</strong> colombianos 
                con análisis automatizado de oportunidades comerciales y tendencias de mercado.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">6 Análisis Interactivos</h4>
                    <p className="text-sm text-slate-600">Resumen, Geográfico, Entidades, ABC, Timeline, Búsqueda</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">COP 146.5 Billones</h4>
                    <p className="text-sm text-slate-600">Valor total de contratos identificados en 5 departamentos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">95.95% Precisión Farmacéutica</h4>
                    <p className="text-sm text-slate-600">332 contratos verificados y clasificados automáticamente</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">API Profesional</h4>
                    <p className="text-sm text-slate-600">6 endpoints REST con 167ms response time promedio</p>
                  </div>
                </div>
              </div>

              <a 
                href="/secop" 
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>🚀 Acceder al Dashboard</span>
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-200">
              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="text-sm font-semibold text-slate-700 mb-2">📈 Resumen Global</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">346</div>
                      <div className="text-xs text-slate-600">Contratos Totales</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">332</div>
                      <div className="text-xs text-slate-600">Farmacéuticos (96%)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="text-sm font-semibold text-slate-700 mb-2">🗺️ Cobertura Geográfica</div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>Antioquia:</span>
                      <span className="font-bold">187 (54%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cundinamarca:</span>
                      <span className="font-bold">61 (18%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quindío:</span>
                      <span className="font-bold">55 (16%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Caldas:</span>
                      <span className="font-bold">24 (7%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Risaralda:</span>
                      <span className="font-bold">19 (5%)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <div className="text-sm font-semibold text-slate-700 mb-2">💼 Top Compradoras</div>
                  <div className="space-y-2 text-xs">
                    <div className="font-semibold text-slate-900 truncate">Hospital S.S. Caldas</div>
                    <div className="text-slate-600">COP 109.1B • 12 contratos</div>
                  </div>
                </div>

                <div className="bg-slate-100 rounded-xl p-4 border border-slate-300">
                  <div className="text-center text-xs text-slate-700">
                    <div className="font-semibold mb-1">⚡ Performance</div>
                    <div className="font-bold text-green-600">167ms Promedio</div>
                  </div>
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