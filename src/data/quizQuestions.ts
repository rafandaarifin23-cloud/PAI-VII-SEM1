import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Bab 1: Alif Lam
  {
    id: 1,
    babId: 1,
    babName: 'Bab 1: Hukum Alif Lam',
    question: 'Perhatikan potongan ayat berikut: وَالشَّمْسِ وَضُحَاهَا. Lafadz yang bergaris bawah mengandung hukum bacaan...',
    ayatText: 'وَالشَّمْسِ وَضُحَاهَا',
    options: [
      'Alif Lam Qamariyah karena huruf lam berharakat sukun',
      'Alif Lam Syamsiyah karena huruf lam bertemu dengan huruf syin bertasydid',
      'Idzhar Halqi karena bertemu huruf hamzah',
      'Ikhfa Haqiqi karena huruf lam dibaca samar'
    ],
    correctAnswer: 1,
    explanation: 'Pada lafadz وَالشَّمْسِ, Alif Lam bertemu dengan huruf Syin (ش) yang merupakan salah satu dari 14 huruf Syamsiyah. Bunyi huruf Lam melebur ke huruf Syin dan ditandai tanda tasydid.',
    levelHots: 'C2 - Pemahaman'
  },
  {
    id: 2,
    babId: 1,
    babName: 'Bab 1: Hukum Alif Lam',
    question: 'Di antara kumpulan huruf hijaiyah berikut, kelompok manakah yang seluruhnya merupakan huruf Alif Lam Qamariyah?',
    ayatText: 'اَبْغِ حَجَّكَ وَخَفْ عَقِيْمَهُ',
    options: [
      'ت، ث، د، ذ، ر',
      'س، ش، ص، ض، ط',
      'ا، ب، غ، ح، ج، ك، و',
      'ز، س، ل، ن، ظ'
    ],
    correctAnswer: 2,
    explanation: '14 huruf Qamariyah dirangkum dalam kalimat: "Abghi Hajjaka wa Khaf \'Aqiimahu" (ا ب غ ح ج ك و خ ف ع ق ي م هـ). Sedangkan huruf t, ts, d, dz, r, s, sy, sh, dh, th, z, l, n, zh adalah huruf Syamsiyah.',
    levelHots: 'C3 - Penerapan'
  },
  {
    id: 3,
    babId: 1,
    babName: 'Bab 1: Hukum Alif Lam',
    question: 'Siswa kelas VII SMP Negeri 5 Brebes sedang membaca QS. Al-Baqarah ayat 2: ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ. Cara membaca lafadz "الْكِتَابُ" yang benar menurut kaidah tajwid adalah...',
    ayatText: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ',
    options: [
      'Dileburkan menjadi "Ak-Kitaabu" tanpa melafalkan huruf lam',
      'Dibaca jelas dan terang "Al-Kitaabu" karena huruf kaf termasuk huruf Qamariyah',
      'Dibaca berdengung (ghunnah) selama 2 harakat',
      'Dibaca memantul (qalqalah) pada huruf lam'
    ],
    correctAnswer: 1,
    explanation: 'Lafadz الْكِتَابُ adalah Alif Lam Qamariyah (Idzhar Qamariyah). Huruf Lam berharakat sukun dan dibaca jelas tanpa dileburkan atau didengungkan.',
    levelHots: 'C3 - Penerapan'
  },

  // Bab 2: Asmaul Husna
  {
    id: 4,
    babId: 2,
    babName: 'Bab 2: Asmaul Husna',
    question: 'Ahmad selalu bersungguh-sungguh dan teliti saat memeriksa lembar jawaban tugas PAI miliknya sebelum dikumpulkan ke Pak Sandi Arifin. Sikap Ahmad mencerminkan peneladanan terhadap Asmaul Husna...',
    options: [
      'Al-Bashir (Maha Melihat)',
      'Al-Khabir (Maha Teliti / Waspada)',
      'As-Sami\' (Maha Mendengar)',
      'Al-Ghaffar (Maha Pengampun)'
    ],
    correctAnswer: 1,
    explanation: 'Al-Khabir bermakna Maha Teliti dan Maha Mengetahui hingga ke rincian terdalam. Meneladani Al-Khabir diwujudkan dengan sikap cermat, teliti, waspada, dan tidak gegabah.',
    levelHots: 'C3 - Penerapan'
  },
  {
    id: 5,
    babId: 2,
    babName: 'Bab 2: Asmaul Husna',
    question: 'Di era digital saat ini, marak terjadi ujaran kebencian dan hoaks di media sosial. Pelajar SMPN 5 Brebes yang meyakini sifat As-Sami\' dan Al-Bashir akan...',
    options: [
      'Ikut membagikan postingan yang viral tanpa memeriksa kebenarannya',
      'Menjaga lisan, santun bermedsos, dan selalu merasa diawasi Allah SWT di manapun berada',
      'Menggunakan akun anonim untuk mengomentari kekurangan teman sekelas',
      'Mengabaikan nasehat bapak dan ibu guru karena merasa bebas berekspresi'
    ],
    correctAnswer: 1,
    explanation: 'As-Sami\' (Maha Mendengar) dan Al-Bashir (Maha Melihat) menuntut kesadaran bahwa seluruh aktivitas verbal dan visual kita, termasuk ketikan jari di ponsel, diawasi dan dicatat oleh malaikat Allah.',
    levelHots: 'C4 - Analisis'
  },
  {
    id: 6,
    babId: 2,
    babName: 'Bab 2: Asmaul Husna',
    question: 'Perhatikan firman Allah SWT: وَعِندَهُۥ مَفَاتِحُ ٱلْغَيْبِ لَا يَعْلَمُهَآ إِلَّا هُوَ (QS. Al-An\'am: 59). Ayat tersebut menegaskan salah satu Asmaul Husna yaitu...',
    ayatText: 'وَعِندَهُۥ مَفَاتِحُ ٱلْغَيْبِ لَا يَعْلَمُهَآ إِلَّا هُوَ',
    options: [
      'Al-\'Alim (Maha Mengetahui segala yang gaib maupun yang nyata)',
      'As-Salam (Maha Memberi Kesejahteraan)',
      'Al-Khaliq (Maha Pencipta)',
      'Al-Wahhab (Maha Pemberi Karunia)'
    ],
    correctAnswer: 0,
    explanation: 'Kunci-kunci perbendaharaan yang gaib hanya diketahui oleh Allah SWT. Ini merupakan dalil naqli dari Asmaul Husna Al-\'Alim (Maha Mengetahui).',
    levelHots: 'C2 - Pemahaman'
  },

  // Bab 3: Ikhlas Sabar Pemaaf
  {
    id: 7,
    babId: 3,
    babName: 'Bab 3: Ikhlas, Sabar & Pemaaf',
    question: 'Farhan rajin membersihkan musala SMPN 5 Brebes setiap jam istirahat. Ia tetap bersemangat membersihkan tempat wudhu meskipun teman-temannya tidak memujinya atau bahkan tidak ada yang melihat. Sikap Farhan menunjukkan ciri orang yang...',
    options: [
      'Riya\' (ingin dilihat orang lain)',
      'Sum\'ah (ingin didengar kebaikannya)',
      'Ikhlas (murni mengharapkan ridha Allah semata)',
      'Nifaq (bermuka dua di hadapan guru)'
    ],
    correctAnswer: 2,
    explanation: 'Ciri utama pribadi ikhlas adalah konsistensi beramal saleh baik saat dipuji maupun dicela, baik saat ada orang maupun dalam kesendirian.',
    levelHots: 'C3 - Penerapan'
  },
  {
    id: 8,
    babId: 3,
    babName: 'Bab 3: Ikhlas, Sabar & Pemaaf',
    question: 'Ketika seorang pelajar menahan diri dari ajakan temannya untuk membolos sekolah dan merokok di luar pagar, pelajar tersebut sedang mempraktikkan dimensi sabar dalam kategori...',
    options: [
      'Sabar dalam menghadapi musibah alam',
      'Sabar dalam menjauhi kemaksiatan dan larangan Allah SWT',
      'Sabar dalam menuntut balas dendam',
      'Sabar saat dipuji banyak orang'
    ],
    correctAnswer: 1,
    explanation: 'Sabar terbagi tiga: sabar dalam ketaatan, sabar dalam menjauhi kemaksiatan, dan sabar atas ketetapan takdir/musibah. Menolak godaan membolos dan berbuat buruk adalah sabar menjauhi maksiat.',
    levelHots: 'C4 - Analisis'
  },
  {
    id: 9,
    babId: 3,
    babName: 'Bab 3: Ikhlas, Sabar & Pemaaf',
    question: 'Mengapa Islam sangat menganjurkan seorang mukmin menjadi pribadi yang pemaaf (Al-\'Afwu) dibandingkan membalas dendam?',
    options: [
      'Karena memaafkan menandakan bahwa kita orang yang pasrah dan lemah',
      'Karena sikap pemaaf membersihkan hati dari racun kebencian dan merajut ukhuwah islamiyah',
      'Agar orang yang berbuat salah merasa sombong dan menang',
      'Supaya kita mendapat imbalan uang dari pihak yang bersalah'
    ],
    correctAnswer: 1,
    explanation: 'Memaafkan adalah cermin keagungan jiwa yang memutus rantai permusuhan, menyembuhkan batin dari racun amarah, dan mendatangkan ampunan dari Allah SWT (QS. An-Nur: 22).',
    levelHots: 'C4 - Analisis'
  },

  // Bab 4: Ketentuan Sujud
  {
    id: 10,
    babId: 4,
    babName: 'Bab 4: Ketentuan Sujud',
    question: 'Dalam salat Isya berjamaah, imam langsung bangkit ke rakaat ketiga tanpa melakukan tasyahud awal. Sebelum salam, imam melakukan sujud dua kali lalu membaca tasyahud akhir dan salam. Sujud yang dilakukan imam disebut...',
    options: [
      'Sujud Tilawah',
      'Sujud Syukur',
      'Sujud Sahwi',
      'Sujud Rukun'
    ],
    correctAnswer: 2,
    explanation: 'Sujud Sahwi disunnahkan ketika terjadi kelupaan atau keraguan dalam salat, seperti tertinggalnya tasyahud awal (sunnah ab\'adh) atau ragu jumlah rakaat. Dilakukan 2 kali sebelum salam.',
    levelHots: 'C3 - Penerapan'
  },
  {
    id: 11,
    babId: 4,
    babName: 'Bab 4: Ketentuan Sujud',
    question: 'Lafadz bacaan doa saat melaksanakan Sujud Sahwi yang diajarkan para ulama adalah...',
    ayatText: 'سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو',
    options: [
      'Subhaana rabbiyal a\'laa wa bihamdih',
      'Subhaana man laa yanaamu wa laa yas-huu',
      'Sajada wajhiya lilladzii khalaqahuu wa shawwarahuu',
      'Rabbighfir lii warhamnii wajburnii'
    ],
    correctAnswer: 1,
    explanation: 'Doa Sujud Sahwi berbunyi: "Subhaana man laa yanaamu wa laa yas-huu" (Maha Suci Dzat yang tidak pernah tidur dan tidak pernah lupa).',
    levelHots: 'C2 - Pemahaman'
  },
  {
    id: 12,
    babId: 4,
    babName: 'Bab 4: Ketentuan Sujud',
    question: 'Tim futsal SMP Negeri 5 Brebes berhasil memenangkan kejuaraan antarsekolah se-Kabupaten Brebes. Spontan seluruh pemain dan pembina sujud mencium lapangan sambil bertakbir dan bertahmid. Sujud yang mereka lakukan adalah...',
    options: [
      'Sujud Sahwi karena lupa diri',
      'Sujud Syukur sebagai ekspresi terima kasih atas anugerah nikmat kemenangan',
      'Sujud Tilawah karena mendengar suara peluit wasit',
      'Sujud Rukun salat yang wajib diganti'
    ],
    correctAnswer: 1,
    explanation: 'Sujud Syukur dilakukan spontan 1 kali sujud di luar salat saat mendapatkan kenikmatan besar atau terhindar dari mara bahaya, menghadap kiblat dan mengagungkan Allah SWT.',
    levelHots: 'C3 - Penerapan'
  },

  // Bab 5: Bani Umayyah
  {
    id: 13,
    babId: 5,
    babName: 'Bab 5: Daulah Bani Umayyah',
    question: 'Daulah Bani Umayyah resmi berdiri pada tahun 41 Hijriah (661 M) dengan pusat ibukota berada di kota...',
    options: [
      'Madinah Al-Munawwarah',
      'Damaskus (Suriah)',
      'Baghdad (Irak)',
      'Kairo (Mesir)'
    ],
    correctAnswer: 1,
    explanation: 'Muawiyah bin Abi Sufyan memindahkan pusat kekhalifahan Islam dari Madinah ke Damaskus (wilayah Syam/Suriah), menandai berdirinya Daulah Bani Umayyah I.',
    levelHots: 'C2 - Pemahaman'
  },
  {
    id: 14,
    babId: 5,
    babName: 'Bab 5: Daulah Bani Umayyah',
    question: 'Salah satu khalifah Bani Umayyah yang terkenal sangat adil, zuhud, mencintai ulama, dan hidup sederhana hingga dijuluki Khulafaur Rasyidin kelima adalah...',
    options: [
      'Muawiyah bin Abi Sufyan',
      'Abdul Malik bin Marwan',
      'Al-Walid bin Abdul Malik',
      'Umar bin Abdul Aziz'
    ],
    correctAnswer: 3,
    explanation: 'Khalifah Umar bin Abdul Aziz memimpin dengan keadilan luar biasa, menyejahterakan rakyat hingga baitul mal penuh dan tidak ada yang berhak menerima zakat, serta memberantas korupsi.',
    levelHots: 'C3 - Penerapan'
  },
  {
    id: 15,
    babId: 5,
    babName: 'Bab 5: Daulah Bani Umayyah',
    question: 'Kejayaan Islam di Spanyol (Andalusia) pada masa Daulah Umayyah II di Cordoba memberikan warisan berharga bagi dunia berupa...',
    options: [
      'Penemuan senjata nuklir dan mesin perang modern',
      'Perpustakaan megah Cordoba dengan ratusan ribu buku dan kemajuan sains kedokteran yang menerangi Eropa',
      'Pemberlakuan upeti yang memberatkan masyarakat non-muslim',
      'Larangan mempelajari ilmu pengetahuan sains umum'
    ],
    correctAnswer: 1,
    explanation: 'Cordoba di era Daulah Umayyah menjadi pusat ilmu peradaban dunia dengan perpustakaan raksasa, universitas, dan tokoh besar sains (seperti Ibnu Rusyd dan Al-Zahrawi) yang menginspirasi Renaisans.',
    levelHots: 'C4 - Analisis'
  }
];
