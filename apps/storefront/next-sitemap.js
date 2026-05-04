const excludedPaths = ["/checkout", "/account/*", "/[sitemap]"]

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000",
  generateRobotsTxt: true,
  exclude: excludedPaths,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/checkout", "/account"],
      },
    ],
  },
}
