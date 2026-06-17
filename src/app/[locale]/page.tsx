import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { buildings } from "@/lib/data/buildings";
import { getLatestResearchLogs, getSiteContent } from "@/lib/sanity-queries";
import HomePageContent from "@/components/HomePageContent";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dictionary = await getDictionary(typedLocale);

  const featuredBuildings = buildings.slice(0, 3).map((b) => ({
    id: b.id,
    title: b.title,
    titleEn: b.titleEn,
    description: b.description,
    descriptionEn: b.descriptionEn,
    year: b.year,
    location: b.location,
    locationEn: b.locationEn,
    image: b.image,
  }));

  let latestLogs = [
    { date: "2026.01", title: "東海大学学園史資料センター見学", titleEn: "Visit to Tokai University Archives" },
    { date: "2025.09", title: "リニューアルした４号館の中央図書館撮影", titleEn: "Filming at Renewed Building 4 Library" },
    { date: "2025.07", title: "ローマ・サピエンツァ大学 学会発表", titleEn: "Presentation at Roma Sapienza University" },
    { date: "2025.06", title: "サウンドトラック録音セッション", titleEn: "Soundtrack Recording Session" },
  ];

  let siteContent = null;
  try {
    latestLogs = await getLatestResearchLogs(4);
    siteContent = await getSiteContent();
  } catch (e) {
    // Sanity fallback
  }

  return (
    <HomePageContent
      locale={typedLocale}
      dictionary={dictionary}
      featuredBuildings={featuredBuildings}
      latestLogs={latestLogs}
      siteContent={siteContent}
    />
  );
}
