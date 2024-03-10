import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto max-w-7xl pt-16 px-6">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 gap-2">
              <span className="text-default-600">Copyright © 2024</span>
              <Link
                isExternal
                className="text-primary"
                href="https://www.linkedin.com/in/gabrielmielo/"
                title="Linkedin"
              >
                Gabriel Mielo
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
