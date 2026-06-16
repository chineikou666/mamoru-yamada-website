import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'researchLog',
  title: '活動記録',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'タイトル', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'titleEn', title: 'Title (English)', type: 'string' }),
    defineField({ name: 'category', title: 'カテゴリ', type: 'string', options: { list: [{ title: '撮影', value: 'filming' }, { title: '学会', value: 'conference' }, { title: '音楽制作', value: 'music' }, { title: '資料調査', value: 'research' }, { title: 'インタビュー', value: 'interview' }] } }),
    defineField({ name: 'excerpt', title: '内容', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'excerptEn', title: 'Content (English)', type: 'text' }),
    defineField({ name: 'date', title: '日付', type: 'string', validation: (Rule) => Rule.required() }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
})
