import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import clsx from "clsx";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>Domine o Mercado de&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Albion Online&nbsp;</h1>
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
            buttonStyles({ radius: "full", variant: "shadow" }),
            "bg-gradient-to-tr from-[#FF1CF7] to-[#b249f8]"
          )}
        >
          Adicionar ao Servidor
        </Link>
      </div>
    </section>
  );
}
