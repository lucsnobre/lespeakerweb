/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    });
    return config;
  },
  eslint: {
    // evita que erros de lint bloqueiem o build no Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig; 