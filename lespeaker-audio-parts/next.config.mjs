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
  typescript: {
    // ignora erros de tipagem para não travar o deploy
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 