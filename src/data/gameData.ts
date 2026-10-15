import { VersePuzzleData, TajwidCard, AsmaulHusnaMatchItem, SujudScenario } from '../types';

export const VERSE_PUZZLE_DATA: VersePuzzleData[] = [
  {
    id: 1,
    surahName: 'QS. Al-Baqarah',
    ayahNumber: 153,
    theme: 'Sabar dan Salat sebagai Penolong',
    fullArabic: 'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ',
    fullTranslation: 'Wahai orang-orang yang beriman! Mohonlah pertolongan (kepada Allah) dengan sabar dan salat. Sungguh, Allah beserta orang-orang yang sabar.',
    words: [
      { id: 'v1_1', textArabic: 'يَـٰٓأَيُّهَا', transliteration: 'Yaa ayyuhal', order: 0 },
      { id: 'v1_2', textArabic: 'ٱلَّذِينَ ءَامَنُوا۟', transliteration: 'ladziina aamanus', order: 1 },
      { id: 'v1_3', textArabic: 'ٱسْتَعِينُوا۟', transliteration: 'ta\'iinuu', order: 2 },
      { id: 'v1_4', textArabic: 'بِٱلصَّبْرِ', transliteration: 'bish-shabri', order: 3 },
      { id: 'v1_5', textArabic: 'وَٱلصَّلَوٰةِ', transliteration: 'wash-shalaah', order: 4 },
      { id: 'v1_6', textArabic: 'إِنَّ ٱللَّهَ', transliteration: 'innallaaha', order: 5 },
      { id: 'v1_7', textArabic: 'مَعَ ٱلصَّـٰبِرِينَ', transliteration: 'ma\'ash-shaabiriin', order: 6 }
    ]
  },
  {
    id: 2,
    surahName: 'QS. Al-Bayyinah',
    ayahNumber: 5,
    theme: 'Keikhlasan dalam Beribadah',
    fullArabic: 'وَمَآ أُمِرُوٓا۟ إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ حُنَفَآءَ',
    fullTranslation: 'Padahal mereka tidak diperintahkan melainkan agar menyembah Allah dengan memurnikan ketaatan kepada-Nya dalam (menjalankan) agama yang lurus...',
    words: [
      { id: 'v2_1', textArabic: 'وَمَآ أُمِرُوٓا۟', transliteration: 'Wa maa umiruu', order: 0 },
      { id: 'v2_2', textArabic: 'إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ', transliteration: 'illaa liya\'budullaaha', order: 1 },
      { id: 'v2_3', textArabic: 'مُخْلِصِينَ لَهُ ٱلدِّينَ', transliteration: 'mukhlishiina lahud-diina', order: 2 },
      { id: 'v2_4', textArabic: 'حُنَفَآءَ', transliteration: 'hunafaa-a', order: 3 }
    ]
  },
  {
    id: 3,
    surahName: 'QS. An-Nahl',
    ayahNumber: 90,
    theme: 'Perintah Berlaku Adil dan Ihsan',
    fullArabic: 'إِنَّ ٱللَّهَ يَأْمُرُ بِٱلْعَدْلِ وَٱلْإِحْسَـٰنِ وَإِيتَآئِ ذِى ٱلْقُرْبَىٰ',
    fullTranslation: 'Sesungguhnya Allah menyuruh (kamu) berlaku adil dan berbuat kebajikan, memberi bantuan kepada kerabat...',
    words: [
      { id: 'v3_1', textArabic: 'إِنَّ ٱللَّهَ', transliteration: 'Innallaaha', order: 0 },
      { id: 'v3_2', textArabic: 'يَأْمُرُ', transliteration: 'ya\'muru', order: 1 },
      { id: 'v3_3', textArabic: 'بِٱلْعَدْلِ', transliteration: 'bil-\'adli', order: 2 },
      { id: 'v3_4', textArabic: 'وَٱلْإِحْسَـٰنِ', transliteration: 'wal-ihsaani', order: 3 },
      { id: 'v3_5', textArabic: 'وَإِيتَآئِ ذِى ٱلْقُرْبَىٰ', transliteration: 'wa iitaa-i dzil-qurbaa', order: 4 }
    ]
  },
  {
    id: 4,
    surahName: 'QS. Al-Baqarah',
    ayahNumber: 2,
    theme: 'Al-Qur\'an Petunjuk Orang Bertakwa',
    fullArabic: 'ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ',
    fullTranslation: 'Kitab (Al-Qur\'an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa.',
    words: [
      { id: 'v4_1', textArabic: 'ذَٰلِكَ', transliteration: 'Dzaalika', order: 0 },
      { id: 'v4_2', textArabic: 'ٱلْكِتَـٰبُ', transliteration: 'al-kitaabu', order: 1 },
      { id: 'v4_3', textArabic: 'لَا رَيْبَ ۛ فِيهِ', transliteration: 'laa rayba fiih', order: 2 },
      { id: 'v4_4', textArabic: 'هُدًۭى', transliteration: 'hudal', order: 3 },
      { id: 'v4_5', textArabic: 'لِّلْمُتَّقِينَ', transliteration: 'lil-muttaqiin', order: 4 }
    ]
  }
];

