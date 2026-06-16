const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'hdz4dsff',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const buildings = [
  { _type: 'building', title: '京都タワー', titleEn: 'Kyoto Tower', description: '京都のランドマーク。高さ131mの鉄骨造りの展望塔', descriptionEn: 'A landmark of Kyoto. 131m steel-framed observation tower', year: 1964, location: '京都市下京区', locationEn: 'Shimogyo-ku, Kyoto', region: 'kinki' },
  { _type: 'building', title: '日本武道館', titleEn: 'Nippon Budokan', description: '1964年東京オリンピックの柔道競技場。八角形の平面が特徴', descriptionEn: 'Judo venue for the 1964 Tokyo Olympics. Features an octagonal plan', year: 1964, location: '東京都千代田区', locationEn: 'Chiyoda-ku, Tokyo', region: 'kanto' },
  { _type: 'building', title: '東海大学湘南キャンパス', titleEn: 'Tokai University Shonan Campus', description: '自然地形に沿った校舎配置が特徴のキャンパス建築', descriptionEn: 'Campus architecture featuring building arrangement along natural topography', year: 1962, location: '神奈川県平塚市', locationEn: 'Hiratsuka, Kanagawa', region: 'kanto' },
  { _type: 'building', title: '永代橋', titleEn: 'Eitai Bridge', description: '関東大震災後の震災復興橋梁。重要文化財', descriptionEn: 'Post-Great Kanto Earthquake reconstruction bridge. Important Cultural Property', year: 1926, location: '東京都中央区・江東区', locationEn: 'Chuo-ku/Koto-ku, Tokyo', region: 'kanto' },
  { _type: 'building', title: '聖橋', titleEn: 'Hijiri Bridge', description: '関東大震災後の震災復興橋梁。コンクリートアーチ橋', descriptionEn: 'Post-Great Kanto Earthquake reconstruction bridge. Concrete arch bridge', year: 1927, location: '東京都文京区・千代田区', locationEn: 'Bunkyo-ku/Chiyoda-ku, Tokyo', region: 'kanto' },
  { _type: 'building', title: '旧門司郵便局電話課', titleEn: 'Former Moji Post Office Telephone Department', description: '現NTT門司電気通信レトロ館。DOCOMOMO JAPAN選定', descriptionEn: 'Now NTT Moji Telecommunication Retro Museum. DOCOMOMO JAPAN Selection', year: 1924, location: '北九州市門司区', locationEn: 'Moji-ku, Kitakyushu', region: 'kyushu' },
  { _type: 'building', title: '萬代橋', titleEn: 'Bandai Bridge', description: '新潟市の象徴的な橋梁。重要文化財', descriptionEn: 'Iconic bridge of Niigata City. Important Cultural Property', year: 1929, location: '新潟市中央区', locationEn: 'Chuo-ku, Niigata', region: 'chubu' },
  { _type: 'building', title: '長沢浄水場', titleEn: 'Nagasawa Water Purification Plant', description: 'DOCOMOMO JAPAN選定。ウルトラマンのロケ地', descriptionEn: 'DOCOMOMO JAPAN Selection. Filming location for Ultraman', year: 1957, location: '川崎市多摩区', locationEn: 'Miyamae-ku, Kawasaki', region: 'kanto' },
  { _type: 'building', title: '東海大学代々木校舎', titleEn: 'Tokai University Yoyogi Campus', description: '1号館(1955)、3号館(1959)、4号館(1960-62)など', descriptionEn: 'Multiple buildings including Building 1 (1955), Building 3 (1959), Building 4 (1960-62)', year: 1955, location: '東京都渋谷区', locationEn: 'Shibuya-ku, Tokyo', region: 'kanto' },
  { _type: 'building', title: '旧東京逓信病院', titleEn: 'Former Tokyo Telegraph Hospital', description: '1937年竣工。映画『暖流』の舞台となった病院建築', descriptionEn: 'Completed in 1937. Hospital building featured in the film Danryu', year: 1937, location: '東京都千代田区', locationEn: 'Chiyoda-ku, Tokyo', region: 'kanto' },
  { _type: 'building', title: '旧大阪厚生年金病院', titleEn: 'Former Osaka Kosei Nenkin Hospital', description: '1954年竣工。日本建築学会賞作品賞受賞', descriptionEn: 'Completed in 1954. Won the Architectural Institute of Japan Prize', year: 1954, location: '大阪市福島区', locationEn: 'Fukushima-ku, Osaka', region: 'kinki' },
  { _type: 'building', title: '自衛隊中央病院旧本館', titleEn: 'Former JSDF Central Hospital Main Building', description: '1955年竣工', descriptionEn: 'Completed in 1955', year: 1955, location: '東京都世田谷区', locationEn: 'Setagaya-ku, Tokyo', region: 'kanto' },
  { _type: 'building', title: '旧熊本逓信病院', titleEn: 'Former Kumamoto Telegraph Hospital', description: '1955年竣工。DOCOMOMO JAPAN選定', descriptionEn: 'Completed in 1955. DOCOMOMO JAPAN Selection', year: 1955, location: '熊本市中央区', locationEn: 'Chuo-ku, Kumamoto', region: 'kyushu' },
  { _type: 'building', title: '野田市郷土博物館', titleEn: 'Noda City Museum', description: '1959年竣工', descriptionEn: 'Completed in 1959', year: 1959, location: '千葉県野田市', locationEn: 'Noda, Chiba', region: 'kanto' },
  { _type: 'building', title: '社会保険横浜中央病院', titleEn: 'Social Insurance Yokohama Central Hospital', description: '1960年竣工。DOCOMOMO JAPAN選定', descriptionEn: 'Completed in 1960. DOCOMOMO JAPAN Selection', year: 1960, location: '横浜市中区', locationEn: 'Naka-ku, Yokohama', region: 'kanto' },
  { _type: 'building', title: '旧高松逓信病院', titleEn: 'Former Takamatsu Telegraph Hospital', description: '1962年竣工。公共建築百選', descriptionEn: 'Completed in 1962. Selected as one of the Best Public Buildings', year: 1962, location: '高松市', locationEn: 'Takamatsu, Kagawa', region: 'shikoku' },
  { _type: 'building', title: '旧山田守自邸', titleEn: 'Former Mamoru Yamada Residence', description: '1959年竣工。現蔦サロン・珈琲店', descriptionEn: 'Completed in 1959. Now Tsuta Salon & Coffee Shop', year: 1959, location: '東京都港区', locationEn: 'Minato-ku, Tokyo', region: 'kanto' },
];

