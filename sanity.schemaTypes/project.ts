import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'プロジェクト',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'タイトル', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'titleEn', title: 'Title (English)', type: 'string' }),
    defineField({ name: 'description', title: '説明', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'descriptionEn', title: 'Description (English)', type: 'text' }),
    defineField({ name: 'schedule', title: 'スケジュール', type: 'array', of: [{ type: 'object', fields: [{ name: 'date', title: '日付', type: 'string' }, { name: 'event', title: 'イベント', type: 'string' }, { name: 'eventEn', title: 'Event (English)', type: 'string' }] }] }),
  ],
  preview: {
    select: { title: 'title' },
  },
})
