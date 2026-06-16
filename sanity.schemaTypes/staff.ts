import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'staff',
  title: 'スタッフ',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: '名前', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'nameEn', title: 'Name (English)', type: 'string' }),
    defineField({ name: 'role', title: '役職', type: 'string' }),
    defineField({ name: 'roleEn', title: 'Role (English)', type: 'string' }),
    defineField({ name: 'category', title: 'カテゴリ', type: 'string', options: { list: [{ title: '監修', value: 'supervision' }, { title: '映像制作', value: 'video' }, { title: '音楽制作', value: 'music' }, { title: '協力', value: 'cooperation' }] } }),
    defineField({ name: 'order', title: '表示順', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
})
