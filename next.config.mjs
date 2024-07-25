/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "raw-loader",
          // options: pluginOptions.options,
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
