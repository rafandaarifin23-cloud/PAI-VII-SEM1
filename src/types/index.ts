export interface TeacherProfile {
  name: string;
  nip: string;
  title: string;
  school: string;
  slogan: string;
  subject: string;
  classGrade: string;
  semester: string;
  email: string;
  motto: string;
  bio: string;
}

export interface Chapter {
  id: number;
  slug: string;
  babNumber: string;
  title: string;
  subTitle: string;
  element: 'Al-Qur\'an Hadis' | 'Akidah' | 'Akhlak' | 'Fikih' | 'Sejarah Peradaban Islam';
  alokasiWaktu: string;
  tujuanPembelajaran: string[];
  ringkasanMateri: string;
  ayatDalil?: {
    surah: string;
    arab: string;
    latin: string;
    terjemah: string;
  };
  materiDetail: {
    heading: string;
    content: string[];
    keyPoints?: string[];
    tabel?: {
      headers: string[];
      rows: string[][];
    };
    contohKasus?: {
      judul: string;
      deskripsi: string;
      solusiHikmah: string;
    };
  }[];
  deepLearningApproach: {
    mindful: string;
    meaningful: string;
    joyful: string;
  };
}

export interface QuizQuestion {
  id: number;
  babId: number;
  babName: string;
  question: string;
  ayatText?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  levelHots: 'C2 - Pemahaman' | 'C3 - Penerapan' | 'C4 - Analisis' | 'C5 - Evaluasi';
}

export interface VerseWordItem {
  id: string;
  textArabic: string;
  transliteration: string;
  order: number;
}

export interface VersePuzzleData {
  id: number;
  surahName: string;
  ayahNumber: number;
  fullArabic: string;
  fullTranslation: string;
  words: VerseWordItem[];
  theme: string;
}

export interface TajwidCard {
  id: number;
  wordArabic: string;
  transliteration: string;
  type: 'syamsiyah' | 'qamariyah';
  huruf: string;
  penjelasan: string;
}

export interface AsmaulHusnaMatchItem {
  id: number;
  namaArab: string;
  namaLatin: string;
  arti: string;
  implementasiGemilang: string;
}

export interface SujudScenario {
  id: number;
  scenario: string;
  jawabanTepat: 'Sujud Sahwi' | 'Sujud Tilawah' | 'Sujud Syukur';
  alasanFikih: string;
  bacaanDoa: string;
  bacaanArab: string;
}

export interface ReflectionEntry {
  id: string;
  timestamp: string;
  namaSiswa: string;
  kelas: string;
  babId: number;
  tigaHalDipahami: string;
  duaHalBermakna: string;
  satuHalPerluBimbingan: string;
  moodBelajar: 'sangat_semangat' | 'paham_senang' | 'cukup_paham' | 'butuh_bimbingan';
  komitmenAkhlak: string;
}

export interface LkpdQuestion {
  id: number;
  babId: number;
  babTitle: string;
  judulTugas: string;
  stimulus: string;
  instruksi: string;
  pertanyaan: string[];
}
