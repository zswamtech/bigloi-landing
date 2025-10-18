'use client';

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SecopMedicinesTab from './SecopMedicinesTab';

interface KPIData {
  totalContratos: number;
  totalFarmaceuticos: number;
  totalValor: number;
  promedioPorContrato: number;
  porcentajeFarmaceutico: number;
  departamentosActivos: number;
}

interface Departamento {
  departamento: string;
  total: number;
  valor: number;
  farmaceuticos: number;
  porcentajeValor: number;
  porcentajeContratos: number;
}

interface Entidad {
  entidad: string;
  totalContratos: number;
  totalValor: number;
  departamento: string;
  farmaceuticos: number;
  promedioPorContrato: number;
  porcentajeFarmaceutico: number;
}

interface TimelineData {
  fecha: string;
  contratosNuevos: number;
  montoAcumulado: number;
  farmaceuticos: number;
}

interface ClasificacionABC {
  claseA: { cantidad: number; porcentajeContratos: number; porcentajeValor: number; valor: number; ejemplos: string[] };
  claseB: { cantidad: number; porcentajeContratos: number; porcentajeValor: number; valor: number; ejemplos: string[] };
  claseC: { cantidad: number; porcentajeContratos: number; porcentajeValor: number; valor: number; ejemplos: string[] };
}

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

