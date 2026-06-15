"use client";

import { motion } from "framer-motion";
import { regions, type RegionId } from "@/lib/data/buildings";

interface RegionFilterProps {
  selectedRegion: RegionId;
  onRegionChange: (regionId: RegionId) => void;
  locale: string;
}

export default function RegionFilter({
  selectedRegion,
  onRegionChange,
  locale,
}: RegionFilterProps) {
  return (
    <div className="flex items-center gap-1">
      {regions.map((region, index) => {
        const isActive = selectedRegion === region.id;
        const label = locale === "ja" ? region.label : region.labelEn;

        return (
          <div key={region.id} className="flex items-center">
            {index > 0 && (
              <span className="text-[var(--color-border)] mx-1">/</span>
            )}
            <motion.button
              onClick={() => onRegionChange(region.id)}
              className={`text-xs tracking-wider transition-colors duration-200 py-1 ${
                isActive
                  ? "text-[var(--color-foreground)]"
                  : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              {label}
            </motion.button>
          </div>
        );
      })}
    </div>
  );
}
