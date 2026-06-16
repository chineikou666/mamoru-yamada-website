const fs = require('fs');
const path = require('path');

// 读取建筑数据
const buildingsData = [
  {
    _type: 'building',
    title: '京都タワー',
    titleEn: 'Kyoto Tower',
    description: '京都のランドマーク。高さ131mの鉄骨造りの展望塔',
    descriptionEn: 'A landmark of Kyoto. 131m steel-framed observation tower',
    year: 1964,
    location: '京都市下京区',
    locationEn: 'Shimogyo-ku, Kyoto',
    region: 'kinki',
  },
  {
    _type: 'building',
    title: '日本武道館',
    titleEn: 'Nippon Budokan',
    description: '1964年東京オリンピックの柔道競技場。八角形の平面が特徴',
    descriptionEn: 'Judo venue for the 1964 Tokyo Olympics. Features an octagonal plan',
    year: 1964,
    location: '東京都千代田区',
    locationEn: 'Chiyoda-ku, Tokyo',
    region: 'kanto',
  },
  {
    _type: 'building',
    title: '東海大学湘南キャンパス',
    titleEn: 'Tokai University Shonan Campus',
    description: '自然地形に沿った校舎配置が特徴のキャンパス建築',
    descriptionEn: 'Campus architecture featuring building arrangement along natural topography',
    year: 1962,
    location: '神奈川県平塚市',
    locationEn: 'Hiratsuka, Kanagawa',
    region: 'kanto',
  },
];

// 读取活动记录数据
const researchLogsData = [
  {
    _type: 'researchLog',
    title: '東海大学学園史資料センター見学',
    titleEn: 'Visit to Tokai University Archives',
    category: 'research',
    excerpt: '東海大学学園史資料センターで保管してある山田守関連の資料を見学しました。',
    excerptEn: 'Visited the Tokai University Archives to view materials related to Mamoru Yamada.',
    date: '2026-01',
  },
  {
    _type: 'researchLog',
    title: 'リニューアルした４号館の中央図書館撮影',
    titleEn: 'Filming at Renewed Building 4 Central Library',
    category: 'filming',
    excerpt: 'リニューアルした４号館の中央図書館の映像を撮影しました。',
    excerptEn: 'Filmed the renewed Building 4 Central Library.',
    date: '2025-09',
  },
  {
    _type: 'researchLog',
    title: 'ローマ・サピエンツァ大学 学会発表',
    titleEn: 'Presentation at Roma Sapienza University Conference',
    category: 'conference',
    excerpt: 'ローマ・サピエンツァ大学で開催された大学キャンパス利用の学会にて、担当の瀧健太郎が山田守ドキュメンタリープロジェクトを紹介しました。',
    excerptEn: 'Kentaro Taki presented the Mamoru Yamada Documentary Project at a conference on university campus utilization at Roma Sapienza University.',
    date: '2025-07',
  },
  {
    _type: 'researchLog',
    title: 'サウンドトラック録音セッション',
    titleEn: 'Soundtrack Recording Session',
    category: 'music',
    excerpt: '檜垣ラボのサウンドトラック作曲チームが、器楽の録音を行いました。',
    excerptEn: 'The Higaki Lab soundtrack composition team conducted instrumental recording.',
    date: '2025-06',
  },
];

console.log('Migration data prepared:');
console.log('- Buildings:', buildingsData.length);
console.log('- Research Logs:', researchLogsData.length);
console.log('\nTo import, run: npx sanity document import');
