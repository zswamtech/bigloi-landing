'use client';

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Medicine {
  nombre: string;
  contratosCount: number;
  presentacion: string;
}

interface MedicinePrice {
  medicamento: string;
  contratosCount: number;
  precioPromedio: number;
  precioMin: number;
  precioMax: number;
  mediana: number;
  desviacionEstandar: number;
  departamentosCobertura: string[];
}

interface ShortageAlert {
  nombre: string;
  contratosCount: number;
  nombreBusqueda: string;
}

interface TrendData {
  fecha: string;
  contratos: number;
  valor: number;
  medicinas: number;
  valorPromedio: number;
}

const SecopMedicinesTab: React.FC<{ apiUrl?: string }> = ({ apiUrl }) => {
  const apiBaseUrl = apiUrl || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';
  const [activeTab, setActiveTab] = useState('top-medicinas');
  const [topMedicinas, setTopMedicinas] = useState<Medicine[]>([]);
  const [precios, setPrecios] = useState<MedicinePrice[]>([]);
  const [alertas, setAlertas] = useState<ShortageAlert[]>([]);
  const [tendencias, setTendencias] = useState<TrendData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMedicinesData = async () => {
      try {
        setLoading(true);
        setError('');

        // Fetch top medicinas
        const topRes = await fetch(`${apiBaseUrl}/medicines/top-medicamentos?limit=10`);
        if (topRes.ok) {
          const topData = await topRes.json();
          setTopMedicinas(topData.data || []);
        }

        // Fetch análisis de precios
        const priceRes = await fetch(`${apiBaseUrl}/medicines/analisis-precios`);
        if (priceRes.ok) {
          const priceData = await priceRes.json();
          setPrecios(priceData.analisisPrecios || []);
        }

        // Fetch alertas
        const alertasRes = await fetch(`${apiBaseUrl}/medicines/alertas-desabastecimiento`);
        if (alertasRes.ok) {
          const alertasData = await alertasRes.json();
          setAlertas(alertasData.alertasDesabastecimiento || []);
        }

        // Fetch tendencias
        const tendRes = await fetch(`${apiBaseUrl}/medicines/tendencias-temporales?dias=90`);
        if (tendRes.ok) {
          const tendData = await tendRes.json();
          setTendencias(tendData.tendencias || []);
        }
      } catch (err) {
        console.error('Error fetching medicines data:', err);
        setError('Error al cargar datos de medicamentos');
      } finally {
        setLoading(false);
      }
    };

    fetchMedicinesData();
  }, [apiBaseUrl]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando datos de medicamentos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
        <p>⚠️ {error}</p>
      </div>
    );
  }

  // KPI Cards para medicamentos
  const totalMedicinas = topMedicinas.reduce((sum, m) => sum + m.contratosCount, 0);
  const medicinarUnica = topMedicinas.length;
  const precioPromedio = precios.length > 0 ? Math.round(precios.reduce((sum, p) => sum + p.precioPromedio, 0) / precios.length) : 0;
  const alertasActivas = alertas.filter(a => a.contratosCount < 3).length;

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
          <p className="text-gray-600 text-sm font-medium">📊 Medicinas Contratadas</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{totalMedicinas}</p>
          <p className="text-xs text-gray-500 mt-1">en contratos</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
          <p className="text-gray-600 text-sm font-medium">💊 Medicinas Únicas</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{medicinarUnica}</p>
          <p className="text-xs text-gray-500 mt-1">tipos identificados</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 border border-amber-200">
          <p className="text-gray-600 text-sm font-medium">💰 Precio Promedio</p>
          <p className="text-3xl font-bold text-amber-600 mt-2">COP {precioPromedio.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">unitario</p>
        </div>

        <div className={`rounded-lg p-6 border ${alertasActivas > 5 ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
          <p className="text-gray-600 text-sm font-medium">🚨 Alertas</p>
          <p className={`text-3xl font-bold mt-2 ${alertasActivas > 5 ? 'text-red-600' : 'text-green-600'}`}>{alertasActivas}</p>
          <p className="text-xs text-gray-500 mt-1">{alertasActivas > 5 ? 'críticas' : 'controladas'}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-gray-200 flex overflow-x-auto">
          {[
            { id: 'top-medicinas', label: '🏆 Top Medicinas' },
            { id: 'precios', label: '💰 Análisis Precios' },
            { id: 'alertas', label: '🚨 Alertas' },
            { id: 'tendencias', label: '📈 Tendencias' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-green-600 text-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'top-medicinas' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Medicinas Más Contratadas</h3>
              
              {/* Gráfico de barras */}
              <div className="bg-gray-50 rounded-lg p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={topMedicinas.slice(0, 10)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nombre" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="contratosCount" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Tabla */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-3 text-left font-semibold">Medicamento</th>
                      <th className="px-4 py-3 text-left font-semibold">Contratos</th>
                      <th className="px-4 py-3 text-left font-semibold">Presentación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topMedicinas.slice(0, 15).map((med, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3">{med.nombre}</td>
                        <td className="px-4 py-3">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                            {med.contratosCount}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{med.presentacion || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'precios' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Análisis de Precios</h3>
              
              {/* Gráfico de precios */}
              <div className="bg-gray-50 rounded-lg p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={precios.slice(0, 8)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="medicamento" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip formatter={(value) => `COP ${value.toLocaleString()}`} />
                    <Legend />
                    <Bar dataKey="precioMin" fill="#3b82f6" name="Mínimo" />
                    <Bar dataKey="precioPromedio" fill="#10b981" name="Promedio" />
                    <Bar dataKey="precioMax" fill="#ef4444" name="Máximo" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Tabla de precios */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-3 text-left font-semibold">Medicamento</th>
                      <th className="px-4 py-3 text-right font-semibold">Precio Min</th>
                      <th className="px-4 py-3 text-right font-semibold">Promedio</th>
                      <th className="px-4 py-3 text-right font-semibold">Precio Max</th>
                      <th className="px-4 py-3 text-right font-semibold">Contratos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {precios.slice(0, 10).map((med, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{med.medicamento}</td>
                        <td className="px-4 py-3 text-right text-blue-600">COP {med.precioMin.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right text-green-600 font-bold">COP {med.precioPromedio.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right text-red-600">COP {med.precioMax.toLocaleString()}</td>
                        <td className="px-4 py-3 text-right">{med.contratosCount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'alertas' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Alertas de Desabastecimiento</h3>
              
              <div className="space-y-3">
                {alertas.slice(0, 10).map((alerta, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${alerta.contratosCount < 2 ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{alerta.nombre}</p>
                        <p className="text-sm text-gray-600 mt-1">{alerta.contratosCount} contrato{alerta.contratosCount !== 1 ? 's' : ''} identificado{alerta.contratosCount !== 1 ? 's' : ''}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${alerta.contratosCount < 2 ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'}`}>
                        {alerta.contratosCount < 2 ? '🔴 CRÍTICO' : '🟡 RIESGO'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tendencias' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Tendencias Temporales (90 días)</h3>
              
              {/* Gráfico de línea */}
              <div className="bg-gray-50 rounded-lg p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={tendencias.slice(-30)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fecha" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="contratos" stroke="#10b981" name="Contratos" />
                    <Line type="monotone" dataKey="medicinas" stroke="#3b82f6" name="Medicinas" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-gray-600">Contratos Total</p>
                  <p className="text-2xl font-bold text-blue-600 mt-2">{tendencias.reduce((sum, t) => sum + t.contratos, 0)}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-gray-600">Medicinas Total</p>
                  <p className="text-2xl font-bold text-green-600 mt-2">{tendencias.reduce((sum, t) => sum + t.medicinas, 0)}</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <p className="text-sm text-gray-600">Valor Total</p>
                  <p className="text-2xl font-bold text-amber-600 mt-2">COP {(tendencias.reduce((sum, t) => sum + t.valor, 0) / 1e9).toFixed(1)}B</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecopMedicinesTab;
