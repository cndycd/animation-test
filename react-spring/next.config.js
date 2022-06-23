/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  trailingSlash: false,
};
