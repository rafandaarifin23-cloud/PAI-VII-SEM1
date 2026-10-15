import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Volume2, Video, Image, FileText, CheckCircle2, Download, Printer, ArrowRight, Sparkles } from 'lucide-react';
import { LKPD_LIST } from '../data/curriculumData';
import { soundEffects } from '../utils/audioEffects';

export const MediaPembelajaran: React.FC = () => {
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'infografis' | 'flashcards' | 'lkpd' | 'audio'>('video');

  // Flashcards State
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Video Simulator State
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [selectedVideoTopic, setSelectedVideoTopic] = useState(0);

  // LKPD State
  const [selectedLkpdIndex, setSelectedLkpdIndex] = useState(0);
  const [lkpdAnswers, setLkpdAnswers] = useState<Record<string, string>>({});
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('VII-A');
  const [isSubmittedLkpd, setIsSubmittedLkpd] = useState(false);

  const flashcardsData = [
    {
      kategori: 'Bab 1 · Tajwid',
      pertanyaan: 'Apa perbedaan mendasar antara Alif Lam Syamsiyah dan Qamariyah dalam mushaf?',
      jawaban: 'Alif Lam Syamsiyah: huruf setelah lam bertasydid dan lam tidak berharakat (dileburkan). Alif Lam Qamariyah: huruf lam berharakat sukun dan dibaca jelas (idzhar).'
    },
    {
      kategori: 'Bab 1 · Tajwid',
      pertanyaan: 'Sebutkan singkatan kalimat untuk mengingat 14 huruf Alif Lam Qamariyah!',
      jawaban: 'اَبْغِ حَجَّكَ وَخَفْ عَقِيْمَهُ (Abghi Hajjaka wa Khaf \'Aqiimahu).'
    },
    {
      kategori: 'Bab 2 · Akidah',
      pertanyaan: 'Jelaskan perbedaan makna Al-\'Alim dan Al-Khabir!',
      jawaban: 'Al-\'Alim: Maha Mengetahui segala sesuatu secara luas. Al-Khabir: Maha Mengetahui hingga ke rincian terdalam, hal batiniah, dan sangat teliti.'
    },
    {
      kategori: 'Bab 3 · Akhlak',
      pertanyaan: 'Sebutkan 3 dimensi kesabaran menurut para ulama!',
      jawaban: '1. Sabar dalam ketaatan beribadah. 2. Sabar dalam menahan diri dari kemaksiatan. 3. Sabar dalam menghadapi takdir/musibah.'
    },
    {
      kategori: 'Bab 4 · Fikih',
      pertanyaan: 'Kapan dan berapa kali Sujud Sahwi dilaksanakan?',
      jawaban: 'Dilakukan 2 kali sujud, umumnya sebelum salam (setelah tasyahud akhir), saat lupa rukun/sunnah ab\'adh atau ragu jumlah rakaat salat.'
    },
    {
      kategori: 'Bab 5 · Sejarah',
      pertanyaan: 'Siapakah pangeran Bani Umayyah yang mendirikan peradaban Islam di Andalusia (Spanyol)?',
      jawaban: 'Abdurrahman bin Muawiyah, yang bergelar Abdurrahman Ad-Dakhil (Sang Rajawali Quraisy), mendirikan emirat di Cordoba pada 756 M.'
    }
  ];

  const videoLessons = [
    {
      title: 'Hukum Bacaan Alif Lam Syamsiyah & Qamariyah',
      bab: 'Bab 1',
      durasi: '12:45',
      summary: 'Penjelasan detail makharijul huruf, 14 huruf syamsiyah dan qamariyah, serta contoh bacaan tartil dalam QS. Asy-Syams dan Al-Baqarah.',
      takeaways: [
        'Idgham Syamsiyah meleburkan lam ke huruf berikutnya yang bertasydid',
        'Idzhar Qamariyah menampakkan bunyi huruf lam sukun dengan jelas',
        'Latihan tilawah mandiri dengan standar tartil'
      ]
    },
    {
      title: 'Meneladani 4 Asmaul Husna: Al-\'Alim, Al-Khabir, As-Sami\', Al-Bashir',
      bab: 'Bab 2',
      durasi: '14:20',
      summary: 'Internalisasi nilai muraqabah (merasa selalu dalam pengawasan Allah) dalam kehidupan remaja digital di SMP Negeri 5 Brebes.',
      takeaways: [
        'Menjaga kejujuran saat ujian tanpa pengawas',
        'Etika bermedia sosial mencerminkan keimanan pada As-Sami\' dan Al-Bashir',
        'Menjadi insan pembelajar yang haus ilmu meneladani Al-\'Alim'
      ]
    },
    {
      title: 'Praktik dan Hikmah Sujud Sahwi, Tilawah, dan Syukur',
      bab: 'Bab 4',
      durasi: '15:10',
      summary: 'Peragaan tata cara sujud sahwi dalam salat, sujud tilawah saat mendengar ayat sajdah, dan sujud syukur di luar salat.',
      takeaways: [
        'Sujud sahwi menambal kelupaan rakaat atau tasyahud awal',
        'Sujud syukur spontan 1 kali sujud atas nikmat besar',
        'Hafalan doa masing-masing sujud sesuai sunnah'
      ]
    }
  ];

  const audioDoaList = [
    {
      judul: 'Doa Sujud Sahwi',
      arab: 'سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو',
      latin: 'Subhaana man laa yanaamu wa laa yas-huu',
      arti: 'Maha Suci Dzat yang tidak pernah tidur dan tidak pernah lupa.'
    },
    {
      judul: 'Doa Sujud Tilawah',
      arab: 'سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ',
      latin: 'Sajada wajhiya lilladzii khalaqahuu wa shawwarahuu, wa syaqqa sam\'ahuu wa basharahuu bihaulihii wa quwwatih',
      arti: 'Bersujud wajahku kepada Dzat yang menciptakannya, membentuknya, dan membuka pendengaran serta penglihatannya dengan daya dan kekuatan-Nya.'
    },
    {
      judul: 'Doa Syukur Nikmat (QS. An-Naml: 19)',
      arab: 'رَبِّ أَوْزِعْنِىٓ أَنْ أَشْكُرَ نِعْمَتَكَ ٱلَّتِىٓ أَنْعَمْتَ عَلَىَّ وَعَلَىٰ وَٰلِدَىَّ',
      latin: 'Rabbi awzi\'nii an asykura ni\'matakal-latii an\'amta \'alayya wa \'alaa waalidayya',
      arti: 'Ya Tuhanku, anugerahkanlah aku ilham untuk tetap mensyukuri nikmat-Mu yang telah Engkau anugerahkan kepadaku dan kepada kedua orang tuaku.'
    }
  ];

  const handleNextCard = () => {
    setIsCardFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % flashcardsData.length);
    soundEffects.playClick();
  };

  const handlePrevCard = () => {
    setIsCardFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + flashcardsData.length) % flashcardsData.length);
    soundEffects.playClick();
  };

  const handleFlipCard = () => {
    setIsCardFlipped(!isCardFlipped);
    soundEffects.playClick();
  };

  const handleLkpdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      alert('Mohon isi nama siswa terlebih dahulu.');
      return;
    }
    setIsSubmittedLkpd(true);
    soundEffects.playVictory();
  };

  const activeLkpd = LKPD_LIST[selectedLkpdIndex];

  return (
    <div className="space-y-8">
      {/* Media Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            Multimedia Terpadu · Deep Learning
          </div>
          <h1 className="text-2xl font-bold text-slate-900">
            Variasi Media Pembelajaran PAI-BP
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Microlearning video interaktif, infografis visual, audio pelafalan doa, kartu pintar hafalan, dan LKPD digital.
          </p>
        </div>
      </div>

      {/* Segmented Media Controls */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {[
          { id: 'video', label: 'Microlearning Video', icon: Video },
          { id: 'flashcards', label: 'Kartu Pintar Hafalan', icon: Sparkles },
          { id: 'audio', label: 'Audio Doa & Tajwid', icon: Volume2 },
          { id: 'infografis', label: 'Infografis & Bagan Visual', icon: Image },
          { id: 'lkpd', label: 'LKPD Digital Interaktif', icon: FileText },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeMediaTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveMediaTab(tab.id as typeof activeMediaTab);
                soundEffects.playClick();
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. VIDEO MICROLEARNING */}
      {activeMediaTab === 'video' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Player Screen (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs space-y-5 p-6">
            <div className="relative aspect-video bg-slate-950 rounded-xl overflow-hidden flex flex-col items-center justify-center text-white border border-slate-800">
              <img
                src="/src/assets/images/hero_islamic_education_gemilang_1792030156291.jpg"
                alt="Video thumbnail"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-40 absolute inset-0"
              />
              <div className="relative z-10 text-center p-6 space-y-3 max-w-md">
                <span className="text-[10px] uppercase tracking-widest font-bold bg-emerald-700/80 px-2.5 py-1 rounded">
                  {videoLessons[selectedVideoTopic].bab} · Media Interaktif
                </span>
                <h3 className="text-lg sm:text-xl font-bold">
                  {videoLessons[selectedVideoTopic].title}
                </h3>
                <p className="text-xs text-slate-300">
                  Pembelajaran Audio Visual bersama Sandi Arifin, S.Pd.I (SMPN 5 Brebes)
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsPlayingVideo(!isPlayingVideo);
                      soundEffects.playClick();
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-transform hover:scale-105 cursor-pointer shadow-md"
                  >
                    {isPlayingVideo ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isPlayingVideo ? 'Jeda Simulasi' : 'Putar Video Microlearning'}</span>
                  </button>
                </div>
              </div>

              {/* Fake progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800">
                <div
                  className={`h-full bg-emerald-500 transition-all duration-300 ${
                    isPlayingVideo ? 'w-2/3 animate-pulse' : 'w-1/4'
                  }`}
                />
              </div>
            </div>

            {/* Video Lesson Description */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900">
                Rangkuman Intisari Video:
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {videoLessons[selectedVideoTopic].summary}
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Poin Kunci Pembelajaran (Key Takeaways):
                </span>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                  {videoLessons[selectedVideoTopic].takeaways.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Video Playlist Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm">
              Daftar Modul Video Semester Gasal
            </h3>
            <div className="space-y-2">
              {videoLessons.map((v, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedVideoTopic(idx);
                    setIsPlayingVideo(false);
                    soundEffects.playClick();
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer space-y-1 ${
                    selectedVideoTopic === idx
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-bold text-emerald-800">{v.bab}</span>
                    <span className="font-mono">{v.durasi}</span>
                  </div>
                  <h4 className="text-xs font-bold leading-tight">{v.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. FLASHCARDS HAFALAN INTERAKTIF */}
      {activeMediaTab === 'flashcards' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              Kartu Pintar Hafalan & Konsep PAI-BP
            </h3>
            <p className="text-xs text-slate-500">
              Klik kartu untuk membalik dan melihat jawaban. Gunakan untuk muroja'ah mandiri.
            </p>
          </div>

          {/* Flashcard Box */}
          <div
            onClick={handleFlipCard}
            className="w-full min-h-[260px] bg-gradient-to-br from-white to-slate-50 rounded-2xl border-2 border-emerald-200 p-8 flex flex-col justify-between items-center text-center cursor-pointer shadow-sm hover:border-emerald-400 transition-all select-none"
          >
            <div className="flex items-center justify-between w-full text-xs text-slate-500 border-b border-slate-100 pb-3">
              <span className="font-semibold text-emerald-800">
                {flashcardsData[currentCardIndex].kategori}
              </span>
              <span className="font-mono">
                {currentCardIndex + 1} / {flashcardsData.length}
              </span>
            </div>

            <div className="my-auto py-4 space-y-3">
              {!isCardFlipped ? (
                <>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                    Pertanyaan:
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    "{flashcardsData[currentCardIndex].pertanyaan}"
                  </p>
                  <span className="text-xs text-emerald-700 underline font-medium block pt-2">
                    (Klik untuk melihat jawaban)
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[11px] uppercase tracking-wider text-emerald-700 font-bold block">
                    Kunci Jawaban & Hikmah:
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
                    {flashcardsData[currentCardIndex].jawaban}
                  </p>
                </>
              )}
            </div>

            <div className="text-[11px] text-slate-400">
              Sentuh atau klik kartu untuk membalik
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevCard}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
            >
              ← Kartu Sebelumnya
            </button>
            <button
              onClick={handleFlipCard}
              className="px-5 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg cursor-pointer"
            >
              {isCardFlipped ? 'Tampilkan Soal' : 'Balik Kartu'}
            </button>
            <button
              onClick={handleNextCard}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
            >
              Kartu Berikutnya →
            </button>
          </div>
        </div>
      )}

      {/* 3. AUDIO DOA & PELAFALAN */}
      {activeMediaTab === 'audio' && (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              Audio Pelafalan Doa & Tajwid
            </h3>
            <p className="text-xs text-slate-500">
              Dengarkan pelafalan doa sujud dan dalil Al-Qur'an secara fasih dan berulang-ulang.
            </p>
          </div>

          <div className="space-y-4">
            {audioDoaList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.judul}
                  </h4>
                  <button
                    onClick={() => {
                      soundEffects.playCorrect();
                      soundEffects.speakIndonesian(`${item.judul}. Artinya: ${item.arti}`);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4 text-emerald-800" />
                    <span>Dengarkan Makna</span>
                  </button>
                </div>

                <p className="font-arabic text-xl sm:text-2xl text-emerald-950 text-right leading-loose">
                  {item.arab}
                </p>

                <div className="text-xs sm:text-sm space-y-1 border-t border-slate-100 pt-3 text-slate-700">
                  <p className="font-medium text-emerald-900 italic">{item.latin}</p>
                  <p className="text-slate-600">"{item.arti}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. INFOGRAFIS & BAGAN VISUAL */}
      {activeMediaTab === 'infografis' && (
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              Bagan Visual & Infografis Konsep
            </h3>
            <p className="text-xs text-slate-500">
              Peta konsep interaktif memudahkan pemahaman struktur hukum tajwid dan fikih sujud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Infografis Tajwid */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
              <h4 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
                Peta Hukum Alif Lam (ال)
              </h4>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 space-y-1">
                  <strong className="text-amber-900 block font-bold">1. Alif Lam Syamsiyah (14 Huruf):</strong>
                  <p className="text-slate-600">
                    ط, ث, ص, ر, ت, ض, ذ, ن, د, س, ظ, ز, ش, ل
                  </p>
                  <span className="text-[11px] text-amber-800 font-semibold block">
                    Ciri: Ada tanda Tasydid pada huruf berikutnya, Lam melebur.
                  </span>
                </div>

                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 space-y-1">
                  <strong className="text-emerald-900 block font-bold">2. Alif Lam Qamariyah (14 Huruf):</strong>
                  <p className="text-slate-600">
                    ا, ب, غ, ح, ج, ك, و, خ, ف, ع, ق, ي, م, هـ (ابغ حجك وخف عقيمه)
                  </p>
                  <span className="text-[11px] text-emerald-800 font-semibold block">
                    Ciri: Ada tanda Sukun pada huruf Lam, Lam terbaca jelas.
                  </span>
                </div>
              </div>
            </div>

            {/* Infografis Sujud */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
              <h4 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
                Peta Ketentuan 3 Sujud Sunnah
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                  <strong className="text-slate-900">Sujud Sahwi (2x Sujud):</strong>
                  <p className="text-slate-600">Di dalam salat sebelum/sesudah salam saat lupa tasyahud awal atau ragu rakaat.</p>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                  <strong className="text-slate-900">Sujud Tilawah (1x Sujud):</strong>
                  <p className="text-slate-600">Di dalam atau luar salat saat membaca atau mendengar 15 ayat Sajdah.</p>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                  <strong className="text-slate-900">Sujud Syukur (1x Sujud):</strong>
                  <p className="text-slate-600">Hanya di luar salat saat mendapat anugerah nikmat besar atau terhindar musibah.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. LKPD DIGITAL INTERAKTIF */}
      {activeMediaTab === 'lkpd' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Lembar Kerja Peserta Didik Digital (LKPD)
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {activeLkpd.judulTugas}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {activeLkpd.babTitle} · Guru: Sandi Arifin, S.Pd.I
              </p>
            </div>

            {/* Select Bab for LKPD */}
            <select
              value={selectedLkpdIndex}
              onChange={(e) => {
                setSelectedLkpdIndex(Number(e.target.value));
                setIsSubmittedLkpd(false);
              }}
              className="text-xs font-semibold px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-800 focus:outline-none"
            >
              {LKPD_LIST.map((l, idx) => (
                <option key={l.id} value={idx}>
                  {l.babTitle}
                </option>
              ))}
            </select>
          </div>

          {/* LKPD Prompt & Form */}
          <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2">
            <span className="text-xs font-bold text-emerald-900 uppercase">Stimulus Kasus:</span>
            <p className="text-xs sm:text-sm text-slate-700">{activeLkpd.stimulus}</p>
            <p className="text-xs text-slate-600 font-medium">
              <strong>Instruksi Pengerjaan:</strong> {activeLkpd.instruksi}
            </p>
          </div>

          <form onSubmit={handleLkpdSubmit} className="space-y-4">
            {/* Student Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap Siswa:
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Contoh: Muhammad Rafanda"
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kelas di SMPN 5 Brebes:
                </label>
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none"
                >
                  <option value="VII-A">Kelas VII-A</option>
                  <option value="VII-B">Kelas VII-B</option>
                  <option value="VII-C">Kelas VII-C</option>
                  <option value="VII-D">Kelas VII-D</option>
                  <option value="VII-E">Kelas VII-E</option>
                  <option value="VII-F">Kelas VII-F</option>
                </select>
              </div>
            </div>

            {/* Questions to answer */}
            <div className="space-y-4 pt-2">
              {activeLkpd.pertanyaan.map((q, qIdx) => {
                const key = `lkpd_${activeLkpd.id}_q${qIdx}`;
                return (
                  <div key={qIdx} className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800">
                      Pertanyaan {qIdx + 1}: {q}
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tuliskan analisis jawabanmu secara mendalam (Deep Learning)..."
                      value={lkpdAnswers[key] || ''}
                      onChange={(e) =>
                        setLkpdAnswers({
                          ...lkpdAnswers,
                          [key]: e.target.value,
                        })
                      }
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                );
              })}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500">
                Jawaban tersimpan otomatis pada gawai siswa.
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer"
              >
                Kirim Lembar Kerja Siswa
              </button>
            </div>
          </form>

          {/* Submission Success Alert */}
          {isSubmittedLkpd && (
            <div className="p-4 bg-emerald-100/70 border border-emerald-300 rounded-xl text-emerald-900 text-xs sm:text-sm space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <span>LKPD Berhasil Disimpan & Divalidasi!</span>
              </div>
              <p>
                Alhamdulillah, lembar kerja atas nama <strong>{studentName} ({studentClass})</strong> telah terekam. Guru pengampu (Sandi Arifin, S.Pd.I) mengapresiasi kesungguhan belajarmu.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-800 text-white rounded-md cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak / Simpan PDF Lembar Jawaban</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
