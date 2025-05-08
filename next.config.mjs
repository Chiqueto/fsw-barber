/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    //configurando origens
    serverActions: {
      allowedOrigins: [
        "https://didactic-couscous-rqrr65vqgp2pv44.github.dev/",
        "https://didactic-couscous-rqrr65vqgp2pv44-3000.app.github.dev/",
        "localhost:3000",
      ],
    },
  },
  images: {
    //configurando para que o next possa exibir as imagens que vem do meu servidor
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
  },
}

export default nextConfig
