import { subtitle, title } from "@/components/primitives";
import clsx from "clsx";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="gap-4 flex flex-col">
      <h1 className={title({ size: "sm", color: "green" })}>Termos de Serviço</h1>
      <h2 className={subtitle()}>Permissões de Acesso</h2>
      <p>
        Ao adicionar o Albion Online Market ao seu servidor Discord, você
        concorda em conceder as seguintes permissões: leitura de mensagens,
        envio de mensagens, gerenciamento de mensagens, inserção de links,
        anexação de arquivos, visualização do histórico de mensagens, adição de
        reações, uso de emojis e figurinhas externas e comandos de aplicativos.
      </p>
      <h2 className={subtitle()}>Restrições de Uso</h2>
      <p>
        O Bot não pode ler mensagens privadas ou enviar mensagens em nome do
        usuário. Qualquer tentativa de usar o bot para fins maliciosos ou não
        autorizados é estritamente proibida.
      </p>
      <h2 className={subtitle()}>Aceitação dos Termos</h2>
      <p>
        Ao utilizar o Bot, você está concordando com estes Termos de Serviço. Se
        você não concorda com os termos aqui apresentados.
      </p>
      <h2 className={subtitle()}>Contato</h2>
      <p>
        Em caso de dúvidas ou suporte, entre em contato conosco pelo e-mail
        gabrielgsm251@gmail.com, pelo Discord #liviuszz, ou via LinkedIn no
        perfil fornecido.
      </p>
    </div>
  );
};

export default Page;
