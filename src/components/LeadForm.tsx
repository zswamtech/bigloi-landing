"use client";
import * as React from 'react';
import { useState } from 'react';

export function LeadForm() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [orgType, setOrgType] = useState('Hospital');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role, orgType })
      });
      if (!res.ok) throw new Error('fail');
      setStatus('ok');
      setEmail('');
      setRole('');
  } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          required
            value={email}
            onChange={e => setEmail(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
          placeholder="tu@institucion.org"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Rol</label>
          <input
            type="text"
            value={role}
            onChange={e => setRole(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
            placeholder="Farmacia, CTO, Dir. Operaciones..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="orgType">Tipo organización</label>
          <select
            id="orgType"
            aria-label="Tipo de organización"
            value={orgType}
            onChange={e => setOrgType(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
          >
            <option>Hospital</option>
            <option>Red hospitalaria</option>
            <option>Laboratorio</option>
            <option>Operador logístico</option>
            <option>Otro</option>
          </select>
        </div>
      </div>
      <div className="flex items-start gap-2 text-sm">
        <div className="mt-1">
          <input id="consent" type="checkbox" required className="h-4 w-4" />
        </div>
        <label htmlFor="consent" className="cursor-pointer" id="consent-desc">
          Acepto ser contactado para participar en el piloto y recibir actualizaciones.
        </label>
      </div>
      <button
        disabled={status === 'loading'}
        className="px-6 py-3 rounded-lg bg-brand-600 text-white font-medium hover:bg-brand-500 disabled:opacity-60"
      >
        {status === 'loading' ? 'Enviando...' : status === 'ok' ? '¡Registrado!' : 'Unirme'}
      </button>
      {status === 'error' && <p className="text-sm text-red-600">Error al enviar. Intenta de nuevo.</p>}
      <p className="text-xs text-slate-500">No compartimos tu email con terceros. Puedes solicitar eliminación.</p>
    </form>
  );
}
