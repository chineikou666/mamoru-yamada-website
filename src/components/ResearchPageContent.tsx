"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeInView from "@/components/motion/FadeInView";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

interface ResearchLog {
  id: number;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  date: string;
  category: string;
  categoryEn: string;
  images?: string[];
}

interface ResearchPageContentProps {
  locale: string;
  dictionary: {
    research: {
      title: string;
      description: string;
      whatWeDo: string;
    };
  };
  researchLogs: ResearchLog[];
}

export default function ResearchPageContent({
  locale,
  dictionary,
  researchLogs,
}: ResearchPageContentProps) {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <FadeInView>
            <p className="text-xs tracking-[0.3em] text-[var(--color-muted-foreground)] mb-4 uppercase">
              {dictionary.research.whatWeDo}
            </p>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-light text-[var(--color-foreground)] mb-4">
              {dictionary.research.title}
            </h1>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-sm text-[var(--color-muted-foreground)] max-w-xl">
              {dictionary.research.description}
            </p>
          </FadeInView>
        </div>

        {/* Activity Log Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="space-y-0"
        >
          {researchLogs.map((log) => (
            <motion.div
              key={log.id}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
              className="py-8 border-b border-[var(--color-border)]"
            >
              <div className="flex items-start gap-6">
                {/* Date */}
                <div className="w-20 shrink-0">
                  <span className="text-xs text-[var(--color-muted-foreground)]">{log.date}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-[var(--color-muted-foreground)]">
                      {locale === "ja" ? log.category : log.categoryEn}
                    </span>
                  </div>
                  
                  <h2 className="text-lg font-light text-[var(--color-foreground)] mb-3">
                    {locale === "ja" ? log.title : log.titleEn}
                  </h2>
                  
                  <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed mb-4">
                    {locale === "ja" ? log.excerpt : log.excerptEn}
                  </p>

                  {/* Images inline */}
                  {log.images && log.images.length > 0 && (
                    <div className={`grid gap-3 ${log.images.length === 1 ? 'grid-cols-1 max-w-md' : 'grid-cols-2 max-w-lg'}`}>
                      {log.images.map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          className="aspect-[4/3] rounded overflow-hidden bg-[var(--color-muted)]"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={image}
                            alt={`${log.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
