import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteContent',
  title: 'サイト設定',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'ヒーロータイトル', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'ヒーローサブタイトル', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'ヒーロー説明文', type: 'text' }),
    defineField({ name: 'heroDescriptionEn', title: 'Hero Description (English)', type: 'text' }),
    defineField({ name: 'heroCta', title: 'CTAボタン', type: 'string' }),
    defineField({ name: 'heroCtaEn', title: 'CTA (English)', type: 'string' }),
    defineField({ name: 'projectDescription', title: 'プロジェクト説明', type: 'text' }),
    defineField({ name: 'projectDescriptionEn', title: 'Project Description (English)', type: 'text' }),
    defineField({ name: 'scheduleItems', title: 'スケジュール', type: 'array', of: [{ type: 'object', fields: [
      { name: 'date', title: '日付', type: 'string' },
      { name: 'event', title: 'イベント', type: 'string' },
      { name: 'eventEn', title: 'Event (English)', type: 'string' },
    ] }] }),
    defineField({ name: 'footerDescription', title: 'フッター説明', type: 'string' }),
    defineField({ name: 'footerDescriptionEn', title: 'Footer Description (English)', type: 'string' }),
    defineField({ name: 'copyright', title: '著作権表記', type: 'string' }),
  ],
  preview: {
    select: { title: 'heroTitle' },
  },
})
