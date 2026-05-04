const c = require("ansi-colors")

const requiredEnvs = [
  {
    key: "NEXT_PUBLIC_MEDUSA_BACKEND_URL",
    description: "Public URL of the Medusa backend API.",
  },
  {
    key: "NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY",
    description: "Publishable API key from Medusa Admin.",
  },
  {
    key: "NEXT_PUBLIC_DEFAULT_REGION",
    description: "Default country code for the storefront. For Serbia use: rs.",
  },
  {
    key: "NEXT_PUBLIC_BASE_URL",
    description: "Public base URL of the storefront.",
  },
]

function checkEnvVariables() {
  const missingEnvs = requiredEnvs.filter(function (env) {
    return !process.env[env.key] || String(process.env[env.key]).trim().length === 0
  })

  if (missingEnvs.length > 0) {
    console.error(c.red.bold("\nError: Missing required environment variables\n"))

    missingEnvs.forEach(function (env) {
      console.error(c.yellow(`  ${c.bold(env.key)}`))
      if (env.description) {
        console.error(c.dim(`    ${env.description}\n`))
      }
    })

    console.error(
      c.yellow(
        "\nSet these variables in .env.local, Netlify environment variables, or your hosting provider before build/start.\n"
      )
    )

    process.exit(1)
  }
}

module.exports = checkEnvVariables
