import type { Metadata } from "next";
import { Raleway, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { PopupProvider } from "@/context/PopupContext";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Popup from "@/components/ui/Popup";
import YandexMetrika from "@/components/sections/YandexMetrika";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-press",
});

export const metadata: Metadata = {
  title: "Разработка сайта полным циклом - CortexDigital",
  description:
    "Бесплатные консультации и аудиты. Огромное портфолио. Контекстная реклама и SEO. Создание сайта полным циклом!",
  keywords: "Разработка сайта ключ",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ru">
      <head>
        <YandexMetrika />
        <meta name="yandex-verification" content="8cf8659d30ac0744" />
      </head>
      <body className={twMerge(raleway.className, pressStart2P.variable, "antialiased text-TextDark")}>
        <PopupProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Popup />
        </PopupProvider>
      </body>
    </html>
  );
};

export default RootLayout;
