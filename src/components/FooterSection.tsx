import React from 'react';
import { SchoolLogo } from './SchoolLogo';
import { TEACHER_DATA } from '../data/curriculumData';

interface FooterSectionProps {
  onSelectTab: (tab: string) => void;
  onOpenTeacher: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onSelectTab, onOpenTeacher }) => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Col 1: School Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <SchoolLogo size={40} />
              <div>
                <h3 className="font-bold text-slate-900 text-base leading-tight">
                  SMP Negeri 5 Brebes
                </h3>
                <span className="text-xs font-semibold text-emerald-800">
                  Slogan Sekolah: GEMILANG
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Gerakan Edukatif · Mandiri · Inovatif · Loyal · Agamis · Nyaman · Gemilang.
              Portal resmi pembelajaran Pendidikan Agama Islam dan Budi Pekerti Kurikulum Merdeka Fase D.
            </p>

            <div className="pt-1 text-xs text-slate-500 font-mono">
              Jl. Jenderal Sudirman No. 125, Kabupaten Brebes, Jawa Tengah 52212
            </div>
          </div>

          {/* Col 2: Guru Pengampu */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Pendidik Pengampu:
            </h4>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
              <p className="text-sm font-bold text-slate-900">{TEACHER_DATA.name}</p>
              <p className="text-xs font-mono text-slate-600">NIP. {TEACHER_DATA.nip}</p>
              <p className="text-xs text-emerald-800 font-medium">{TEACHER_DATA.title}</p>
              <div className="pt-1">
                <button
                  onClick={onOpenTeacher}
                  className="text-xs text-emerald-800 hover:text-emerald-950 underline font-semibold cursor-pointer"
                >
                  Lihat Profil Lengkap Guru →
                </button>
              </div>
            </div>
          </div>

          {/* Col 3: Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Menu Pembelajaran:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => onSelectTab('beranda')}
                  className="hover:text-emerald-800 cursor-pointer"
                >
                  Beranda Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('perangkat')}
                  className="hover:text-emerald-800 cursor-pointer"
                >
                  Perangkat Deep Learning (CP, ATP, Modul)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('materi')}
                  className="hover:text-emerald-800 cursor-pointer"
                >
                  Materi Lengkap 5 Bab
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('media')}
                  className="hover:text-emerald-800 cursor-pointer"
                >
                  Media & LKPD Interaktif
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('game')}
                  className="hover:text-emerald-800 cursor-pointer"
                >
                  Game Evaluasi Susun Ayat & Tajwid
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('asesmen')}
                  className="hover:text-emerald-800 cursor-pointer"
                >
                  Asesmen CBT Semester Gasal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('refleksi')}
                  className="hover:text-emerald-800 cursor-pointer"
                >
                  Jurnal Refleksi Siswa 3-2-1
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 SMP Negeri 5 Brebes. Pendidikan Agama Islam dan Budi Pekerti.
          </p>
          <p className="italic text-slate-400">
            Pendekatan Deep Learning: Mindful · Meaningful · Joyful
          </p>
        </div>
      </div>
    </footer>
  );
};
