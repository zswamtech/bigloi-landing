export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="text-xl font-bold">BigLoI</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Transformando la gestión farmacéutica del eje cafetero mediante tecnología blockchain e inteligencia artificial.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@bigloi.com" className="text-slate-400 hover:text-white transition">
                <span className="sr-only">Email</span>
                📧
              </a>
              <a href="https://linkedin.com/company/bigloi" className="text-slate-400 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="https://github.com/bigloi" className="text-slate-400 hover:text-white transition">
                <span className="sr-only">GitHub</span>
                🔗
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Instituciones</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#universidades" className="hover:text-white transition">Universidades</a></li>
              <li><a href="#hospitales" className="hover:text-white transition">Hospitales</a></li>
              <li><a href="#gobierno" className="hover:text-white transition">Gobierno</a></li>
              <li><a href="#eps" className="hover:text-white transition">EPS</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#documentacion" className="hover:text-white transition">Documentación Técnica</a></li>
              <li><a href="#investigacion" className="hover:text-white transition">Investigación</a></li>
              <li><a href="#demo" className="hover:text-white transition">Demo en Vivo</a></li>
              <li><a href="#financiamiento" className="hover:text-white transition">Oportunidades</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} BigLoI. Todos los derechos reservados.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">
            🚀 Impulsando la Cuarta Revolución Industrial en Salud
          </p>
        </div>
      </div>
    </footer>
  );
}