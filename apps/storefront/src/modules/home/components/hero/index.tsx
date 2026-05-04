import { Button, Heading, Text } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { siteConfig } from "@lib/site-config"

const Hero = () => {
  return (
    <section className="relative w-full border-b border-ui-border-base bg-ui-bg-subtle">
      <div className="content-container flex min-h-[72vh] flex-col items-center justify-center gap-8 py-20 text-center">
        <div className="flex flex-col gap-4">
          <span className="mx-auto w-fit rounded-full border border-ui-border-base bg-white px-4 py-2 txt-compact-small-plus text-ui-fg-subtle">
            Online prodavnica za Srbiju
          </span>

          <Heading
            level="h1"
            className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-ui-fg-base small:text-6xl"
          >
            Majice i garderoba sa jasnim identitetom.
          </Heading>

          <Text className="mx-auto max-w-2xl text-base leading-7 text-ui-fg-subtle small:text-lg">
            {siteConfig.description}
          </Text>
        </div>

        <div className="flex flex-col items-center gap-3 small:flex-row">
          <LocalizedClientLink href="/store">
            <Button variant="primary" className="min-w-44">
              Pogledaj proizvode
            </Button>
          </LocalizedClientLink>

          <LocalizedClientLink href="/categories/shirts">
            <Button variant="secondary" className="min-w-44">
              Majice
            </Button>
          </LocalizedClientLink>
        </div>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-3 pt-6 text-left small:grid-cols-3">
          <div className="rounded-lg border border-ui-border-base bg-white p-4">
            <p className="txt-compact-small-plus text-ui-fg-base">Brza kupovina</p>
            <p className="txt-small text-ui-fg-subtle">
              Jednostavan izbor veličine, boje i količine.
            </p>
          </div>
          <div className="rounded-lg border border-ui-border-base bg-white p-4">
            <p className="txt-compact-small-plus text-ui-fg-base">Cene u RSD</p>
            <p className="txt-small text-ui-fg-subtle">
              Prodavnica se priprema za domaće tržište.
            </p>
          </div>
          <div className="rounded-lg border border-ui-border-base bg-white p-4">
            <p className="txt-compact-small-plus text-ui-fg-base">Instagram/Facebook ready</p>
            <p className="txt-small text-ui-fg-subtle">
              Osnova za kampanje i conversion tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
