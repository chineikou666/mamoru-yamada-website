import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, type Locale } from "@/lib/i18n/config";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import IdentityHandler from "@/components/IdentityHandler";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);

  return {
    title: "山田 守 | Mamoru Yamada",
    description: dictionary.home.description,
    openGraph: {
      title: "山田 守 | Mamoru Yamada",
      description: dictionary.home.description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dictionary = await getDictionary(typedLocale);

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <IdentityHandler />
        <ThemeProvider>
          <Navigation dictionary={dictionary} locale={typedLocale} />
          <main className="flex-1">
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
          </main>
          <Footer dictionary={dictionary} locale={typedLocale} />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
