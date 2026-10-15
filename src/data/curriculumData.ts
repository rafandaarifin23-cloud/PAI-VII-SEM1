import { TeacherProfile, Chapter, LkpdQuestion } from '../types';

export const TEACHER_DATA: TeacherProfile = {
  name: 'Sandi Arifin, S.Pd.I',
  nip: '19900403 202421 1 011',
  title: 'Guru Pendidikan Agama Islam dan Budi Pekerti',
  school: 'SMP Negeri 5 Brebes',
  slogan: 'GEMILANG (Gerakan Edukatif, Mandiri, Inovatif, Loyal, Agamis, Nyaman, Gemilang)',
  subject: 'Pendidikan Agama Islam dan Budi Pekerti (PAI-BP)',
  classGrade: 'Kelas VII (Fase D)',
  semester: 'Semester Gasal (1)',
  email: 'sandi.arifin@smpn5brebes.sch.id',
  motto: 'Mewujudkan Generasi Muslim Pelajar Pancasila yang Berakhlakul Karimah, Cerdas, dan GEMILANG.',
  bio: 'Pendidik PAI-BP yang berdedikasi mengintegrasikan nilai-nilai spiritualitas Al-Qur\'an, fiqih aplikatif, dan peradaban Islam ke dalam pembelajaran bermakna (Deep Learning: Mindful, Meaningful, Joyful) bagi peserta didik di SMP Negeri 5 Brebes.'
};

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 1,
    slug: 'bab-1-hukum-alif-lam',
    babNumber: 'BAB 1',
    title: 'Al-Qur\'an & Iman: Hukum Bacaan Alif Lam',
    subTitle: 'Menelusuri Keagungan Al-Qur\'an serta Membedakan Alif Lam Syamsiyah dan Alif Lam Qamariyah',
    element: 'Al-Qur\'an Hadis',
    alokasiWaktu: '6 JP (3 Pekan Pertemuan)',
    tujuanPembelajaran: [
      'Membaca ayat Al-Qur\'an yang mengandung hukum bacaan Alif Lam Syamsiyah dan Alif Lam Qamariyah secara tartil.',
      'Mengidentifikasi dan mengelompokkan 14 huruf Syamsiyah dan 14 huruf Qamariyah dengan cermat.',
      'Menganalisis perbedaan cara membaca Idgham Syamsiyah (melebur) dan Idzhar Qamariyah (jelas).',
      'Membiasakan tilawah Al-Qur\'an setiap hari sebagai wujud cinta kepada firman Allah SWT di lingkungan SMPN 5 Brebes.'
    ],
    ringkasanMateri: 'Hukum Alif Lam (ال) dalam ilmu tajwid terjadi ketika huruf Alif dan Lam bertemu dengan salah satu dari 28 huruf hijaiyah. Terbagi menjadi dua kelompok: Alif Lam Syamsiyah (huruf diidghamkan/dilebur dengan tanda tasydid) dan Alif Lam Qamariyah (huruf di-idzhar-kan/dibaca jelas dengan tanda sukun).',
    ayatDalil: {
      surah: 'QS. An-Nur: 35 & QS. Al-Baqarah: 2',
      arab: 'ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ',
      latin: 'Dzaalikal-kitaabu laa rayba fiih, hudal-lil-muttaqiin.',
      terjemah: 'Kitab (Al-Qur\'an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa.'
    },
    deepLearningApproach: {
      mindful: 'Peserta didik diajak hening sejenak (mindful listening) mendengarkan lantunan dua qari membaca ayat bersyamsiyah dan berqamariyah, merasakan keindahan getaran makhraj huruf.',
      meaningful: 'Mengaitkan keteraturan hukum tajwid dengan keteraturan alam semesta ciptaan Allah: matahari (Syamsiyah) yang kuat dan bulan (Qamariyah) yang tenang.',
      joyful: 'Permainan detektif kata Al-Qur\'an dan tantangan tebak cepat hukum bacaan dengan suara interaktif.'
    },
    materiDetail: [
      {
        heading: '1. Pengertian dan Hakikat Hukum Alif Lam (ال)',
        content: [
          'Dalam bahasa Arab, Alif Lam Ta\'rif (ال) berfungsi untuk men-ta\'rif-kan atau memperjelas kata benda (isim nakirah menjadi isim ma\'rifah).',
          'Ketika Alif Lam bertemu dengan huruf-huruf hijaiyah, terjadi interaksi fonetik tajwid yang membaginya menjadi dua sifat bunyi: ada yang luluh (melebur) dan ada yang tetap terbaca jelas.'
        ],
        keyPoints: [
          'Alif Lam Syamsiyah: diibaratkan seperti bintang di dekat matahari, huruf lam-nya tidak tampak bunyinya.',
          'Alif Lam Qamariyah: diibaratkan seperti bintang di dekat bulan, huruf lam-nya tampak bersinar jelas terdengar.'
        ]
      },
      {
        heading: '2. Alif Lam Syamsiyah (Idgham Syamsiyah)',
        content: [
          'Syamsiyah berasal dari kata "Asy-Syams" (الشَّمْسُ) yang berarti matahari.',
          'Hukum ini terjadi apabila Alif Lam (ال) bertemu dengan salah satu dari 14 huruf Syamsiyah:',
          'Huruf Syamsiyah: ط (Tha), ث (Tsa), ص (Shad), ر (Ra), ت (Ta), ض (Dhad), ذ (Dzal), ن (Nun), د (Dal), س (Sin), ظ (Zha), ز (Zay), ش (Syin), ل (Lam).',
          'Ciri Mushaf: Di atas huruf Syamsiyah terdapat tanda Tasydid ( ّ ), dan huruf Lam tidak berharakat (diabaikan pengucapannya).'
        ],
        tabel: {
          headers: ['Huruf', 'Contoh Lafadz Arab', 'Cara Baca', 'Keterangan'],
          rows: [
            ['ن (Nun)', 'النَّاسِ', 'An-Naas', 'Lam melebur ke huruf Nun dengan ghunnah'],
            ['ش (Syin)', 'الشَّمْسُ', 'Asy-Syams', 'Lam melebur langsung ke huruf Syin'],
            ['ر (Ra)', 'الرَّحْمَٰنِ', 'Ar-Rahmaan', 'Lam melebur ke Ra dengan tebal'],
            ['ص (Shad)', 'الصَّلَاةَ', 'Ash-Shalaah', 'Lam melebur ke Shad isti\'la'],
            ['ت (Ta)', 'التَّوَّابُ', 'At-Tawwaab', 'Lam melebur ke Ta']
          ]
        }
      },
      {
        heading: '3. Alif Lam Qamariyah (Idzhar Qamariyah)',
        content: [
          'Qamariyah berasal dari kata "Al-Qamar" (الْقَمَرُ) yang berarti bulan.',
          'Hukum ini terjadi jika Alif Lam (ال) bertemu salah satu dari 14 huruf Qamariyah:',
          'Huruf Qamariyah dirangkum ulama tajwid dalam bait: اَبْغِ حَجَّكَ وَخَفْ عَقِيْمَهُ (Abghi Hajjaka wa Khaf \'Aqiimahu). Yaitu: ا (Alif), ب (Ba), غ (Ghain), ح (Ha), ج (Jim), ك (Kaf), و (Wawu), خ (Kha), ف (Fa), ع (\'Ain), ق (Qaf), ي (Ya), م (Mim), هـ (Ha\').',
          'Ciri Mushaf: Di atas huruf Lam terdapat tanda Sukun ( ْ ), dan huruf berikutnya tidak ber-tasydid.'
        ],
        tabel: {
          headers: ['Huruf', 'Contoh Lafadz Arab', 'Cara Baca', 'Keterangan'],
          rows: [
            ['ح (Ha)', 'الْحَمْدُ', 'Al-Hamdu', 'Huruf Lam dibaca jelas tanpa dengung'],
            ['ب (Ba)', 'الْبَصِيرُ', 'Al-Bashiir', 'Lam sukun jelas bertemu Ba'],
            ['ك (Kaf)', 'الْكِتَابُ', 'Al-Kitaab', 'Lam sukun jelas bertemu Kaf'],
            ['ع (\'Ain)', 'الْعَلِيمُ', 'Al-\'Aliim', 'Lam sukun jelas bertemu \'Ain'],
            ['م (Mim)', 'الْمُؤْمِنُونَ', 'Al-Mu\'minuun', 'Lam sukun jelas bertemu Mim']
          ]
        }
      }
    ]
  },
  {
    id: 2,
    slug: 'bab-2-asmaul-husna',
    babNumber: 'BAB 2',
    title: 'Akidah: Meneladani Asmaul Husna',
    subTitle: 'Mengenal Keagungan Allah SWT melalui Al-\'Alim, Al-Khabir, As-Sami\', dan Al-Bashir dalam Kehidupan Nyata',
    element: 'Akidah',
    alokasiWaktu: '6 JP (3 Pekan Pertemuan)',
    tujuanPembelajaran: [
      'Menjelaskan makna Asmaul Husna: Al-\'Alim, Al-Khabir, As-Sami\', dan Al-Bashir beserta dalil naqlinya.',
      'Menemukan contoh perilaku meneladani keempat Asmaul Husna dalam interaksi sosial dan digital pelajar SMPN 5 Brebes.',
      'Membangun kesadaran muraqabah (merasa selalu diawasi Allah SWT) dalam setiap perbuatan.'
    ],
    ringkasanMateri: 'Asmaul Husna adalah nama-nama Allah SWT yang agung dan indah. Di kelas VII semester gasal, kita mendalami 4 nama pokok: Al-\'Alim (Maha Mengetahui segala rahasia), Al-Khabir (Maha Teliti dan Waspada), As-Sami\' (Maha Mendengar segala bisikan dan doa), serta Al-Bashir (Maha Melihat segala yang nampak maupun tersembunyi).',
    ayatDalil: {
      surah: 'QS. Al-Hujurat: 18',
      arab: 'إِنَّ ٱللَّهَ يَعْلَمُ غَيْبَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ وَٱللَّهُ بَصِيرٌۢ بِمَا تَعْمَلُونَ',
      latin: 'Innallaaha ya\'lamu ghaibas-samaawaati wal-ardh, wallaahu bashiirum bimaa ta\'maluun.',
      terjemah: 'Sesungguhnya Allah mengetahui apa yang gaib di langit dan di bumi. Dan Allah Maha Melihat apa yang kamu kerjakan.'
    },
    deepLearningApproach: {
      mindful: 'Refleksi hening "Siapa yang Melihatku saat Gelap Gulita?" Menanamkan rasa hadirnya Allah dalam setiap tarikan nafas dan detak jantung.',
      meaningful: 'Studi kasus kejujuran siswa: mengapa menyontek merusak masa depan dan menodai keyakinan pada Al-Bashir?',
      joyful: 'Permainan mencocokkan kartu Asmaul Husna dengan problem solver kehidupan remaja sekolah.'
    },
    materiDetail: [
      {
        heading: '1. Al-\'Alim (الْعَلِيمُ) - Maha Mengetahui',
        content: [
          'Allah SWT mengetahui segala sesuatu sebelum terjadi, saat terjadi, dan sesudah terjadi.',
          'Ilmu Allah tidak terbatas oleh ruang, waktu, kedalaman lautan, maupun relung hati manusia yang paling tersembunyi.',
          'Dalil: QS. Al-An\'am: 59 menyatakan tidak ada sehelai daun pun yang gugur melainkan Allah mengetahuinya.'
        ],
        keyPoints: [
          'Keteladanan: Rajin membaca dan menuntut ilmu secara tekun di SMP Negeri 5 Brebes.',
          'Menghindari sifat sombong intelektual karena ilmu manusia hanyalah setetes air di samudra ilmu Allah.'
        ]
      },
      {
        heading: '2. Al-Khabir (الْخَبِيرُ) - Maha Teliti / Waspada',
        content: [
          'Allah mengetahui perkara batiniah dan rincian detail yang sekecil atom (dzarrah).',
          'Khabir menuntut ketelitian dalam mengkaji, menganalisis, dan memeriksa niat dalam hati.'
        ],
        keyPoints: [
          'Keteladanan: Teliti dan cermat dalam menyelesaikan tugas tugas sekolah.',
          'Kritis dan waspada terhadap berita bohong (hoaks) di media sosial, selalu tabayyun (verifikasi).'
        ]
      },
      {
        heading: '3. As-Sami\' (السَّمِيعُ) - Maha Mendengar',
        content: [
          'Pendengaran Allah tidak dibatasi jarak fisik, volume suara, maupun keramaian dunia.',
          'Bisikan batin yang tidak terucap pun didengar oleh Allah SWT dengan sempurna.'
        ],
        keyPoints: [
          'Keteladanan: Menjaga lisan dari perkataan kotor, ghibah, mencela kawan, atau cyberbullying.',
          'Memperbanyak doa, zikir, dan mendengarkan nasehat baik dari orang tua dan para guru.'
        ]
      },
      {
        heading: '4. Al-Bashir (الْبَصِيرُ) - Maha Melihat',
        content: [
          'Penglihatan Allah menjangkau seluruh alam semesta, bahkan semut hitam di atas batu hitam di malam yang gulita.',
          'Mata Allah tidak pernah mengantuk apalagi tertidur.'
        ],
        keyPoints: [
          'Keteladanan: Berperilaku jujur dan berintegritas saat ujian meskipun guru pengawas tidak melihat.',
          'Memanfaatkan mata dan gawai cerdas untuk hal-hal yang diridhai Allah SWT.'
        ],
        contohKasus: {
          judul: 'Integritas Ujian Tanpa Pengawas',
          deskripsi: 'Saat Penilaian Tengah Semester di kelas VII, pengawas sedang dipanggil ke ruang guru selama 10 menit. Sebagian murid membuka buku rangkuman kecil.',
          solusiHikmah: 'Siswa yang beriman pada Al-Bashir dan Al-\'Alim tetap mengerjakan dengan mandiri, yakin bahwa keberkahan ilmu lahir dari kejujuran, bukan angka manipulasi.'
        }
      }
    ]
  },
  {
    id: 3,
    slug: 'bab-3-ikhlas-sabar-pemaaf',
    babNumber: 'BAB 3',
    title: 'Akhlak: Merengkuh Kedamaian Hati',
    subTitle: 'Menghiasi Pribadi dengan Sifat Ikhlas Beramal, Sabar dalam Ujian, dan Kelapangan Hati Memaafkan',
    element: 'Akhlak',
    alokasiWaktu: '6 JP (3 Pekan Pertemuan)',
    tujuanPembelajaran: [
      'Menjelaskan hakikat ikhlas, sabar, dan pemaaf berdasarkan ayat Al-Qur\'an dan hadis Nabi SAW.',
      'Mengklasifikasikan tiga dimensi sabar: sabar dalam ketaatan, sabar menjauhi maksiat, dan sabar atas takdir.',
      'Menampilkan perilaku ikhlas membantu teman, menahan amarah, dan memaafkan kesalahan sesama di lingkungan sekolah.'
    ],
    ringkasanMateri: 'Kedamaian hidup seorang mukmin ditopang oleh tiga pilar akhlak utama: Ikhlas (memurnikan niat lillahi ta\'ala bebas dari riya\' dan sum\'ah), Sabar (menahan jiwa dari keluh kesah dan hawa nafsu), serta Pemaaf (membuka pintu damai dan mengikis dendam).',
    ayatDalil: {
      surah: 'QS. Al-Baqarah: 153',
      arab: 'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ',
      latin: 'Yaa ayyuhalladziina aamanus-ta\'iinuu bish-shabri wash-shalaah, innallaaha ma\'ash-shaabiriin.',
      terjemah: 'Wahai orang-orang yang beriman! Mohonlah pertolongan (kepada Allah) dengan sabar dan salat. Sungguh, Allah beserta orang-orang yang sabar.'
    },
    deepLearningApproach: {
      mindful: 'Latihan hening pernafasan "Menemukan Titik Nol Ego": Membayangkan rasa sakit hati saat diejek lalu melepaskannya demi ridha Allah.',
      meaningful: 'Studi konflik pertemanan remaja: Mengapa membalas dendam tidak pernah menyelesaikan masalah, sedangkan memaafkan menyembuhkan batin?',
      joyful: 'Role-playing drama resolusi konflik sahabat di kelas SMP Negeri 5 Brebes.'
    },
    materiDetail: [
      {
        heading: '1. Hakikat dan Buah Manis Keikhlasan',
        content: [
          'Secara bahasa, ikhlas bermakna murni, bersih dari campuran kotoran.',
          'Secara istilah syar\'i, ikhlas adalah niat beribadah dan berbuat kebaikan semata-mata mengharapkan ridha Allah SWT, bukan pujian manusia (riya\'), pengakuan (sum\'ah), atau pamrih materi.',
          'Rasulullah SAW bersabda: "Sesungguhnya Allah tidak menerima amal kecuali yang ikhlas dan hanya mengharap wajah-Nya." (HR. An-Nasa\'i).'
        ],
        keyPoints: [
          'Tanda Ikhlas: Tetap berbuat baik dipuji maupun tidak dipuji.',
          'Pembersih Hati: Melatih sedekah sembunyi-sembunyi dan piket kelas dengan riang gembira.'
        ]
      },
      {
        heading: '2. Tiga Tingkatan dan Dimensi Sabar',
        content: [
          'Sabar bukan berarti lemah, pasrah tanpa ikhtiar, melainkan kekuatan mengendalikan diri (dhabitun nafs) agar tetap berada di jalan kebenaran.',
          'Imam Al-Ghazali membagi sabar ke dalam tiga ranah utama:'
        ],
        keyPoints: [
          'Sabar dalam Ketaatan: Konsisten bangun subuh, menunaikan salat tepat waktu, rajin belajar walau capek.',
          'Sabar dalam Menjauhi Kemaksiatan: Menahan diri dari godaan merokok, membolos, berkata jorok, atau curang.',
          'Sabar Menghadapi Musibah: Tidak mengeluh berlebihan saat sakit, kehilangan barang, atau mendapat nilai kurang memuaskan, melainkan berucap istirja\' (Inna lillahi wa inna ilaihi raji\'un).'
        ]
      },
      {
        heading: '3. Keutamaan Pribadi Pemaaf (Al-\'Afwu)',
        content: [
          'Memaafkan adalah ciri utama orang yang bertakwa (QS. Ali \'Imran: 134).',
          'Sikap pemaaf memutus mata rantai permusuhan dan bullying di sekolah, serta menyehatkan mental dari racun dendam.'
        ],
        keyPoints: [
          'Memaafkan sebelum diminta maaf.',
          'Mengganti kebencian dengan doa kebaikan bagi yang menyakiti.'
        ]
      }
    ]
  },
  {
    id: 4,
    slug: 'bab-4-ketentuan-sujud',
    babNumber: 'BAB 4',
    title: 'Fikih: Khusyuk dengan Ketentuan Sujud',
    subTitle: 'Memahami Hikmah, Sebab, dan Tata Cara Sujud Sahwi, Sujud Tilawah, serta Sujud Syukur',
    element: 'Fikih',
    alokasiWaktu: '6 JP (3 Pekan Pertemuan)',
    tujuanPembelajaran: [
      'Menjelaskan pengertian, sebab-sebab, dan hukum pelaksanaan Sujud Sahwi, Sujud Tilawah, dan Sujud Syukur.',
      'Melafalkan bacaan doa masing-masing sujud dengan fasih dan memahami maknanya.',
      'Mempraktikkan tata cara Sujud Sahwi, Sujud Tilawah, dan Sujud Syukur dengan tertib dan benar sesuai sunnah Rasulullah SAW.'
    ],
    ringkasanMateri: 'Sujud adalah posisi terdekat seorang hamba dengan Allah SWT. Islam mensyariatkan tiga sujud khusus di luar sujud rukun salat: Sujud Sahwi (menambal kekurangan akibat lupa dalam salat), Sujud Tilawah (saat mendengar atau membaca ayat sajdah), dan Sujud Syukur (ekspresi rasa terima kasih atas nikmat besar atau selamat dari musibah).',
    ayatDalil: {
      surah: 'QS. Al-Insyiqaq: 20-21 & Hadis Sujud Sahwi',
      arab: 'فَمَا لَهُمْ لَا يُؤْمِنُونَ ﴿٢٠﴾ وَإِذَا قُرِئَ عَلَيْهِمُ ٱلْقُرْءَانُ لَا يَسْجُدُونَ ۩ ﴿٢١﴾',
      latin: 'Fa maa lahum laa yu\'minuun. Wa idzaa quri-a \'alaihimul-Qur\'aanu laa yasjuduun.',
      terjemah: 'Maka mengapa mereka tidak mau beriman? Dan apabila Al-Qur\'an dibacakan kepada mereka, mereka tidak mau bersujud.'
    },
    deepLearningApproach: {
      mindful: 'Merenungi makna merendahkan dahi yang mulia ke atas debu tanah: simbol ketundukan total manusia di hadapan Sang Maha Kuasa.',
      meaningful: 'Menghubungkan sujud syukur dengan tradisi mensyukuri kelulusan, prestasi lomba, atau kesehatan keluarga tanpa foya-foya.',
      joyful: 'Simulasi gerakan interaktif dan game tantangan skenario kilat fikih salat.'
    },
    materiDetail: [
      {
        heading: '1. Sujud Sahwi (سُجُودُ السَّهْوِ)',
        content: [
          'Sahwi artinya lupa atau lalai. Sujud sahwi dilakukan 2 kali sujud untuk mengganti kekurangan atau keraguan dalam salat.',
          'Sebab-sebab: Lupa tasyahud awal, ragu jumlah rakaat (ambil yang paling sedikit dan yakin), kelebihan rakaat/rukun karena lupa.',
          'Waktu pelaksanaan: Umumnya dilakukan sebelum salam setelah membaca tasyahud akhir, atau sesudah salam jika ada kondisi tertentu.'
        ],
        keyPoints: [
          'Bacaan Sujud Sahwi:',
          'سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو',
          '(Subhaana man laa yanaamu wa laa yas-huu)',
          'Artinya: Maha Suci Dzat yang tidak pernah tidur dan tidak pernah lupa.'
        ]
      },
      {
        heading: '2. Sujud Tilawah (سُجُودُ التِّلَاوَةِ)',
        content: [
          'Sujud yang dilakukan ketika membaca atau mendengar salah satu dari 15 ayat Sajdah dalam Al-Qur\'an (ditandai dengan simbol kubah/sajdah ۩).',
          'Bisa dilakukan di dalam salat (imam langsung sujud 1 kali lalu bangkit meneruskan bacaan) maupun di luar salat (berwudhu, takbir, sujud 1 kali, salam).'
        ],
        keyPoints: [
          'Bacaan Sujud Tilawah:',
          'سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ وَصَوَّرَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ، بِحَوْلِهِ وَقُوَّتِهِ، فَتَبَارَكَ اللهُ أَحْسَنُ الْخَالِقِينَ',
          '(Sajada wajhiya lilladzii khalaqahuu wa shawwarahuu, wa syaqqa sam\'ahuu wa basharahuu, bihaulihii wa quwwatihii, fatabaarakallaahu ahsanul-khaaliqiin).'
        ]
      },
      {
        heading: '3. Sujud Syukur (سُجُودُ الشُّكْرِ)',
        content: [
          'Sujud yang dilakukan secara spontan saat memperoleh kenikmatan besar (misal: juara lomba MTQ, sembuh dari sakit parah) atau terhindar dari marabahaya.',
          'Hukumnya sunnah muakkadah. Dilakukan HANYA di luar salat, sebanyak 1 kali sujud dengan menghadap kiblat.',
          'Bacaan doa: Membaca tasbih, tahmid, tahlil, takbir, serta doa syukur nikmat (QS. An-Naml: 19).'
        ],
        tabel: {
          headers: ['Aspek Perbandingan', 'Sujud Sahwi', 'Sujud Tilawah', 'Sujud Syukur'],
          rows: [
            ['Jumlah Sujud', '2 kali sujud', '1 kali sujud', '1 kali sujud'],
            ['Tempat Pelaksanaan', 'Di dalam salat (sebelum/sesudah salam)', 'Di dalam salat atau di luar salat', 'Hanya di luar salat'],
            ['Sebab Utama', 'Lupa atau ragu rukun/ab\'adh salat', 'Mendengar/membaca ayat sajdah', 'Mendapat nikmat besar / selamat'],
            ['Hukum', 'Sunnah Muakkadah', 'Sunnah', 'Sunnah']
          ]
        }
      }
    ]
  },
  {
    id: 5,
    slug: 'bab-5-bani-umayyah',
    babNumber: 'BAB 5',
    title: 'Sejarah Peradaban: Kejayaan Daulah Bani Umayyah',
    subTitle: 'Meneladani Semangat Keilmuan, Tata Kelola Pemerintahan, dan Kejayaan Islam di Damaskus & Andalusia',
    element: 'Sejarah Peradaban Islam',
    alokasiWaktu: '6 JP (3 Pekan Pertemuan)',
    tujuanPembelajaran: [
      'Menceritakan sejarah berdirinya Daulah Bani Umayyah di Damaskus hingga ekspansi ke Semenanjung Iberia (Andalusia).',
      'Mengidentifikasi khalifah-khalifah berprestasi dan kemajuan peradaban dalam bidang administrasi, ilmu pengetahuan, dan arsitektur.',
      'Mengambil ibrah (pelajaran berharga) untuk memupuk semangat literasi, riset, dan kejujuran bagi siswa SMPN 5 Brebes.'
    ],
    ringkasanMateri: 'Daulah Bani Umayyah didirikan oleh Muawiyah bin Abi Sufyan pada tahun 41 H / 661 M berpusat di Damaskus (Suriah). Dinasti ini memperluas wilayah Islam ke tiga benua dan melahirkan kemajuan besar di bidang kedokteran, arsitektur megah (seperti Masjid Umayyah), mata uang dinar Islam mandiri, serta puncak peradaban sains di Andalusia (Cordoba).',
    ayatDalil: {
      surah: 'QS. Yusuf: 111',
      arab: 'لَقَدْ كَانَ فِى قَصَصِهِمْ عِبْرَةٌۭ لِّأُو۟لِى ٱلْأَلْبَـٰبِ',
      latin: 'Laqad kaana fii qashashihim \'ibratul-li-ulil-albaab.',
      terjemah: 'Sungguh, pada kisah-kisah mereka itu terdapat pelajaran bagi orang-orang yang mempunyai akal.'
    },
    deepLearningApproach: {
      mindful: 'Menghidupkan imajinasi historis: Betapa gigihnya para ilmuwan Muslim menyeberangi lautan demi menyalakan lentera ilmu di Eropa yang saat itu gelap gulita.',
      meaningful: 'Menghubungkan kejayaan perpustakaan Cordoba dengan pentingnya budaya membaca buku di perpustakaan sekolah SMPN 5 Brebes.',
      joyful: 'Eksplorasi peta interaktif ekspansi peradaban Islam dan kuis sejarah berhadiah bintang prestasi.'
    },
    materiDetail: [
      {
        heading: '1. Berdirinya Daulah Bani Umayyah di Damaskus',
        content: [
          'Berdiri setelah peristiwa Amul Jama\'ah (Tahun Persatuan) pada tahun 41 H / 661 M, ketika Hasan bin Ali menyerahkan kepemimpinan demi persatuan umat Islam.',
          'Pendiri utamanya adalah Muawiyah bin Abi Sufyan, memindahkan pusat pemerintahan Islam dari Madinah ke Damaskus (Suriah).',
          'Sistem pemerintahan bertransformasi dari sistem syura (musyawarah khulafaur rasyidin) menjadi sistem monarki herediter (kekhalifahan turun-temurun).'
        ],
        keyPoints: [
          'Pemberlakuan pos surat ekspres (Barid) pertama yang menghubungkan seluruh pelosok negeri.',
          'Mencetak mata uang Dinar emas dan Dirham perak resmi bertuliskan kalimat Tauhid.'
        ]
      },
      {
        heading: '2. Khalifah-Khalifah Agung dan Prestasinya',
        content: [
          'Muawiyah bin Abi Sufyan: Pendiri dinasti, peletak dasar birokrasi, pembentuk armada laut Islam terkuat.',
          'Abdul Malik bin Marwan: Menjadikan bahasa Arab sebagai bahasa resmi administrasi negara (Arabisasi) dan membangun Kubah Shakhrah (Dome of the Rock) di Yerusalem.',
          'Al-Walid bin Abdul Malik: Membangun Masjid Agung Umayyah Damaskus, panti asuhan, rumah sakit kusta, dan kesejahteraan sosial.',
          'Umar bin Abdul Aziz: Khalifah yang paling adil dan zuhud, berhasil memberantas kemiskinan hingga sulit menemukan orang yang berhak menerima zakat.'
        ]
      },
      {
        heading: '3. Bani Umayyah II di Andalusia (Spanyol)',
        content: [
          'Setelah jatuhnya Damaskus ke tangan Bani Abbasiyah pada 750 M, pangeran muda Abdurrahman bin Muawiyah (Abdurrahman Ad-Dakhil / Sang Rajawali Quraisy) meloloskan diri ke Spanyol.',
          'Mendirikan Daulah Umayyah di Cordoba (Andalusia) pada 756 M.',
          'Andalusia menjadi kiblat sains dunia: kedokteran (Ibnu Rusyd, Al-Zahrawi penemu alat bedah modern), filsafat, astronomi, dan matematika yang menginspirasi kebangkitan Renaisans Eropa.'
        ],
        keyPoints: [
          'Perpustakaan Cordoba menyimpan lebih dari 400.000 jilid manuskrip ilmiah.',
          'Toleransi tinggi di Andalusia: kaum Muslim, Nasrani, dan Yahudi hidup rukun berdampingan menuntut ilmu.'
        ]
      }
    ]
  }
];

