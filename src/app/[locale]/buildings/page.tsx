import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { buildings } from "@/lib/data/buildings";
import { getBuildings } from "@/lib/sanity-queries";
import BuildingsView from "@/components/BuildingsView";


export const revalidate = 60;
export default async function BuildingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dictionary = await getDictionary(typedLocale);

  let data = buildings;
  try {
    const sanityBuildings = await getBuildings();
    if (sanityBuildings && sanityBuildings.length > 0) {
      data = sanityBuildings.map((b: any, i: number) => ({
        id: i + 1,
        title: b.title,
        titleEn: b.titleEn || "",
        description: b.description || "",
        descriptionEn: b.descriptionEn || "",
        year: b.year || 0,
        location: b.location || "",
        locationEn: b.locationEn || "",
        region: b.region || "kanto",
        regionEn: b.regionEn || "",
        lat: b.lat || 0,
        lng: b.lng || 0,
        status: b.status || "",
        statusEn: b.statusEn || "",
        image: b.image?.asset?.url || "",
      }));
    }
  } catch (e) {
    // fallback to local data
  }

  return (
    <BuildingsView
      initialBuildings={data}
      locale={typedLocale}
      dictionary={dictionary}
    />
  );
}
