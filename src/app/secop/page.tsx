import SecopDashboard from '@/components/SecopDashboard';

export const metadata = {
  title: 'Dashboard SECOP Farmacéutico | BigLoI',
  description: 'Análisis en tiempo real de contrataciones públicas de medicamentos en Colombia desde SECOP Integrado',
  openGraph: {
    title: 'Dashboard SECOP Farmacéutico',
    description: 'Visualiza oportunidades farmacéuticas en contratos públicos colombianos',
    type: 'website'
  }
};

export default function SecopPage() {
  return (
    <main>
      <SecopDashboard />
    </main>
  );
}
