export const siteConfig = {
  name: "Patriot Shop Srbija",
  shortName: "Patriot Shop",
  description:
    "Online prodavnica majica i garderobe inspirisane domaćim motivima. Brza kupovina, jasne cene i dostava na teritoriji Srbije.",
  locale: "sr-RS",
  defaultCountryCode: "rs",
  currencyCode: "rsd",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000",
  supportEmail: "podrska@example.rs",
  phone: "+381 00 000 000",
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
} as const
