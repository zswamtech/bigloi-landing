'use client';

import { useState } from 'react';

interface ContactFormProps {
  type: 'university' | 'hospital' | 'government';
  isOpen: boolean;
  onClose: () => void;
}

const formTitles = {
  university: 'Expresar Interés - Universidades',
  hospital: 'Conocer Propuesta - Hospitales',
  government: 'Colaboración e Integración - Aliados Estratégicos'
};

const formFields = {
  university: {
    organization: 'Universidad',
    department: 'Facultad/Departamento',
    focus: 'Área de investigación de interés',
    experience: '¿Experiencia previa en investigación blockchain/IA?',
    collaboration: '¿Cómo le gustaría participar en el consorcio?'
  },
  hospital: {
    organization: 'Hospital/Clínica',
    department: 'Departamento/Área',
    focus: 'Principal desafío en gestión farmacéutica',
    experience: '¿Experiencia con sistemas de trazabilidad?',
    collaboration: '¿Interés en ser sitio piloto?'
  },
  government: {
    organization: 'Organización/Entidad',
    department: 'Departamento/Área de interés',
    focus: 'Área de colaboración propuesta',
    experience: '¿Experiencia en innovación tecnológica/salud digital?',
    collaboration: '¿Cómo podría contribuir al proyecto?'
  }
};

export function ContactForm({ type, isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    department: '',
    focus: '',
    experience: '',
    collaboration: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envío real al API
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar formulario');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // Mostrar error al usuario
      alert('Error al enviar el formulario. Por favor intenta nuevamente.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl">✓</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">¡Gracias por tu interés!</h3>
          <p className="text-slate-600 mb-6">
            Hemos recibido tu información. Nos pondremos en contacto contigo en las próximas 48 horas
            para compartir más detalles sobre esta oportunidad de investigación.
          </p>
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition duration-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-900">{formTitles[type]}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+57 300 123 4567"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {formFields[type].organization} *
              </label>
              <input
                type="text"
                name="organization"
                required
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={`Nombre de ${formFields[type].organization.toLowerCase()}`}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {formFields[type].department}
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={formFields[type].department}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {formFields[type].focus}
            </label>
            <textarea
              name="focus"
              value={formData.focus}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={`Describe tu ${formFields[type].focus.toLowerCase()}`}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {formFields[type].experience}
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Selecciona una opción</option>
              <option value="ninguna">Ninguna experiencia</option>
              <option value="basica">Experiencia básica</option>
              <option value="intermedia">Experiencia intermedia</option>
              <option value="avanzada">Experiencia avanzada</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {formFields[type].collaboration}
            </label>
            <textarea
              name="collaboration"
              value={formData.collaboration}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={`Describe ${formFields[type].collaboration.toLowerCase()}`}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Comentarios adicionales
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Cualquier información adicional que consideres relevante..."
            />
          </div>

          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-blue-800">
              <strong>Uso de datos:</strong> La información proporcionada será utilizada exclusivamente
              para evaluar oportunidades de colaboración en este proyecto de investigación.
              Nos comprometemos a mantener la confidencialidad de tus datos.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition duration-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar información'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}