import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'building',
  title: '建築作品',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'タイトル', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'titleEn', title: 'Title (English)', type: 'string' }),
    defineField({ name: 'description', title: '説明', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'descriptionEn', title: 'Description (English)', type: 'text' }),
    defineField({ name: 'year', title: '建造年', type: 'number', validation: (Rule) => Rule.min(1900).max(2100) }),
    defineField({ name: 'location', title: '所在地', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'locationEn', title: 'Location (English)', type: 'string' }),
    defineField({ name: 'region', title: '地域', type: 'string', options: { list: [{ title: '関東', value: 'kanto' }, { title: '中部', value: 'chubu' }, { title: '近畿', value: 'kinki' }, { title: '中国', value: 'chugoku' }, { title: '九州', value: 'kyushu' }] } }),
    defineField({ name: 'image', title: '画像', type: 'image' }),
    defineField({ name: 'content', title: '本文', type: 'text' }),
    defineField({ name: 'contentEn', title: 'Content (English)', type: 'text' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'year' },
  },
})
