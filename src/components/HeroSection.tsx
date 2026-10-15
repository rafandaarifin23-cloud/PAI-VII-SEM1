import React from 'react';
import { BookOpen, Sparkles, Brain, HeartHandshake, Compass, ArrowRight, Award } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { TEACHER_DATA, DEEP_LEARNING_PILLARS } from '../data/curriculumData';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
  onOpenTeacher: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenTeacher }) => {
  return (
    <div className="space-y-10">
      {/* Hero Visual Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-lg">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_islamic_education_gemilang_1792030156291.jpg"
            alt="Perpustakaan Islami SMPN 5 Brebes"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-emerald-950/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:py-20 max-w-4xl space-y-6">
          {/* Identity Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300">
            <SchoolLogo size={28} />
            <span>SMP Negeri 5 Brebes</span>
            <span aria-hidden="true" className="text-emerald-500">·</span>
            <span className="text-amber-300 font-bold tracking-wider">
              SEKOLAH GEMILANG
            </span>
            <span aria-hidden="true" className="text-emerald-500">·</span>
            <span className="text-slate-300 font-normal">Semester Gasal Fase D</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Portal Pembelajaran PAI & Budi Pekerti
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Wahana belajar terpadu dengan pendekatan{' '}
            <span className="text-amber-300 font-semibold">Deep Learning</span>{' '}
            (Mindful, Meaningful, & Joyful Learning). Menempa generasi pelajar berakhlak mulia, berwawasan luas, dan berkarakter Profil Pelajar Pancasila.
          </p>

          {/* Teacher Badge Card */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400 shrink-0 bg-emerald-800">
                <img
                  src="/src/assets/images/teacher_portrait_ustadz_sandi_1792030156481.jpg"
                  alt={TEACHER_DATA.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-emerald-300 font-medium">Guru Pengampu:</p>
                <p className="text-sm font-bold text-white leading-tight">{TEACHER_DATA.name}</p>
                <p className="text-[11px] font-mono text-slate-300">NIP. {TEACHER_DATA.nip}</p>
              </div>
            </div>

            <button
              onClick={onOpenTeacher}
              className="text-xs text-amber-300 hover:text-amber-200 underline underline-offset-4 cursor-pointer font-medium"
            >
              Lihat Profil Guru Lengkap →
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => onNavigate('materi')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Jelajahi 5 Bab Materi</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('game')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 rounded-lg border border-emerald-500/50 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Mulai Game Evaluasi</span>
            </button>

            <button
              onClick={() => onNavigate('perangkat')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors cursor-pointer"
            >
              <span>Perangkat Kurikulum</span>
            </button>
          </div>
        </div>
      </section>

      {/* Slogan GEMILANG Showcase Bar */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              Filosofi Slogan SMPN 5 Brebes
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              GEMILANG: Pilar Karakter Siswa Berbudi Pekerti
            </h2>
            <p className="text-sm text-slate-600">
              Menghubungkan nilai-nilai spiritual keagamaan dengan kebiasaan luhur warga sekolah setiap hari.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {[
              { letter: 'G', label: 'Gerakan', desc: 'Aksi Nyata' },
              { letter: 'E', label: 'Edukatif', desc: 'Mendidik Luhur' },
              { letter: 'M', label: 'Mandiri', desc: 'Penuh Tanggung Jawab' },
              { letter: 'I', label: 'Inovatif', desc: 'Kreatif Maju' },
              { letter: 'L', label: 'Loyal', desc: 'Setia Almamater' },
              { letter: 'A', label: 'Agamis', desc: 'Taat Beribadah' },
              { letter: 'NG', label: 'Nyaman & Gemilang', desc: 'Berprestasi Mulia' },
            ].map((pilar, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-150 rounded-lg p-2.5 text-center flex flex-col justify-center"
              >
                <span className="text-lg font-black text-emerald-800 leading-tight">
                  {pilar.letter}
                </span>
                <span className="text-xs font-bold text-slate-900 leading-tight mt-0.5">
                  {pilar.label}
                </span>
                <span className="text-[10px] text-slate-500 leading-tight mt-0.5">
                  {pilar.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pillars of Deep Learning */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Pendekatan Kurikulum Merdeka
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              3 Dimensi Deep Learning dalam PAI-BP
            </h2>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Pembelajaran Mendalam Berorientasi Karakter
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEEP_LEARNING_PILLARS.map((pillar, idx) => {
            const Icon = idx === 0 ? Brain : idx === 1 ? HeartHandshake : Sparkles;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 hover:border-emerald-300 transition-colors shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{pillar.title}</h3>
                    <p className="text-xs text-emerald-700 font-medium">{pillar.subtitle}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5 Chapters Quick Preview Strip */}
      <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Peta Materi Semester Gasal (Kelas VII)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              5 Bab Terpadu: Al-Qur'an, Akidah, Akhlak, Fikih, dan Sejarah Peradaban Islam
            </p>
          </div>
          <button
            onClick={() => onNavigate('materi')}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-900 underline underline-offset-4 cursor-pointer self-start sm:self-auto"
          >
            Buka Seluruh Materi →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { num: '01', title: 'Hukum Alif Lam', elem: 'Al-Qur\'an Hadis', desc: 'Syamsiyah & Qamariyah' },
            { num: '02', title: 'Asmaul Husna', elem: 'Akidah', desc: 'Al-\'Alim, Al-Khabir, As-Sami\', Al-Bashir' },
            { num: '03', title: 'Ikhlas, Sabar, Pemaaf', elem: 'Akhlak', desc: 'Merengkuh Kedamaian Hati' },
            { num: '04', title: 'Ketentuan Sujud', elem: 'Fikih', desc: 'Sujud Sahwi, Tilawah, Syukur' },
            { num: '05', title: 'Bani Umayyah', elem: 'Sejarah Peradaban', desc: 'Kejayaan Damaskus & Cordoba' },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate('materi')}
              className="bg-white rounded-lg p-4 border border-slate-200 hover:border-emerald-500 hover:shadow-sm transition-all cursor-pointer group space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-emerald-700">
                  {item.num}
                </span>
                <span className="text-[10px] text-slate-500 font-medium truncate max-w-[100px]">
                  {item.elem}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Launchpad to Games, Assessment & Reflection */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => onNavigate('game')}
          className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 hover:border-emerald-400 transition-all cursor-pointer group shadow-xs"
        >
          <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
            Game Edukasi Interaktif
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Asah pemahaman dengan Game Susun Ayat, Sortir Cepat Tajwid, Memory Asmaul Husna, dan Skenario Sujud.
          </p>
          <div className="text-xs font-semibold text-emerald-700 flex items-center gap-1 pt-1">
            <span>Mainkan Sekarang</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div
          onClick={() => onNavigate('asesmen')}
          className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 hover:border-emerald-400 transition-all cursor-pointer group shadow-xs"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
            Asesmen CBT Semester Gasal
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Kuis evaluasi terstandar 15 butir soal HOTS dengan analisis nilai instan dan sertifikat prestasi yang bisa dicetak.
          </p>
          <div className="text-xs font-semibold text-emerald-700 flex items-center gap-1 pt-1">
            <span>Mulai Ujian Mandiri</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div
          onClick={() => onNavigate('refleksi')}
          className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 hover:border-emerald-400 transition-all cursor-pointer group shadow-xs"
        >
          <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-200">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
            Jurnal Refleksi Deep Learning
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Refleksikan pemahaman 3-2-1 dan komitmen akhlak peserta didik, pantau mood belajar, dan simpan catatan ke guru.
          </p>
          <div className="text-xs font-semibold text-emerald-700 flex items-center gap-1 pt-1">
            <span>Tulis Refleksi Siswa</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </section>
    </div>
  );
};
