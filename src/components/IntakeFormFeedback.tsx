"use client";
import { useState } from 'react';

export default function IntakeFormFeedback() {
  const [comentario, setComentario] = useState('');
  const [servicio, setServicio] = useState('');
  const [producto, setProducto] = useState('');
  const [rating, setRating] = useState<number | ''>('');
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { setMessage('Debes aceptar la autorización de uso de datos.'); return; }
    if (!comentario.trim()) { setMessage('El comentario es obligatorio.'); return; }
    setSending(true); setMessage(null);
    const payload = {
      timestamp: new Date().toISOString(),
      fuente: 'web-form',
      servicio: servicio || undefined,
      comentario,
      producto: producto || undefined,
      rating: rating === '' ? undefined : rating,
      canal: 'landing',
      autorizacion: consent ? 'sí' : 'no'
    };
    const res = await fetch('/api/intake/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json().catch(() => ({}));
    setSending(false);
    if (res.ok) {
      setComentario(''); setServicio(''); setProducto(''); setRating(''); setConsent(false);
      setMessage('Gracias por tu aporte. ¡Recibido!');
    } else {
      setMessage(data?.error || 'Error al enviar.');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label htmlFor="servicio" className="block text-sm font-medium text-slate-700">Servicio</label>
        <input id="servicio" value={servicio} onChange={e=>setServicio(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2 text-sm" placeholder="Farmacia, UCI, Consulta externa…" />
      </div>
      <div>
        <label htmlFor="producto" className="block text-sm font-medium text-slate-700">Medicamento/Producto</label>
        <input id="producto" value={producto} onChange={e=>setProducto(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2 text-sm" placeholder="Nombre del medicamento (opcional)" />
      </div>
      <div>
        <label htmlFor="comentario" className="block text-sm font-medium text-slate-700">Comentario</label>
        <textarea id="comentario" value={comentario} onChange={e=>setComentario(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2 text-sm" rows={3} placeholder="Describe tu experiencia" required />
      </div>
      <div>
        <label htmlFor="rating" className="block text-sm font-medium text-slate-700">Calificación (1-5)</label>
        <input id="rating" type="number" min={1} max={5} value={rating} onChange={e=> setRating(e.target.value ? Number(e.target.value) : '')} className="mt-1 w-24 border rounded-lg px-3 py-2 text-sm" />
      </div>
      <label className="flex items-start gap-2 text-xs text-slate-600">
        <input type="checkbox" checked={consent} onChange={e=> setConsent(e.target.checked)} />
        <span>Acepto el uso de mis datos con fines de investigación, bajo políticas de privacidad y anonimización.</span>
      </label>
      <button type="submit" disabled={sending || !consent} className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm disabled:opacity-50">
        {sending ? 'Enviando…' : 'Enviar feedback'}
      </button>
      {message && <div className="text-xs text-slate-600">{message}</div>}
    </form>
  );
}
