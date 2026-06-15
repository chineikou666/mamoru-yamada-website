import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import ResearchDetailContent from "@/components/ResearchDetailContent";

const researchData: Record<number, {
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  date: string;
  category: string;
  categoryEn: string;
  content: string;
  contentEn: string;
  images?: string[];
}> = {
  1: {
    title: "東海大学学園史資料センター見学",
    titleEn: "Visit to Tokai University Archives",
    excerpt: "東海大学学園史資料センターで保管してある山田守関連の資料を見学しました。",
    excerptEn: "Visited the Tokai University Archives to view materials related to Mamoru Yamada.",
    date: "2026-01",
    category: "資料調査",
    categoryEn: "Archive Research",
    content: `東海大学学園史資料センターで保管してある山田守関連の資料を見学しました。

資料センターでは、山田守の設計図や写真、関連文書など、貴重な資料が多数保管されていました。これらの資料は、ドキュメンタリー制作において重要なインサースとなる予定です。

見学では、山田守が手がけた東海大学湘南キャンパスの設計資料を中心に、彼の建築哲学や設計手法について学ぶことができました。`,
    contentEn: `We visited the Tokai University Archives to view materials related to Mamoru Yamada.

The archives house numerous valuable materials including Yamada's architectural drawings, photographs, and related documents. These materials are expected to serve as important inserts for the documentary production.

During our visit, we focused on the design materials for Tokai University Shonan Campus that Yamada worked on, learning about his architectural philosophy and design methods.`,
    images: [
      "https://static.wixstatic.com/media/b3aa8a_50ef0b25d06c4785a1a2adbe73b83d91~mv2.jpg",
      "https://static.wixstatic.com/media/b3aa8a_aa18b23c3ae3484e990b3eff7cf0eb3f~mv2.jpg",
    ],
  },
  2: {
    title: "リニューアルした４号館の中央図書館撮影",
    titleEn: "Filming at the Renewed Building 4 Central Library",
    excerpt: "リニューアルした４号館の中央図書館の映像を撮影しました。",
    excerptEn: "Filmed the renewed Building 4 Central Library.",
    date: "2025-09",
    category: "撮影",
    categoryEn: "Filming",
    content: `リニューアルした４号館の中央図書館の映像を撮影しました。

山田守が設計した建物は、時代に合わせてリニューアルされながらも、その建築的価値を保っています。撮影では、建築の細部や空間の使い方を詳細に記録しました。

リニューアル後の図書館は、現代の学習環境に適した空間に進化しつつ、山田守の建築思想を色濃く残しています。`,
    contentEn: `We filmed the renewed Building 4 Central Library.

Yamada's buildings have been renewed over time while maintaining their architectural value. The filming carefully documented architectural details and how the spaces are used.

The renewed library has evolved into a modern learning environment while retaining Yamada's architectural philosophy.`,
    images: [
      "https://static.wixstatic.com/media/b3aa8a_ee508faaaedc4fafb8fb47ff21505df2~mv2.jpg",
    ],
  },
  3: {
    title: "ローマ・サピエンツァ大学 学会発表",
    titleEn: "Presentation at Roma Sapienza University Conference",
    excerpt: "ローマ・サピエンツァ大学で開催された、大学キャンパス利用の学会にて、担当の瀧健太郎が山田守ドキュメンタリープロジェクトを紹介しました。",
    excerptEn: "Kentaro Taki presented the Mamoru Yamada Documentary Project at a conference on university campus utilization at Roma Sapienza University.",
    date: "2025-07",
    category: "学会",
    categoryEn: "Conference",
    content: `ローマ・サピエンツァ大学で開催された、大学キャンパス利用の学会にて、担当の瀧健太郎が山田守ドキュメンタリープロジェクトを紹介しました。

学会では、大学キャンパスの建築と利用について議論が行われ、山田守の設計した東海大学湘南キャンパスが事例として紹介されました。国際的な視点から、山田守の建築の価値が再確認される機会となりました。

参加者からは、山田守の建築に対する関心と、ドキュメンタリー作品への期待の声が寄せられました。`,
    contentEn: `Kentaro Taki presented the Mamoru Yamada Documentary Project at a conference on university campus utilization at Roma Sapienza University.

At the conference, discussions were held on university campus architecture and utilization, with Tokai University Shonan Campus, designed by Yamada, introduced as a case study. This was an opportunity to reconfirm the value of Yamada's architecture from an international perspective.

Participants expressed interest in Yamada's architecture and anticipation for the documentary.`,
    images: [
      "https://static.wixstatic.com/media/b3aa8a_39fabac2b6a348199d3c8915acbc76e4~mv2.jpg",
    ],
  },
  4: {
    title: "東海大学清水キャンパス・海洋博物館撮影",
    titleEn: "Filming at Tokai University Shimizu Campus and Marine Museum",
    excerpt: "東海大学清水キャンパスや海洋博物館ほか山田守建築の撮影取材を行いました。",
    excerptEn: "Filmed at Tokai University Shimizu Campus, Marine Museum, and other Mamoru Yamada buildings.",
    date: "2025-07",
    category: "撮影",
    categoryEn: "Filming",
    content: `東海大学清水キャンパスや海洋博物館ほか山田守建築の撮影取材を行いました。

清水キャンパスは、山田守が手がけた東海大学関連施設の一つで、海に近い立地を活かした建築が特徴です。海洋博物館では、建築と自然環境の調和について取材しました。

撮影では、建築の外観だけでなく、内部空間や細部のデザインも詳細に記録しました。`,
    contentEn: `We filmed at Tokai University Shimizu Campus, Marine Museum, and other Mamoru Yamada buildings.

The Shimizu Campus is one of the Tokai University facilities designed by Yamada, featuring architecture that takes advantage of its proximity to the sea. At the Marine Museum, we interviewed about the harmony between architecture and the natural environment.

The filming documented not only the exterior of the buildings but also the interior spaces and detailed designs.`,
    images: [
      "https://static.wixstatic.com/media/b3aa8a_102e4dd4b3ab4cd8a96fa65d9561f40c~mv2.jpg",
    ],
  },
  5: {
    title: "サウンドトラック録音セッション",
    titleEn: "Soundtrack Recording Session",
    excerpt: "檜垣ラボのサウンドトラック作曲チームが、器楽の録音を行いました。",
    excerptEn: "The Higaki Lab soundtrack composition team conducted instrumental recording.",
    date: "2025-06",
    category: "音楽制作",
    categoryEn: "Music Production",
    content: `檜垣ラボのサウンドトラック作曲チームが、器楽の録音を行いました。

ドキュメンタリーのサウンドトラック制作の一環として、ピアノ、フルート、トロンボーン、ギター、ベース、ドラムなどの楽器録音を行いました。音楽監修の檜垣智也の指導のもと、山田守の建築にふさわしい音楽を作り上げました。

録音は、建築の雰囲気とマッチするよう、細心の配慮を払って行われました。`,
    contentEn: `The Higaki Lab soundtrack composition team conducted instrumental recording.

As part of the documentary soundtrack production, we recorded piano, flute, trombone, guitar, bass, drums, and other instruments. Under the guidance of music supervisor Toshiya Higaki, we created music befitting Mamoru Yamada's architecture.

The recording was carried out with utmost care to match the atmosphere of the architecture.`,
    images: [
      "https://static.wixstatic.com/media/b3aa8a_57b6c05bc06a481fba72df632270872c~mv2.jpeg",
      "https://static.wixstatic.com/media/b3aa8a_e3eff8a99a1f411cb4cd0ff48ad2937c~mv2.jpeg",
    ],
  },
  6: {
    title: "大学キャンパス ドローン空撮",
    titleEn: "Drone Aerial Filming of University Campus",
    excerpt: "工学部の先生のご協力の元、大学キャンパスのドローン空撮を行いました。",
    excerptEn: "Conducted drone aerial filming of the university campus with the cooperation of the Faculty of Engineering.",
    date: "2025-04",
    category: "撮影",
    categoryEn: "Filming",
    content: `工学部の先生のご協力の元、大学キャンパスのドローン空撮を行いました。

空撮では、山田守が設計した東海大学湘南キャンパス全体の見取り図を捉え、建築と自然環境の関係を視覚的に表現しました。ドローンによる空撮は、地上からは見えない建築の全体像を記録する上で重要な手法です。

キャンパスの建物配置や緑化、地形との調和などを広角で捉え、山田守の建築思想を映像で伝える重要な素材となりました。`,
    contentEn: `Conducted drone aerial filming of the university campus with the cooperation of the Faculty of Engineering.

The aerial filming captured an overview of Tokai University Shonan Campus, designed by Mamoru Yamada, visually expressing the relationship between architecture and the natural environment. Drone filming is an important technique for recording the overall picture of architecture that cannot be seen from the ground.

We captured the building placement, greening, and harmony with the terrain from a wide angle, creating important visual material to convey Yamada's architectural philosophy.`,
    images: [],
  },
  7: {
    title: "山田守建築 インタビュー取材",
    titleEn: "Interview on Mamoru Yamada Architecture",
    excerpt: "山田守建築のインタビュー取材を行いました。",
    excerptEn: "Conducted interviews on Mamoru Yamada's architecture.",
    date: "2024-12",
    category: "インタビュー",
    categoryEn: "Interview",
    content: `山田守建築のインタビュー取材を行いました。

山田守の建築を知る関係者へのインタビューを通じて、彼の建築哲学や設計手法、人柄について貴重な証言を収集しました。インタビューはドキュメンタリーの核心となる重要な要素です。

被取材者からは、山田守が建築をどのように捉え、どのように設計していたかについて、生动かなエピソードが語られました。`,
    contentEn: `Conducted interviews on Mamoru Yamada's architecture.

Through interviews with people who know Yamada's architecture, we collected valuable testimonies about his architectural philosophy, design methods, and character. Interviews are a crucial element at the core of the documentary.

From the interviewees, we heard vivid episodes about how Yamada viewed architecture and how he approached design.`,
    images: [],
  },
};

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const typedLocale = locale as Locale;
  const dictionary = await getDictionary(typedLocale);
  const research = researchData[parseInt(id)];

  if (!research) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--color-foreground)] mb-4">
            {locale === "ja" ? "記事が見つかりません" : "Article not found"}
          </h1>
          <Link
            href={`/${typedLocale}/research`}
            className="text-[var(--color-primary)] hover:underline"
          >
            {locale === "ja" ? "研究日誌一覧に戻る" : "Back to research"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ResearchDetailContent
      research={research}
      locale={typedLocale}
    />
  );
}
