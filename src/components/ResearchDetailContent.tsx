"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeInView from "@/components/motion/FadeInView";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

interface ResearchData {
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  date: string;
  content: string;
  contentEn: string;
  images?: string[];
}

interface ResearchDetailContentProps {
  research: ResearchData;
  locale: string;
}

export default function ResearchDetailContent({
  research,
  locale,
}: ResearchDetailContentProps) {
  const paragraphs = (locale === "ja" ? research.content : research.contentEn)
    .split("\n\n")
    .filter(Boolean);

  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-3xl mx-auto">
        <FadeInView direction="left" duration={0.6}>
          <Link
            href={`/${locale}/research`}
            className="inline-flex items-center text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {locale === "ja" ? "活動記録一覧" : "Activity Log"}
          </Link>
        </FadeInView>

        <header className="mb-12">
          <FadeInView delay={0.1}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full">
                {locale === "ja" ? research.category : research.categoryEn}
              </span>
              <span className="text-sm text-[var(--color-muted-foreground)]">
                {research.date}
              </span>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-4">
              {locale === "ja" ? research.title : research.titleEn}
            </h1>
          </FadeInView>
        </header>

        {/* Images */}
        {research.images && research.images.length > 0 && (
          <FadeInView delay={0.3}>
            <div className="mb-12">
              <StaggerContainer
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                staggerDelay={0.1}
              >
                {research.images.map((imageUrl, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="aspect-[4/3] rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={imageUrl}
                        alt={`${research.title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeInView>
        )}

        <StaggerContainer className="prose prose-lg max-w-none" staggerDelay={0.1} delayChildren={0.4}>
          {paragraphs.map((paragraph, index) => (
            <StaggerItem key={index}>
              <p className="text-[var(--color-foreground)] leading-relaxed mb-6">
                {paragraph}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInView delay={0.5}>
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <Link
              href={`/${locale}/research`}
              className="inline-flex items-center text-[var(--color-primary)] hover:underline"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {locale === "ja" ? "活動記録一覧に戻る" : "Back to all activities"}
            </Link>
          </div>
        </FadeInView>
      </article>
    </div>
  );
}
