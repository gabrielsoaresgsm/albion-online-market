import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>Domine o Mercado de&nbsp;</h1>
        <h1 className={title({ color: "green" })}>Albion Online&nbsp;</h1>
        <h1 className={title()}>com Inteligência e Agilidade!</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Acesse os preços em tempo real do mercado de Albion Online! Integração
          completa com a API do Albion-data-project, consulta de preços em
          diferentes cidades.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.invite}
          className={clsx(
            buttonStyles({ radius: "full" }),
            "bg-primary animate-pulse"
          )}
        >
          Adicionar ao Servidor
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-16 lg: max-w-3xl ">
        <h3 className={title({ size: "sm" })}>Por que utilizar?</h3>
        <h2 className={clsx(subtitle(), "text-center")}>
          Transforme sua experiência de comércio no Albion Online. Nosso bot é a
          ferramenta perfeita para jogadores sérios que desejam ter vantagem no
          mercado, oferecendo análises de mercado precisas e atualizadas.
        </h2>
      </div>
    </section>
  );
}
