# Production Baseline Checklist

## Architecture

This project is a Medusa + Next.js monorepo.

- Backend: `apps/backend`
- Storefront: `apps/storefront`
- Backend hosting target: Render / VPS / Medusa Cloud
- Storefront hosting target: Netlify
- Database: PostgreSQL

## Required backend environment variables

Set these on the backend hosting provider:

```env
NODE_ENV=production
DATABASE_URL=
STORE_CORS=
ADMIN_CORS=
AUTH_CORS=
JWT_SECRET=
COOKIE_SECRET=
REDIS_URL=
```

## Required storefront environment variables

Set these on Netlify:

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=
NEXT_PUBLIC_DEFAULT_REGION=rs
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_STRIPE_KEY=
MEDUSA_CLOUD_S3_HOSTNAME=
MEDUSA_CLOUD_S3_PATHNAME=
```

## First production deployment order

1. Create PostgreSQL database.
2. Deploy Medusa backend.
3. Set backend env variables.
4. Run Medusa migrations.
5. Seed initial data only if this is a fresh database.
6. Create publishable API key in Medusa Admin.
7. Deploy storefront to Netlify.
8. Set storefront env variables.
9. Verify `/rs`, `/rs/store`, product pages, cart and checkout flow.
10. Only after baseline is stable, continue with branding, product content, Meta Pixel, chatbot and payment provider.

## Security rules

- Never commit `.env`.
- Never use `supersecret` in production.
- Never ignore TypeScript build errors in production.
- Never ignore ESLint errors in production.
- Never expose secret keys through `NEXT_PUBLIC_`.
- Public browser variables must be limited to values safe for frontend use.

## Business localization TODO

- Replace placeholder brand data in `apps/storefront/src/lib/site-config.ts`.
- Configure Serbia region in Medusa Admin.
- Configure RSD currency.
- Configure real shipping options.
- Configure real payment method.
- Add Terms of Sale, Privacy Policy, Returns, Contact and Size Guide pages.
- Add Meta Pixel and Conversions API only after base checkout works.