const researchLogs = [
  { _type: 'researchLog', title: '東海大学学園史資料センター見学', titleEn: 'Visit to Tokai University Archives', category: 'research', excerpt: '東海大学学園史資料センターで保管してある山田守関連の資料を見学しました。', excerptEn: 'Visited the Tokai University Archives to view materials related to Mamoru Yamada.', date: '2026-01' },
  { _type: 'researchLog', title: 'リニューアルした４号館の中央図書館撮影', titleEn: 'Filming at Renewed Building 4 Central Library', category: 'filming', excerpt: 'リニューアルした４号館の中央図書館の映像を撮影しました。', excerptEn: 'Filmed the renewed Building 4 Central Library.', date: '2025-09' },
  { _type: 'researchLog', title: 'ローマ・サピエンツァ大学 学会発表', titleEn: 'Presentation at Roma Sapienza University Conference', category: 'conference', excerpt: 'ローマ・サピエンツァ大学で開催された大学キャンパス利用の学会にて、担当の瀧健太郎が山田守ドキュメンタリープロジェクトを紹介しました。', excerptEn: 'Kentaro Taki presented the Mamoru Yamada Documentary Project at a conference.', date: '2025-07' },
  { _type: 'researchLog', title: 'サウンドトラック録音セッション', titleEn: 'Soundtrack Recording Session', category: 'music', excerpt: '檜垣ラボのサウンドトラック作曲チームが、器楽の録音を行いました。', excerptEn: 'The Higaki Lab soundtrack composition team conducted instrumental recording.', date: '2025-06' },
  { _type: 'researchLog', title: '大学キャンパス ドローン空撮', titleEn: 'Drone Aerial Filming of University Campus', category: 'filming', excerpt: '工学部の先生のご協力の元、大学キャンパスのドローン空撮を行いました。', excerptEn: 'Conducted drone aerial filming of the university campus.', date: '2025-04' },
  { _type: 'researchLog', title: '山田守建築 インタビュー取材', titleEn: 'Interview on Mamoru Yamada Architecture', category: 'interview', excerpt: '山田守建築のインタビュー取材を行いました。', excerptEn: 'Conducted interviews on Mamoru Yamada architecture.', date: '2024-12' },
];

async function migrate() {
  console.log('Migrating buildings...');
  for (const building of buildings) {
    try {
      await client.create(building);
      console.log(`Created: ${building.title}`);
    } catch (e) {
      console.log(`Error creating ${building.title}: ${e.message}`);
    }
  }

  console.log('Migrating research logs...');
  for (const log of researchLogs) {
    try {
      await client.create(log);
      console.log(`Created: ${log.title}`);
    } catch (e) {
      console.log(`Error creating ${log.title}: ${e.message}`);
    }
  }

  console.log('Migration complete!');
}

migrate().catch(console.error);
