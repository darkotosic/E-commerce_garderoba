import { defineConfig, loadEnv } from "@medusajs/framework/utils"

loadEnv(process.env.NODE_ENV || "development", process.cwd())

const isProduction = process.env.NODE_ENV === "production"

function requireEnv(name: string): string {
  const value = process.env[name]

  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

function getEnv(name: string, fallback?: string): string {
  if (isProduction) {
    return requireEnv(name)
  }

  return process.env[name] || fallback || requireEnv(name)
}

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: getEnv("DATABASE_URL"),
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: getEnv("STORE_CORS", "http://localhost:8000"),
      adminCors: getEnv("ADMIN_CORS", "http://localhost:9000,http://localhost:5173"),
      authCors: getEnv("AUTH_CORS", "http://localhost:9000,http://localhost:5173,http://localhost:8000"),
      jwtSecret: getEnv("JWT_SECRET", "dev-jwt-secret-change-me"),
      cookieSecret: getEnv("COOKIE_SECRET", "dev-cookie-secret-change-me"),
    },
  },
})
