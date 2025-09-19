/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['clsx']
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'geolocation=()' },
  // HSTS: fuerza HTTPS (activar solo cuando ya sirve correctamente sobre HTTPS)
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }
      ]
    }
  ]
};
export default nextConfig;
