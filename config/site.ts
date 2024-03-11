export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Albion Online Market",
	description: "Otimize seu tempo e realize consultas rápidas de preços em tempo real.",
	navItems: [
		{
			label: "Início",
			href: "/",
		},
		{
			label: "Informar um Bug",
			href: "https://discord.gg/FXUbAZFFtj",
		},
		{
			label: "Termos de Serviço",
			href: "/terms",
		},
		{
			label: "Política de Privacidade",
			href: "/privacy",
		},
	],
	navMenuItems: [
		{
			label: "Início",
			href: "/",
		},
		{
			label: "Informar um Bug",
			href: "https://discord.gg/FXUbAZFFtj",
		},
		{
			label: "Termos de Serviço",
			href: "/terms",
		},
		{
			label: "Política de Privacidade",
			href: "/privacy",
		},
	],
	links: {
		discord: "https://discord.gg/FXUbAZFFtj",
		invite: "https://discord.com/oauth2/authorize?client_id=1082860291152420954&permissions=2147593280&scope=bot"
	},
};
