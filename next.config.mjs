/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "via.placeholder.com",
          pathname: "/**", // ✅ Allow all images from this domain
        },
        {
          protocol: "https",
          hostname: "dummyimage.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "placekitten.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "images.pexels.com",
          pathname: "/**",
        },
      ],
    },
  };


export default nextConfig;
