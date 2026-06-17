import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'researchLog',
  title: '活動記録',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'タイトル', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'titleEn', title: 'Title (English)', type: 'string' }),
    defineField({ name: 'category', title: 'カテゴリ', type: 'string', description: '既存のカテゴリを選択するか、新しいカテゴリ名を入力してください' }),
    defineField({ name: 'excerpt', title: '内容', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'excerptEn', title: 'Content (English)', type: 'text' }),
    defineField({ name: 'date', title: '日付', type: 'string', validation: (Rule) => Rule.required() }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
})