export const LKPD_LIST: LkpdQuestion[] = [
  {
    id: 1,
    babId: 1,
    babTitle: 'Bab 1: Hukum Alif Lam',
    judulTugas: 'Eksplorasi Tajwid Al-Qur\'an Mushaf Mandiri',
    stimulus: 'Bacalah Surah Asy-Syams (QS. 91: 1-10) atau Surah Al-Fatihah dengan khusyuk.',
    instruksi: 'Temukan minimal 3 lafadz ber-Alif Lam Syamsiyah dan 3 lafadz ber-Alif Lam Qamariyah, tuliskan dalam tabel berikut lengkap dengan alasannya.',
    pertanyaan: [
      'Tuliskan 3 lafadz Alif Lam Syamsiyah beserta huruf penyebabnya!',
      'Tuliskan 3 lafadz Alif Lam Qamariyah beserta huruf penyebabnya!',
      'Jelaskan mengapa kesalahan membaca huruf lam pada tajwid dapat mengubah ketartilan Al-Qur\'an?'
    ]
  },
  {
    id: 2,
    babId: 2,
    babTitle: 'Bab 2: Asmaul Husna',
    judulTugas: 'Buku Catatan Muraqabah Siswa GEMILANG',
    stimulus: 'Allah Maha Melihat (Al-Bashir) dan Maha Mengetahui (Al-\'Alim) segala gerak-gerik hamba-Nya.',
    instruksi: 'Tuliskan analisis studi kasus mengenai integritas seorang pelajar SMP Negeri 5 Brebes.',
    pertanyaan: [
      'Bagaimana cara menerapkan sifat Al-Khabir saat menerima pesan berantai di WhatsApp kelompok kelas?',
      'Berikan contoh nyata sikap As-Sami\' saat teman satu bangku sedang mencurahkan isi hatinya!',
      'Apa komitmen konkretmu agar tidak berbuat curang saat ujian semester gasal berlangsung?'
    ]
  },
  {
    id: 3,
    babId: 3,
    babTitle: 'Bab 3: Ikhlas, Sabar, dan Pemaaf',
    judulTugas: 'Studi Kasus Resolusi Konflik Sebaya',
    stimulus: 'Rizky diejek oleh temannya karena sepedanya kempes sepulang sekolah di depan gerbang SMPN 5 Brebes.',
    instruksi: 'Bantu Rizky merespons peristiwa tersebut dengan memadukan sifat ikhlas, sabar, dan pemaaf.',
    pertanyaan: [
      'Jelaskan tingkatan sabar mana yang harus diterapkan Rizky saat peristiwa tersebut terjadi!',
      'Bagaimana kalimat mulia yang hendaknya diucapkan Rizky saat memaafkan temannya?',
      'Apa dampak positif sikap pemaaf bagi keharmonisan lingkungan belajar di kelasmu?'
    ]
  },
  {
    id: 4,
    babId: 4,
    babTitle: 'Bab 4: Ketentuan Sujud',
    judulTugas: 'Matriks Keputusan Fikih Ibadah Salat',
    stimulus: 'Pak Sandi sedang mengimami salat Maghrib di musala sekolah, terjadi situasi lupa rakaat dan mendengar ayat sajdah.',
    instruksi: 'Lengkapi simulasi fikih sujud berikut sesuai dalil yang sahih.',
    pertanyaan: [
      'Jika makmum ragu apakah imam sudah rakaat kedua atau ketiga, bagaimana kaidah fikih menentukan jumlahnya?',
      'Tuliskan teks Arab dan latin bacaan Sujud Sahwi yang wajib dihafalkan!',
      'Kapan waktu yang paling utama untuk melaksanakan sujud syukur menurut sunnah Rasulullah SAW?'
    ]
  },
  {
    id: 5,
    babId: 5,
    babTitle: 'Bab 5: Daulah Bani Umayyah',
    judulTugas: 'Laporan Riset Mini Tokoh Peradaban Islam',
    stimulus: 'Kemajuan ilmu kedokteran dan perpustakaan di Cordoba membuktikan kejayaan peradaban Islam di Andalusia.',
    instruksi: 'Pilihlah salah satu khalifah atau ilmuwan Bani Umayyah lalu rangkum keteladanannya.',
    pertanyaan: [
      'Sebutkan 3 kebijakan penting Khalifah Umar bin Abdul Aziz yang membuatnya dijuluki Khulafaur Rasyidin kelima!',
      'Apa peran penting Abdurrahman Ad-Dakhil dalam membangun peradaban Islam di Spanyol?',
      'Nilai inspiratif apa yang dapat kamu petik untuk memajukan prestasi SMP Negeri 5 Brebes?'
    ]
  }
];

export const DEEP_LEARNING_PILLARS = [
  {
    title: 'Mindful Learning',
    subtitle: 'Pembelajaran Berkesadaran Penuh',
    description: 'Menumbuhkan kesadaran diri yang jernih, kepekaan rohani, keterhubungan batin dengan firman Allah, dan kehadiran seutuhnya dalam setiap langkah ibadah.',
    icon: 'Brain',
    color: 'emerald'
  },
  {
    title: 'Meaningful Learning',
    subtitle: 'Pembelajaran Bermakna & Otentik',
    description: 'Mengaitkan materi Al-Qur\'an, akidah, akhlak, dan sejarah dengan persoalan nyata siswa di SMPN 5 Brebes (anti-hoaks, anti-bullying, kejujuran ujian).',
    icon: 'HeartHandshake',
    color: 'amber'
  },
  {
    title: 'Joyful Learning',
    subtitle: 'Pembelajaran Menyenangkan & Menggembirakan',
    description: 'Menciptakan suasana belajar yang riang gembira melalui game susun ayat, tantangan kuis interaktif, video animasi, dan apresiasi positif atas kemajuan setiap siswa.',
    icon: 'Sparkles',
    color: 'teal'
  }
];
