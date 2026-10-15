import React from 'react';
import { X, Award, Mail, BookOpen, GraduationCap, School } from 'lucide-react';
import { TEACHER_DATA } from '../data/curriculumData';

interface TeacherProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherProfileModal: React.FC<TeacherProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-emerald-900 text-white rounded-t-2xl">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-semibold">Profil Guru Pengampu PAI-BP</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-emerald-100 hover:text-white hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-md shrink-0 border-2 border-emerald-600 bg-emerald-50">
              <img
                src="/src/assets/images/teacher_portrait_ustadz_sandi_1792030156481.jpg"
                alt="Sandi Arifin, S.Pd.I"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-block px-2.5 py-0.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded">
                Guru PAI & Budi Pekerti
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {TEACHER_DATA.name}
              </h2>
              <p className="text-sm font-mono text-slate-600">
                NIP. {TEACHER_DATA.nip}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-600 pt-1">
                <span className="flex items-center gap-1">
                  <School className="w-3.5 h-3.5 text-emerald-700" />
                  {TEACHER_DATA.school}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-emerald-700" />
                  {TEACHER_DATA.email}
                </span>
              </div>
            </div>
          </div>

          {/* Slogan GEMILANG Callout */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
            <div className="text-xs font-bold text-amber-900 uppercase tracking-wide">
              Slogan Sekolah: GEMILANG
            </div>
            <p className="text-xs sm:text-sm text-amber-950 font-medium">
              Gerakan Edukatif · Mandiri · Inovatif · Loyal · Agamis · Nyaman · Gemilang
            </p>
          </div>

          {/* Bio & Motto */}
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <div>
              <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-700" />
                Visi Pembelajaran Deep Learning
              </h4>
              <p className="text-slate-600">
                "{TEACHER_DATA.bio}"
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                Motto Pendidik
              </h4>
              <p className="italic text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                "{TEACHER_DATA.motto}"
              </p>
            </div>
          </div>

          {/* Tugas Pokok Semester Gasal */}
          <div className="pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Cakupan Pembelajaran Semester Gasal:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              <div className="p-2 bg-slate-50 rounded border border-slate-150">
                <strong className="text-slate-800">Bab 1:</strong> Hukum Alif Lam Syamsiyah & Qamariyah
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-150">
                <strong className="text-slate-800">Bab 2:</strong> Meneladani 4 Asmaul Husna
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-150">
                <strong className="text-slate-800">Bab 3:</strong> Ikhlas, Sabar, dan Pemaaf
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-150">
                <strong className="text-slate-800">Bab 4:</strong> Ketentuan Sujud (Sahwi, Tilawah, Syukur)
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-150 sm:col-span-2">
                <strong className="text-slate-800">Bab 5:</strong> Peradaban Daulah Bani Umayyah di Damaskus & Cordoba
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer"
          >
            Tutup Profil
          </button>
        </div>
      </div>
    </div>
  );
};
