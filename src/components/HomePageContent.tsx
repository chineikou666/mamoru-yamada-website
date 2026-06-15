"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeInView from "@/components/motion/FadeInView";

interface FeaturedBuilding {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  year: number;
  location: string;
  locationEn: string;
  image?: string;
}

interface HomePageContentProps {
  locale: string;
  dictionary: {
    home: {
      title: string;
      subtitle: string;
      description: string;
      cta: string;
      projectDescription: string;
      schedule: string;
      scheduleItems: string[];
    };
  };
  featuredBuildings: FeaturedBuilding[];
}

export default function HomePageContent({
  locale,
  dictionary,
  featuredBuildings,
}: HomePageContentProps) {
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-end"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
      >
        {/* 背景图片 - hover时透明度变化 */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          animate={{ 
            opacity: isHeroHovered ? 0 : 1,
          }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            backgroundImage: "url('https://static.wixstatic.com/media/b3aa8a_22eb232fa5c74e308e13bfa4bc6b1598~mv2.png')"
          }}
        />
        
        {/* 内容区域 - hover时显示 */}
        <motion.div 
          className="relative z-10 w-full pb-24 md:pb-32 lg:pb-40"
          animate={{ 
            opacity: isHeroHovered ? 1 : 0,
          }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
            <p className="text-xs sm:text-sm md:text-base tracking-[0.4em] md:tracking-[0.5em] text-[var(--color-muted-foreground)] uppercase mb-6 sm:mb-8 md:mb-10">
              {locale === "ja" ? "建築ドキュメンタリー" : "Architecture Documentary"}
            </p>
            
            <h1 className="text-[56px] sm:text-[72px] md:text-[96px] lg:text-[120px] xl:text-[140px] 2xl:text-[160px] font-extralight text-[var(--color-foreground)] tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-5 md:mb-6">
              {dictionary.home.title}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-[var(--color-muted-foreground)] tracking-[0.08em] md:tracking-[0.1em] mb-12 sm:mb-14 md:mb-20">
              {dictionary.home.subtitle}
            </p>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
              <p className="text-sm sm:text-base md:text-lg text-[var(--color-muted-foreground)] leading-[1.9] md:leading-[2] max-w-xl">
                {dictionary.home.description}
              </p>

              <Link
                href={`/${locale}/buildings`}
                className="inline-flex items-center gap-3 text-sm md:text-base text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors group shrink-0"
              >
                <span className="tracking-wider">{dictionary.home.cta}</span>
                <svg 
                  className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Project + Activity */}
      <section className="py-24 md:py-32 px-10 md:px-20 lg:px-32 xl:px-40 bg-[var(--color-card)]">
        <div className="max-w-[1200px] mx-auto">
          {/* プロジェクト */}
          <FadeInView>
            <div className="mb-20 md:mb-28 pb-16 md:pb-20 border-b border-[var(--color-border)]">
              <h2 className="text-base md:text-lg font-light text-[var(--color-foreground)] tracking-[0.15em] mb-8 md:mb-10">
                {locale === "ja" ? "プロジェクト" : "Project"}
              </h2>
              <p className="text-[13px] md:text-sm text-[var(--color-muted-foreground)] leading-[2] mb-10 md:mb-12 max-w-3xl">
                {dictionary.home.projectDescription}
              </p>
              <div>
                <h3 className="text-[9px] md:text-[10px] tracking-[0.25em] text-[var(--color-muted-foreground)] uppercase mb-5">
                  {dictionary.home.schedule}
                </h3>
                <div className="space-y-3">
                  {dictionary.home.scheduleItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-px h-3 bg-[var(--color-border)] mt-1.5 shrink-0" />
                      <p className="text-[11px] md:text-xs text-[var(--color-foreground)] font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInView>

          {/* 活動記録 */}
          <FadeInView delay={0.1}>
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-base md:text-lg font-light text-[var(--color-foreground)] tracking-[0.15em]">
                  {locale === "ja" ? "活動記録" : "Activity Log"}
                </h2>
                <Link 
                  href={`/${locale}/research`}
                  className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors inline-flex items-center gap-2"
                >
                  {locale === "ja" ? "すべて見る" : "View All"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="space-y-4">
                {[
                  { date: "2026.01", text: locale === "ja" ? "東海大学学園史資料センター見学" : "Visit to Tokai University Archives" },
                  { date: "2025.09", text: locale === "ja" ? "リニューアルした４号館の中央図書館撮影" : "Filming at Renewed Building 4 Library" },
                  { date: "2025.07", text: locale === "ja" ? "ローマ・サピエンツァ大学 学会発表" : "Presentation at Roma Sapienza University" },
                  { date: "2025.06", text: locale === "ja" ? "サウンドトラック録音セッション" : "Soundtrack Recording Session" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 py-3 border-b border-[var(--color-border)]">
                    <span className="text-[11px] text-[var(--color-muted-foreground)] tracking-wider w-16 shrink-0">
                      {item.date}
                    </span>
                    <span className="text-sm text-[var(--color-foreground)]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}