"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { type Locale } from "@/lib/i18n/config";
import { type Building, type RegionId, getBuildingsByRegion } from "@/lib/data/buildings";
import RegionFilter from "./RegionFilter";
import Card, { CardContent } from "./ui/Card";
import FadeInView from "./motion/FadeInView";
import StaggerContainer, { StaggerItem } from "./motion/StaggerContainer";

// Dynamic import for MapView to avoid SSR issues with Leaflet
const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[500px] rounded-xl bg-[var(--color-muted)] flex items-center justify-center">
      <div className="text-[var(--color-muted-foreground)]">地図を読み込み中...</div>
    </div>
  ),
});

type ViewMode = "list" | "map";

interface BuildingsViewProps {
  initialBuildings: Building[];
  locale: Locale;
  dictionary: {
    buildings: {
      title: string;
      description: string;
      viewProject: string;
    };
  };
}

export default function BuildingsView({
  initialBuildings,
  locale,
  dictionary,
}: BuildingsViewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [selectedRegion, setSelectedRegion] = useState<RegionId>("all");
  const [selectedBuildingId, setSelectedBuildingId] = useState<number | null>(null);

  const filteredBuildings = getBuildingsByRegion(selectedRegion);

  const handleBuildingSelect = useCallback((buildingId: number) => {
    setSelectedBuildingId(buildingId);
    setViewMode("list");
  }, []);

  const handleRegionChange = useCallback((regionId: RegionId) => {
    setSelectedRegion(regionId);
    setSelectedBuildingId(null);
  }, []);

  const handleMarkerClick = useCallback((buildingId: number) => {
    setSelectedBuildingId(buildingId);
  }, []);

  return (
    <div className="min-h-screen py-8 md:py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeInView>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-4">
              {dictionary.buildings.title}
            </h1>
          </FadeInView>
          <FadeInView delay={0.15}>
            <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
              {dictionary.buildings.description}
            </p>
          </FadeInView>
        </div>

        {/* Controls */}
        <FadeInView delay={0.25} direction="none">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            {/* Region Filter */}
            <RegionFilter
              selectedRegion={selectedRegion}
              onRegionChange={handleRegionChange}
              locale={locale}
            />

            {/* View Toggle */}
            <div className="flex items-center bg-[var(--color-secondary)] rounded-lg p-1">
              <button
                onClick={() => setViewMode("list")}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${
                    viewMode === "list"
                      ? "bg-[var(--color-card)] text-[var(--color-foreground)] shadow-sm"
                      : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                  }
                `}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {locale === "ja" ? "リスト" : "List"}
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${
                    viewMode === "map"
                      ? "bg-[var(--color-card)] text-[var(--color-foreground)] shadow-sm"
                      : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                  }
                `}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                {locale === "ja" ? "地図" : "Map"}
              </button>
            </div>
          </div>
        </FadeInView>

        {/* Content */}
        {viewMode === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredBuildings.map((building, index) => (
              <motion.div
                key={building.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/${locale}/buildings/${building.id}`}>
                  <div className="group">
                    <div className="aspect-[4/3] bg-[var(--color-muted)] rounded-lg overflow-hidden mb-4 flex flex-col items-center justify-center relative">
                      {building.image ? (
                        <>
                          <img
                            src={building.image}
                            alt={locale === "ja" ? building.title : building.titleEn}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden'); }}
                          />
                          <div className="hidden flex-col items-center justify-center p-4 text-center">
                            <span className="text-sm md:text-base font-light text-[var(--color-foreground)] tracking-wider leading-relaxed">
                              {locale === "ja" ? building.title : building.titleEn}
                            </span>
                            <span className="text-[10px] text-[var(--color-muted-foreground)] mt-1">
                              {locale === "ja" ? building.location : building.locationEn}
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center p-4 text-center">
                          <span className="text-sm md:text-base font-light text-[var(--color-foreground)] tracking-wider leading-relaxed">
                            {locale === "ja" ? building.title : building.titleEn}
                          </span>
                          <span className="text-[10px] text-[var(--color-muted-foreground)] mt-1">
                            {locale === "ja" ? building.location : building.locationEn}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-base font-light text-[var(--color-foreground)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                      {locale === "ja" ? building.title : building.titleEn}
                    </h3>
                    <p className="text-xs text-[var(--color-muted-foreground)]">
                      {locale === "ja" ? building.description : building.descriptionEn}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl overflow-hidden shadow-lg border border-[var(--color-border)]" style={{ height: "600px" }}>
            <MapView
              buildings={filteredBuildings}
              locale={locale}
              selectedBuildingId={selectedBuildingId}
              onBuildingSelect={handleMarkerClick}
            />
          </div>
        )}

        {/* Results count */}
        <FadeInView delay={0.3} direction="none">
          <div className="mt-8 text-center text-sm text-[var(--color-muted-foreground)]">
            {locale === "ja"
              ? `${filteredBuildings.length} 件の建築作品`
              : `${filteredBuildings.length} architectural works`}
          </div>
        </FadeInView>
      </div>
    </div>
  );
}
