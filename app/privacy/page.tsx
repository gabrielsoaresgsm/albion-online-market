import { subtitle, title } from "@/components/primitives";
import clsx from "clsx";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="gap-4 flex flex-col">
      <h1 className={title({ size: "sm", color: "green" })}>
        Política de Privacidade
      </h1>
      <h2 className={subtitle()}>Coleta de Dados</h2>
      <p>
        Coletamos informações limitadas, como o ID do servidor e o idioma
        selecionado para garantir uma experiência personalizada. Nós também
        registramos a escolha do servidor do jogo (West ou East).
      </p>
      <h2 className={subtitle()}>Uso dos Dados</h2>
      <p>
        O Bot não pode ler mensagens privadas ou enviar mensagens em nome do
        usuário. Qualquer tentativa de usar o bot para fins maliciosos ou não
        autorizados é estritamente proibida.
      </p>
      <h2 className={subtitle()}>Armazenamento de Dados</h2>
      <p>
        Os dados coletados são usados exclusivamente para operar o Bot e
        fornecer os serviços solicitados, como a consulta de preços em
        diferentes idiomas e servidores.
      </p>
      <h2 className={subtitle()}>Direitos dos Usuários</h2>
      <p>
        Os dados são armazenados de forma segura e serão mantidos enquanto o Bot
        estiver presente no seu servidor Discord.
      </p>
      <h2 className={subtitle()}>Alterações na Política de Privacidade</h2>
      <p>
        Quaisquer alterações à nossa Política de Privacidade serão comunicadas
        através do nosso site e exigirão o seu consentimento ativo.
      </p>
      <h2 className={subtitle()}>Isenção de Responsabilidade</h2>
      <p>
        Este Bot usa a API do Albion-data-project, mas não está de nenhuma forma
        afiliado ao Albion Online ou aos seus criadores.
      </p>
    </div>
  );
};

export default Page;
