import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { buildings } from "@/lib/data/buildings";
import BuildingsView from "@/components/BuildingsView";

export default async function BuildingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dictionary = await getDictionary(typedLocale);

  return (
    <BuildingsView
      initialBuildings={buildings}
      locale={typedLocale}
      dictionary={dictionary}
    />
  );
}
