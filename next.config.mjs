/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {//configurando para que o next possa exibir as imagens que vem do meu servidor
        remotePatterns: [
            {
                hostname: "utfs.io",
            },
        ],
    },

};



export default nextConfig;