const KPICard: React.FC<{ title: string; value: string | number; subtitle?: string; icon: string }> = ({ title, value, subtitle, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div className="text-4xl">{icon}</div>
    </div>
  </div>
);

const formatCurrency = (value: number): string => {
  if (value >= 1e9) {
    return `COP ${(value / 1e9).toFixed(1)}B`;
  }
  if (value >= 1e6) {
    return `COP ${(value / 1e6).toFixed(0)}M`;
  }
  return `COP ${value.toLocaleString()}`;
};

const formatNumber = (value: number): string => {
  return value.toLocaleString();
};

export default function SecopDashboard() {
  const [kpiData, setKpiData] = useState<KPIData | null>(null);
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [topEntidades, setTopEntidades] = useState<Entidad[]>([]);
  const [timeline, setTimeline] = useState<TimelineData[]>([]);
  const [clasificacion, setClasificacion] = useState<ClasificacionABC | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('resumen');

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [
          resumenRes,
          departamentosRes,
          entidadesRes,
          timelineRes,
          clasificacionRes
        ] = await Promise.all([
          fetch(`${baseUrl}/secop/dashboard/resumen`),
          fetch(`${baseUrl}/secop/dashboard/departamentos`),
          fetch(`${baseUrl}/secop/dashboard/top-entidades?limit=10`),
          fetch(`${baseUrl}/secop/dashboard/timeline?dias=30`),
          fetch(`${baseUrl}/secop/dashboard/clasificacion-abc`)
        ]);

        if (!resumenRes.ok) throw new Error('Error fetching resumen');
        if (!departamentosRes.ok) throw new Error('Error fetching departamentos');
        if (!entidadesRes.ok) throw new Error('Error fetching entidades');
        if (!timelineRes.ok) throw new Error('Error fetching timeline');
        if (!clasificacionRes.ok) throw new Error('Error fetching clasificacion');

        const [resumenData, deptsData, entidadesData, timelineData, clasificacionData] = await Promise.all([
          resumenRes.json(),
          departamentosRes.json(),
          entidadesRes.json(),
          timelineRes.json(),
          clasificacionRes.json()
        ]);

        setKpiData(resumenData.data);
        setDepartamentos(deptsData.data);
        setTopEntidades(entidadesData.data);
        setTimeline(timelineData.data);
        setClasificacion(clasificacionData.data);
      } catch (err) {
        setError((err as Error).message);
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Cargando datos farmacéuticos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-red-900">Error de Conexión</h1>
          <p className="text-red-700 mt-2">{error}</p>
          <p className="text-sm text-gray-600 mt-4">Verifica que el servidor backend esté activo en localhost:3001</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-12 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">📊 Dashboard SECOP Farmacéutico</h1>
              <p className="text-green-100 text-lg">
                Análisis en tiempo real de contrataciones públicas de medicamentos en Colombia
              </p>
            </div>
            <div className="text-6xl">💊</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <KPICard
            title="Total Contratos"
            value={formatNumber(kpiData?.totalContratos || 0)}
            icon="📋"
          />
          <KPICard
            title="Farmacéuticos"
            value={formatNumber(kpiData?.totalFarmaceuticos || 0)}
            icon="💊"
          />
          <KPICard
            title="Tasa Farmacéutica"
            value={`${kpiData?.porcentajeFarmaceutico || 0}%`}
            icon="📈"
          />
          <KPICard
            title="Valor Total"
            value={formatCurrency(kpiData?.totalValor || 0)}
            icon="💰"
          />
          <KPICard
            title="Promedio/Contrato"
            value={formatCurrency(kpiData?.promedioPorContrato || 0)}
            icon="🔢"
          />
          <KPICard
            title="Departamentos"
            value={formatNumber(kpiData?.departamentosActivos || 0)}
            icon="🗺️"
          />
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="flex border-b border-gray-200">
            {[
              { id: 'resumen', label: '📊 Resumen', icon: '📊' },
              { id: 'geografico', label: '🗺️ Geográfico', icon: '🗺️' },
              { id: 'entidades', label: '🏛️ Entidades', icon: '🏛️' },
              { id: 'abc', label: '📈 ABC Analysis', icon: '📈' },
              { id: 'timeline', label: '📅 Timeline', icon: '📅' },
              { id: 'medicinas', label: '💊 Medicinas', icon: '💊' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-4 font-semibold transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600 bg-green-50'
                    : 'border-transparent text-gray-600 hover:text-green-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* Resumen Tab */}
            {activeTab === 'resumen' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Resumen Ejecutivo</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                      <p className="text-gray-700 font-semibold mb-2">Total de Valor Contratado</p>
                      <p className="text-4xl font-bold text-blue-900">{formatCurrency(kpiData?.totalValor || 0)}</p>
                      <p className="text-sm text-blue-700 mt-2">A través de {kpiData?.totalContratos} contratos</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                      <p className="text-gray-700 font-semibold mb-2">Contratos Farmacéuticos</p>
                      <p className="text-4xl font-bold text-green-900">{kpiData?.totalFarmaceuticos}</p>
                      <p className="text-sm text-green-700 mt-2">{kpiData?.porcentajeFarmaceutico}% del total</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Geográfico Tab */}
            {activeTab === 'geografico' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">🗺️ Distribución por Departamento</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Valor por Departamento</h3>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={departamentos}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="departamento" angle={-45} textAnchor="end" height={80} />
                        <YAxis />
                        <Tooltip formatter={(value) => formatCurrency(value as number)} />
                        <Bar dataKey="valor" fill="#10b981" name="Valor (COP)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Cantidad de Contratos</h3>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={departamentos}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="departamento" angle={-45} textAnchor="end" height={80} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="total" fill="#3b82f6" name="Contratos" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Detalles por Departamento</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 text-left">Departamento</th>
                          <th className="px-4 py-2 text-right">Contratos</th>
                          <th className="px-4 py-2 text-right">Farmacéuticos</th>
                          <th className="px-4 py-2 text-right">Valor Total</th>
                          <th className="px-4 py-2 text-right">% del Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {departamentos.map((dept, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{dept.departamento}</td>
                            <td className="px-4 py-3 text-right">{dept.total}</td>
                            <td className="px-4 py-3 text-right">{dept.farmaceuticos}</td>
                            <td className="px-4 py-3 text-right font-semibold">{formatCurrency(dept.valor)}</td>
                            <td className="px-4 py-3 text-right text-green-600 font-semibold">{dept.porcentajeValor}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Entidades Tab */}
            {activeTab === 'entidades' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">🏛️ Top 10 Entidades Compradoras</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gradient-to-r from-green-100 to-teal-100">
                      <tr>
                        <th className="px-4 py-3 text-left">Entidad</th>
                        <th className="px-4 py-3 text-left">Departamento</th>
                        <th className="px-4 py-3 text-right">Contratos</th>
                        <th className="px-4 py-3 text-right">Farmacéuticos</th>
                        <th className="px-4 py-3 text-right">Valor Total</th>
                        <th className="px-4 py-3 text-right">Promedio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topEntidades.map((entidad, idx) => (
                        <tr key={idx} className={`border-b ${idx % 2 === 0 ? 'bg-gray-50' : ''}`}>
                          <td className="px-4 py-3 font-semibold text-gray-900">{entidad.entidad}</td>
                          <td className="px-4 py-3 text-gray-600">{entidad.departamento}</td>
                          <td className="px-4 py-3 text-right text-blue-600 font-semibold">{entidad.totalContratos}</td>
                          <td className="px-4 py-3 text-right text-green-600 font-semibold">{entidad.farmaceuticos}</td>
                          <td className="px-4 py-3 text-right font-bold">{formatCurrency(entidad.totalValor)}</td>
                          <td className="px-4 py-3 text-right text-gray-600">{formatCurrency(entidad.promedioPorContrato)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ABC Analysis Tab */}
            {activeTab === 'abc' && clasificacion && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">📈 Clasificación ABC (Análisis de Pareto)</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribución por Clase</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Clase A', value: clasificacion.claseA.cantidad, color: COLORS[0] },
                            { name: 'Clase B', value: clasificacion.claseB.cantidad, color: COLORS[1] },
                            { name: 'Clase C', value: clasificacion.claseC.cantidad, color: COLORS[2] }
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {COLORS.map((color, index) => (
                            <Cell key={`cell-${index}`} fill={color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                      <h4 className="text-lg font-bold text-green-900">Clase A (80% Valor)</h4>
                      <p className="text-green-700 font-semibold">{clasificacion.claseA.cantidad} medicamentos</p>
                      <p className="text-sm text-green-600">{clasificacion.claseA.porcentajeContratos}% del total</p>
                      <p className="text-sm text-green-600 font-semibold">{formatCurrency(clasificacion.claseA.valor)}</p>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                      <h4 className="text-lg font-bold text-yellow-900">Clase B (15% Valor)</h4>
                      <p className="text-yellow-700 font-semibold">{clasificacion.claseB.cantidad} medicamentos</p>
                      <p className="text-sm text-yellow-600">{clasificacion.claseB.porcentajeContratos}% del total</p>
                      <p className="text-sm text-yellow-600 font-semibold">{formatCurrency(clasificacion.claseB.valor)}</p>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                      <h4 className="text-lg font-bold text-red-900">Clase C (5% Valor)</h4>
                      <p className="text-red-700 font-semibold">{clasificacion.claseC.cantidad} medicamentos</p>
                      <p className="text-sm text-red-600">{clasificacion.claseC.porcentajeContratos}% del total</p>
                      <p className="text-sm text-red-600 font-semibold">{formatCurrency(clasificacion.claseC.valor)}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">📅 Timeline (Últimos 30 días)</h2>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Nuevos Contratos por Día</h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={timeline}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="fecha" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="contratosNuevos"
                        stroke="#3b82f6"
                        name="Nuevos Contratos"
                        strokeWidth={2}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="montoAcumulado"
                        stroke="#10b981"
                        name="Monto Acumulado (COP)"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Medicinas Tab */}
            {activeTab === 'medicinas' && (
              <SecopMedicinesTab apiUrl={baseUrl} />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8 border-t-4 border-green-600">
          <p className="text-gray-600 text-sm">
            <strong>Fuente:</strong> SECOP Integrado (Sistema Electrónico para la Contratación Pública) via datos.gov.co
          </p>
          <p className="text-gray-600 text-sm mt-2">
            <strong>Última actualización:</strong> {new Date().toLocaleString('es-CO')}
          </p>
          <p className="text-gray-500 text-xs mt-4">
            Este dashboard muestra datos públicos de contrataciones farmacéuticas en Colombia.
            Los datos se actualizan cada 24 horas automáticamente.
          </p>
        </div>
      </div>
    </div>
  );
}
