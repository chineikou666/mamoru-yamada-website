import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { buildings } from "@/lib/data/buildings";
import BuildingDetailContent from "@/components/BuildingDetailContent";

export default async function BuildingDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const typedLocale = locale as Locale;
  const dictionary = await getDictionary(typedLocale);
  const building = buildings.find((b) => b.id === parseInt(id));

  if (!building) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--color-foreground)] mb-4">
            {locale === "ja" ? "プロジェクトが見つかりません" : "Project not found"}
          </h1>
          <Link
            href={`/${typedLocale}/buildings`}
            className="text-[var(--color-primary)] hover:underline"
          >
            {locale === "ja" ? "建築作品一覧に戻る" : "Back to buildings"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <BuildingDetailContent
      building={building}
      locale={typedLocale}
      dictionary={dictionary}
    />
  );
}
