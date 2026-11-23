/* INSI Group project register. Source: Experience.docx (63 contracts).
   s: con | uxo | eng.  sec: hydro | roads | irrig | uxo | bld.
   Money: lak (kip), usd. Dimensions: len (km), wid (m), dam [L m, H m], ha. */
(function () {
  var C = {
    pafoVte: ['Provincial Agriculture and Forestry Office, Vientiane Province', 'ພະແນກກະສິກຳ ແລະ ປ່າໄມ້ ແຂວງວຽງຈັນ'],
    pafoVc: ['Agriculture and Forestry Office, Vientiane Capital', 'ພະແນກກະສິກຳ ແລະ ປ່າໄມ້ ນະຄອນຫຼວງວຽງຈັນ'],
    pafoSrv: ['Provincial Agriculture and Forestry Office, Saravan Province', 'ພະແນກກະສິກຳ ແລະ ປ່າໄມ້ ແຂວງສາລະວັນ'],
    edl: ['Électricité du Laos (EDL)', 'ລັດວິສາຫະກິດໄຟຟ້າລາວ (EDL)'],
    dpwtXs: ['Public Works and Transport Office, Xaysomboun Province', 'ພະແນກໂຍທາທິການ ແລະ ຂົນສົ່ງ ແຂວງໄຊສົມບູນ'],
    dpwtVte: ['Public Works and Transport Office, Vientiane Province', 'ພະແນກໂຍທາທິການ ແລະ ຂົນສົ່ງ ແຂວງວຽງຈັນ'],
    mafIrr: ['Ministry of Agriculture and Forestry, Department of Irrigation', 'ກະຊວງກະສິກຳ ແລະ ປ່າໄມ້ ກົມຊົນລະປະທານ'],
    mpwtRoad: ['Ministry of Public Works and Transport, Department of Road', 'ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ ກົມທາງ'],
    mpwtWater: ['Ministry of Public Works and Transport, Department of Water Supply (KfW funded)', 'ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ ກົມນ້ຳປະປາ (ທຶນ KfW)'],
    mnd: ['Department of Engineering, Ministry of National Defense', 'ກົມຊ່າງແສງ, ກະຊວງປ້ອງກັນປະເທດ'],
    mr1: ['1st Military Region Command, Lao People’s Army', 'ກອງພົນທີ 1 ກອງທັບປະຊາຊົນລາວ'],
    priv: ['Private company', 'ບໍລິສັດເອກະຊົນ']
  };
  function p(s, sec, en, lo, c, loc, x) {
    var o = { s: s, sec: sec, en: en, lo: lo || en, c: c, loc: loc };
    for (var k in x) o[k] = x[k];
    return o;
  }
  var E = 'eng', K = 'con', U = 'uxo';
  window.INSI_PROJECTS = [
    /* ---------- Insi Development Construction (25) ---------- */
    p(K, ['roads', 'hydro'], 'DBST access road to Huay Lamphan Gnai Hydropower, Lamam District', 'ໂຄງການກໍ່ສ້າງທາງປູຢາງ 2 ຊັ້ນ ເຂົ້າເຂື່ອນໄຟຟ້າຫ້ວຍລຳພັນໃຫຍ່, ເມືອງລະມາມ', C.edl, 'Sekong', { len: 14, wid: 8, usd: 6325520, lak: 57236467720, yrs: '2020–2023' }),
    p(K, ['roads', 'hydro'], 'DBST access road to Nam Ngum 3 Dam, Long Cheng District', 'ໂຄງການກໍ່ສ້າງທາງປູຢາງ 2 ຊັ້ນ ທາງເຂົ້າເຂື່ອນນ້ຳງື່ມ 3, ເມືອງລ້ອງແຈ້ງ', C.edl, 'Xaysomboun', { len: 30, wid: 8, usd: 11025890, lak: 97882448733, yrs: '2019–2022' }),
    p(K, ['roads'], 'DBST road to Battalion 402, Atsaphone District', 'ໂຄງການກໍ່ສ້າງເສັ້ນທາງປູຢາງ 2 ຊັ້ນ ເຂົ້າກອງພັນໃຫຍ່ 402, ເມືອງອາດສະພອນ', C.mnd, 'Savannakhet', { len: 25, wid: 8, usd: 5109253, lak: 43046733838, yrs: '2018–2022' }),
    p(K, ['irrig'], 'Thong Hab Tha Ngon reservoir and irrigation system, Xaythany District', 'ໂຄງການກໍ່ສ້າງອ່າງເກັບນ້ຳ ແລະ ພັດທະນາລະບົບຊົນລະປະທານທົ່ງຮາບ-ທ່າງອນ, ເມືອງໄຊທານີ', C.mafIrr, 'Vientiane Capital', { usd: 1349000, lak: 22933000000 }),
    p(K, ['irrig'], 'Irrigation for the rice seed and cash crop centre, Xaythany District', 'ໂຄງການກໍ່ສ້າງຊົນລະປະທານ ສູນແນວພັນເຂົ້າ ແລະ ພືດເສດຖະກິດ, ເມືອງໄຊທານີ', C.mafIrr, 'Vientiane Capital', { usd: 549000, lak: 9333000000 }),
    p(K, ['irrig'], 'Huay Tang Nai irrigation: concrete weir and 6 km earth canals', 'ໂຄງການກໍ່ສ້າງຊົນລະປະທານນ້ຳຫ້ວຍຕັ່ງນາຍ: ກໍ່ສ້າງລະບົບຝາຍ ແລະ ຄອງເໝືອງ 6 ກມ', C.pafoVte, 'Vientiane Province', { canal: 6, lak: 3430000000, note: 'GoL investment' }),
    p(K, ['irrig'], 'Pump irrigation, Thinyoung Village', 'ໂຄງການກໍ່ສ້າງຊົນລະປະທານ ຈັກສູບນ້ຳ ບ້ານຖິ່ນຍຸງ', C.pafoVte, 'Vientiane Province', { lak: 5330000000, note: 'GoL investment' }),
    p(K, ['irrig'], 'Embankment construction, 800 m, Sanakham District', 'ໂຄງການກໍ່ສ້າງຕາຝັ່ງເຈື່ອນ ເມືອງຊະນະຄາມ', C.dpwtVte, 'Vientiane Province', { len: 0.8, lak: 8130000000 }),
    p(K, ['irrig', 'bld'], 'Paddy field development at Thin Village for new migrant villagers, Vang Vieng', 'ໂຄງການກໍ່ສ້າງຊົນລະປະທານ ແລະ ບຸກເບີກເນື້ອທີ່ທຳການຜະລິດ ເຂດບ້ານຖິ່ນ, ເມືອງວັງວຽງ', C.mr1, 'Vientiane Province', { lak: 5550000000, note: 'Military budget' }),
    p(K, ['bld', 'hydro'], 'Resettlement village and facilities for villagers affected by the Nam Phai hydropower dam', 'ໂຄງການກໍ່ສ້າງບ້ານຈັດສັນ ແລະ ສິ່ງອຳນວຍຄວາມສະດວກ ໃຫ້ແກ່ປະຊາຊົນທີ່ໄດ້ຮັບຜົນກະທົບຈາກການກໍ່ສ້າງເຂື່ອນໄຟຟ້ານ້ຳໄຜ່', C.edl, 'Xaysomboun', { lak: 8480000000, scopeKey: 'resettle' }),
    p(K, ['roads'], 'Sub road construction, urban area of Vientiane Province', null, C.dpwtVte, 'Vientiane Province', { lak: 4200000000 }),
    p(K, ['roads'], 'Road construction, Vang Village, Sanakham District', null, C.dpwtVte, 'Vientiane Province', { lak: 2200000000 }),
    p(K, ['irrig'], 'Embankment construction, Sanakham District', null, C.dpwtVte, 'Vientiane Province', { lak: 5330000000 }),
    p(K, ['irrig'], 'Nam Tong irrigation reservoir (dam), Feuang District', null, C.pafoVte, 'Vientiane Province', { dam: [245, 21], lak: 25400000000 }),
    p(K, ['irrig'], 'Nam Pot irrigation reservoir (dam), Toulakhom District', null, C.pafoVte, 'Vientiane Province', { dam: [190, 18], lak: 15330000000 }),
    p(K, ['irrig'], 'Nam Koun irrigation reservoir (dam), Kasi District', null, C.pafoVte, 'Vientiane Province', { dam: [180, 18], lak: 10400000000 }),
    p(K, ['irrig'], 'Nam Kon Nam Xan irrigation reservoir (dam), Longxan District', null, C.pafoVte, 'Xaysomboun', { dam: [290, 24], lak: 26000000000 }),
    p(K, ['irrig'], 'Nam Kai irrigation reservoir (dam), Kasi District', null, C.pafoVte, 'Vientiane Province', { dam: [175, 18], lak: 16300000000 }),
    p(K, ['irrig', 'hydro'], 'Nam Houayton irrigation reservoir (dam), Kasi District', null, C.edl, 'Vientiane Province', { dam: [160, 17], lak: 12200000000 }),
    p(K, ['bld'], 'Green tea factory building', null, C.priv, 'Xiengkhouang', { lak: 3000000000 }),
    p(K, ['bld'], 'Student dormitory building, Donmay Village, Xayaboury District', null, C.priv, 'Xayaboury', { lak: 2500000000 }),
    p(K, ['bld'], 'Village hospital building, Houaymeasung Village, Pathoumphone District', null, C.priv, 'Champasak', { lak: 2000000000 }),
    p(K, ['bld'], 'Meeting hall building, Suakumnuay Village, Pakse District', null, C.priv, 'Champasak', { lak: 3000000000 }),
    p(K, ['bld'], 'Village market building, Nakoun Village, Naxaythong District', null, C.priv, 'Vientiane Capital', { lak: 2700000000 }),
    p(K, ['bld'], 'Apartment building, Phonpapao Village, Sisattanak District', null, C.priv, 'Vientiane Capital', { lak: 3500000000 }),

    /* ---------- Insi UXO and Clearance (21) ---------- */
    p(U, ['uxo', 'hydro'], 'UXO survey and clearance for 500 kV substation and access road, 1000 MW solar power project', null, ['CGN Energy Technology (Laos) Co., Ltd', null], 'Vientiane Capital', { yrs: '2023–2024', role: 1 }),
    p(U, ['uxo', 'hydro'], 'UXO survey and clearance at Gnoi Hai Village resettlement site, Luangprabang HPP', null, ['PSG Corporation Public Company', null], 'Luang Prabang', { yrs: '2023–2024', role: 1 }),
    p(U, ['uxo', 'hydro'], 'UXO survey and clearance at Lat Han Village resettlement site, Luangprabang HPP', null, ['Phonsavanh Development Sole Company Limited', null], 'Luang Prabang', { yrs: '2022–2023', role: 1 }),
    p(U, ['uxo', 'hydro'], 'UXO survey and clearance at Khokkham Village resettlement site, Luangprabang HPP', null, ['Phonsavanh Development Sole Company Limited', null], 'Luang Prabang', { yrs: '2022–2023', role: 1 }),
    p(U, ['uxo', 'roads'], 'UXO survey and clearance for 12 bridge construction sites', null, C.mpwtRoad, 'Champasak and Saravan', { yrs: '2021–2022', role: 1, bridges: 12 }),
    p(U, ['uxo', 'hydro'], '220 kV transmission line from Namsan 3B to the Laos Vietnam border', null, ['Phongsubthavy Group Sole Company Limited', null], 'Lao PDR', { yrs: '2021–2022', role: 1 }),
    p(U, ['uxo', 'hydro'], 'UXO survey and clearance for Nam Ngum 3 Hydropower Project', null, C.edl, 'Lao PDR', { yrs: '2020–2022', role: 1, usd: 128150 }),
    p(U, ['uxo', 'irrig'], 'UXO survey and clearance for peri urban water supply improvement, rural small towns', null, C.mpwtWater, 'Savannakhet', { yrs: '2020–2021', role: 1, usd: 199200 }),
    p(U, ['uxo', 'irrig'], 'UXO survey and clearance for the Pilot Project for the Irrigation of the Nam Kata (PPINK)', null, ['Ministry of Agriculture and Forestry, Department of Irrigation (AFD funded)', 'ກະຊວງກະສິກຳ ແລະ ປ່າໄມ້ ກົມຊົນລະປະທານ (ທຶນ AFD)'], 'Lao PDR', { yrs: '2020–2021', role: 1, usd: 188900 }),
    p(U, ['uxo', 'hydro'], 'UXO survey and clearance for the Lao China Railway electricity transmission project', null, ['Kunming HengTai Engineering Co., Ltd.', null], 'Lao PDR', { yrs: '2019–2020', role: 1, usd: 33000 }),
    p(U, ['uxo', 'hydro'], 'UXO survey and clearance for Nam Ngum 4 Hydropower Project', null, C.edl, 'Lao PDR', { yrs: '2019–2020', role: 1, usd: 65000 }),
    p(U, ['uxo', 'irrig'], 'UXO survey and clearance for the Namphuong Nongsan irrigation project', null, C.mafIrr, 'Lao PDR', { yrs: '2019–2020', role: 1, usd: 100600 }),
    p(U, ['uxo'], 'UXO survey and clearance for the Nam Et Phou Louey protected area', null, ['Ministry of Agriculture and Forestry, Department of Irrigation (ADB funded)', 'ກະຊວງກະສິກຳ ແລະ ປ່າໄມ້ ກົມຊົນລະປະທານ (ທຶນ ADB)'], 'Lao PDR', { yrs: '2018–2019', role: 1, usd: 70500 }),
    p(U, ['uxo', 'hydro'], '115 kV transmission line clearance project', null, C.edl, 'Lao PDR', { yrs: '2018–2019', role: 1, usd: 274000 }),
    p(U, ['uxo', 'hydro'], 'Lao China Railway transport clearance project', null, C.edl, 'Lao PDR', { yrs: '2019', role: 1, usd: 688000 }),
    p(U, ['uxo'], 'UXO survey and clearance for the Nam Theun 1 bomber clearance project', null, ['Vangsub Development and Investment Co., Ltd.', null], 'Lao PDR', { yrs: '2018–2019', role: 1, usd: 300000 }),
    p(U, ['uxo', 'bld'], 'UXO clearance and disposal at the Muang Run construction site set (300 hectares)', null, ['Not specified in source', null], 'Vientiane Capital', { yrs: '2018', role: 1, ha: 300, lak: 3085000000 }),
    p(U, ['uxo'], 'UXO survey and clearance for the Xiengkhouang 3 bomb clearance project', null, ['Vangsub Development and Investment Co., Ltd.', null], 'Xiengkhouang', { yrs: '2017–2018', role: 1, usd: 100000 }),
    p(U, ['uxo', 'hydro'], 'Clearance for 200 MW solar wind project, Nongboo Village, Vilabouly District (450 hectares)', null, ['(BS) BBC Co., Ltd', null], 'Savannakhet', { yrs: '2017–2018', role: 1, ha: 450, usd: 235000 }),
    p(U, ['uxo', 'roads'], 'UXO clearance and disposal for the strategic road from Long Po to Nam Ma Dao Village', null, C.mpwtRoad, 'Lao PDR', { yrs: '2016–2017', role: 1, lak: 1500000000 }),
    p(U, ['uxo', 'roads'], 'UXO clearance along corridors from Sam Ny Village to Ta Oy District', null, ['Ministry of Public Works and Transport, Department of Road (KfW funded)', 'ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ ກົມທາງ (ທຶນ KfW)'], 'Saravan', { yrs: '2015–2016', role: 1, usd: 367000 }),

    /* ---------- Engineer International Development (17) ---------- */
    p(E, ['irrig'], 'Survey and design of Nam Fuang 1 irrigation reservoir, Nongsan Village, Kasi District', 'ໂຄງການສໍາຫຼວດ-ອອກແບບອ່າງເກັບນໍ້າ ແລະ ລະບົບຊົນລະປະທານນໍ້າເຟືອງ 1 ບ້ານນອງສານ, ເມືອງກາສີ', C.pafoVte, 'Vientiane Province', { lak: 650000000, note: 'GoL investment' }),
    p(E, ['irrig'], 'Survey and design of the water supply headworks, Phoukout District', 'ໂຄງການສໍາຫຼວດ-ອອກແບບຫົວງານນ້ຳປະປາ, ເມືອງພູກູດ', C.edl, 'Xiengkhouang', { lak: 320000000 }),
    p(E, ['irrig'], 'Survey and design of irrigation for the rice seed and cash crop centre, Xaythany District', 'ໂຄງການສຳຫຼວດ-ອອກແບບຊົນລະປະທານສູນແນວພັນເຂົ້າແລະພືດເສດຖະກິດ, ເມືອງໄຊທານີ', C.pafoVc, 'Vientiane Capital', { lak: 280000000 }),
    p(E, ['irrig'], 'Survey and design of Thong Hab Tha Ngon irrigation, Xaythany District', 'ໂຄງການສຳຫຼວດ-ອອກແບບຊົນລະປະທານທົ່ງຮາບ-ທ່າງ່ອນ, ເມືອງໄຊທານີ', C.pafoVc, 'Vientiane Capital', { lak: 250000000 }),
    p(E, ['hydro'], 'Survey and design of Xeset Huay Tapoung hydropower dam, Wapi District', 'ໂຄງການເຂື່ອນສຳຫຼວດ-ອອກແບບໄຟຟ້າເຊເສັດ-ຫ້ວຍຕະປຸງ, ເມືອງວາປີ', C.edl, 'Saravan', { lak: 870000000, note: 'Funded by EDL' }),
    p(E, ['hydro'], 'Survey and design of Huay Kapher 1 hydropower dam, Laongam District', 'ໂຄງການສຳຫຼວດ-ອອກແບບເຂື່ອນໄຟຟ້າຫ້ວຍກະເພີ 1, ເມືອງເລົ່າງາມ', C.edl, 'Saravan', { lak: 640000000, note: 'Funded by EDL' }),
    p(E, ['hydro'], 'Survey and design of Huay Kapher 2 hydropower dam, Sanasomboun District', 'ໂຄງການສຳຫຼວດ-ອອກແບບເຂື່ອນໄຟຟ້າຫ້ວຍກະເພີ 2, ເມືອງຊະນະສົມບູນ', C.edl, 'Champasak', { lak: 570000000, note: 'Funded by EDL' }),
    p(E, ['irrig'], 'Survey and design of coffee irrigation, 600 hectares, Huay La Ork, Laongam District', 'ໂຄງການສຳຫຼວດ-ອອກແບບຊົນລະປະທານຫົດສວນກາເຟ 600 ເຮັກຕາ ຫ້ວຍລະອອກ, ເມືອງເລົ່າງາມ', C.pafoSrv, 'Saravan', { ha: 600, lak: 480000000 }),
    p(E, ['irrig'], 'Survey and design of coffee irrigation, 500 hectares, Huay Kapher, Laongam District', 'ໂຄງການສຳຫຼວດ-ອອກແບບຊົນລະປະທານຫົດສວນກາເຟ 500 ເຮັກຕາ ຫ້ວຍກະເພີ, ເມືອງເລົ່າງາມ', C.pafoSrv, 'Saravan', { ha: 500, lak: 460000000 }),
    p(E, ['roads'], 'Survey and design of 15 km urban road, Longxan District', 'ໂຄງການສຳຫຼວດ-ອອກແບບເສັ້ນທາງໃນຕົວເມືອງລ້ອງຊານ ຍາວ 15 ກິໂລແມັດ', C.dpwtXs, 'Xaysomboun', { len: 15, lak: 230000000 }),
    p(E, ['irrig'], 'Survey and design of Nam Pern irrigation, Hinheup District', 'ໂຄງການສຳຫຼວດ-ອອກແບບຊົນລະປະທານນ້ຳເປີນ, ເມືອງຫີນເຫີບ', C.pafoVte, 'Vientiane Province', { lak: 560000000 }),
    p(E, ['irrig'], 'Survey and design of Nam Kuan irrigation reservoir, 570 hectares, Thoulakhom District', 'ໂຄງການສຳຫຼວດ-ອອກແບບຊົນລະປະທານອ່າງເກັບນ້ຳນ້ຳກວນ ເນື້ອທີ່ຫົດ 570 ເຮັກຕາ, ເມືອງທຸລະຄົມ', C.pafoVte, 'Vientiane Province', { ha: 570, lak: 630000000 }),
    p(E, ['irrig'], 'Survey for the Nam Kata model irrigation scheme, Boualapha District', 'ໂຄງການສຳຫຼວດກໍ່ສ້າງຊົນລະປະທານຕົວແບບນ້ຳກະຕະ, ເມືອງບົວລະພາ', C.mafIrr, 'Khammouane', { lak: 421000000 }),
    p(E, ['irrig'], 'Survey for Nam Xang irrigation reservoir, Kenthao District', 'ໂຄງການສຳຫຼວດກໍ່ສ້າງຊົນລະປະທານອ່າງເກັບນ້ຳນ້ຳຊາງ, ເມືອງແກ່ນທ້າວ', C.mafIrr, 'Xayaboury', { lak: 530000000 }),
    p(E, ['irrig'], 'Survey and design of pump irrigation, Thinyoung Village', 'ສຳຫຼວດ-ອອກແບບໂຄງການຊົນລະປະທານ ຈັກສູບນ້ຳ ບ້ານຖິ່ນຍຸງ', C.pafoVte, 'Vientiane Province', { lak: 330000000, note: 'GoL investment' }),
    p(E, ['irrig'], 'Survey and design of 800 m embankment, Sanakham District', 'ສຳຫຼວດ-ອອກແບບໂຄງການຕາຝັ່ງເຈືອນ ເມືອງຊະນະຄາມ', C.dpwtVte, 'Vientiane Province', { len: 0.8, lak: 430000000 }),
    p(E, ['bld', 'hydro'], 'Survey for resettlement village and facilities for villagers affected by the Nam Phai hydropower dam', 'ສຳຫຼວດ ໂຄງການບ້ານຈັດສັນ ແລະ ສິ່ງອຳນວຍຄວາມສະດວກໃຫ້ແກ່ປະຊາຊົນທີ່ໄດ້ຮັບຜົນກະທົບຈາກການກໍ່ສ້າງໄຟຟ້ານ້ຳໄຜ່', C.edl, 'Xaysomboun', { lak: 840000000, note: 'Funded by EDL', scopeKey: 'resettle' })
  ];
})();
