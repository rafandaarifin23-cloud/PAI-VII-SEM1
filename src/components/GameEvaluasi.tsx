import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, RotateCcw, Check, HelpCircle, ArrowRight, Star, Volume2 } from 'lucide-react';
import { VERSE_PUZZLE_DATA, TAJWID_CARDS_DATA, ASMAUL_HUSNA_ITEMS, SUJUD_SCENARIOS_DATA } from '../data/gameData';
import { soundEffects } from '../utils/audioEffects';

export const GameEvaluasi: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<'susun_ayat' | 'sortir_tajwid' | 'asmaul_husna' | 'skenario_sujud'>('susun_ayat');

  // --- GAME 1: SUSUN AYAT STATE ---
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const currentVerse = VERSE_PUZZLE_DATA[currentVerseIndex];
  const [availableWords, setAvailableWords] = useState<typeof currentVerse.words>([]);
  const [selectedWords, setSelectedWords] = useState<typeof currentVerse.words>([]);
  const [verseCompleted, setVerseCompleted] = useState(false);
  const [verseError, setVerseError] = useState(false);
  const [verseScore, setVerseScore] = useState(0);

  // Shuffle words when verse changes
  useEffect(() => {
    if (currentVerse) {
      const shuffled = [...currentVerse.words].sort(() => Math.random() - 0.5);
      setAvailableWords(shuffled);
      setSelectedWords([]);
      setVerseCompleted(false);
      setVerseError(false);
    }
  }, [currentVerseIndex, selectedGame]);

  const handleSelectWord = (word: typeof currentVerse.words[0]) => {
    soundEffects.playClick();
    setAvailableWords((prev) => prev.filter((w) => w.id !== word.id));
    setSelectedWords((prev) => [...prev, word]);
    setVerseError(false);
  };

  const handleRemoveWord = (word: typeof currentVerse.words[0]) => {
    soundEffects.playClick();
    setSelectedWords((prev) => prev.filter((w) => w.id !== word.id));
    setAvailableWords((prev) => [...prev, word]);
    setVerseError(false);
  };

  const handleCheckVerse = () => {
    const isCorrect = selectedWords.every((w, idx) => w.order === idx) && selectedWords.length === currentVerse.words.length;
    if (isCorrect) {
      soundEffects.playCorrect();
      setVerseCompleted(true);
      setVerseError(false);
      setVerseScore((s) => s + 25);
    } else {
      soundEffects.playWrong();
      setVerseError(true);
    }
  };

  const handleResetVerse = () => {
    soundEffects.playClick();
    const shuffled = [...currentVerse.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedWords([]);
    setVerseCompleted(false);
    setVerseError(false);
  };

  const handleNextVerse = () => {
    if (currentVerseIndex < VERSE_PUZZLE_DATA.length - 1) {
      setCurrentVerseIndex((idx) => idx + 1);
    } else {
      soundEffects.playVictory();
      setCurrentVerseIndex(0);
    }
  };

  // --- GAME 2: SORTIR TAJWID STATE ---
  const [tajwidCardIndex, setTajwidCardIndex] = useState(0);
  const [tajwidScore, setTajwidScore] = useState(0);
  const [tajwidStreak, setTajwidStreak] = useState(0);
  const [lastTajwidFeedback, setLastTajwidFeedback] = useState<{ correct: boolean; message: string } | null>(null);

  const currentTajwidCard = TAJWID_CARDS_DATA[tajwidCardIndex];

  const handleTajwidChoice = (chosen: 'syamsiyah' | 'qamariyah') => {
    if (chosen === currentTajwidCard.type) {
      soundEffects.playCorrect();
      setTajwidScore((s) => s + 10 + tajwidStreak * 2);
      setTajwidStreak((st) => st + 1);
      setLastTajwidFeedback({
        correct: true,
        message: `Tepat sekali! "${currentTajwidCard.transliteration}" adalah Alif Lam ${chosen === 'syamsiyah' ? 'Syamsiyah' : 'Qamariyah'} karena bertemu huruf ${currentTajwidCard.huruf}.`
      });
    } else {
      soundEffects.playWrong();
      setTajwidStreak(0);
      setLastTajwidFeedback({
        correct: false,
        message: `Kurang tepat. "${currentTajwidCard.transliteration}" seharusnya adalah Alif Lam ${currentTajwidCard.type === 'syamsiyah' ? 'Syamsiyah' : 'Qamariyah'}.`
      });
    }

    if (tajwidCardIndex < TAJWID_CARDS_DATA.length - 1) {
      setTajwidCardIndex((idx) => idx + 1);
    } else {
      soundEffects.playVictory();
      setTajwidCardIndex(0);
    }
  };

  // --- GAME 3: ASMAUL HUSNA MATCH STATE ---
  const [selectedAsmaul, setSelectedAsmaul] = useState<number | null>(null);
  const [matchedAsmaulIds, setMatchedAsmaulIds] = useState<number[]>([]);
  const [asmaulFeedback, setAsmaulFeedback] = useState<string | null>(null);

  const handleSelectAsmaulCard = (id: number) => {
    soundEffects.playClick();
    if (matchedAsmaulIds.includes(id)) return;
    if (selectedAsmaul === null) {
      setSelectedAsmaul(id);
    } else if (selectedAsmaul === id) {
      setSelectedAsmaul(null);
    } else {
      // Trying to match with another card?
      setSelectedAsmaul(id);
    }
  };

  const handleSelectMeaningCard = (id: number) => {
    if (selectedAsmaul === null) {
      setAsmaulFeedback('Pilih dahulu salah satu Asmaul Husna di sebelah kiri.');
      return;
    }
    if (selectedAsmaul === id) {
      soundEffects.playCorrect();
      setMatchedAsmaulIds((prev) => [...prev, id]);
      setSelectedAsmaul(null);
      setAsmaulFeedback('Cocok! Karakter GEMILANG sesuai dengan asma tersebut.');
      if (matchedAsmaulIds.length + 1 === ASMAUL_HUSNA_ITEMS.length) {
        soundEffects.playVictory();
      }
    } else {
      soundEffects.playWrong();
      setAsmaulFeedback('Pasangan belum tepat, cermati makna dan perilakunya.');
    }
  };

  // --- GAME 4: SKENARIO SUJUD STATE ---
  const [sujudScenarioIdx, setSujudScenarioIdx] = useState(0);
  const [sujudFeedback, setSujudFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
  const currentScenario = SUJUD_SCENARIOS_DATA[sujudScenarioIdx];

  const handleSujudChoice = (choice: 'Sujud Sahwi' | 'Sujud Tilawah' | 'Sujud Syukur') => {
    if (choice === currentScenario.jawabanTepat) {
      soundEffects.playCorrect();
      setSujudFeedback({
        isCorrect: true,
        text: `Benar! ${currentScenario.alasanFikih} Doa: "${currentScenario.bacaanDoa}".`
      });
    } else {
      soundEffects.playWrong();
      setSujudFeedback({
        isCorrect: false,
        text: `Kurang tepat. Tindakan yang benar adalah ${currentScenario.jawabanTepat}. ${currentScenario.alasanFikih}`
      });
    }
  };

  const handleNextScenario = () => {
    setSujudFeedback(null);
    setSujudScenarioIdx((idx) => (idx + 1) % SUJUD_SCENARIOS_DATA.length);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            Joyful Learning · Gamifikasi Edukatif
          </div>
          <h1 className="text-2xl font-bold text-slate-900">
            Game Pembelajaran PAI & Budi Pekerti
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Asah pemahamanmu melalui tantangan interaktif menyenangkan khas SMP Negeri 5 Brebes!
          </p>
        </div>

        {/* Global Trophy / Total Score */}
        <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-xl border border-amber-200">
          <Trophy className="w-5 h-5 text-amber-600" />
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold text-amber-800 block">Total Poin Game</span>
            <span className="text-sm font-mono font-black text-amber-950">
              {verseScore + tajwidScore} Poin
            </span>
          </div>
        </div>
      </div>

      {/* Game Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { id: 'susun_ayat', title: '1. Susun Ayat Qur\'an', desc: 'Rangkai potongan lafadz ayat' },
          { id: 'sortir_tajwid', title: '2. Sortir Cepat Tajwid', desc: 'Syamsiyah vs Qamariyah' },
          { id: 'asmaul_husna', title: '3. Jodohkan Asmaul Husna', desc: 'Pasangkan asma & sikap' },
          { id: 'skenario_sujud', title: '4. Skenario Fikih Sujud', desc: 'Sahwi, Tilawah, Syukur' },
        ].map((tab) => {
          const isActive = selectedGame === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedGame(tab.id as typeof selectedGame);
                soundEffects.playClick();
              }}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
              }`}
            >
              <h3 className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                {tab.title}
              </h3>
              <p className={`text-[11px] mt-0.5 ${isActive ? 'text-emerald-100' : 'text-slate-500'}`}>
                {tab.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* GAME 1: SUSUN AYAT AL-QUR'AN */}
      {selectedGame === 'susun_ayat' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Tantangan Susun Ayat
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs font-semibold text-slate-600">
                  {currentVerse.surahName} : Ayat {currentVerse.ayahNumber}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Tema: {currentVerse.theme}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg">
                Skor Ayat: {verseScore}
              </span>
              <button
                onClick={handleResetVerse}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-md hover:bg-slate-100 cursor-pointer"
                title="Acak Ulang Kata"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hint Terjemah */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1 text-xs sm:text-sm text-slate-700">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Petunjuk Terjemah Ayat:
            </span>
            <p className="italic text-slate-800">"{currentVerse.fullTranslation}"</p>
          </div>

          {/* Tray: Ayat yang sedang disusun (Drop zone) */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              Papan Susunan Ayat (Klik kata di bawah untuk menyusun di sini):
            </label>
            <div className="min-h-[90px] p-4 bg-emerald-50/50 border-2 border-dashed border-emerald-300 rounded-xl flex flex-wrap gap-2.5 items-center justify-center">
              {selectedWords.length === 0 ? (
                <span className="text-xs text-slate-400 italic">
                  Pilih kata-kata hijaiyah dari kotak pilihan di bawah ini sesuai urutan tajwid yang benar...
                </span>
              ) : (
                selectedWords.map((word) => (
                  <button
                    key={word.id}
                    onClick={() => handleRemoveWord(word)}
                    className="px-3.5 py-2 bg-white border border-emerald-400 rounded-lg shadow-xs hover:bg-red-50 hover:border-red-300 transition-colors cursor-pointer text-center group"
                    title="Klik untuk menghapus dari susunan"
                  >
                    <span className="font-arabic text-lg sm:text-xl text-emerald-950 block leading-tight">
                      {word.textArabic}
                    </span>
                    <span className="text-[10px] font-sans text-slate-500 group-hover:text-red-600 block">
                      {word.transliteration}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Tray: Kata yang tersedia untuk dipilih */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              Pilihan Potongan Lafadz Acak:
            </label>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-wrap gap-2.5 items-center justify-center min-h-[80px]">
              {availableWords.map((word) => (
                <button
                  key={word.id}
                  onClick={() => handleSelectWord(word)}
                  className="px-4 py-2.5 bg-white border border-slate-300 rounded-lg shadow-xs hover:border-emerald-500 hover:scale-105 transition-all cursor-pointer text-center"
                >
                  <span className="font-arabic text-lg sm:text-xl text-slate-900 block leading-tight">
                    {word.textArabic}
                  </span>
                  <span className="text-[10px] font-sans text-slate-500 block">
                    {word.transliteration}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Validation Feedback */}
          {verseCompleted && (
            <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-950 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 font-bold text-sm">
                <Check className="w-5 h-5 text-emerald-700" />
                <span>Masya Allah! Susunan Ayatmu Benar dan Sempurna (+25 Poin)</span>
              </div>
              <p className="font-arabic text-xl sm:text-2xl text-right text-emerald-950 pt-2">
                {currentVerse.fullArabic}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNextVerse}
                  className="px-4 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg cursor-pointer"
                >
                  Lanjut ke Ayat Berikutnya →
                </button>
              </div>
            </div>
          )}

          {verseError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-800 flex items-center justify-between">
              <span>Urutan ayat masih kurang tepat. Coba periksa kembali maknanya atau gunakan tombol acak ulang!</span>
              <button
                onClick={handleResetVerse}
                className="text-xs font-bold underline cursor-pointer"
              >
                Reset
              </button>
            </div>
          )}

          {/* Action Check Button */}
          {!verseCompleted && (
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500">
                Pilih seluruh kata lalu tekan tombol periksa di samping.
              </span>
              <button
                onClick={handleCheckVerse}
                disabled={selectedWords.length === 0}
                className={`px-6 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  selectedWords.length > 0
                    ? 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-xs'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Periksa Susunan Ayat
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 2: SORTIR CEPAT TAJWID */}
      {selectedGame === 'sortir_tajwid' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="text-left">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Sortir Kilat Alif Lam
              </span>
              <span className="text-xs text-slate-500">
                Kartu {tajwidCardIndex + 1} dari {TAJWID_CARDS_DATA.length}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                Streak: {tajwidStreak}🔥
              </span>
              <span className="text-xs font-mono font-bold bg-emerald-50 text-emerald-800 px-3 py-1 rounded border border-emerald-200">
                Skor: {tajwidScore}
              </span>
            </div>
          </div>

          {/* Current Word Showcase Card */}
          <div className="p-8 bg-gradient-to-br from-slate-50 to-emerald-50/40 rounded-2xl border-2 border-emerald-200 space-y-2">
            <span className="text-xs font-semibold text-slate-500">
              Klasifikasikan hukum bacaan kata berikut:
            </span>
            <p className="font-arabic text-4xl sm:text-5xl text-emerald-950 py-3">
              {currentTajwidCard.wordArabic}
            </p>
            <p className="text-sm font-semibold text-slate-700">
              ({currentTajwidCard.transliteration})
            </p>
          </div>

          {/* Fast Choices Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              onClick={() => handleTajwidChoice('syamsiyah')}
              className="p-4 rounded-xl border-2 border-amber-300 bg-amber-50/70 hover:bg-amber-100 text-amber-950 font-bold transition-all hover:scale-102 cursor-pointer space-y-1"
            >
              <span className="text-xl block">☀️</span>
              <span className="text-sm sm:text-base block">Alif Lam Syamsiyah</span>
              <span className="text-[10px] text-amber-800 block font-normal">Idgham / Melebur ke huruf tasydid</span>
            </button>

            <button
              onClick={() => handleTajwidChoice('qamariyah')}
              className="p-4 rounded-xl border-2 border-emerald-300 bg-emerald-50/70 hover:bg-emerald-100 text-emerald-950 font-bold transition-all hover:scale-102 cursor-pointer space-y-1"
            >
              <span className="text-xl block">🌙</span>
              <span className="text-sm sm:text-base block">Alif Lam Qamariyah</span>
              <span className="text-[10px] text-emerald-800 block font-normal">Idzhar / Lam sukun terbaca jelas</span>
            </button>
          </div>

          {/* Feedback strip */}
          {lastTajwidFeedback && (
            <div
              className={`p-3 rounded-lg text-xs ${
                lastTajwidFeedback.correct
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                  : 'bg-red-50 border border-red-200 text-red-900'
              }`}
            >
              {lastTajwidFeedback.message}
            </div>
          )}
        </div>
      )}

      {/* GAME 3: JODOHKAN ASMAUL HUSNA & KARAKTER */}
      {selectedGame === 'asmaul_husna' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs max-w-4xl mx-auto">
          <div className="text-center space-y-1 border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-900">
              Jodohkan Asmaul Husna dengan Perilaku GEMILANG
            </h3>
            <p className="text-xs text-slate-500">
              Pilih satu kartu nama di kiri, lalu pilih deskripsi implementasi yang cocok di kanan.
            </p>
          </div>

          {asmaulFeedback && (
            <div className="p-3 bg-slate-100 border border-slate-200 rounded-lg text-xs text-center text-slate-800 font-medium">
              {asmaulFeedback}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Asmaul Husna Cards */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Pilihan Asmaul Husna:
              </span>
              {ASMAUL_HUSNA_ITEMS.map((item) => {
                const isMatched = matchedAsmaulIds.includes(item.id);
                const isSelected = selectedAsmaul === item.id;
                return (
                  <button
                    key={item.id}
                    disabled={isMatched}
                    onClick={() => handleSelectAsmaulCard(item.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isMatched
                        ? 'bg-emerald-100/60 border-emerald-300 text-emerald-900 opacity-60 cursor-default'
                        : isSelected
                        ? 'bg-emerald-800 text-white border-emerald-800 ring-2 ring-emerald-500 shadow-sm'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block">{item.namaLatin}</span>
                      <span className="text-[11px] opacity-80 block">{item.arti}</span>
                    </div>
                    <span className="font-arabic text-xl">{item.namaArab}</span>
                  </button>
                );
              })}
            </div>

            {/* Right: Implementasi Gemilang Cards */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Implementasi Karakter Siswa SMPN 5:
              </span>
              {ASMAUL_HUSNA_ITEMS.map((item) => {
                const isMatched = matchedAsmaulIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    disabled={isMatched}
                    onClick={() => handleSelectMeaningCard(item.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isMatched
                        ? 'bg-emerald-100/60 border-emerald-300 text-emerald-900 opacity-60 cursor-default'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:bg-amber-50/30'
                    }`}
                  >
                    <p className="text-xs leading-relaxed">
                      "{item.implementasiGemilang}"
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* GAME 4: SKENARIO SUJUD CEPAT */}
      {selectedGame === 'skenario_sujud' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs max-w-2xl mx-auto">
          <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Simulasi Kasus Fikih Sujud
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Kasus {sujudScenarioIdx + 1} dari {SUJUD_SCENARIOS_DATA.length}
              </h3>
            </div>
            <button
              onClick={handleNextScenario}
              className="text-xs font-semibold text-emerald-800 hover:underline cursor-pointer"
            >
              Kasus Berikutnya →
            </button>
          </div>

          {/* Scenario Case Card */}
          <div className="p-5 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2">
            <span className="text-xs font-bold text-amber-900 uppercase">Situasi Ibadah:</span>
            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
              "{currentScenario.scenario}"
            </p>
          </div>

          {/* Choices */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              Sujud apakah yang wajib/disunnahkan untuk dilakukan?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {(['Sujud Sahwi', 'Sujud Tilawah', 'Sujud Syukur'] as const).map((choice) => (
                <button
                  key={choice}
                  onClick={() => handleSujudChoice(choice)}
                  className="p-3 text-xs font-bold bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-500 rounded-lg transition-all cursor-pointer"
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>

          {/* Result Feedback */}
          {sujudFeedback && (
            <div
              className={`p-4 rounded-xl text-xs space-y-2 animate-fadeIn ${
                sujudFeedback.isCorrect
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-950'
                  : 'bg-red-50 border border-red-200 text-red-950'
              }`}
            >
              <strong className="block text-sm">
                {sujudFeedback.isCorrect ? 'Masya Allah, Analisis Fikihmu Tepat!' : 'Perlu Diingat Kembali:'}
              </strong>
              <p>{sujudFeedback.text}</p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNextScenario}
                  className="px-4 py-1.5 text-xs font-bold bg-emerald-800 text-white rounded-md cursor-pointer"
                >
                  Lanjut ke Kasus Lain →
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