export const TAJWID_CARDS_DATA: TajwidCard[] = [
  {
    id: 1,
    wordArabic: 'الشَّمْسُ',
    transliteration: 'Asy-Syamsu',
    type: 'syamsiyah',
    huruf: 'Syin (ش)',
    penjelasan: 'Alif Lam bertemu huruf Syin, huruf Lam dileburkan dan huruf Syin diberi tanda tasydid.'
  },
  {
    id: 2,
    wordArabic: 'الْقَمَرُ',
    transliteration: 'Al-Qamaru',
    type: 'qamariyah',
    huruf: 'Qaf (ق)',
    penjelasan: 'Alif Lam bertemu huruf Qaf, huruf Lam dibaca jelas (Idzhar) dengan tanda sukun.'
  },
  {
    id: 3,
    wordArabic: 'الصَّلَاةُ',
    transliteration: 'Ash-Shalaatu',
    type: 'syamsiyah',
    huruf: 'Shad (ص)',
    penjelasan: 'Alif Lam bertemu huruf Shad, Lam melebur ke Shad bertasydid.'
  },
  {
    id: 4,
    wordArabic: 'الْكِتَابُ',
    transliteration: 'Al-Kitaabu',
    type: 'qamariyah',
    huruf: 'Kaf (ك)',
    penjelasan: 'Alif Lam bertemu huruf Kaf, Lam dibaca jelas tanpa dengung.'
  },
  {
    id: 5,
    wordArabic: 'النَّاسُ',
    transliteration: 'An-Naasu',
    type: 'syamsiyah',
    huruf: 'Nun (ن)',
    penjelasan: 'Alif Lam bertemu huruf Nun, Lam diidghamkan ke Nun dengan ghunnah.'
  },
  {
    id: 6,
    wordArabic: 'الْحَمْدُ',
    transliteration: 'Al-Hamdu',
    type: 'qamariyah',
    huruf: 'Ha (ح)',
    penjelasan: 'Alif Lam bertemu huruf Ha (ح), dibaca jelas Idzhar Qamariyah.'
  },
  {
    id: 7,
    wordArabic: 'الرَّحْمَٰنُ',
    transliteration: 'Ar-Rahmaanu',
    type: 'syamsiyah',
    huruf: 'Ra (ر)',
    penjelasan: 'Alif Lam bertemu huruf Ra, Lam dileburkan tebal ke huruf Ra bertasydid.'
  },
  {
    id: 8,
    wordArabic: 'الْبَصِيرُ',
    transliteration: 'Al-Bashiiru',
    type: 'qamariyah',
    huruf: 'Ba (ب)',
    penjelasan: 'Alif Lam bertemu huruf Ba, Lam berharakat sukun dibaca terang.'
  },
  {
    id: 9,
    wordArabic: 'التَّوَّابُ',
    transliteration: 'At-Tawwaabu',
    type: 'syamsiyah',
    huruf: 'Ta (ت)',
    penjelasan: 'Alif Lam bertemu huruf Ta, Lam melebur ke Ta bertasydid.'
  },
  {
    id: 10,
    wordArabic: 'الْعَلِيمُ',
    transliteration: 'Al-\'Aliimu',
    type: 'qamariyah',
    huruf: '\'Ain (ع)',
    penjelasan: 'Alif Lam bertemu huruf \'Ain, Lam sukun dibaca jelas dan tegas.'
  },
  {
    id: 11,
    wordArabic: 'الذِّكْرُ',
    transliteration: 'Adz-Dzikru',
    type: 'syamsiyah',
    huruf: 'Dzal (ذ)',
    penjelasan: 'Alif Lam bertemu huruf Dzal, huruf Lam melebur ke Dzal bertasydid.'
  },
  {
    id: 12,
    wordArabic: 'الْمُؤْمِنُونَ',
    transliteration: 'Al-Mu\'minuuna',
    type: 'qamariyah',
    huruf: 'Mim (م)',
    penjelasan: 'Alif Lam bertemu huruf Mim, Lam disukun dan dibaca jelas.'
  }
];

