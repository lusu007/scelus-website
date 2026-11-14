import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import "./globals.css";

const manrope = localFont({
  src: "../public/fonts/Manrope.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});
const instrument = localFont({
  src: "../public/fonts/InstrumentSerif-Italic.ttf",
  variable: "--font-instrument",
  display: "swap",
  style: "italic",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scelus.io"),
  title: { default: "Scelus Development", template: "%s · Scelus Development" },
  description:
    "Apps, Tools und digitale Welten. Die Projekte von Scelus Development.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale =
    (await headers()).get("x-scelus-locale") === "en" ? "en" : "de";
  return (
    <html lang={locale}>
      <body className={`${manrope.variable} ${instrument.variable}`}>
        {children}
      </body>
    </html>
  );
}
