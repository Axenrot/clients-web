const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: "http://16.171.198.98:8000", // Your API's HTTP address
      changeOrigin: true,
      router: (req) => {
        // Exclude Next.js routes (adjust the regex if needed)
        if (req.url.startsWith("/_next") || req.url.startsWith("/static")) {
          return null; // Don't proxy Next.js routes
        }

        return "http://16.171.198.98:8000"; // Proxy all other requests to your API
      },
    })
  );
};
