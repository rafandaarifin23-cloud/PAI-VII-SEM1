import React, { useState } from 'react';
import { BookOpen, Search, Volume2, Sparkles, CheckCircle2, ChevronRight, HelpCircle, Lightbulb } from 'lucide-react';
import { CHAPTERS_DATA } from '../data/curriculumData';
import { soundEffects } from '../utils/audioEffects';

interface MateriBabSectionProps {
  onNavigateToGame?: (gameType?: string) => void;
}

export const MateriBabSection: React.FC<MateriBabSectionProps> = ({ onNavigateToGame }) => {
  const [selectedBabId, setSelectedBabId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const selectedBab = CHAPTERS_DATA.find((c) => c.id === selectedBabId) || CHAPTERS_DATA[0];

  const handlePlayVoice = (text: string) => {
    if (isPlayingAudio) {
      soundEffects.stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      soundEffects.speakIndonesian(text);
      setTimeout(() => setIsPlayingAudio(false), 8000);
    }
  };

  // Filtered chapters if search query is present
  const matchesSearch = (text: string) =>
    text.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <div className="space-y-8">
      {/* Search & Header Strip */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            Kurikulum Merdeka · Semester Gasal
          </div>
          <h1 className="text-2xl font-bold text-slate-900">
            Materi Pembelajaran PAI & Budi Pekerti
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Eksplorasi mendalam 5 Bab esensial Fase D bersama Sandi Arifin, S.Pd.I
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari materi, ayat, tajwid..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Bab Tabs Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {CHAPTERS_DATA.map((bab) => {
          const isSelected = selectedBabId === bab.id;
          return (
            <button
              key={bab.id}
              onClick={() => {
                setSelectedBabId(bab.id);
                soundEffects.playClick();
              }}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                isSelected
                  ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-[11px] font-bold tracking-wider ${
                    isSelected ? 'text-amber-300' : 'text-emerald-700'
                  }`}
                >
                  {bab.babNumber}
                </span>
                <span
                  className={`text-[10px] truncate max-w-[80px] ${
                    isSelected ? 'text-slate-300' : 'text-slate-400'
                  }`}
                >
                  {bab.element}
                </span>
              </div>
              <h3
                className={`text-xs font-bold leading-snug line-clamp-2 ${
                  isSelected ? 'text-white' : 'text-slate-900'
                }`}
              >
                {bab.title.split(':')[1] || bab.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Main Chapter Stage: Two-Zone Interactive Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Zone: Full Chapter Study Deck (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Chapter Banner & Overview */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="space-y-2 border-b border-slate-100 pb-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-bold text-emerald-800">{selectedBab.babNumber}</span>
                <span aria-hidden="true">·</span>
                <span>Elemen: {selectedBab.element}</span>
                <span aria-hidden="true">·</span>
                <span>Alokasi: {selectedBab.alokasiWaktu}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {selectedBab.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedBab.subTitle}
              </p>
            </div>

            {/* Dalil Naqli Qur'an Highlight with Audio */}
            {selectedBab.ayatDalil && (
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
                    Dalil Al-Qur'an: {selectedBab.ayatDalil.surah}
                  </span>
                  <button
                    onClick={() =>
                      handlePlayVoice(
                        `${selectedBab.ayatDalil?.surah}. Terjemahnya: ${selectedBab.ayatDalil?.terjemah}`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-md transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlayingAudio ? 'Hentikan' : 'Dengarkan Arti'}</span>
                  </button>
                </div>

                {/* Arabic Text */}
                <p className="font-arabic text-xl sm:text-2xl text-emerald-950 text-right leading-loose pt-1">
                  {selectedBab.ayatDalil.arab}
                </p>

                {/* Latin & Translation */}
                <div className="text-xs sm:text-sm space-y-1 text-slate-700 pt-2 border-t border-emerald-200/60">
                  <p className="italic text-emerald-900 font-medium">{selectedBab.ayatDalil.latin}</p>
                  <p className="text-slate-600">"{selectedBab.ayatDalil.terjemah}"</p>
                </div>
              </div>
            )}

            {/* Special Visual Showcase for Bab 5 (Umayyad History) */}
            {selectedBab.id === 5 && (
              <div className="rounded-xl overflow-hidden border border-slate-200 relative group">
                <img
                  src="/src/assets/images/peradaban_islam_umayyah_damaskus_1792030156024.jpg"
                  alt="Peradaban Daulah Bani Umayyah"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 sm:h-72 object-cover"
                />
                <div className="p-3 bg-slate-900/90 text-white text-xs flex justify-between items-center">
                  <span>Ilustrasi: Baitul Hikmah & Masjid Agung Umayyah Damaskus</span>
                  <span className="text-amber-400 font-semibold">41 H - 132 H</span>
                </div>
              </div>
            )}

            {/* Detailed Content Sections */}
            <div className="space-y-6 pt-2">
              {selectedBab.materiDetail.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {section.heading}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Key points if available */}
                  {section.keyPoints && section.keyPoints.length > 0 && (
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 space-y-1.5">
                      <strong className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                        Poin Kunci & Hikmah:
                      </strong>
                      <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                        {section.keyPoints.map((kp, kpIdx) => (
                          <li key={kpIdx}>{kp}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Comparative Tables if available */}
                  {section.tabel && (
                    <div className="overflow-x-auto my-3 border border-slate-200 rounded-lg">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-800 font-bold">
                          <tr>
                            {section.tabel.headers.map((th, thIdx) => (
                              <th key={thIdx} className="p-2.5 border-b border-slate-200">
                                {th}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {section.tabel.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-2.5">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Case Study if available */}
                  {section.contohKasus && (
                    <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-700" />
                        <h4 className="font-bold text-amber-950 text-xs sm:text-sm">
                          Studi Kasus Siswa GEMILANG: {section.contohKasus.judul}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-700">
                        {section.contohKasus.deskripsi}
                      </p>
                      <div className="text-xs bg-white p-2.5 rounded border border-amber-200 text-amber-900">
                        <strong>Solusi Berkarakter:</strong> {section.contohKasus.solusiHikmah}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Zone: Interactive Control & Concept Deck (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Deep Learning Dimension Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-slate-900 text-sm">
                Integrasi Deep Learning
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-150">
                <strong className="text-emerald-900 block mb-0.5">Mindful Learning:</strong>
                <p className="text-slate-600">{selectedBab.deepLearningApproach.mindful}</p>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-150">
                <strong className="text-amber-900 block mb-0.5">Meaningful Learning:</strong>
                <p className="text-slate-600">{selectedBab.deepLearningApproach.meaningful}</p>
              </div>

              <div className="p-3 bg-teal-50 rounded-lg border border-teal-150">
                <strong className="text-teal-900 block mb-0.5">Joyful Learning:</strong>
                <p className="text-slate-600">{selectedBab.deepLearningApproach.joyful}</p>
              </div>
            </div>
          </div>

          {/* Quick Learning Goals Checklist */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              Tujuan Pembelajaran Bab Ini
            </h3>

            <div className="space-y-2 text-xs text-slate-700">
              {selectedBab.tujuanPembelajaran.map((tp, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{tp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct CTA to Play Game related to this Chapter */}
          <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-2xl p-6 space-y-3">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
              Tantangan Interaktif
            </span>
            <h4 className="text-base font-bold">
              Uji Pemahaman {selectedBab.babNumber} Sekarang
            </h4>
            <p className="text-xs text-slate-200">
              Mainkan game edukasi susun ayat, tebak cepat tajwid, atau skenario ibadah dengan skor langsung.
            </p>
            <button
              onClick={() => {
                if (onNavigateToGame) {
                  onNavigateToGame(selectedBab.id === 1 ? 'tajwid' : selectedBab.id === 2 ? 'asmaul' : selectedBab.id === 4 ? 'sujud' : 'verse');
                }
              }}
              className="w-full py-2.5 text-xs font-bold text-emerald-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer text-center"
            >
              Mulai Game Bab Ini →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
