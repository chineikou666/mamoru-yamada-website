"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { type Locale } from "@/lib/i18n/config";

interface NavigationProps {
  dictionary: {
    nav: {
      home: string;
      buildings: string;
      research: string;
      about: string;
      staff: string;
    };
    theme: {
      light: string;
      dark: string;
    };
  };
  locale: Locale;
}

export default function Navigation({ dictionary, locale }: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/buildings`, label: dictionary.nav.buildings },
    { href: `/${locale}/research`, label: dictionary.nav.research },
    { href: `/${locale}/staff`, label: dictionary.nav.staff },
  ];

  const switchLocale = () => {
    const newLocale: Locale = locale === "ja" ? "en" : "ja";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo - 左侧 */}
          <Link href={`/${locale}`} className="flex items-center shrink-0 group overflow-hidden">
            <motion.img
              src="https://static.wixstatic.com/media/b3aa8a_e474190500794a5183caba469d636d76~mv2.png"
              alt="山田 守 Logo"
              className="max-h-[40px] sm:max-h-[50px] md:max-h-[60px] w-auto"
              style={{ objectFit: "contain" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* 右侧：导航 + 控件 */}
          <div className="flex items-center gap-6">
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm transition-colors py-1"
                >
                  <span className={`${
                    pathname === item.href
                      ? "text-[var(--color-foreground)]"
                      : "text-[var(--color-muted-foreground)] group-hover:text-[var(--color-foreground)]"
                  }`}>
                    {item.label}
                  </span>
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-foreground)]"
                      layoutId="activeTab"
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-4 bg-[var(--color-border)]" />

            {/* Controls */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={switchLocale}
                className="text-xs font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors tracking-wider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={locale === "ja" ? "Switch to English" : "日本語に切替"}
              >
                {locale === "ja" ? "EN" : "JP"}
              </motion.button>
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)] overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="px-5 sm:px-8 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="text-center"
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-base transition-colors ${
                      pathname === item.href
                        ? "text-[var(--color-foreground)]"
                        : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
