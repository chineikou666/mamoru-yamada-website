"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/motion/FadeInView";

interface StaffMember {
  name: string;
  role?: string;
  roleEn?: string;
}

interface StaffPageContentProps {
  locale: string;
  dictionary: {
    staff: {
      title: string;
      subtitle: string;
      description: string;
    };
  };
  staffData: {
    videoTeam: {
      supervisor: StaffMember[];
      members: StaffMember[];
      support: StaffMember[];
      calligraphy: StaffMember[];
    };
    musicTeam: {
      title: string;
      titleEn: string;
      supervisor: StaffMember[];
      members: StaffMember[];
    };
    cooperation: StaffMember[];
    partnerOrgs: StaffMember[];
  };
}

export default function StaffPageContent({
  locale,
  dictionary,
  staffData,
}: StaffPageContentProps) {
  return (
    <div className="min-h-screen py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <FadeInView>
            <p className="text-[10px] md:text-xs tracking-[0.3em] text-[var(--color-muted-foreground)] uppercase mb-4">
              {dictionary.staff.subtitle}
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="text-2xl md:text-3xl font-light text-[var(--color-foreground)]">
              {dictionary.staff.title}
            </h1>
          </FadeInView>
        </div>

        {/* 映像と音楽 - 統一スタイル */}
        <FadeInView delay={0.1}>
          <section className="mb-16 md:mb-20 pb-12 border-b border-[var(--color-border)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* 映像制作 */}
              <div>
                {/* 山田守ドキュメンタリー标题 */}
                <h2 className="text-xs sm:text-sm font-light text-[var(--color-foreground)] tracking-[0.05em] sm:tracking-[0.1em] mb-4">
                  {locale === "ja" ? "山田守ドキュメンタリー" : "Mamoru Yamada Documentary"}
                </h2>

                {/* 監修 */}
                <div className="space-y-3 mb-6">
                  {staffData.videoTeam.supervisor.map((member, index) => (
                    <div key={index} className="flex justify-between items-baseline text-sm">
                      <span className="text-[var(--color-foreground)]">{member.name}</span>
                      <span className="text-[10px] text-[var(--color-muted-foreground)]">
                        {locale === "ja" ? "監修" : "Supervision"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 参加メンバー */}
                <div className="space-y-3 mb-6">
                  {staffData.videoTeam.members.map((member, index) => (
                    <div key={index} className="flex justify-between items-baseline text-sm">
                      <span className="text-[var(--color-foreground)]">{member.name}</span>
                      <span className="text-[10px] text-[var(--color-muted-foreground)]">
                        {locale === "ja" ? "参加メンバー" : "Team Member"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* サポート・題字 */}
                <div className="space-y-3 pt-4 border-t border-[var(--color-border)]">
                  {staffData.videoTeam.support.map((member, index) => (
                    <div key={index} className="flex justify-between items-baseline text-sm">
                      <span className="text-[var(--color-foreground)]">{member.name}</span>
                      <span className="text-[10px] text-[var(--color-muted-foreground)]">
                        {locale === "ja" ? member.role : member.roleEn}
                      </span>
                    </div>
                  ))}
                  {staffData.videoTeam.calligraphy.map((member, index) => (
                    <div key={index} className="flex justify-between items-baseline text-sm">
                      <span className="text-[var(--color-foreground)]">{member.name}</span>
                      <span className="text-[10px] text-[var(--color-muted-foreground)]">
                        {locale === "ja" ? member.role : member.roleEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 音楽制作 */}
              <div>
                <h2 className="text-[11px] sm:text-xs md:text-sm font-light text-[var(--color-foreground)] tracking-[0.02em] sm:tracking-[0.05em] md:tracking-[0.1em] mb-6">
                  <span className="md:hidden">{locale === "ja" ? "山田守ドキュメンタリ映画" : "Mamoru Yamada Documentary Film"}<br/>{locale === "ja" ? "音楽制作チームのクレジット" : "Music Production Team Credits"}</span>
                  <span className="hidden md:inline">{locale === "ja" ? "山田守ドキュメンタリ映画　音楽制作チームのクレジット" : "Mamoru Yamada Documentary Film - Music Production Team Credits"}</span>
                </h2>
                
                {/* 音楽監修 */}
                <div className="space-y-3 mb-6">
                  {staffData.musicTeam.supervisor.map((member, index) => (
                    <div key={index} className="flex justify-between items-baseline text-sm">
                      <span className="text-[var(--color-foreground)]">{member.name}</span>
                      <span className="text-[10px] text-[var(--color-muted-foreground)]">
                        {locale === "ja" ? "音楽監修" : "Music Supervisor"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 制作メンバー */}
                <div className="space-y-3">
                  {staffData.musicTeam.members.map((member, index) => (
                    <div key={index} className="flex justify-between items-baseline text-sm">
                      <span className="text-[var(--color-foreground)]">{member.name}</span>
                      <span className="text-[10px] text-[var(--color-muted-foreground)]">
                        {locale === "ja" ? member.role : member.roleEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* 协力 - 人物と組織を横並びで表示 */}
        <FadeInView delay={0.3}>
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* 協力（人物） */}
              <div>
                <h2 className="text-sm font-light text-[var(--color-foreground)] tracking-[0.1em] mb-4">
                  {locale === "ja" ? "協力人員" : "Cooperation"}
                </h2>
                <div className="space-y-2">
                  {staffData.cooperation.map((member, index) => (
                    <p key={index} className="text-sm text-[var(--color-foreground)]">
                      {member.name}
                    </p>
                  ))}
                </div>
              </div>

              {/* 協力単位（組織） */}
              <div>
                <h2 className="text-sm font-light text-[var(--color-foreground)] tracking-[0.1em] mb-4">
                  {locale === "ja" ? "協力単位" : "Partner Units"}
                </h2>
                <div className="space-y-2">
                  {staffData.partnerOrgs.map((org, index) => (
                    <p key={index} className="text-sm text-[var(--color-foreground)]">
                      {org.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInView>
      </div>
    </div>
  );
}
