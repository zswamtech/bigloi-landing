"use client";
import { useRef, useState } from 'react';

export default function IntakeFormHospital() {
  const [file, setFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  };

  const onUpload = async () => {
    if (!file) return;
    setSending(true); setMessage(null);
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/intake/hospital', { method: 'POST', body: form });
    const data = await res.json().catch(() => ({}));
    setSending(false);
    setMessage(res.ok ? 'Envío recibido. ¡Gracias!' : data?.error || 'Error al enviar');
  };

  return (
    <div>
      <input
        ref={inputRef}
        id="hospitalCsv"
        type="file"
        accept=".csv"
        className="sr-only"
        title="Seleccionar archivo CSV"
        aria-label="Seleccionar archivo CSV"
        onChange={e=> setFile(e.target.files?.[0] || null)}
      />
      <label
        htmlFor="hospitalCsv"
        onDragOver={(e)=>e.preventDefault()}
        onDrop={onDrop}
        className="block border-2 border-dashed rounded-xl p-6 text-center text-sm text-slate-600 cursor-pointer"
        aria-label="Zona para cargar archivo CSV"
      >
        {file ? (
          <div>Archivo seleccionado: <strong>{file.name}</strong></div>
        ) : (
          <div>Arrastra tu CSV aquí o haz clic para seleccionar</div>
        )}
      </label>
      <button disabled={!file || sending} onClick={onUpload} className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm disabled:opacity-50">
        {sending ? 'Enviando…' : 'Enviar CSV'}
      </button>
      {message && <div className="text-xs text-slate-600 mt-2">{message}</div>}
    </div>
  );
}
