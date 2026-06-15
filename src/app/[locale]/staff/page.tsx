import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import StaffPageContent from "@/components/StaffPageContent";

const staffData = {
  // 映像制作团队
  videoTeam: {
    title: "山田守ドキュメンタリープロジェクト",
    titleEn: "Mamoru Yamada Documentary Project",
    supervisor: [
      { name: "瀧 健太郎", role: "監修", roleEn: "Supervision" },
    ],
    members: [
      { name: "阿部 航洋" },
      { name: "青木 優虎" },
      { name: "尹 成乔" },
      { name: "王 一晨" },
      { name: "浦田 望生" },
      { name: "髙島 紫妃" },
      { name: "小島 一平" },
      { name: "滝本 彩季" },
      { name: "野村 優衣" },
      { name: "萩原 快" },
      { name: "桝高 至恩" },
      { name: "李 怡然" },
      { name: "渡部 栞" },
    ],
    support: [
      { name: "櫻田一茶", role: "サポートメンバー", roleEn: "Support Member" },
    ],
    calligraphy: [
      { name: "森川 満月", role: "題字", roleEn: "Calligraphy" },
    ],
  },
  // 音乐团队
  musicTeam: {
    title: "山田守ドキュメンタリ映画<br/>音楽制作チームのクレジット",
    titleEn: "Mamoru Yamada Documentary Film<br/>Music Production Team Credits",
    supervisor: [
      { name: "檜垣 智也", role: "音楽監修", roleEn: "Music Supervisor" },
    ],
    members: [
      { name: "杉原 碧", role: "音楽制作・ピアノ", roleEn: "Music Production / Piano" },
      { name: "髙松 慶実", role: "音楽制作・テーマ旋律作曲・音楽録音・整音", roleEn: "Music Production / Theme Composition / Recording & Mixing" },
      { name: "菅沼 光", role: "音楽制作", roleEn: "Music Production" },
      { name: "三澤 慧マリアノ", role: "音楽制作", roleEn: "Music Production" },
      { name: "荒井 万里", role: "音楽制作・トロンボーン", roleEn: "Music Production / Trombone" },
      { name: "半田 有希", role: "音楽制作・ドラム", roleEn: "Music Production / Drums" },
      { name: "徳 和成", role: "音楽制作", roleEn: "Music Production" },
      { name: "松原 彩花", role: "ピアノ・ヴァイオリン", roleEn: "Piano / Violin" },
      { name: "加藤 陽香", role: "ピアノ", roleEn: "Piano" },
      { name: "谷 心音", role: "フルート", roleEn: "Flute" },
      { name: "佐藤 颯馬", role: "ギター", roleEn: "Guitar" },
      { name: "伊藤 潤", role: "ベース", roleEn: "Bass" },
      { name: "伊藤 詩織", role: "音楽録音アシスト", roleEn: "Recording Assistant" },
    ],
  },
  // 协力
  cooperation: [
    { name: "渡邉 研司", role: "協力", roleEn: "Cooperation" },
    { name: "大宮司 勝弘", role: "協力", roleEn: "Cooperation" },
    { name: "新井 啓之", role: "協力", roleEn: "Cooperation" },
  ],
  // 协力机构
  partnerOrgs: [
    { name: "東海大学静岡カレッジオフィス", role: "協力単位", roleEn: "Partner Unit" },
    { name: "東海大学海洋学部博物館", role: "協力単位", roleEn: "Partner Unit" },
    { name: "スルガベイカレッジ静岡オフィス", role: "協力単位", roleEn: "Partner Unit" },
    { name: "東海大学 学園史資料センター", role: "協力単位", roleEn: "Partner Unit" },
  ],
};

export default async function StaffPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const dictionary = await getDictionary(typedLocale);

  return (
    <StaffPageContent
      locale={typedLocale}
      dictionary={dictionary}
      staffData={staffData}
    />
  );
}
