import Link from "next/link";
import { type Locale } from "@/lib/i18n/config";
import { type Building } from "@/lib/data/buildings";

interface BuildingPopupProps {
  building: Building;
  locale: Locale;
}

export default function BuildingPopup({ building, locale }: BuildingPopupProps) {
  const title = locale === "ja" ? building.title : building.titleEn;
  const description = locale === "ja" ? building.description : building.descriptionEn;
  const location = locale === "ja" ? building.location : building.locationEn;

  return (
    <div className="min-w-[220px] max-w-[280px] font-sans">
      <div className="mb-1">
        <span className="text-xs text-gray-500">
          {building.year} | {location}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{description}</p>
      <Link
        href={`/${locale}/buildings/${building.id}`}
        className="inline-block text-xs text-blue-600 hover:text-blue-800 font-medium"
      >
        {locale === "ja" ? "詳細を見る" : "View Details"} →
      </Link>
    </div>
  );
}
