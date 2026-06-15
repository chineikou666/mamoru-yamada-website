import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { buildings } from "@/lib/data/buildings";
import HomePageContent from "@/components/HomePageContent";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dictionary = await getDictionary(typedLocale);

  // 使用真实的建筑作品数据，取前3个
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

  return (
    <HomePageContent
      locale={typedLocale}
      dictionary={dictionary}
      featuredBuildings={featuredBuildings}
    />
  );
}
