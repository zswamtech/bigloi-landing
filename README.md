# 🌐 BigLoI Landing Page

Landing page profesional para la propuesta de investigación farmacéutica BigLoI - Consorcio interinstitucional para la transformación de la gestión farmacéutica en Colombia.

## 🎯 Características

- ✅ **Completamente independiente** de la aplicación principal
- ✅ **Formularios interactivos** para diferentes stakeholders (universidades, hospitales, gobierno, inversionistas)
- ✅ **Despersonalizada** - No compromete a ninguna institución
- ✅ **Responsive** - Funciona en todos los dispositivos
- ✅ **SEO optimizada** - Metadatos y estructura optimizada
- ✅ **Performance optimizada** - Built con Next.js 14

## 🛠️ Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **React Hook Form** - Manejo de formularios
- **Vercel** - Despliegue y hosting

## 🚀 Desarrollo Local

```bash
npm install
npm run dev
```

El sitio estará disponible en http://localhost:3000

## 📦 Build de Producción

```bash
npm run build
npm start
```

## 🌐 Despliegue en Vercel

### Variables de Entorno Requeridas

En tu proyecto de Vercel, configura estas variables:

```bash
CONTACT_EMAIL=contacto@bigloi.com
NEXT_PUBLIC_SITE_URL=https://bigloi.com
```

### Variables Opcionales (para envío de emails automático)

```bash
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_USER=contacto@bigloi.com
SMTP_PASS=tu_password_de_email
```

### Configuración de Dominio

1. En Vercel Settings → Domains, agrega:
   - `bigloi.com`
   - `www.bigloi.com`

2. En Hostinger DNS, configura:
   ```
   Type: CNAME
   Name: @
   Content: cname.vercel-dns.com
   TTL: 300

   Type: CNAME
   Name: www
   Content: cname.vercel-dns.com
   TTL: 300
   ```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout global
│   ├── globals.css        # Estilos globales
│   └── api/
│       └── lead/
│           └── route.ts   # API endpoint para formularios
├── components/
│   ├── ContactForm.tsx    # Formularios de contacto
│   └── stakeholders/      # Componentes específicos (no usados)
```

## 🎨 Componentes Principales

### ContactForm
Formulario modal interactivo con campos específicos para:
- **Universidades**: Investigación, blockchain/IA, participación en consorcio
- **Hospitales**: Desafíos farmacéuticos, interés en piloto
- **Gobierno**: Políticas de salud digital, apoyo al proyecto
- **Inversionistas**: Experiencia en healthtech, tickets de inversión

### Funcionalidades
- ✅ Validación de campos obligatorios
- ✅ Campos específicos por stakeholder
- ✅ Mensaje de confirmación tras envío
- ✅ Información sobre uso de datos
- ✅ Diseño responsive

## 🔗 URLs Importantes

- **Repositorio**: https://github.com/zswamtech/bigloi-landing
- **Producción**: https://bigloi.com (cuando esté configurado)
- **Desarrollo**: http://localhost:3000

## 📧 Contacto

Para consultas sobre esta landing page: contacto@bigloi.com# trigger
