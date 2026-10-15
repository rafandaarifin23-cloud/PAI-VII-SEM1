import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, AlertCircle, Clock, RotateCcw, Printer, ChevronRight, ChevronLeft, ShieldCheck, FileCheck } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { TEACHER_DATA } from '../data/curriculumData';
import { soundEffects } from '../utils/audioEffects';

export const AsesmenPortal: React.FC = () => {
  const [examState, setExamState] = useState<'intro' | 'running' | 'result'>('intro');
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('VII-A');
  const [studentNo, setStudentNo] = useState('');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [markedDoubt, setMarkedDoubt] = useState<Record<number, boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (examState === 'running' && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [examState, timeRemaining]);

  const handleStartExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      alert('Mohon isi nama lengkap siswa terlebih dahulu.');
      return;
    }
    setUserAnswers({});
    setMarkedDoubt({});
    setCurrentQuestionIndex(0);
    setTimeRemaining(25 * 60);
    setExamState('running');
    soundEffects.playClick();
  };

  const handleSelectOption = (optIndex: number) => {
    soundEffects.playClick();
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: optIndex,
    });
  };

  const handleToggleDoubt = () => {
    setMarkedDoubt({
      ...markedDoubt,
      [currentQuestionIndex]: !markedDoubt[currentQuestionIndex],
    });
    soundEffects.playClick();
  };

  const handleSubmitExam = () => {
    soundEffects.playVictory();
    setExamState('result');
  };

  const handleRetake = () => {
    setExamState('intro');
  };

  // Score Calculation
  const totalQuestions = QUIZ_QUESTIONS.length;
  let correctCount = 0;
  QUIZ_QUESTIONS.forEach((q, idx) => {
    if (userAnswers[idx] === q.correctAnswer) {
      correctCount++;
    }
  });
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  // KKTP Category
  let kktpCategory = 'Perlu Bimbingan';
  let kktpBadge = 'bg-red-50 text-red-800 border-red-200';
  if (scorePercent >= 90) {
    kktpCategory = 'Sangat Mahir (Istimewa)';
    kktpBadge = 'bg-blue-50 text-blue-800 border-blue-200';
  } else if (scorePercent >= 75) {
    kktpCategory = 'Mahir (Memenuhi Kriteria Standar)';
    kktpBadge = 'bg-emerald-50 text-emerald-800 border-emerald-200';
  } else if (scorePercent >= 65) {
    kktpCategory = 'Cukup Berkembang';
    kktpBadge = 'bg-amber-50 text-amber-800 border-amber-200';
  }

  // Format Time
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  return (
    <div className="space-y-6">
      {/* Intro State: Form Pendaftaran Ujian */}
      {examState === 'intro' && (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-xs">
          <div className="text-center space-y-2 border-b border-slate-100 pb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CBT Terstandar Kurikulum Merdeka</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              Asesmen Sumatif PAI-BP Semester Gasal
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              SMP Negeri 5 Brebes · Guru Pengampu: Sandi Arifin, S.Pd.I
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-700">
            <span className="font-bold text-slate-900 block uppercase">Petunjuk Teknis Asesmen:</span>
            <ul className="list-disc pl-5 space-y-1">
              <li>Soal mencakup 5 Bab: Hukum Alif Lam, Asmaul Husna, Ikhlas Sabar Pemaaf, Ketentuan Sujud, dan Daulah Bani Umayyah.</li>
              <li>Jumlah soal: <strong>15 Butir Pilihan Ganda Berbasis HOTS</strong>.</li>
              <li>Alokasi waktu: <strong>25 Menit</strong>.</li>
              <li>Kerjakan secara jujur dan mandiri meneladani Asmaul Husna <em>Al-Bashir</em>.</li>
            </ul>
          </div>

          <form onSubmit={handleStartExam} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nama Lengkap Peserta Didik:
              </label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Contoh: Ahmad Faiz Al-Faruq"
                className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kelas:
                </label>
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none"
                >
                  <option value="VII-A">Kelas VII-A</option>
                  <option value="VII-B">Kelas VII-B</option>
                  <option value="VII-C">Kelas VII-C</option>
                  <option value="VII-D">Kelas VII-D</option>
                  <option value="VII-E">Kelas VII-E</option>
                  <option value="VII-F">Kelas VII-F</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nomor Absen / NIS:
                </label>
                <input
                  type="text"
                  required
                  value={studentNo}
                  onChange={(e) => setStudentNo(e.target.value)}
                  placeholder="Contoh: 18"
                  className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-colors cursor-pointer shadow-md text-center"
              >
                Mulai Pengerjaan Ujian CBT →
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Running State: Active Exam Screen */}
      {examState === 'running' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Question Panel (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Top Bar inside Exam */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Soal Nomor {currentQuestionIndex + 1} dari {totalQuestions}
                </span>
                <span className="text-xs text-slate-500">
                  {currentQ.babName} · {currentQ.levelHots}
                </span>
              </div>

              {/* Doubt Checkbox */}
              <button
                onClick={handleToggleDoubt}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                  markedDoubt[currentQuestionIndex]
                    ? 'bg-amber-100 border-amber-300 text-amber-900'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {markedDoubt[currentQuestionIndex] ? '★ Ditandai Ragu-Ragu' : 'Tandai Ragu'}
              </button>
            </div>

            {/* Ayat Text if available */}
            {currentQ.ayatText && (
              <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 text-center">
                <p className="font-arabic text-2xl text-emerald-950 leading-loose">
                  {currentQ.ayatText}
                </p>
              </div>
            )}

            {/* Question Text */}
            <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
              {currentQ.question}
            </p>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = userAnswers[currentQuestionIndex] === optIdx;
                const optionLetters = ['A', 'B', 'C', 'D'];
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-emerald-50/90 border-emerald-600 ring-2 ring-emerald-500 text-emerald-950 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                        isSelected
                          ? 'bg-emerald-800 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {optionLetters[optIdx]}
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed mt-0.5">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => {
                  setCurrentQuestionIndex((prev) => prev - 1);
                  soundEffects.playClick();
                }}
                className={`inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-lg border ${
                  currentQuestionIndex === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-50 border-slate-200 text-slate-400'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  onClick={() => {
                    setCurrentQuestionIndex((prev) => prev + 1);
                    soundEffects.playClick();
                  }}
                  className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 cursor-pointer"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitExam}
                  className="inline-flex items-center gap-1 px-5 py-2 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 cursor-pointer"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Selesaikan & Kumpulkan Ujian</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Sidebar: Timer & Question Matrix (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Countdown Timer */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-bold text-slate-700">Sisa Waktu Ujian:</span>
              </div>
              <span className="text-lg font-mono font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
                {timeFormatted}
              </span>
            </div>

            {/* Question Matrix */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase">
                  Navigasi Soal (15 Butir)
                </h4>
                <span className="text-[11px] font-mono text-emerald-800 font-bold">
                  {Object.keys(userAnswers).length} / {totalQuestions} Terjawab
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {QUIZ_QUESTIONS.map((_, idx) => {
                  const isAnswered = userAnswers[idx] !== undefined;
                  const isDoubt = markedDoubt[idx];
                  const isCurrent = currentQuestionIndex === idx;

                  let btnStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300';
                  if (isCurrent) {
                    btnStyle = 'ring-2 ring-emerald-500 font-bold';
                  }
                  if (isDoubt) {
                    btnStyle = 'bg-amber-100 border-amber-300 text-amber-900 font-bold';
                  } else if (isAnswered) {
                    btnStyle = 'bg-emerald-800 border-emerald-800 text-white font-bold';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentQuestionIndex(idx);
                        soundEffects.playClick();
                      }}
                      className={`h-9 rounded-lg border text-xs flex items-center justify-center transition-all cursor-pointer ${btnStyle}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-emerald-800" />
                  <span>Sudah Terjawab</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-amber-100 border border-amber-300" />
                  <span>Ragu-Ragu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-slate-100 border border-slate-200" />
                  <span>Belum Terjawab</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSubmitExam}
                  className="w-full py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer"
                >
                  Kumpulkan Ujian Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Result State: Score & Certificate Review */}
      {examState === 'result' && (
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Printable Official Certificate / Rapor Capaian */}
          <div className="bg-white rounded-2xl border-2 border-emerald-300 p-6 sm:p-10 shadow-lg space-y-6">
            {/* Certificate Header */}
            <div className="text-center border-b-2 border-slate-800 pb-4 space-y-1">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-600">
                KEMENTERIAN PENDIDIKAN, KEBUDAYAAN, RISET, DAN TEKNOLOGI
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase">
                SMP NEGERI 5 BREBES · SEKOLAH GEMILANG
              </h2>
              <p className="text-xs font-semibold text-emerald-800">
                SERTIFIKAT CAPAIAN ASESMEN SUMATIF PAI-BP SEMESTER GASAL
              </p>
            </div>

            {/* Student Info & Score Display */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs text-slate-500">Diberikan Kepada Siswa:</span>
                <h3 className="text-xl font-bold text-slate-900">{studentName}</h3>
                <p className="text-xs text-slate-600 font-mono">
                  Kelas: {studentClass} · No. Absen: {studentNo} · Mapel: PAI & Budi Pekerti
                </p>
                <div className="pt-2">
                  <span className={`inline-block px-3 py-1 rounded text-xs font-bold border ${kktpBadge}`}>
                    Predikat KKTP: {kktpCategory}
                  </span>
                </div>
              </div>

              {/* Score Circle */}
              <div className="w-28 h-28 rounded-full border-4 border-emerald-600 bg-white flex flex-col items-center justify-center shrink-0 shadow-sm">
                <span className="text-[10px] uppercase font-bold text-slate-400">Nilai Akhir</span>
                <span className="text-3xl font-black font-mono text-emerald-900 leading-tight">
                  {scorePercent}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  {correctCount}/{totalQuestions} Benar
                </span>
              </div>
            </div>

            {/* Message from Guru Sandi Arifin */}
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1 text-xs text-slate-700">
              <strong className="text-emerald-950 font-bold block">
                Catatan Evaluasi Guru Pengampu ({TEACHER_DATA.name} - NIP. {TEACHER_DATA.nip}):
              </strong>
              <p>
                "{scorePercent >= 75
                  ? 'Selamat! Ananda telah menguasai kompetensi dasar materi PAI-BP semester gasal dengan sangat baik. Pertahankan ketartilan tajwid, pemahaman Asmaul Husna, dan kekhusyukan sujud dalam kehidupan sehari-hari.'
                  : 'Ananda telah berusaha dengan baik. Terus tingkatkan muroja\'ah materi khususnya pada pembagian hukum tajwid dan sejarah peradaban Islam. Pintu konsultasi guru selalu terbuka untuk bimbingan lebih mendalam.'}"
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 no-print border-t border-slate-100">
              <button
                onClick={handleRetake}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Ujian Asesmen</span>
              </button>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg cursor-pointer shadow-sm"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak Rapor / Sertifikat Asesmen</span>
              </button>
            </div>
          </div>

          {/* Detailed Question Review & Discussion (Pembahasan) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs no-print">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              Pembahasan Lengkap & Kunci Jawaban Tiap Soal
            </h3>

            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border space-y-2 text-xs ${
                      isCorrect
                        ? 'bg-emerald-50/40 border-emerald-200'
                        : 'bg-red-50/40 border-red-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">
                        Soal {idx + 1} · {q.babName}
                      </span>
                      <span
                        className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                          isCorrect
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {isCorrect ? '✓ Jawaban Anda Benar' : '✗ Jawaban Anda Salah'}
                      </span>
                    </div>

                    <p className="font-medium text-slate-900">{q.question}</p>

                    <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                      <p className="text-emerald-900 font-semibold">
                        Kunci Jawaban yang Benar: {q.options[q.correctAnswer]}
                      </p>
                      <p className="text-slate-600">
                        <strong>Pembahasan Ilmiah:</strong> {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
