export const getBaseURL = () => {
  const fallbackUrl = "https://localhost:8000"
  const configuredBaseUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim()

  if (!configuredBaseUrl) {
    return fallbackUrl
  }

  if (/^https?:\/\//i.test(configuredBaseUrl)) {
    return configuredBaseUrl
  }

  return `https://${configuredBaseUrl}`
}
