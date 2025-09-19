import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'BigLoI — Trazabilidad & Inventario Inteligente',
  description: 'Tokenización y trazabilidad de medicamentos con inventarios optimizados para hospitales latinoamericanos.',
  openGraph: {
    title: 'BigLoI',
    description: 'Trazabilidad y optimización inteligente de medicamentos',
    url: 'https://bigloi.com',
    siteName: 'BigLoI',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigLoI',
    description: 'Trazabilidad y optimización inteligente de medicamentos'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-800">{children}</body>
    </html>
  );
}
