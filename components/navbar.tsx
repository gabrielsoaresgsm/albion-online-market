import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { discloud } from "discloud.app";
import clsx from "clsx";

import { DiscordIcon, CustomIcon } from "@/components/icons";
import { getDiscloudAppStatus } from "@/app/services/discloudApi";

const TOKEN = process.env.TOKEN;

export const Navbar = async () => {
  let online = false;
  try {
    await discloud.login(TOKEN);
    const responseUser = getDiscloudAppStatus();
    const app = (await responseUser)?.user?.apps?.[0];
    if (app) {
      const response = await discloud.apps.fetch(app);
      online = response?.online;
    } else {
      console.error("Nenhum aplicativo encontrado para buscar informações.");
    }
  } catch (error) {
    console.error("Erro ao buscar informações do aplicativo:", error);
  }

  const statusBotText = () => {
    if (online) return "Online";
    return "Offline";
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <CustomIcon />
            <p className="font-bold text-inherit">Livius Albion Market</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              {item.label.includes("Informar um Bug") ? (
                <Link
                  isExternal
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ) : (
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex items-center gap-2">
          Status do BOT:{" "}
          <span
            className={clsx("font-semibold", {
              "font-highlight": online,
              "text-red-500": !online,
            })}
          >
            {statusBotText()}
          </span>
          <span
            className={clsx("inline-block h-3 w-3 rounded-full animate-pulse", {
              "bg-emerald-600": online,
              "bg-red-500": !online,
            })}
          />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <div className="gap-2 flex items-center">
          Status:{" "}
          <span
            className={clsx("font-semibold", {
              "font-highlight": online,
              "text-red-500": !online,
            })}
          >
            {statusBotText()}
          </span>
          <span
            className={clsx("inline-block h-3 w-3 rounded-full animate-pulse", {
              "bg-emerald-600": online,
              "bg-red-500": !online,
            })}
          />
        </div>
        <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
          <DiscordIcon className="text-default-500" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
