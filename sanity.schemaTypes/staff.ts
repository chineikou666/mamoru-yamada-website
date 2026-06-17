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
    defineField({ name: 'category', title: '所属エリア', type: 'string', options: { list: [
      { title: '山田守ドキュメンタリー', value: 'video' },
      { title: '音楽制作チーム', value: 'music' },
      { title: '協力', value: 'cooperation' },
      { title: 'その他（新しいエリア）', value: 'custom' },
    ] }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'customCategory', title: 'カスタムエリア名', type: 'string', description: '「その他」を選択した場合に新しいエリア名を入力', hidden: ({ parent }) => parent?.category !== 'custom' }),
    defineField({ name: 'order', title: '表示順', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
})
