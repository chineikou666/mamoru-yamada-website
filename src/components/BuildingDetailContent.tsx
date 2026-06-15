"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeInView from "@/components/motion/FadeInView";
import AnimatedImage from "@/components/motion/AnimatedImage";
import { type Building, getBuildingById } from "@/lib/data/buildings";

interface BuildingDetailContentProps {
  building: Building;
  locale: string;
  dictionary: {
    buildings: {
      title: string;
      overview: string;
      history: string;
      significance: string;
      survey: string;
      interview: string;
      documentary: string;
      archives: string;
      relatedArticle: string;
      relatedBuildings: string;
    };
  };
}

export default function BuildingDetailContent({
  building,
  locale,
  dictionary,
}: BuildingDetailContentProps) {
  const relatedBuildings = building.relatedBuildings
    ?.map((id) => getBuildingById(id))
    .filter(Boolean) as Building[];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeInView direction="left" duration={0.6}>
          <Link
            href={`/${locale}/buildings`}
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
            {locale === "ja" ? "建築作品一覧" : "Buildings"}
          </Link>
        </FadeInView>

        <article>
          <header className="mb-12">
            <FadeInView delay={0.1}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-[var(--color-muted-foreground)]">
                  {building.year}
                </span>
                <span className="text-[var(--color-border)]">|</span>
                <span className="text-sm text-[var(--color-muted-foreground)]">
                  {locale === "ja" ? building.location : building.locationEn}
                </span>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-4">
                {locale === "ja" ? building.title : building.titleEn}
              </h1>
            </FadeInView>

            <FadeInView delay={0.3}>
              <p className="text-xl text-[var(--color-muted-foreground)]">
                {locale === "ja" ? building.description : building.descriptionEn}
              </p>
            </FadeInView>
          </header>

          <FadeInView delay={0.4}>
            <AnimatedImage
              src={building.image || `https://placehold.co/1200x675/var(--color-muted)/var(--color-muted-foreground)?text=${encodeURIComponent(locale === "ja" ? building.title : building.titleEn)}`}
              alt={locale === "ja" ? building.title : building.titleEn}
              className="w-full h-full object-cover rounded-xl"
              wrapperClassName="aspect-[16/9] mb-4 rounded-xl"
            />
            <p className="text-xs text-[var(--color-muted-foreground)] mb-12">
              Photo: Wikimedia Commons, CC BY-SA 4.0
            </p>
          </FadeInView>

          {/* 建筑概览 */}
          {building.overview && (
            <FadeInView delay={0.5}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                  {dictionary.buildings.overview}
                </h2>
                <p className="text-lg leading-relaxed text-[var(--color-foreground)]">
                  {locale === "ja" ? building.overview : building.overviewEn}
                </p>
              </section>
            </FadeInView>
          )}

          {/* 历史背景 */}
          {building.history && (
            <FadeInView delay={0.5}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                  {dictionary.buildings.history}
                </h2>
                <p className="text-lg leading-relaxed text-[var(--color-foreground)]">
                  {locale === "ja" ? building.history : building.historyEn}
                </p>
              </section>
            </FadeInView>
          )}

          {/* 建筑价值与研究意义 */}
          {building.significance && (
            <FadeInView delay={0.5}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                  {dictionary.buildings.significance}
                </h2>
                <p className="text-lg leading-relaxed text-[var(--color-foreground)]">
                  {locale === "ja" ? building.significance : building.significanceEn}
                </p>
              </section>
            </FadeInView>
          )}

          {/* 调查记录 */}
          {building.survey && (
            <FadeInView delay={0.5}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                  {dictionary.buildings.survey}
                </h2>
                <p className="text-lg leading-relaxed text-[var(--color-foreground)]">
                  {locale === "ja" ? building.survey : building.surveyEn}
                </p>
              </section>
            </FadeInView>
          )}

          {/* 访谈内容 */}
          {building.interview && (
            <FadeInView delay={0.5}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                  {dictionary.buildings.interview}
                </h2>
                <p className="text-lg leading-relaxed text-[var(--color-foreground)]">
                  {locale === "ja" ? building.interview : building.interviewEn}
                </p>
              </section>
            </FadeInView>
          )}

          {/* 地图 */}
          <FadeInView delay={0.5}>
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg border border-[var(--color-border)]" style={{ height: "300px" }}>
              <iframe
                title={`Map of ${locale === "ja" ? building.title : building.titleEn}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${building.lng - 0.02},${building.lat - 0.01},${building.lng + 0.02},${building.lat + 0.01}&layer=mapnik&marker=${building.lat},${building.lng}`}
              />
            </div>
          </FadeInView>

          {/* 纪录片与影像 */}
          {building.documentary && (
            <FadeInView delay={0.5}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                  {dictionary.buildings.documentary}
                </h2>
                <p className="text-lg leading-relaxed text-[var(--color-foreground)]">
                  {locale === "ja" ? building.documentary : building.documentaryEn}
                </p>
              </section>
            </FadeInView>
          )}

          {/* 档案资料 */}
          {building.archives && (
            <FadeInView delay={0.5}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                  {dictionary.buildings.archives}
                </h2>
                <p className="text-lg leading-relaxed text-[var(--color-foreground)]">
                  {locale === "ja" ? building.archives : building.archivesEn}
                </p>
              </section>
            </FadeInView>
          )}

          {/* 相关文章 */}
          {building.relatedArticle && (
            <FadeInView delay={0.5}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                  {dictionary.buildings.relatedArticle}
                </h2>
                <p className="text-lg leading-relaxed text-[var(--color-foreground)]">
                  {locale === "ja" ? building.relatedArticle : building.relatedArticleEn}
                </p>
              </section>
            </FadeInView>
          )}

          {/* 相关建筑推荐 */}
          {relatedBuildings && relatedBuildings.length > 0 && (
            <FadeInView delay={0.5}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] mb-4">
                  {dictionary.buildings.relatedBuildings}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedBuildings.map((related) => (
                    <Link
                      key={related.id}
                      href={`/${locale}/buildings/${related.id}`}
                      className="p-4 rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-muted)] transition-colors"
                    >
                      <h3 className="font-semibold text-[var(--color-foreground)]">
                        {locale === "ja" ? related.title : related.titleEn}
                      </h3>
                      <p className="text-sm text-[var(--color-muted-foreground)]">
                        {related.year} | {locale === "ja" ? related.location : related.locationEn}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            </FadeInView>
          )}

          <FadeInView delay={0.7}>
            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <Link
                href={`/${locale}/buildings`}
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
                {locale === "ja" ? "建築作品一覧に戻る" : "Back to all buildings"}
              </Link>
            </div>
          </FadeInView>
        </article>
      </div>
    </div>
  );
}
