"use client";
import { siteConfig } from "@/config/site";
import { Link, LinkProps } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { track } from '@vercel/analytics';
import clsx from "clsx";


interface LinkButtonProps extends LinkProps {}

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <Link
      isExternal
      href={siteConfig.links.invite}
      onClick={() => track("AddServer")}
      className={clsx(
        buttonStyles({ radius: "full" }),
        "bg-primary animate-pulse"
      )}
    >
      Adicionar ao Servidor
    </Link>
  );
};