export const ASMAUL_HUSNA_ITEMS: AsmaulHusnaMatchItem[] = [
  {
    id: 1,
    namaArab: 'الْعَلِيمُ',
    namaLatin: 'Al-\'Alim',
    arti: 'Maha Mengetahui',
    implementasiGemilang: 'Rajin membaca buku dan tidak pernah merasa sombong dengan kepintaran di kelas.'
  },
  {
    id: 2,
    namaArab: 'الْخَبِيرُ',
    namaLatin: 'Al-Khabir',
    arti: 'Maha Teliti / Waspada',
    implementasiGemilang: 'Cermat memeriksa tugas sekolah dan selalu menyaring berita sebelum sharing di medsos.'
  },
  {
    id: 3,
    namaArab: 'السَّمِيعُ',
    namaLatin: 'As-Sami\'',
    arti: 'Maha Mendengar',
    implementasiGemilang: 'Menjaga lisan dari perkataan kotor, ghibah, dan menyimak nasehat guru dengan takzim.'
  },
  {
    id: 4,
    namaArab: 'الْبَصِيرُ',
    namaLatin: 'Al-Bashir',
    arti: 'Maha Melihat',
    implementasiGemilang: 'Jujur saat ujian dan tidak berani curang walaupun pengawas sedang keluar ruangan.'
  }
];

export const SUJUD_SCENARIOS_DATA: SujudScenario[] = [
  {
    id: 1,
    scenario: 'Dalam salat Dzuhur, Dimas langsung bangkit berdiri ke rakaat ketiga setelah sujud kedua rakaat kedua, lupa membaca tasyahud awal.',
    jawabanTepat: 'Sujud Sahwi',
    alasanFikih: 'Karena meninggalkan salah satu sunnah ab\'adh salat (tasyahud awal) secara tidak sengaja.',
    bacaanDoa: 'Subhaana man laa yanaamu wa laa yas-huu',
    bacaanArab: 'سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو'
  },
  {
    id: 2,
    scenario: 'Ketika mendengarkan lantunan QS. As-Sajdah ayat 15 dari speaker musala SMPN 5 Brebes, terdengar tanda ayat sajdah dibacakan.',
    jawabanTepat: 'Sujud Tilawah',
    alasanFikih: 'Disunnahkan bersujud saat membaca atau mendengar lantunan ayat Sajdah Al-Qur\'an.',
    bacaanDoa: 'Sajada wajhiya lilladzii khalaqahuu wa shawwarahuu...',
    bacaanArab: 'سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ'
  },
  {
    id: 3,
    scenario: 'Keluarga Siti mendapat kabar bahwa ayahnya selamat tanpa luka sedikitpun dari kecelakaan beruntun di jalur Pantura Brebes.',
    jawabanTepat: 'Sujud Syukur',
    alasanFikih: 'Sebagai rasa terima kasih mendalam kepada Allah atas terhindarnya marabahaya besar.',
    bacaanDoa: 'Membaca tasbih, tahmid, tahlil dan doa syukur nikmat',
    bacaanArab: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ شُكْرًا لِلَّهِ'
  },
  {
    id: 4,
    scenario: 'Saat salat Maghrib, Faiz merasa bimbang apakah saat ini ia sedang berada di rakaat kedua atau ketiga.',
    jawabanTepat: 'Sujud Sahwi',
    alasanFikih: 'Kaidah fikih: mengambil jumlah rakaat yang paling sedikit (yang diyakini), menyelesaikan salat, dan melakukan sujud sahwi 2 kali sebelum salam.',
    bacaanDoa: 'Subhaana man laa yanaamu wa laa yas-huu',
    bacaanArab: 'سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو'
  }
];
