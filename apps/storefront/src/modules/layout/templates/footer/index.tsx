import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { siteConfig } from "@lib/site-config"
import { Text, clx } from "@modules/common/components/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="w-full border-t border-ui-border-base">
      <div className="content-container flex w-full flex-col">
        <div className="flex flex-col items-start justify-between gap-y-10 py-24 xsmall:flex-row">
          <div className="max-w-sm">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus uppercase text-ui-fg-base hover:text-ui-fg-subtle"
            >
              {siteConfig.name}
            </LocalizedClientLink>
            <p className="mt-4 txt-small leading-6 text-ui-fg-subtle">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-small-regular md:grid-cols-3 md:gap-x-16">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-ui-fg-base">
                  Kategorije
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return null
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 txt-small text-ui-fg-subtle"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="ml-3 grid grid-cols-1 gap-2">
                            {children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="hover:text-ui-fg-base"
                                  href={`/categories/${child.handle}`}
                                  data-testid="category-link"
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-ui-fg-base">
                  Kolekcije
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 txt-small text-ui-fg-subtle",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-ui-fg-base">Podrška</span>
              <ul className="grid grid-cols-1 gap-y-2 txt-small text-ui-fg-subtle">
                <li>
                  <LocalizedClientLink className="hover:text-ui-fg-base" href="/store">
                    Prodavnica
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink className="hover:text-ui-fg-base" href="/cart">
                    Korpa
                  </LocalizedClientLink>
                </li>
                <li>
                  <a className="hover:text-ui-fg-base" href={`mailto:${siteConfig.supportEmail}`}>
                    {siteConfig.supportEmail}
                  </a>
                </li>
                <li>
                  <a className="hover:text-ui-fg-base" href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="hover:text-ui-fg-base" href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16 flex w-full justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} {siteConfig.name}. Sva prava zadržana.
          </Text>
        </div>
      </div>
    </footer>
  )
}
