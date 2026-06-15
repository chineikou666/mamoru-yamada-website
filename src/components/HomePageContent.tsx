"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeInView from "@/components/motion/FadeInView";

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

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
      {/* Hero Section - 移动端优化 */}
      <section 
        className="relative min-h-[80vh] md:min-h-screen flex items-end"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
        onTouchStart={() => setIsHeroHovered(true)}
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
          className="relative z-10 w-full pb-16 md:pb-28 lg:pb-36"
          animate={{ 
            opacity: isHeroHovered ? 1 : 0,
          }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="px-5 sm:px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
            <p className="text-[10px] sm:text-xs md:text-base tracking-[0.3em] md:tracking-[0.5em] text-[var(--color-muted-foreground)] uppercase mb-4 sm:mb-6 md:mb-10">
              {locale === "ja" ? "建築ドキュメンタリー" : "Architecture Documentary"}
            </p>
            
            <h1 className="text-[40px] sm:text-[56px] md:text-[96px] lg:text-[120px] xl:text-[140px] 2xl:text-[160px] font-extralight text-[var(--color-foreground)] tracking-[-0.02em] leading-[0.9] mb-3 sm:mb-5 md:mb-6">
              {dictionary.home.title}
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-[var(--color-muted-foreground)] tracking-[0.06em] md:tracking-[0.1em] mb-10 sm:mb-14 md:mb-24">
              {dictionary.home.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8 md:gap-16">
              <p className="text-xs sm:text-sm md:text-lg text-[var(--color-muted-foreground)] leading-[2] md:leading-[2.4] tracking-[0.02em] md:tracking-[0.03em] max-w-2xl lg:max-w-3xl">
                {dictionary.home.description}
              </p>

              <Link
                href={`/${locale}/buildings`}
                className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors group shrink-0"
              >
                <span className="tracking-wider">{dictionary.home.cta}</span>
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" 
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

      {/* Project + Activity - 移动端优化 */}
      <section className="py-16 md:py-32 px-5 sm:px-8 md:px-20 lg:px-32 xl:px-40 bg-[var(--color-card)]">
        <div className="max-w-[1200px] mx-auto">
          {/* プロジェクト */}
          <FadeInView>
            <div className="mb-16 md:mb-28 pb-12 md:pb-20 border-b border-[var(--color-border)]">
              <h2 className="text-sm sm:text-base md:text-lg font-light text-[var(--color-foreground)] tracking-[0.1em] md:tracking-[0.15em] mb-6 md:mb-10">
                {locale === "ja" ? "プロジェクト" : "Project"}
              </h2>
              <p className="text-xs sm:text-[13px] md:text-sm text-[var(--color-muted-foreground)] leading-[1.9] md:leading-[2] mb-8 md:mb-12 max-w-3xl">
                {dictionary.home.projectDescription}
              </p>
              <div>
                <h3 className="text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] text-[var(--color-muted-foreground)] uppercase mb-4 md:mb-5">
                  {dictionary.home.schedule}
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {dictionary.home.scheduleItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3">
                      <div className="w-px h-3 bg-[var(--color-border)] mt-1.5 shrink-0" />
                      <p className="text-[10px] sm:text-[11px] md:text-xs text-[var(--color-foreground)] font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInView>

          {/* 活動記録 */}
          <FadeInView delay={0.1}>
            <div>
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h2 className="text-sm sm:text-base md:text-lg font-light text-[var(--color-foreground)] tracking-[0.1em] md:tracking-[0.15em]">
                  {locale === "ja" ? "活動記録" : "Activity Log"}
                </h2>
                <Link 
                  href={`/${locale}/research`}
                  className="text-xs sm:text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors inline-flex items-center gap-1 sm:gap-2"
                >
                  {locale === "ja" ? "すべて見る" : "View All"}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="space-y-3 md:space-y-4"
              >
                {[
                  { date: "2026.01", text: locale === "ja" ? "東海大学学園史資料センター見学" : "Visit to Tokai University Archives" },
                  { date: "2025.09", text: locale === "ja" ? "リニューアルした４号館の中央図書館撮影" : "Filming at Renewed Building 4 Library" },
                  { date: "2025.07", text: locale === "ja" ? "ローマ・サピエンツァ大学 学会発表" : "Presentation at Roma Sapienza University" },
                  { date: "2025.06", text: locale === "ja" ? "サウンドトラック録音セッション" : "Soundtrack Recording Session" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3 md:gap-4 py-2 md:py-3 border-b border-[var(--color-border)]"
                  >
                    <span className="text-[10px] sm:text-[11px] text-[var(--color-muted-foreground)] tracking-wider w-14 sm:w-16 shrink-0">
                      {item.date}
                    </span>
                    <span className="text-xs sm:text-sm text-[var(--color-foreground)]">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}