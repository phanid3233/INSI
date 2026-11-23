/* INSI Group site behaviour: language, chrome, reveals, tabs, portfolio, form. */
(function () {
  'use strict';
  var CONFIG = { formEndpoint: '', email: 'leokham6565@gmail.com' }; // set formEndpoint (POST JSON) or email (mailto fallback)
  var page = document.body.dataset.page;
  var isHome = page === 'home';
  var base = isHome ? '' : 'index.html';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = 'en';
  try { lang = localStorage.getItem('insi-lang') || 'en'; } catch (e) {}

  /* ---------- Lao dictionary (English text is read from the HTML itself) ---------- */
  var LO = {
    skip: 'ຂ້າມໄປຫາເນື້ອຫາ', back: 'ກັບຄືນໜ້າຫຼັກ',
    'nav.home': 'ໜ້າຫຼັກ', 'nav.about': 'ກ່ຽວກັບກຸ່ມບໍລິສັດ', 'nav.companies': 'ບໍລິສັດໃນເຄືອ', 'nav.projects': 'ຜົນງານໂຄງການ', 'nav.cap': 'ຄວາມສາມາດ ແລະ ເຄື່ອງຈັກ', 'nav.contact': 'ຕິດຕໍ່',
    'nav.cta': 'ຂໍປຶກສາ / ຢື່ນປະມູນ', 'nav.brand': 'ກຸ່ມບໍລິສັດ ອິນຊີ',
    'hero.tag': 'ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ',
    'hero.h1': 'ສ້າງອະນາຄົດຂອງ ສປປ ລາວ ດ້ວຍວິສະວະກຳ, ການເກັບກູ້ລະເບີດ ແລະ ການກໍ່ສ້າງໂຄງລ່າງໃຫຍ່ຢ່າງຄົບວົງຈອນ.',
    'hero.sub': 'ສົ່ງມອບໂຄງລ່າງພື້ນຖານລະດັບຊາດແບບຄົບຊຸດ ດ້ວຍ 63+ ໂຄງການທີ່ສຳເລັດແລ້ວ ໃນຂະແໜງພະລັງງານ, ຄົມມະນາຄົມ, ຊົນລະປະທານ ແລະ ການເກັບກູ້ພື້ນທີ່ໃຫ້ປອດໄພ.',
    'hero.cta1': 'ເບິ່ງຜົນງານຂອງພວກເຮົາ', 'hero.cta2': 'ຮູ້ຈັກ 3 ບໍລິສັດໃນເຄືອ',
    m1: 'ໂຄງການລະດັບຊາດທີ່ສຳເລັດ', m2: 'USD ຂອງສັນຍາໂຄງລ່າງພື້ນຖານ ແລະ ເກັບກູ້ລະເບີດຂະໜາດໃຫຍ່ທີ່ສົ່ງມອບແລ້ວ', m3: 'ບໍລິສັດໃນເຄືອທີ່ຊຳນານສະເພາະດ້ານ', m4: 'ປະຫວັດປະຕິບັດຕາມມາດຕະຖານຄວາມປອດໄພ ແລະ ຄຸນນະພາບ',
    'about.eye': 'ກ່ຽວກັບກຸ່ມບໍລິສັດ', 'about.h': 'ກຸ່ມດຽວທີ່ສຳຫຼວດ, ເກັບກູ້ ແລະ ກໍ່ສ້າງ.',
    'about.p1': 'ກຸ່ມບໍລິສັດ ອິນຊີ ພັດທະນາ, ກໍ່ສ້າງ, ເກັບກູ້ລະເບີດ ແລະ ວິສະວະກຳ ຈຳກັດ ຕັ້ງຢູ່ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ. ກຸ່ມນີ້ລວມ 3 ບໍລິສັດໃນເຄືອເຂົ້າກັນ ເພື່ອໃຫ້ໂຄງການເດີນໄປຈາກການສຳຫຼວດຄັ້ງທຳອິດຈົນເຖິງການສົ່ງມອບ ໂດຍມີຄູ່ຮ່ວມງານທີ່ຮັບຜິດຊອບພຽງຜູ້ດຽວ.',
    'about.p2': 'ລູກຄ້າຂອງພວກເຮົາປະກອບມີ ລັດວິສາຫະກິດໄຟຟ້າລາວ, ກະຊວງຕ່າງໆຂອງລັດຖະບານລາວ ແລະ ຄູ່ຮ່ວມພັດທະນາສາກົນ ເຊັ່ນ KfW, AFD ແລະ ADB.',
    'life.eye': 'ວົງຈອນໂຄງການຄົບຊຸດ', 'life.h': 'ສາມໄລຍະ, ສັນຍາດຽວ, ຂັ້ນຕອນສົ່ງຕໍ່ໜ້ອຍລົງ.', 'life.p': 'ລູກຄ້າປະຢັດເວລາ ແລະ ຫຼຸດຄວາມສ່ຽງ ດ້ວຍການວ່າຈ້າງກຸ່ມດຽວສຳລັບການສຳຫຼວດ, ການເກັບກູ້ ແລະ ການກໍ່ສ້າງ.',
    's1.h': 'ສຳຫຼວດ ແລະ ອອກແບບວິສະວະກຳ', 's1.co': 'ບໍລິສັດ ວິສະວະກອນສາກົນພັດທະນາ ຈຳກັດຜູ້ດຽວ', 's1.a': 'ສຳຫຼວດພູມສັນຖານ ແລະ ຖ່າຍພາບທາງອາກາດດ້ວຍໂດຣນ', 's1.b': 'ເຮັດແຜນທີ່ມາດຕະຖານດ້ວຍ GNSS ແລະ RTK', 's1.c': 'ສຶກສາຄວາມເປັນໄປໄດ້ ແລະ ອອກແບບວິສະວະກຳ',
    's2.h': 'ສຳຫຼວດ UXO ແລະ ເກັບກູ້ພື້ນທີ່ໃຫ້ປອດໄພ', 's2.co': 'ບໍລິສັດ ອິນຊີ ເກັບກູ້ ແລະ ທຳລາຍລະເບີດ ຈຳກັດ', 's2.a': 'ສຳຫຼວດ UXO ແບບບໍ່ເຕັກນິກ ແລະ ແບບເຕັກນິກ', 's2.b': 'ເກັບກູ້ພື້ນທີ່ສູ້ຮົບ ແລະ ທຳລາຍລະເບີດ (EOD)', 's2.c': 'ແນວສາຍສົ່ງໄຟຟ້າ, ທາງລົດໄຟ ແລະ ພື້ນທີ່ພະລັງງານ',
    's3.h': 'ກໍ່ສ້າງໂຍທາທິການ ແລະ ໂຄງລ່າງພື້ນຖານຂະໜາດໃຫຍ່', 's3.co': 'ບໍລິສັດ ອິນຊີພັດທະນາ ກໍ່ສ້າງຈຳກັດ', 's3.a': 'ທາງປູຢາງ DBST ແລະ ທາງຫຼວງ', 's3.b': 'ເຂື່ອນຊົນລະປະທານ ແລະ ຕາຝັ່ງເຈື່ອນ', 's3.c': 'ບ້ານຈັດສັນ ແລະ ອາຄານສາທາລະນະ',
    tag: 'ຕັ້ງແຕ່ຫຼັກສຳຫຼວດທຳອິດ ຈົນເຖິງການສົ່ງມອບສຸດທ້າຍ ກຸ່ມດຽວທີ່ຮັບຜິດຊອບ ຈະກຳຈັດຄວາມສ່ຽງ ກະກຽມພື້ນທີ່ ແລະ ສ້າງສິ່ງທີ່ ສປປ ລາວ ຕ້ອງການຕໍ່ໄປ.',
    'co.eye': 'ບໍລິສັດໃນເຄືອຂອງພວກເຮົາ', 'co.h': 'ສາມບໍລິສັດຊຳນານການ, ມາດຕະຖານການສົ່ງມອບດຽວກັນ.',
    'chip.con': 'ກໍ່ສ້າງ', 'chip.uxo': 'ເກັບກູ້ລະເບີດ', 'chip.eng': 'ອອກແບບວິສະວະກຳ',
    'card.con': 'ກໍ່ສ້າງໂຍທາທິການຂະໜາດໃຫຍ່, ທາງຫຼວງປູຢາງ DBST, ເຂື່ອນຊົນລະປະທານດິນຖົມ, ຕາຝັ່ງເຈື່ອນ ແລະ ອາຄານສາທາລະນະ ແລະ ທຸລະກິດ.',
    'card.uxo': 'ຜູ້ຮັບເໝົາຫຼັກດ້ານສຳຫຼວດ, ເກັບກູ້ UXO ແລະ EOD ສຳລັບສາຍສົ່ງໄຟຟ້າ, ໂຮງໄຟຟ້າແສງຕາເວັນ ແລະ ພະລັງງານນ້ຳ, ທາງລົດໄຟ ແລະ ເຂດຈັດສັນ.',
    'card.eng': 'ສຳຫຼວດວິສະວະກຳຢ່າງແມ່ນຢຳ, ສຶກສາຄວາມເປັນໄປໄດ້, ອອກແບບເຂື່ອນໄຟຟ້າ, ລະບົບຊົນລະປະທານ ແລະ ທາງໃນຕົວເມືອງ ດ້ວຍເຕັກໂນໂລຊີໂດຣນ ແລະ GNSS RTK.',
    'card.btn': 'ເບິ່ງຂະແໜງ ແລະ ຜົນງານ',
    'fl.eye': 'ໂຄງການເດັ່ນ', 'fl.h': 'ຜົນງານສຳຄັນສຳລັບ EDL ແລະ ຄູ່ຮ່ວມງານດ້ານພະລັງງານລະດັບຊາດ.',
    'cl.eye': 'ລູກຄ້າ ແລະ ຄູ່ຮ່ວມງານ', 'cl.h': 'ໄດ້ຮັບຄວາມໄວ້ວາງໃຈຈາກເຈົ້າຂອງໂຄງການພາກລັດ ແລະ ຄູ່ຮ່ວມພັດທະນາສາກົນ.',
    'cl.edl': 'ລັດວິສາຫະກິດໄຟຟ້າລາວ (EDL)', 'cl.mpwt': 'ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ (MPWT)', 'cl.maf': 'ກະຊວງກະສິກຳ ແລະ ປ່າໄມ້ (MAF), ກົມຊົນລະປະທານ', 'cl.mnd': 'ກະຊວງປ້ອງກັນປະເທດ',
    'pr.eye': 'ໂປຣໄຟລ໌ຂະແໜງ', 'pr.h': 'ການບໍລິການ, ຂະໜາດງານ ແລະ ຄຸນວຸດທິຂອງແຕ່ລະບໍລິສັດ.',
    'cap.eye': 'ຄວາມສາມາດ ແລະ ເຄື່ອງຈັກ', 'cap.h': 'ເຄື່ອງຈັກ, ເຕັກໂນໂລຊີ ແລະ ມາດຕະຖານຄວາມປອດໄພ.',
    'cap1.h': 'ເຄື່ອງຈັກທາງ ແລະ ໂຍທາທິການໜັກ', 'cap1.a': 'ແມັກໂຮ', 'cap1.b': 'ລົດຢາງບົດດິນສັ່ນສະເທືອນ', 'cap1.c': 'ລົດເກຣດ', 'cap1.d': 'ລົດດຳພ໌ບັນທຸກໜັກ',
    'cap2.h': 'ເຕັກໂນໂລຊີສຳຫຼວດແມ່ນຢຳ', 'cap2.a': 'ໂດຣນສຳຫຼວດແຜນທີ່ທາງອາກາດ', 'cap2.b': 'ສະຖານີຖານ ແລະ ສະຖານີເຄື່ອນທີ່ GNSS RTK', 'cap2.c': 'ກ້ອງ Total Station',
    'cap3.h': 'ທີມກວດຫາ UXO ແລະ EOD', 'cap3.a': 'ເຄື່ອງກວດໂລຫະຫາວັດຖຸໃຕ້ດິນທີ່ໄດ້ຮັບການຮັບຮອງ', 'cap3.b': 'ອຸປະກອນປ້ອງກັນສຳລັບສະມາຊິກທຸກຄົນ', 'cap3.c': 'ພື້ນທີ່ເຮັດວຽກມີຮົ້ວກັ້ນ, ມີປ້າຍ ແລະ ມີບັນທຶກ',
    'std1.h': 'ສູນ NRA ລາວ', 'std1.p': 'ການປະຕິບັດງານ UXO ເປັນໄປຕາມລະບຽບຂອງອົງການຄຸ້ມຄອງແຫ່ງຊາດດ້ານ UXO/ບໍ່ລະເບີດ.', 'std2.h': 'IMAS', 'std2.p': 'ມາດຕະຖານສາກົນດ້ານປະຕິບັດງານລະເບີດ ເປັນແນວທາງໃນການສຳຫຼວດ, ເກັບກູ້ ແລະ ຄວບຄຸມຄຸນນະພາບ.', 'std3.h': 'ຄວາມປອດໄພ ແລະ ຄຸນນະພາບ', 'std3.p': 'ປະຫວັດປະຕິບັດຕາມມາດຕະຖານ 100% ໃນທຸກໂຄງການທີ່ກຸ່ມສຳເລັດແລ້ວ.',
    'faq.eye': 'ຄຳຖາມ', 'faq.h': 'ສິ່ງທີ່ລູກຄ້າມັກຖາມກ່ອນຢື່ນປະມູນ.',
    q1: 'ຮູບແບບ 3 ໃນ 1 ໝາຍຄວາມວ່າແນວໃດ?', a1: 'ກຸ່ມດຽວຄອບຄຸມການສຳຫຼວດ ແລະ ອອກແບບວິສະວະກຳ, ການເກັບກູ້ UXO ແລະ ການກໍ່ສ້າງໂຍທາ. ທ່ານຕິດຕໍ່ຄູ່ຮ່ວມງານທີ່ຮັບຜິດຊອບພຽງຜູ້ດຽວ ຕັ້ງແຕ່ການສຶກສາຄວາມເປັນໄປໄດ້ຈົນເຖິງການສົ່ງມອບ ຈຶ່ງບໍ່ມີຊ່ອງຫວ່າງລະຫວ່າງຜູ້ອອກແບບ, ທີມເກັບກູ້ ແລະ ຜູ້ກໍ່ສ້າງ.',
    q2: 'ຂ້ອຍວ່າຈ້າງພຽງບໍລິສັດດຽວໄດ້ບໍ?', a2: 'ໄດ້. ແຕ່ລະບໍລິສັດເປັນບໍລິສັດຜູ້ດຽວທີ່ມີສັນຍາ ແລະ ຜົນງານຂອງຕົນເອງ. ເລືອກ 1, 2 ຫຼື ທັງ 3 ຂະແໜງໃນແບບຟອມສອບຖາມ.',
    q3: 'ງານ UXO ຂອງທ່ານປະຕິບັດຕາມມາດຕະຖານໃດ?', a3: 'ການປະຕິບັດງານເປັນໄປຕາມຂໍ້ກຳນົດຂອງອົງການຄຸ້ມຄອງແຫ່ງຊາດດ້ານ UXO ຂອງລາວ ແລະ ມາດຕະຖານສາກົນດ້ານປະຕິບັດງານລະເບີດ (IMAS).',
    q4: 'ທ່ານເຄີຍເຮັດວຽກຢູ່ບ່ອນໃດແດ່?', a4: 'ບັນຊີຜົນງານຂອງພວກເຮົາຄອບຄຸມນະຄອນຫຼວງວຽງຈັນ ແລະ ແຂວງວຽງຈັນ, ໄຊສົມບູນ, ຊຽງຂວາງ, ສະຫວັນນະເຂດ, ສາລະວັນ, ຈຳປາສັກ, ເຊກອງ, ຫຼວງພະບາງ, ຄຳມ່ວນ ແລະ ໄຊຍະບູລີ. ເບິ່ງລາຍການທັງໝົດໄດ້ໃນໜ້າຜົນງານ.',
    q5: 'ລູກຄ້າຂອງທ່ານແມ່ນໃຜ?', a5: 'ລັດວິສາຫະກິດໄຟຟ້າລາວ, ກະຊວງ ແລະ ພະແນກປະຈຳແຂວງ, ໂຄງການທີ່ໄດ້ຮັບທຶນຈາກ KfW, AFD ແລະ ADB, ພ້ອມທັງຜູ້ພັດທະນາເອກະຊົນ ແລະ ນັກລົງທຶນດ້ານພະລັງງານ.',
    q6: 'ຂ້ອຍຢື່ນຄຳຮ້ອງປະມູນໄດ້ແນວໃດ?', a6: 'ໃຊ້ແບບຟອມສອບຖາມດ້ານລຸ່ມ. ບອກທີ່ຕັ້ງ, ຂອບເຂດງານ ແລະ ຂະແໜງທີ່ຕ້ອງການ ແລ້ວທີມງານຈະຕອບກັບຕາມຂໍ້ມູນຕິດຕໍ່ທີ່ທ່ານໃຫ້.',
    'ct.eye': 'ຕິດຕໍ່ ແລະ ສອບຖາມການປະມູນ', 'ct.h': 'ເລີ່ມຕົ້ນດ້ວຍການສອບຖາມ, ບໍ່ແມ່ນສັນຍາ.', 'ct.p': 'ເລືອກໜຶ່ງຂະແໜງ ຫຼື ທັງຊຸດ. ບອກພວກເຮົາກ່ຽວກັບພື້ນທີ່ ແລ້ວເຮົາຈະແຈ້ງຂັ້ນຕອນຕໍ່ໄປ.',
    'ct.hq': 'ສຳນັກງານໃຫຍ່', 'ct.addr': 'ຖະໜົນ 450 ປີ, ບ້ານນາແຄ, ເມືອງໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ', 'ct.tel': 'ໂທລະສັບ',
    'f.h': 'ສົ່ງຄຳຖາມໂຄງການ ຫຼື ການປະມູນ', 'f.name': 'ຊື່ ແລະ ນາມສະກຸນ', 'f.org': 'ອົງກອນ', 'f.email': 'ອີເມວ', 'f.tel': 'ໂທລະສັບ (ບໍ່ບັງຄັບ)', 'f.div': 'ຂະແໜງທີ່ຕ້ອງການ (ເລືອກໄດ້ຫຼາຍອັນ)',
    'f.d1': 'ອອກແບບວິສະວະກຳ', 'f.d2': 'ເກັບກູ້ລະເບີດ UXO', 'f.d3': 'ກໍ່ສ້າງໂຍທາ', 'f.d4': 'ຊຸດຄົບວົງຈອນ 3 ໃນ 1', 'f.msg': 'ທີ່ຕັ້ງໂຄງການ ແລະ ຂອບເຂດງານ', 'f.send': 'ສົ່ງຄຳຖາມການປະມູນ',
    'f.e.name': 'ກະລຸນາໃສ່ຊື່ຂອງທ່ານ.', 'f.e.org': 'ກະລຸນາໃສ່ຊື່ອົງກອນ.', 'f.e.email': 'ກະລຸນາໃສ່ອີເມວທີ່ຖືກຕ້ອງ, ຕົວຢ່າງ name@company.com.', 'f.e.div': 'ເລືອກຢ່າງນ້ອຍໜຶ່ງຂະແໜງ.', 'f.e.msg': 'ກະລຸນາບອກທີ່ຕັ້ງ ແລະ ຂອບເຂດງານຢ່າງຫຍໍ້.',
    'f.ok': 'ກະກຽມຄຳຖາມຂອງທ່ານແລ້ວ.', 'f.nosend': 'ແບບຟອມຍັງບໍ່ໄດ້ເຊື່ອມຕໍ່ກັບບ່ອນຮັບຂໍ້ມູນ. ຂໍ້ມູນຂອງທ່ານບໍ່ໄດ້ຖືກສົ່ງ.', 'f.fail': 'ສົ່ງບໍ່ສຳເລັດ. ກວດການເຊື່ອມຕໍ່ອິນເຕີເນັດ ແລ້ວລອງໃໝ່.', 'f.sent': 'ສົ່ງຄຳຖາມແລ້ວ. ທີມງານຈະຕອບກັບທາງອີເມວຂອງທ່ານ.',
    'ft.about': 'ກຸ່ມບໍລິສັດ ອິນຊີ ພັດທະນາ, ກໍ່ສ້າງ, ເກັບກູ້ລະເບີດ ແລະ ວິສະວະກຳ ຈຳກັດ. ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ.', 'ft.nav': 'ນຳທາງ', 'ft.cos': 'ບໍລິສັດໃນເຄືອ', 'ft.legal': 'ກົດໝາຍ', 'ft.priv': 'ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ', 'ft.terms': 'ເງື່ອນໄຂການນຳໃຊ້', 'ft.rights': '© 2026 INSI Group. ສະຫງວນລິຂະສິດ.',
    'pj.eye': 'ຜົນງານໂຄງການ', 'pj.h': '63 ໂຄງການທີ່ສຳເລັດ, ຢູ່ໃນບັນຊີດຽວທີ່ຄົ້ນຫາໄດ້.', 'pj.p': 'ທຸກສັນຍາດ້ານລຸ່ມມາຈາກບັນທຶກປະສົບການຂອງກຸ່ມ. ກັ່ນຕອງຕາມບໍລິສັດ ຫຼື ຂະແໜງ ຫຼື ຄົ້ນຫາຕາມຊື່, ລູກຄ້າ ແລະ ແຂວງ.', 'pj.search': 'ຄົ້ນຫາໂຄງການ, ລູກຄ້າ ຫຼື ແຂວງ',
    'th.name': 'ຊື່ໂຄງການ', 'th.sub': 'ບໍລິສັດ', 'th.client': 'ລູກຄ້າ / ແຫຼ່ງທຶນ', 'th.loc': 'ສະຖານທີ່', 'th.scope': 'ຂອບເຂດເຕັກນິກ / ມູນຄ່າສັນຍາ', 'th.status': 'ສະຖານະ',
    'pj.none': 'ບໍ່ພົບໂຄງການທີ່ຕົງກັບຕົວກັ່ນຕອງ.', 'pj.none2': 'ລຶບຄຳຄົ້ນຫາ ຫຼື ເລືອກຂະແໜງອື່ນ.', 'pj.reset': 'ລ້າງຕົວກັ່ນຕອງ',
    'all': 'ທັງໝົດ', 'sec.hydro': 'ພະລັງງານນ້ຳ ແລະ ໄຟຟ້າ', 'sec.roads': 'ທາງ ແລະ ຂົວ', 'sec.irrig': 'ຊົນລະປະທານ ແລະ ນ້ຳ', 'sec.uxo': 'ເກັບກູ້ລະເບີດ ແລະ ພື້ນທີ່', 'sec.bld': 'ອາຄານ ແລະ ບ້ານຈັດສັນ', 'sec.all': 'ທຸກຂະແໜງ',
    'sub.con': 'ກໍ່ສ້າງ', 'sub.uxo': 'ເກັບກູ້ລະເບີດ', 'sub.eng': 'ອອກແບບວິສະວະກຳ',
    done: '100% ສຳເລັດ', showing: 'ສະແດງ', of: 'ຈາກ', projects: 'ໂຄງການ',
    len: 'ຄວາມຍາວ', wid: 'ກວ້າງ', km: 'ກມ', m: 'ມ', dam: 'ເຂື່ອນຫຼັກ', crest: 'ຍາວ', height: 'ສູງ', ha: 'ເຮັກຕາ', canal: 'ຄອງເໝືອງ', bridges: 'ຂົວ', resettle: 'ບ້ານຈັດສັນ, ຫ້ອງການ, ທາງ, ຮົ້ວ, ນ້ຳປະປາ, ຫໍປະຊຸມ, ຫໍພັກ ແລະ ສະໜາມກິລາ', role1: 'ຜູ້ຮັບເໝົາຫຼັກ', ndisc: 'ບໍ່ໄດ້ລະບຸມູນຄ່າ', kip: 'ກີບ',
    prov: { 'Vientiane Capital': 'ນະຄອນຫຼວງວຽງຈັນ', 'Vientiane Province': 'ແຂວງວຽງຈັນ', 'Xaysomboun': 'ໄຊສົມບູນ', 'Xiengkhouang': 'ຊຽງຂວາງ', 'Savannakhet': 'ສະຫວັນນະເຂດ', 'Saravan': 'ສາລະວັນ', 'Champasak': 'ຈຳປາສັກ', 'Champasak and Saravan': 'ຈຳປາສັກ ແລະ ສາລະວັນ', 'Sekong': 'ເຊກອງ', 'Luang Prabang': 'ຫຼວງພະບາງ', 'Khammouane': 'ຄຳມ່ວນ', 'Xayaboury': 'ໄຊຍະບູລີ', 'Lao PDR': 'ສປປ ລາວ' }
  };
  LO['fl.t1'] = 'ທາງເຂົ້າເຂື່ອນນ້ຳງື່ມ 3 (DBST)'; LO['fl.t2'] = 'ທາງເຂົ້າເຂື່ອນຫ້ວຍລຳພັນໃຫຍ່'; LO['fl.t3'] = 'ສະຖານີ 500kV ແລະ ໂຮງໄຟຟ້າແສງຕາເວັນ 1000MW'; LO['fl.t4'] = 'ແນວທາງໄຟຟ້າທາງລົດໄຟລາວ ຈີນ'; LO['fl.t5'] = 'ເຂື່ອນເຊເສັດ ແລະ ຫ້ວຍກະເພີ';

  var en = {}; // English captured from DOM for restoration

  function t(key) { return lang === 'lo' && LO[key] ? LO[key] : (en[key] || LO[key] || key); }
  function setText(el) {
    var k = el.getAttribute('data-i18n');
    if (!(k in en)) en[k] = el.innerHTML;
    el.innerHTML = lang === 'lo' && LO[k] ? LO[k] : en[k];
  }
  var EN_DYN = {
    done: '100% completed', showing: 'Showing', of: 'of', projects: 'projects', len: 'Length', wid: 'Width', km: 'km', m: 'm', dam: 'Main dam', crest: 'L', height: 'H', ha: 'ha', canal: 'Earth canals', bridges: 'bridges', ndisc: 'Value not stated', kip: 'LAK', role1: 'Main contractor',
    all: 'All', 'sec.hydro': 'Hydropower and energy', 'sec.roads': 'Roads and bridges', 'sec.irrig': 'Irrigation and water', 'sec.uxo': 'UXO and land clearance', 'sec.bld': 'Buildings and resettlement', 'sec.all': 'All sectors',
    'sub.con': 'Construction', 'sub.uxo': 'UXO clearance', 'sub.eng': 'Engineering design',
    resettle: 'Resettlement village: offices, roads, fence, water supply, meeting hall, dormitories and stadium',
    'nav.home': 'Home', 'nav.about': 'About group', 'nav.companies': 'Our companies', 'nav.projects': 'Projects portfolio', 'nav.cap': 'Capabilities and fleet', 'nav.contact': 'Contact', 'nav.cta': 'Request tender / consultation', 'nav.brand': 'INSI Group',
    'f.e.name': 'Enter your name.', 'f.e.org': 'Enter your organization.', 'f.e.email': 'Enter a valid email, for example name@company.com.', 'f.e.div': 'Select at least one division.', 'f.e.msg': 'Describe the location and scope in a sentence or two.',
    'f.ok': 'Your inquiry is ready.', 'f.nosend': 'The form is not connected to a receiving address yet. Nothing was sent.', 'f.fail': 'Sending failed. Check your connection and try again.', 'f.sent': 'Inquiry sent. Our team will reply to your email.',
    'ft.about': 'INSI Group: Development, Construction, UXO &amp; Engineering Co., Ltd. Vientiane Capital, Lao PDR.', 'ft.nav': 'Navigate', 'ft.cos': 'Our companies', 'ft.legal': 'Legal', 'ft.priv': 'Privacy policy', 'ft.terms': 'Terms of use', 'ft.rights': '© 2026 INSI Group. All rights reserved.',
    'fl.t1': 'Nam Ngum 3 access road', 'fl.t2': 'Huay Lamphan Gnai access road', 'fl.t3': '500kV substation and 1000MW solar', 'fl.t4': 'Lao China Railway power corridor', 'fl.t5': 'Xeset and Huay Kapher dams',
    'pr.con': 'Construction', 'pr.uxo': 'UXO clearance', 'pr.eng': 'Engineering design'
  };
  for (var ek in EN_DYN) if (!(ek in en)) en[ek] = EN_DYN[ek];

  function applyLang(l) {
    lang = l;
    try { localStorage.setItem('insi-lang', l); } catch (e) {}
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(setText);
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph'); if (!('ph:' + k in en)) en['ph:' + k] = el.placeholder;
      el.placeholder = l === 'lo' && LO[k] ? LO[k] : en['ph:' + k];
    });
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === l ? 'true' : 'false'); });
    renderDynamic();
  }

  /* ---------- Chrome ---------- */
  var navItems = [
    ['nav.home', base + (isHome ? '#top' : ''), 'home'],
    ['nav.about', base + '#about', ''],
    ['nav.projects', 'projects.html', 'projects'],
    ['nav.cap', base + '#capabilities', ''],
    ['nav.contact', base + '#contact', '']
  ];
  var cos = [
    ['con', 'insi-construction', 'Insi Development Construction Sole Co., Ltd'],
    ['uxo', 'insi-uxo', 'Insi UXO and Clearance Sole Co., Ltd'],
    ['eng', 'insi-engineering', 'Engineer International Development Sole Co., Ltd']
  ];
  function chromeTop() {
    var links = '';
    navItems.forEach(function (n, i) {
      links += '<a class="body-5" href="' + (n[1] || '#') + '"' + (n[2] === page ? ' aria-current="page"' : '') + ' data-i18n="' + n[0] + '">' + EN_DYN[n[0]] + '</a>';
      if (i === 1) {
        links += '<div class="dd" id="dd"><button class="body-5" aria-expanded="false" aria-haspopup="true" aria-controls="dd-menu"><span data-i18n="nav.companies">Our companies</span><i class="ph-bold ph-caret-down ph-caret" aria-hidden="true"></i></button><div class="dd-menu" id="dd-menu">' +
          cos.map(function (c) { return '<a href="' + base + '#profile-' + c[0] + '" data-open="' + c[0] + '"><img src="assets/logos/' + c[1] + '.jpg" alt=""><span class="body-5">' + c[2] + '</span></a>'; }).join('') + '</div></div>';
      }
    });
    var panel = '', n = 0;
    navItems.forEach(function (it, i) {
      panel += '<a class="pl heading-6" style="--i:' + (n++) + '" href="' + (it[1] || '#') + '" data-i18n="' + it[0] + '">' + EN_DYN[it[0]] + '</a>';
      if (i === 1) cos.forEach(function (c) { panel += '<a class="pl sub body-3" style="--i:' + (n++) + '" href="' + base + '#profile-' + c[0] + '" data-open="' + c[0] + '">' + c[2] + '</a>'; });
    });
    panel += '<a class="btn btn-gold lg button-md pl" style="--i:' + n + '" href="' + base + '#contact" data-i18n="nav.cta">' + EN_DYN['nav.cta'] + '</a>';
    document.getElementById('chrome-top').innerHTML =
      '<header class="nav" id="top"><a class="brand" href="' + (isHome ? '#top' : 'index.html') + '" aria-label="INSI Group home"><img src="assets/logos/insi-group.jpg" alt="INSI Group emblem" width="54" height="40"><span class="caption-3" data-i18n="nav.brand">INSI Group</span></a>' +
      '<nav class="links" aria-label="Primary">' + links + '</nav>' +
      '<div class="nav-right"><div class="lang caption-3" role="group" aria-label="Language"><button data-l="en" aria-pressed="true">EN</button><button data-l="lo" aria-pressed="false">ລາວ</button></div>' +
      '<a class="btn btn-gold button-sm nav-cta" href="' + base + '#contact" data-i18n="nav.cta">' + EN_DYN['nav.cta'] + '</a>' +
      '<button class="burger" id="burger" aria-label="Menu" aria-expanded="false" aria-controls="panel"><i></i><i></i><i></i></button></div></header>' +
      '<div class="panel" id="panel" aria-hidden="true">' + panel + '</div>';
  }
  function chromeBottom() {
    document.getElementById('chrome-bottom').innerHTML =
      '<footer class="foot"><div class="wrap"><div class="cols"><div><div class="fl"><img src="assets/logos/insi-group.jpg" alt="INSI Group emblem" width="120" height="90" loading="lazy"></div><p class="body-6" style="margin-top:16px;max-width:320px" data-i18n="ft.about">' + EN_DYN['ft.about'] + '</p></div>' +
      '<div><h4 class="title-4" data-i18n="ft.nav">Navigate</h4><ul class="body-5">' + navItems.map(function (n) { return '<li><a href="' + (n[1] || '#') + '" data-i18n="' + n[0] + '">' + EN_DYN[n[0]] + '</a></li>'; }).join('') + '</ul></div>' +
      '<div><h4 class="title-4" data-i18n="ft.cos">Our companies</h4><ul class="body-5">' + cos.map(function (c) { return '<li><a href="' + base + '#profile-' + c[0] + '" data-open="' + c[0] + '">' + c[2] + '</a></li>'; }).join('') + '</ul></div>' +
      '<div><h4 class="title-4" data-i18n="ft.legal">Legal</h4><ul class="body-5"><li><a href="legal.html#privacy" data-i18n="ft.priv">Privacy policy</a></li><li><a href="legal.html#terms" data-i18n="ft.terms">Terms of use</a></li></ul></div></div>' +
      '<div class="legal caption-5"><span data-i18n="ft.rights">' + EN_DYN['ft.rights'] + '</span><span>Vientiane Capital, Lao PDR</span></div></div></footer>';
  }
  chromeTop(); chromeBottom();

  /* ---------- Nav behaviour ---------- */
  var dd = document.getElementById('dd');
  if (dd) {
    var ddb = dd.querySelector('button');
    var setDd = function (o) { dd.classList.toggle('open', o); ddb.setAttribute('aria-expanded', o ? 'true' : 'false'); };
    ddb.addEventListener('click', function () { setDd(!dd.classList.contains('open')); });
    document.addEventListener('click', function (e) { if (!dd.contains(e.target)) setDd(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDd(false); });
  }
  var burger = document.getElementById('burger'), panelEl = document.getElementById('panel');
  function setPanel(o) { panelEl.classList.toggle('open', o); burger.setAttribute('aria-expanded', o ? 'true' : 'false'); panelEl.setAttribute('aria-hidden', o ? 'false' : 'true'); document.body.style.overflow = o ? 'hidden' : ''; }
  burger.addEventListener('click', function () { setPanel(!panelEl.classList.contains('open')); });
  panelEl.addEventListener('click', function (e) { if (e.target.closest('a')) setPanel(false); });
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.dataset.l); }); });

  /* ---------- Reveals and counters (IntersectionObserver only) ---------- */
  function onceVisible(els, cb, opts) {
    if (!('IntersectionObserver' in window)) { els.forEach(cb); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { cb(e.target); io.unobserve(e.target); } }); }, opts || { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }
  function initReveal() { onceVisible(document.querySelectorAll('.reveal'), function (el) { el.classList.add('in'); }); }
  function initCounters() {
    onceVisible(document.querySelectorAll('[data-count]'), function (el) {
      var end = +el.dataset.count, pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
      if (reduce) { el.textContent = pre + end + suf; return; }
      var t0 = null, dur = 1400;
      (function step(ts) { t0 = t0 || ts; var p = Math.min((ts - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4); el.textContent = pre + Math.round(end * e) + suf; if (p < 1) requestAnimationFrame(step); })(performance.now());
    }, { threshold: 0.6 });
  }

  /* ---------- Tagline word reveal ---------- */
  var tagIO;
  function initTagline() {
    var el = document.getElementById('tagline'); if (!el) return;
    if (tagIO) tagIO.disconnect();
    var text = el.textContent.trim().split(/\s+/);
    el.innerHTML = text.map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' ');
    var ws = el.querySelectorAll('.w');
    if (reduce || !('IntersectionObserver' in window)) { ws.forEach(function (w) { w.classList.add('on'); w.style.transition = 'none'; }); return; }
    tagIO = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); tagIO.unobserve(e.target); } }); }, { rootMargin: '0px 0px -40% 0px', threshold: 0 });
    ws.forEach(function (w) { tagIO.observe(w); });
  }

  /* ---------- Tabs (generic) ---------- */
  function tabs(listId, panelsId, onSelect) {
    var list = document.getElementById(listId), panels = document.getElementById(panelsId);
    if (!list) return { select: function () {} };
    function select(i, focus) {
      list.querySelectorAll('[role=tab]').forEach(function (b, j) { b.setAttribute('aria-selected', i === j ? 'true' : 'false'); b.tabIndex = i === j ? 0 : -1; if (i === j && focus) b.focus(); });
      panels.querySelectorAll('[role=tabpanel]').forEach(function (p, j) { p.hidden = i !== j; });
      if (onSelect) onSelect(i);
    }
    list.addEventListener('click', function (e) { var b = e.target.closest('[role=tab]'); if (b) select(+b.dataset.i); });
    list.addEventListener('keydown', function (e) {
      var n = list.querySelectorAll('[role=tab]').length, cur = +document.activeElement.dataset.i;
      if (e.key === 'ArrowRight') { e.preventDefault(); select((cur + 1) % n, true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); select((cur + n - 1) % n, true); }
    });
    return { select: select };
  }

  /* ---------- Home: flagship + profiles ---------- */
  var FLAG = [
    { k: 'fl.t1', img: 'con-7', sub: 'con', f: [['30 km', 'len'], ['8 m', 'wid'], ['$11.02M', 'USD'], ['2019–2022', 'yrs']],
      title: ['Nam Ngum 3 Hydropower DBST access road', 'ໂຄງການກໍ່ສ້າງທາງປູຢາງ 2 ຊັ້ນ ທາງເຂົ້າເຂື່ອນນ້ຳງື່ມ 3, ເມືອງລ້ອງແຈ້ງ, ແຂວງໄຊສົມບູນ'],
      cl: ['Client: Électricité du Laos (EDL)', 'ລູກຄ້າ: ລັດວິສາຫະກິດໄຟຟ້າລາວ (EDL)'],
      d: ['A 30 km, 8 m wide double bituminous surface treated access road to the Nam Ngum 3 dam in Long Cheng District, Xaysomboun. Built 2019 to 2022 and completed at 100%.', 'ທາງເຂົ້າເຂື່ອນນ້ຳງື່ມ 3 ຍາວ 30 ກມ ກວ້າງ 8 ມ ປູຢາງ 2 ຊັ້ນ ຢູ່ເມືອງລ້ອງແຈ້ງ ແຂວງໄຊສົມບູນ. ກໍ່ສ້າງແຕ່ປີ 2019 ຫາ 2022 ແລະ ສຳເລັດ 100%.'] },
    { k: 'fl.t2', img: 'con-6', sub: 'con', f: [['14 km', 'len'], ['8 m', 'wid'], ['$6.32M', 'USD'], ['2020–2023', 'yrs']],
      title: ['Huay Lamphan Gnai Hydropower DBST access road', 'ໂຄງການກໍ່ສ້າງທາງປູຢາງ 2 ຊັ້ນ ເຂົ້າເຂື່ອນໄຟຟ້າຫ້ວຍລຳພັນໃຫຍ່, ເມືອງລະມາມ, ແຂວງເຊກອງ'],
      cl: ['Client: Électricité du Laos (EDL)', 'ລູກຄ້າ: ລັດວິສາຫະກິດໄຟຟ້າລາວ (EDL)'],
      d: ['A 14 km, 8 m wide DBST access road in Lamam District, Sekong Province. Construction started in 2020 and the road was completed at 100% in 2023.', 'ທາງເຂົ້າ DBST ຍາວ 14 ກມ ກວ້າງ 8 ມ ຢູ່ເມືອງລະມາມ ແຂວງເຊກອງ. ເລີ່ມກໍ່ສ້າງປີ 2020 ແລະ ສຳເລັດ 100% ປີ 2023.'] },
    { k: 'fl.t3', img: 'uxo-1', sub: 'uxo', f: [['500 kV', 'sub'], ['1000 MW', 'solar'], ['2023–2024', 'yrs'], ['Main contractor', 'role']],
      title: ['UXO survey and clearance for the 500 kV substation and 1000 MW solar power project', 'ສຳຫຼວດ ແລະ ເກັບກູ້ UXO ສຳລັບສະຖານີຍ່ອຍ 500 kV ແລະ ໂຄງການໄຟຟ້າແສງຕາເວັນ 1000 MW'],
      cl: ['Client: CGN Energy Technology (Laos) Co., Ltd', 'ລູກຄ້າ: CGN Energy Technology (Laos) Co., Ltd'],
      d: ['UXO survey and clearance of the substation site and access road for a 1000 MW solar energy project in Vientiane Capital, delivered as main contractor.', 'ສຳຫຼວດ ແລະ ເກັບກູ້ UXO ພື້ນທີ່ສະຖານີຍ່ອຍ ແລະ ທາງເຂົ້າ ສຳລັບໂຄງການພະລັງງານແສງຕາເວັນ 1000 MW ໃນນະຄອນຫຼວງວຽງຈັນ ໃນຖານະຜູ້ຮັບເໝົາຫຼັກ.'] },
    { k: 'fl.t4', img: 'uxo-4', sub: 'uxo', f: [['$688,000', 'EDL rail'], ['220 kV', 'line'], ['2019', 'rail'], ['2021–2022', 'line']],
      title: ['Lao China Railway power corridor and 220 kV transmission UXO clearance', 'ເກັບກູ້ UXO ແນວທາງໄຟຟ້າທາງລົດໄຟລາວ ຈີນ ແລະ ສາຍສົ່ງ 220 kV'],
      cl: ['Clients: EDL and Phongsubthavy Group', 'ລູກຄ້າ: EDL ແລະ Phongsubthavy Group'],
      d: ['Two corridor contracts: the Lao China Railway transport clearance for EDL in 2019, and the 220 kV line from Namsan 3B to the Laos Vietnam border for Phongsubthavy Group in 2021 to 2022.', 'ສອງສັນຍາແນວທາງ: ການເກັບກູ້ແນວທາງລົດໄຟລາວ ຈີນ ໃຫ້ EDL ປີ 2019 ແລະ ສາຍສົ່ງ 220 kV ຈາກນ້ຳຊານ 3B ຫາຊາຍແດນລາວ ຫວຽດນາມ ໃຫ້ Phongsubthavy Group ປີ 2021 ຫາ 2022.'] },
    { k: 'fl.t5', img: 'eng-2', sub: 'eng', f: [['3', 'dams'], ['2.08B LAK', 'total'], ['Saravan, Champasak', 'prov'], ['EDL', 'funder']],
      title: ['Xeset Huay Tapoung and Huay Kapher 1 and 2 hydropower survey and design', 'ສຳຫຼວດ ແລະ ອອກແບບເຂື່ອນໄຟຟ້າເຊເສັດ ຫ້ວຍຕະປຸງ ແລະ ຫ້ວຍກະເພີ 1 ແລະ 2'],
      cl: ['Client: Électricité du Laos (EDL)', 'ລູກຄ້າ: ລັດວິສາຫະກິດໄຟຟ້າລາວ (EDL)'],
      d: ['Survey and design of three hydropower dams for EDL: Xeset Huay Tapoung in Wapi, Huay Kapher 1 in Laongam and Huay Kapher 2 in Champasak.', 'ສຳຫຼວດ ແລະ ອອກແບບເຂື່ອນໄຟຟ້າ 3 ແຫ່ງ ໃຫ້ EDL: ເຊເສັດ ຫ້ວຍຕະປຸງ ເມືອງວາປີ, ຫ້ວຍກະເພີ 1 ເມືອງເລົ່າງາມ ແລະ ຫ້ວຍກະເພີ 2 ແຂວງຈຳປາສັກ.'] }
  ];
  var FACT_LO = { len: 'ຄວາມຍາວ', wid: 'ກວ້າງ', USD: 'ມູນຄ່າສັນຍາ', yrs: 'ໄລຍະເວລາ', sub: 'ສະຖານີຍ່ອຍ', solar: 'ໄຟຟ້າແສງຕາເວັນ', role: 'ບົດບາດ', 'EDL rail': 'ສັນຍາທາງລົດໄຟ EDL', line: 'ສາຍສົ່ງ', rail: 'ປີ ທາງລົດໄຟ', dams: 'ເຂື່ອນອອກແບບ', total: 'ມູນຄ່າລວມ', prov: 'ແຂວງ', funder: 'ແຫຼ່ງທຶນ' };
  var FACT_EN = { len: 'Length', wid: 'Width', USD: 'Contract value', yrs: 'Period', sub: 'Substation', solar: 'Solar capacity', role: 'Role', 'EDL rail': 'EDL rail contract', line: 'Transmission line', rail: 'Rail contract year', dams: 'Dams designed', total: 'Total contract value', prov: 'Provinces', funder: 'Funder' };
  var PROF = {
    con: { logo: 'insi-construction', chip: 'amber', name: 'Insi Development Construction Sole Co., Ltd', lo: 'ບໍລິສັດ ອິນຊີພັດທະນາ ກໍ່ສ້າງຈຳກັດ', photos: ['con-6', 'con-1'],
      svc: [['DBST paved roads and highways', 'ທາງປູຢາງ DBST ແລະ ທາງຫຼວງ'], ['Earthfill irrigation dams and weirs', 'ເຂື່ອນຊົນລະປະທານດິນຖົມ ແລະ ຝາຍນ້ຳລົ້ນ'], ['Riverbank embankment protection', 'ຕາຝັ່ງປ້ອງກັນຕະຝັ່ງແມ່ນ້ຳ'], ['Hydropower resettlement townships', 'ບ້ານຈັດສັນຈາກໂຄງການພະລັງງານນ້ຳ'], ['Industrial and institutional buildings: factories, hospitals, markets, dormitories', 'ອາຄານອຸດສາຫະກຳ ແລະ ສະຖາບັນ: ໂຮງງານ, ໂຮງໝໍ, ຕະຫຼາດ, ຫໍພັກ']],
      scale: ['Built over 69 km of 8 m wide DBST strategic and hydropower access roads and 6 major irrigation dams, up to 290 m crest length and 24 m height. 25 contracts in total.', 'ກໍ່ສ້າງທາງປູຢາງ DBST ກວ້າງ 8 ມ ຍຸດທະສາດ ແລະ ເຂົ້າເຂື່ອນໄຟຟ້າ ຍາວກວ່າ 69 ກມ ແລະ ເຂື່ອນຊົນລະປະທານໃຫຍ່ 6 ແຫ່ງ ຍາວສັນເຂື່ອນເຖິງ 290 ມ ສູງ 24 ມ. ລວມ 25 ສັນຍາ.'] },
    uxo: { logo: 'insi-uxo', chip: 'uxo', name: 'Insi UXO and Clearance Sole Co., Ltd', lo: 'ບໍລິສັດ ອິນຊີ ເກັບກູ້ ແລະ ທຳລາຍລະເບີດ ຈຳກັດ', photos: ['uxo-2', 'uxo-3'],
      svc: [['Non technical and technical UXO survey', 'ສຳຫຼວດ UXO ແບບບໍ່ເຕັກນິກ ແລະ ແບບເຕັກນິກ'], ['Subsurface battle area clearance (BAC)', 'ເກັບກູ້ພື້ນທີ່ສູ້ຮົບໃຕ້ດິນ (BAC)'], ['Explosive ordnance disposal (EOD)', 'ທຳລາຍລະເບີດ (EOD)'], ['Corridor clearance for 115 kV, 220 kV and 500 kV lines, railways and renewable energy sites', 'ເກັບກູ້ແນວທາງສາຍສົ່ງ 115 kV, 220 kV, 500 kV, ທາງລົດໄຟ ແລະ ພື້ນທີ່ພະລັງງານທົດແທນ']],
      scale: ['21 major contracts across Lao PDR, including Savannakhet, Xiengkhouang, Saravan, Champasak, Luang Prabang, Xaysomboun and Vientiane. 750+ hectares of large sites cleared, plus road and power corridors.', '21 ສັນຍາຫຼັກທົ່ວ ສປປ ລາວ ລວມທັງສະຫວັນນະເຂດ, ຊຽງຂວາງ, ສາລະວັນ, ຈຳປາສັກ, ຫຼວງພະບາງ, ໄຊສົມບູນ ແລະ ວຽງຈັນ. ເກັບກູ້ພື້ນທີ່ໃຫຍ່ກວ່າ 750 ເຮັກຕາ ພ້ອມແນວທາງ ແລະ ແນວສາຍໄຟຟ້າ.'] },
    eng: { logo: 'insi-engineering', chip: 'sky', name: 'Engineer International Development Sole Co., Ltd', lo: 'ບໍລິສັດ ວິສະວະກອນສາກົນພັດທະນາ ຈຳກັດຜູ້ດຽວ', photos: ['eng-2', 'eng-1'],
      svc: [['Topographic and drone photogrammetry survey', 'ສຳຫຼວດພູມສັນຖານ ແລະ ຖ່າຍພາບທາງອາກາດດ້ວຍໂດຣນ'], ['GNSS and RTK geodetic mapping', 'ເຮັດແຜນທີ່ມາດຕະຖານດ້ວຍ GNSS ແລະ RTK'], ['Hydropower dam and water supply engineering design', 'ອອກແບບວິສະວະກຳເຂື່ອນໄຟຟ້າ ແລະ ລະບົບນ້ຳປະປາ'], ['Irrigation reservoir and canal engineering', 'ວິສະວະກຳອ່າງເກັບນ້ຳ ແລະ ຄອງຊົນລະປະທານ'], ['Urban road and resettlement master planning', 'ວາງແຜນແມ່ບົດທາງໃນຕົວເມືອງ ແລະ ບ້ານຈັດສັນ']],
      scale: ['17 government and EDL engineering design contracts across Vientiane, Xaysomboun, Xiengkhouang, Saravan, Champasak, Khammouane and Xayaboury.', '17 ສັນຍາອອກແບບວິສະວະກຳຂອງລັດ ແລະ EDL ໃນແຂວງວຽງຈັນ, ໄຊສົມບູນ, ຊຽງຂວາງ, ສາລະວັນ, ຈຳປາສັກ, ຄຳມ່ວນ ແລະ ໄຊຍະບູລີ.'] }
  };

  var DIR = { con: 'construction', uxo: 'uxo', eng: 'eng' }; /* 'con' is a reserved Windows folder name */
  var GAL = { con: 15, uxo: 18, eng: 9 }, CERT = { con: 5, uxo: 9, eng: 2 };
  function mediaBlock(k) {
    var g = '', c = '', i;
    for (i = 1; i <= GAL[k]; i++) g += '<button class="thumb" data-lb="gallery:' + k + ':' + i + '" aria-label="' + (lang === 'lo' ? 'ເປີດຮູບ ' : 'Open photo ') + i + '"><img src="assets/gallery/' + DIR[k] + '/' + i + 't.jpg" alt="' + (lang === 'lo' ? 'ຮູບໜ້າງານ' : 'Project site photograph') + ' ' + i + '" loading="lazy"></button>';
    for (i = 1; i <= CERT[k]; i++) c += '<button class="thumb cert" data-lb="certs:' + k + ':' + i + '" aria-label="' + (lang === 'lo' ? 'ເປີດໃບຢັ້ງຢືນ ' : 'Open certificate ') + i + '"><img src="assets/certs/' + DIR[k] + '/' + i + '.jpg" alt="' + (lang === 'lo' ? 'ໃບຢັ້ງຢືນຜົນງານ' : 'Certificate of performance') + ' ' + i + '" loading="lazy"></button>';
    return '<div class="media"><h4 class="title-2">' + (lang === 'lo' ? 'ຮູບພາບໜ້າງານ' : 'Site photographs') + ' (' + GAL[k] + ')</h4><div class="gal">' + g + '</div>' +
      '<h4 class="title-2" style="margin-top:32px">' + (lang === 'lo' ? 'ໃບຢັ້ງຢືນຜົນງານ' : 'Certificates of performance') + ' (' + CERT[k] + ')</h4><div class="gal certs">' + c + '</div></div>';
  }
  /* Lightbox */
  var lb, lbState = null;
  function lbShow(kind, k, i) {
    var n = (kind === 'gallery' ? GAL : CERT)[k]; i = ((i - 1 + n) % n) + 1; lbState = [kind, k, i];
    lb.querySelector('img').src = 'assets/' + kind + '/' + DIR[k] + '/' + i + '.jpg';
    lb.querySelector('img').alt = (kind === 'certs' ? 'Certificate of performance ' : 'Project site photograph ') + i;
    lb.querySelector('.lb-n').textContent = i + ' / ' + n;
  }
  function initLightbox() {
    lb = document.createElement('dialog'); lb.className = 'lb';
    lb.innerHTML = '<button class="lb-x" aria-label="Close"><i class="ph-bold ph-x"></i></button><button class="lb-p" aria-label="Previous"><i class="ph-bold ph-caret-left"></i></button><img alt=""><button class="lb-nx" aria-label="Next"><i class="ph-bold ph-caret-right"></i></button><p class="lb-n caption-3"></p>';
    document.body.appendChild(lb);
    lb.querySelector('.lb-x').onclick = function () { lb.close(); };
    lb.querySelector('.lb-p').onclick = function () { lbShow(lbState[0], lbState[1], lbState[2] - 1); };
    lb.querySelector('.lb-nx').onclick = function () { lbShow(lbState[0], lbState[1], lbState[2] + 1); };
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
    lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') lb.querySelector('.lb-nx').click(); if (e.key === 'ArrowLeft') lb.querySelector('.lb-p').click(); });
    document.addEventListener('click', function (e) { var b = e.target.closest('[data-lb]'); if (!b) return; var a = b.dataset.lb.split(':'); lbShow(a[0], a[1], +a[2]); lb.showModal(); });
  }
  var profTabs, flagTabs;
  function L(pair) { return lang === 'lo' ? pair[1] : pair[0]; }
  function renderFlag() {
    var tl = document.getElementById('flag-tabs'); if (!tl) return;
    var sel = tl.querySelector('[aria-selected=true]'), cur = sel ? +sel.dataset.i : 0;
    tl.innerHTML = FLAG.map(function (f, i) { return '<button class="tab body-5" role="tab" data-i="' + i + '" id="ft' + i + '" aria-controls="fp' + i + '" aria-selected="false" tabindex="-1">' + t(f.k) + '</button>'; }).join('');
    document.getElementById('flag-panels').innerHTML = FLAG.map(function (f, i) {
      return '<div class="tabpanel flag" role="tabpanel" id="fp' + i + '" aria-labelledby="ft' + i + '" hidden><div><span class="chip ' + (f.sub === 'con' ? 'amber' : f.sub === 'uxo' ? 'uxo' : 'sky') + ' caption-3">' + t('sub.' + f.sub) + '</span><h3 class="heading-5" style="margin-top:12px">' + L(f.title) + '</h3><p class="body-5" style="color:var(--gold);margin-top:8px">' + L(f.cl) + '</p>' +
        '<div class="facts">' + f.f.map(function (x) { return '<div><b>' + x[0] + '</b><span class="body-6">' + (lang === 'lo' ? FACT_LO[x[1]] : FACT_EN[x[1]]) + '</span></div>'; }).join('') + '</div>' +
        '<p class="body-3" style="color:#C5D0DE;max-width:680px">' + L(f.d) + '</p><p style="margin-top:24px"><a class="btn btn-gold button-md" href="projects.html"><span>' + t('hero.cta1') + '</span><i class="ph-bold ph-arrow-right" aria-hidden="true"></i></a></p></div>' +
        '<figure><img src="assets/photos/' + f.img + '.jpg" alt="Field photograph from the INSI project archive" loading="lazy"><figcaption class="caption-4">' + (lang === 'lo' ? 'ຮູບພາບຈາກຄັງຮູບໂຄງການຂອງ INSI' : 'Photograph from the INSI field archive') + '</figcaption></figure></div>';
    }).join('');
    flagTabs = tabs('flag-tabs', 'flag-panels'); flagTabs.select(cur);
  }
  function renderProf() {
    var tl = document.getElementById('prof-tabs'); if (!tl) return;
    var sel = tl.querySelector('[aria-selected=true]'), cur = sel ? +sel.dataset.i : 0;
    var keys = ['con', 'uxo', 'eng'];
    tl.innerHTML = keys.map(function (k, i) { return '<button class="tab body-5" role="tab" data-i="' + i + '" id="pt' + k + '" aria-controls="profile-' + k + '" aria-selected="false" tabindex="-1">' + t('pr.' + k) + '</button>'; }).join('');
    document.getElementById('prof-panels').innerHTML = keys.map(function (k) {
      var p = PROF[k];
      return '<div class="tabpanel profile" role="tabpanel" id="profile-' + k + '" aria-labelledby="pt' + k + '" hidden><div><div class="logo-lg"><img src="assets/logos/' + p.logo + '.jpg" alt="' + p.name + ' logo" loading="lazy"></div></div>' +
        '<div><span class="chip ' + p.chip + ' caption-3">' + t('sub.' + k) + '</span><h3 class="heading-5" style="margin-top:12px">' + p.name + '</h3><p class="body-6" style="color:var(--muted);margin-top:4px">' + p.lo + '</p>' +
        '<ul class="svc body-5">' + p.svc.map(function (s) { return '<li><i class="ph-bold ph-check-square-offset" aria-hidden="true"></i><span>' + L(s) + '</span></li>'; }).join('') + '</ul>' +
        '<div class="scale"><p class="caption-3" style="color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">' + (lang === 'lo' ? 'ຂະໜາດງານທີ່ເດັ່ນ' : 'Highlighted scale') + '</p><p class="body-2">' + L(p.scale) + '</p></div>' +
        '<p style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-navy button-md" href="#contact" data-pre="' + k + '"><span>' + t('nav.cta') + '</span></a><a class="btn btn-ghost button-md" href="projects.html?sub=' + k + '"><span>' + (lang === 'lo' ? 'ເບິ່ງໂຄງການຂອງຂະແໜງນີ້' : 'See this division’s projects') + '</span></a></p></div>' + mediaBlock(k) + '</div>';
    }).join('');
    profTabs = tabs('prof-tabs', 'prof-panels'); profTabs.select(cur);
  }
  function openProfile(k) { var i = ['con', 'uxo', 'eng'].indexOf(k); if (i > -1 && profTabs) profTabs.select(i); }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-open]');
    if (a && isHome) { openProfile(a.dataset.open); var tgt = document.getElementById('profiles'); if (tgt) { e.preventDefault(); tgt.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); } }
    var pre = e.target.closest('[data-pre]');
    if (pre) { var map = { con: 'Civil Construction', uxo: 'UXO Clearance', eng: 'Engineering Design' }; document.querySelectorAll('#divs input').forEach(function (c) { c.checked = c.value === map[pre.dataset.pre]; }); }
  });

  /* ---------- Portfolio ---------- */
  var state = { sub: 'all', sec: 'all', q: '' };
  var money = function (n) { return n.toLocaleString('en-US'); };
  function prov(p) { return lang === 'lo' && LO.prov[p] ? LO.prov[p] : p; }
  function scopeOf(p) {
    var parts = [], km = t('km'), mm = t('m');
    if (p.dam) parts.push(t('dam') + ': ' + t('crest') + ' ' + p.dam[0] + ' ' + mm + ', ' + t('height') + ' ' + p.dam[1] + ' ' + mm);
    if (p.len) parts.push(t('len') + ' ' + p.len + ' ' + km + (p.wid ? ' · ' + t('wid') + ' ' + p.wid + ' ' + mm : ''));
    if (p.canal) parts.push(t('canal') + ' ' + p.canal + ' ' + km);
    if (p.ha) parts.push(p.ha + ' ' + t('ha'));
    if (p.bridges) parts.push(p.bridges + ' ' + t('bridges'));
    if (p.scopeKey) parts.push(t(p.scopeKey));
    if (p.role) parts.push(t('role1'));
    var val = [];
    if (p.usd) val.push('USD ' + money(p.usd));
    if (p.lak) val.push(money(p.lak) + ' ' + t('kip'));
    if (!val.length) val.push(t('ndisc'));
    return (parts.length ? parts.join('<br>') + '<br>' : '') + '<b class="body-4">' + val.join(' · ') + '</b>' + (p.yrs ? '<span class="sub-lo caption-5">' + p.yrs + '</span>' : '') + (p.note ? '<span class="sub-lo caption-5">' + p.note + '</span>' : '');
  }
  function renderPortfolio() {
    var rows = document.getElementById('rows'); if (!rows) return;
    var all = window.INSI_PROJECTS;
    var counts = { all: all.length, con: 0, uxo: 0, eng: 0 };
    all.forEach(function (p) { counts[p.s]++; });
    var subs = ['all', 'con', 'uxo', 'eng'];
    document.getElementById('f-sub').innerHTML = subs.map(function (k) { return '<button class="tab body-5" data-sub="' + k + '" aria-pressed="' + (state.sub === k) + '" aria-selected="' + (state.sub === k) + '">' + (k === 'all' ? t('all') : t('sub.' + k)) + ' (' + counts[k] + ')</button>'; }).join('');
    var secs = ['all', 'hydro', 'roads', 'irrig', 'uxo', 'bld'];
    document.getElementById('f-sec').innerHTML = secs.map(function (k) { return '<button class="tab body-5" data-sec="' + k + '" aria-pressed="' + (state.sec === k) + '" aria-selected="' + (state.sec === k) + '">' + (k === 'all' ? t('sec.all') : t('sec.' + k)) + '</button>'; }).join('');
    var q = state.q.toLowerCase();
    var list = [], n = {};
    all.forEach(function (p, i) { n[p.s] = (n[p.s] || 0) + 1; p._n = n[p.s]; p._i = i + 1; });
    list = all.filter(function (p) {
      if (state.sub !== 'all' && p.s !== state.sub) return false;
      if (state.sec !== 'all' && p.sec.indexOf(state.sec) < 0) return false;
      if (q) { var hay = [p.en, p.lo, p.c[0], p.c[1] || '', p.loc, LO.prov[p.loc] || ''].join(' ').toLowerCase(); if (hay.indexOf(q) < 0) return false; }
      return true;
    });
    var chipCls = { con: 'amber', uxo: 'uxo', eng: 'sky' };
    rows.innerHTML = list.map(function (p) {
      var name = lang === 'lo' ? p.lo : p.en, alt = lang === 'lo' ? (p.lo !== p.en ? '' : '') : (p.lo !== p.en ? p.lo : '');
      var client = lang === 'lo' && p.c[1] ? p.c[1] : p.c[0];
      return '<tr><td class="n mono caption-4" data-l="No.">' + p._i + '</td><td data-l="' + t('th.name') + '"><span class="body-2">' + name + '</span>' + (alt ? '<span class="sub-lo caption-5" lang="lo">' + alt + '</span>' : '') + '</td>' +
        '<td data-l="' + t('th.sub') + '"><span class="chip ' + chipCls[p.s] + ' caption-3">' + t('sub.' + p.s) + '</span></td>' +
        '<td class="body-5" data-l="' + t('th.client') + '">' + client + '</td><td class="body-5" data-l="' + t('th.loc') + '">' + prov(p.loc) + '</td>' +
        '<td class="body-5" data-l="' + t('th.scope') + '">' + scopeOf(p) + '</td>' +
        '<td data-l="' + t('th.status') + '"><span class="st body-4"><i class="ph-bold ph-check-circle" aria-hidden="true"></i>' + t('done') + '</span></td></tr>';
    }).join('');
    document.getElementById('count').textContent = t('showing') + ' ' + list.length + ' ' + t('of') + ' ' + all.length + ' ' + t('projects');
    document.getElementById('empty').hidden = list.length > 0;
    document.getElementById('tbl').hidden = list.length === 0;
  }
  function initPortfolio() {
    var q = document.getElementById('q'); if (!q) return;
    var sp = new URLSearchParams(location.search); if (['con', 'uxo', 'eng'].indexOf(sp.get('sub')) > -1) state.sub = sp.get('sub');
    q.addEventListener('input', function () { state.q = q.value; renderPortfolio(); });
    document.getElementById('f-sub').addEventListener('click', function (e) { var b = e.target.closest('[data-sub]'); if (b) { state.sub = b.dataset.sub; renderPortfolio(); } });
    document.getElementById('f-sec').addEventListener('click', function (e) { var b = e.target.closest('[data-sec]'); if (b) { state.sec = b.dataset.sec; renderPortfolio(); } });
    document.getElementById('reset').addEventListener('click', function () { state = { sub: 'all', sec: 'all', q: '' }; q.value = ''; renderPortfolio(); });
  }

  /* ---------- Contact form ---------- */
  function initForm() {
    var f = document.getElementById('inquiry'); if (!f) return;
    var note = document.getElementById('form-note');
    function setErr(k, key) { var s = f.querySelector('[data-err="' + k + '"]'); if (!s) return; s.textContent = key ? t(key) : ''; var inp = f.elements[k]; if (inp && inp.setAttribute) { if (key) inp.setAttribute('aria-invalid', 'true'); else inp.removeAttribute('aria-invalid'); } }
    f.addEventListener('submit', function (e) {
      e.preventDefault(); note.innerHTML = '';
      var d = new FormData(f), bad = false;
      var name = (d.get('name') || '').trim(), org = (d.get('org') || '').trim(), email = (d.get('email') || '').trim(), msg = (d.get('msg') || '').trim(), divs = d.getAll('div');
      [['name', !name, 'f.e.name'], ['org', !org, 'f.e.org'], ['email', !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email), 'f.e.email'], ['msg', !msg, 'f.e.msg'], ['div', !divs.length, 'f.e.div']].forEach(function (c) { setErr(c[0], c[1] ? c[2] : ''); if (c[1]) bad = true; });
      if (bad) { var first = f.querySelector('[aria-invalid="true"]') || f.querySelector('#divs input'); if (first) first.focus(); return; }
      var payload = { name: name, organization: org, email: email, phone: d.get('tel') || '', divisions: divs, message: msg };
      if (CONFIG.formEndpoint) {
        fetch(CONFIG.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
          .then(function (r) { if (!r.ok) throw 0; note.innerHTML = '<p class="notice body-5">' + t('f.sent') + '</p>'; f.reset(); })
          .catch(function () { note.innerHTML = '<p class="notice bad body-5">' + t('f.fail') + '</p>'; });
      } else if (CONFIG.email) {
        location.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Tender inquiry: ' + divs.join(', ')) + '&body=' + encodeURIComponent(msg + '\n\n' + name + ', ' + org + ', ' + email);
        note.innerHTML = '<p class="notice body-5">' + t('f.ok') + '</p>';
      } else {
        note.innerHTML = '<p class="notice bad body-5">' + t('f.nosend') + '</p>';
      }
    });
  }

  function renderDynamic() { renderFlag(); renderProf(); renderPortfolio(); initTagline(); }

  /* ---------- Init ---------- */
  initLightbox(); initPortfolio(); initForm();
  applyLang(lang);
  initReveal(); initCounters();
  if (isHome && location.hash.indexOf('#profile-') === 0) { openProfile(location.hash.slice(9)); }
  document.querySelectorAll('.reveal').forEach(function (el) { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in'); });
})();
