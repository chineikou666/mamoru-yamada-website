import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { getResearchLogs } from "@/lib/sanity-queries";
import ResearchPageContent from "@/components/ResearchPageContent";


export const dynamic = "force-dynamic";
const defaultLogs = [
  {
    id: 1,
    title: "東海大学学園史資料センター見学",
    titleEn: "Visit to Tokai University Archives",
    excerpt: "東海大学学園史資料センターで保管してある山田守関連の資料を見学しました。",
    excerptEn: "Visited the Tokai University Archives to view materials related to Mamoru Yamada.",
    date: "2026-01",
    category: "資料調査",
    categoryEn: "Archive Research",
    images: [
      "https://static.wixstatic.com/media/b3aa8a_50ef0b25d06c4785a1a2adbe73b83d91~mv2.jpg",
      "https://static.wixstatic.com/media/b3aa8a_aa18b23c3ae3484e990b3eff7cf0eb3f~mv2.jpg",
    ],
  },
  {
    id: 2,
    title: "リニューアルした４号館の中央図書館撮影",
    titleEn: "Filming at the Renewed Building 4 Central Library",
    excerpt: "リニューアルした４号館の中央図書館の映像を撮影しました。",
    excerptEn: "Filmed the renewed Building 4 Central Library.",
    date: "2025-09",
    category: "撮影",
    categoryEn: "Filming",
    images: [
      "https://static.wixstatic.com/media/b3aa8a_ee508faaaedc4fafb8fb47ff21505df2~mv2.jpg",
    ],
  },
  {
    id: 3,
    title: "ローマ・サピエンツァ大学 学会発表",
    titleEn: "Presentation at Roma Sapienza University Conference",
    excerpt: "ローマ・サピエンツァ大学で開催された、大学キャンパス利用の学会にて、担当の瀧健太郎が山田守ドキュメンタリープロジェクトを紹介しました。",
    excerptEn: "Kentaro Taki presented the Mamoru Yamada Documentary Project at a conference on university campus utilization at Roma Sapienza University.",
    date: "2025-07",
    category: "学会",
    categoryEn: "Conference",
    images: [
      "https://static.wixstatic.com/media/b3aa8a_39fabac2b6a348199d3c8915acbc76e4~mv2.jpg",
    ],
  },
  {
    id: 4,
    title: "東海大学清水キャンパス・海洋博物館撮影",
    titleEn: "Filming at Tokai University Shimizu Campus and Marine Museum",
    excerpt: "東海大学清水キャンパスや海洋博物館ほか山田守建築の撮影取材を行いました。",
    excerptEn: "Filmed at Tokai University Shimizu Campus, Marine Museum, and other Mamoru Yamada buildings.",
    date: "2025-07",
    category: "撮影",
    categoryEn: "Filming",
    images: [
      "https://static.wixstatic.com/media/b3aa8a_102e4dd4b3ab4cd8a96fa65d9561f40c~mv2.jpg",
    ],
  },
  {
    id: 5,
    title: "サウンドトラック録音セッション",
    titleEn: "Soundtrack Recording Session",
    excerpt: "檜垣ラボのサウンドトラック作曲チームが、器楽の録音を行いました。",
    excerptEn: "The Higaki Lab soundtrack composition team conducted instrumental recording.",
    date: "2025-06",
    category: "音楽制作",
    categoryEn: "Music Production",
    images: [
      "https://static.wixstatic.com/media/b3aa8a_57b6c05bc06a481fba72df632270872c~mv2.jpeg",
      "https://static.wixstatic.com/media/b3aa8a_e3eff8a99a1f411cb4cd0ff48ad2937c~mv2.jpeg",
    ],
  },
  {
    id: 6,
    title: "大学キャンパス ドローン空撮",
    titleEn: "Drone Aerial Filming of University Campus",
    excerpt: "工学部の先生のご協力の元、大学キャンパスのドローン空撮を行いました。",
    excerptEn: "Conducted drone aerial filming of the university campus with the cooperation of the Faculty of Engineering.",
    date: "2025-04",
    category: "撮影",
    categoryEn: "Filming",
    images: [],
  },
  {
    id: 7,
    title: "山田守建築 インタビュー取材",
    titleEn: "Interview on Mamoru Yamada Architecture",
    excerpt: "山田守建築のインタビュー取材を行いました。",
    excerptEn: "Conducted interviews on Mamoru Yamada architecture.",
    date: "2024-12",
    category: "インタビュー",
    categoryEn: "Interview",
    images: [],
  },
];

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dictionary = await getDictionary(typedLocale);

  let researchLogs = defaultLogs;
  try {
    const sanityLogs = await getResearchLogs();
    if (sanityLogs && sanityLogs.length > 0) {
      researchLogs = sanityLogs.map((l: any, i: number) => ({
        id: i + 1,
        title: l.title || "",
        titleEn: l.titleEn || "",
        excerpt: l.excerpt || "",
        excerptEn: l.excerptEn || "",
        date: l.date || "",
        category: l.category || "",
        categoryEn: l.category || "",
        images: [],
      }));
    }
  } catch (e) {
    // fallback
  }

  return (
    <ResearchPageContent
      locale={typedLocale}
      dictionary={dictionary}
      researchLogs={researchLogs}
    />
  );
}
