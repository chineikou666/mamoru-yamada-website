import { getDictionary } from "@/lib/i18n/dictionaries";
import { type Locale } from "@/lib/i18n/config";
import { getStaff } from "@/lib/sanity-queries";
import StaffPageContent from "@/components/StaffPageContent";


export const revalidate = 60;
const defaultStaffData = {
  videoTeam: {
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
  cooperation: [
    { name: "渡邉 研司", role: "協力", roleEn: "Cooperation" },
    { name: "大宮司 勝弘", role: "協力", roleEn: "Cooperation" },
    { name: "新井 啓之", role: "協力", roleEn: "Cooperation" },
  ],
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

  let staffData = defaultStaffData;
  try {
    const sanityStaff = await getStaff();
    if (sanityStaff && sanityStaff.length > 0) {
      const supervisors = sanityStaff.filter((s: any) => s.category === "supervision");
      const videoMembers = sanityStaff.filter((s: any) => s.category === "video" && !s.role);
      const videoSupport = sanityStaff.filter((s: any) => s.category === "video" && s.role);
      const musicMembers = sanityStaff.filter((s: any) => s.category === "music" && !s.role);
      const musicSupervisors = sanityStaff.filter((s: any) => s.category === "music" && s.role?.includes("監修"));
      const musicSolo = sanityStaff.filter((s: any) => s.category === "music" && s.role && !s.role.includes("監修"));
      const coop = sanityStaff.filter((s: any) => s.category === "cooperation");

      staffData = {
        videoTeam: {
          supervisor: supervisors.map((s: any) => ({ name: s.name, role: s.role || "監修", roleEn: s.roleEn || "Supervision" })),
          members: videoMembers.map((s: any) => ({ name: s.name })),
          support: videoSupport.filter((s: any) => s.role?.includes("サポート")).map((s: any) => ({ name: s.name, role: s.role, roleEn: s.roleEn })),
          calligraphy: videoSupport.filter((s: any) => s.role?.includes("題字")).map((s: any) => ({ name: s.name, role: s.role, roleEn: s.roleEn })),
        },
        musicTeam: {
          title: defaultStaffData.musicTeam.title,
          titleEn: defaultStaffData.musicTeam.titleEn,
          supervisor: musicSupervisors.map((s: any) => ({ name: s.name, role: s.role, roleEn: s.roleEn })),
          members: musicSolo.map((s: any) => ({ name: s.name, role: s.role || "", roleEn: s.roleEn || "" })),
        },
        cooperation: coop.map((s: any) => ({ name: s.name, role: s.role || "協力", roleEn: s.roleEn || "Cooperation" })),
        partnerOrgs: defaultStaffData.partnerOrgs,
      };
    }
  } catch (e) {
    // fallback
  }

  return (
    <StaffPageContent
      locale={typedLocale}
      dictionary={dictionary}
      staffData={staffData}
    />
  );
}
