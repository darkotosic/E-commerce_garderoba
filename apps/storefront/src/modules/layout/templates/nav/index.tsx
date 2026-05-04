import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { siteConfig } from "@lib/site-config"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky inset-x-0 top-0 z-50 group">
      <header className="relative mx-auto h-16 border-b border-ui-border-base bg-white duration-200">
        <nav className="content-container flex h-full w-full items-center justify-between text-small-regular text-ui-fg-subtle">
          <div className="flex h-full flex-1 basis-0 items-center">
            <div className="h-full">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>
          </div>

          <div className="flex h-full items-center">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus uppercase text-ui-fg-base hover:text-ui-fg-subtle"
              data-testid="nav-store-link"
            >
              {siteConfig.shortName}
            </LocalizedClientLink>
          </div>

          <div className="flex h-full flex-1 basis-0 items-center justify-end gap-x-6">
            <div className="hidden h-full items-center gap-x-6 small:flex">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/store"
              >
                Prodavnica
              </LocalizedClientLink>

              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Nalog
              </LocalizedClientLink>
            </div>

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex gap-2 hover:text-ui-fg-base"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Korpa (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
