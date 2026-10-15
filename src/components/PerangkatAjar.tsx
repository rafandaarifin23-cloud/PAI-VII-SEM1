import React, { useState } from 'react';
import { FileText, Printer, Copy, Check, Download, Layers, BookCheck, Clock, Award } from 'lucide-react';
import { TEACHER_DATA, CHAPTERS_DATA } from '../data/curriculumData';

export const PerangkatAjar: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'cp' | 'atp' | 'modul' | 'prota_promes' | 'kktp'>('modul');
  const [selectedBabForModul, setSelectedBabForModul] = useState<number>(1);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const currentBab = CHAPTERS_DATA.find((c) => c.id === selectedBabForModul) || CHAPTERS_DATA[0];

  return (
    <div className="space-y-6">
      {/* Top Header of Perangkat Ajar */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 no-print shadow-xs">
        <div>
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            Kurikulum Merdeka · Pendekatan Deep Learning
          </div>
          <h1 className="text-2xl font-bold text-slate-900">
            Perangkat Pembelajaran PAI & Budi Pekerti
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Semester Gasal · Kelas VII Fase D · SMP Negeri 5 Brebes
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Tersalin!' : 'Salin Perangkat'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak Dokumen</span>
          </button>
        </div>
      </div>

      {/* Sub Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 no-print">
        {[
          { id: 'modul', label: 'Modul Ajar Deep Learning', icon: FileText },
          { id: 'atp', label: 'Alur Tujuan Pembelajaran (ATP)', icon: Layers },
          { id: 'cp', label: 'Capaian Pembelajaran (CP)', icon: BookCheck },
          { id: 'prota_promes', label: 'Prota & Promes Gasal', icon: Clock },
          { id: 'kktp', label: 'KKTP & Rubrik Asesmen', icon: Award },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as typeof activeSubTab)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Official Document Wrapper with Kop Surat */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs print:p-0 print:border-none">
        {/* Kop Surat Resmi SMP Negeri 5 Brebes */}
        <div className="border-b-4 border-double border-slate-800 pb-4 mb-6 text-center">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-800">
            PEMERINTAH KABUPATEN BREBES
          </p>
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-800">
            DINAS PENDIDIKAN PEMUDA DAN OLAHRAGA
          </p>
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-wide uppercase mt-0.5">
            SMP NEGERI 5 BREBES
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Jl. Jenderal Sudirman No. 125 Brebes, Jawa Tengah 52212 · Telp: (0283) 671234
          </p>
          <p className="text-xs font-semibold text-emerald-800 mt-0.5 tracking-widest uppercase">
            Slogan: GEMILANG (Gerakan Edukatif, Mandiri, Inovatif, Loyal, Agamis, Nyaman, Gemilang)
          </p>
        </div>

        {/* 1. MODUL AJAR DEEP LEARNING */}
        {activeSubTab === 'modul' && (
          <div className="space-y-6">
            {/* Bab Selector for Modul Ajar */}
            <div className="flex flex-wrap items-center gap-2 no-print bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-700 mr-2">Pilih Bab Modul Ajar:</span>
              {CHAPTERS_DATA.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setSelectedBabForModul(ch.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    selectedBabForModul === ch.id
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {ch.babNumber}: {ch.title.split(':')[0]}
                </button>
              ))}
            </div>

            {/* Document Content */}
            <div className="space-y-6 text-sm text-slate-800">
              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold uppercase tracking-wide text-slate-900">
                  MODUL AJAR KURIKULUM MERDEKA DENGAN PENDEKATAN DEEP LEARNING
                </h3>
                <p className="text-xs font-semibold text-emerald-800">
                  Mata Pelajaran: {TEACHER_DATA.subject} · Kelas VII · Semester Gasal
                </p>
              </div>

              {/* Komponen Identitas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs border border-slate-200 p-4 rounded-lg bg-slate-50/50">
                <div>
                  <span className="text-slate-500">Satuan Pendidikan:</span>{' '}
                  <strong className="text-slate-900">{TEACHER_DATA.school}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Guru Pengampu:</span>{' '}
                  <strong className="text-slate-900">{TEACHER_DATA.name}</strong>
                </div>
                <div>
                  <span className="text-slate-500">NIP Guru:</span>{' '}
                  <strong className="text-slate-900 font-mono">{TEACHER_DATA.nip}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Tahun Ajaran:</span>{' '}
                  <strong className="text-slate-900">2026/2027</strong>
                </div>
                <div>
                  <span className="text-slate-500">Fase / Kelas:</span>{' '}
                  <strong className="text-slate-900">Fase D / Kelas VII (Tujuh)</strong>
                </div>
                <div>
                  <span className="text-slate-500">Elemen / Bab:</span>{' '}
                  <strong className="text-slate-900">{currentBab.element} / {currentBab.babNumber}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Alokasi Waktu:</span>{' '}
                  <strong className="text-slate-900">{currentBab.alokasiWaktu}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Pendekatan Pembelajaran:</span>{' '}
                  <strong className="text-emerald-800">Deep Learning (Mindful, Meaningful, Joyful)</strong>
                </div>
              </div>

              {/* A. KOMPETENSI AWAL & PROFIL PELAJAR PANCASILA */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-1 uppercase text-xs tracking-wider">
                  I. KOMPONEN UMUM
                </h4>
                <div className="space-y-2">
                  <p>
                    <strong>A. Kompetensi Awal:</strong> Peserta didik telah mampu membaca huruf hijaiyah dasar dan mengenal konsep keimanan serta adab ibadah sehari-hari.
                  </p>
                  <p>
                    <strong>B. Profil Pelajar Pancasila:</strong> Beriman, bertakwa kepada Tuhan YME dan berakhlak mulia (elemen akhlak beragama dan akhlak pribadi), Bernalar Kritis, Mandiri, dan Bergotong Royong.
                  </p>
                  <p>
                    <strong>C. Sarana dan Prasarana:</strong> Mushaf Al-Qur'an, Proyektor LCD/Papan Tulis Cerdas, Portal Web PAI-BP GEMILANG, Lembar Kerja Peserta Didik (LKPD) Digital, speaker audio tilawah.
                  </p>
                  <p>
                    <strong>D. Target Peserta Didik:</strong> Peserta didik reguler/tipikal Kelas VII SMP Negeri 5 Brebes dengan diferensiasi konten dan proses.
                  </p>
                </div>
              </div>

              {/* B. KOMPONEN INTI */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-1 uppercase text-xs tracking-wider">
                  II. KOMPONEN INTI
                </h4>
                <div>
                  <strong>A. Tujuan Pembelajaran (TP):</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-700">
                    {currentBab.tujuanPembelajaran.map((tp, idx) => (
                      <li key={idx}>{tp}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50/70 p-3.5 rounded-lg border border-amber-200 space-y-1">
                  <strong className="text-amber-900">B. Pemahaman Bermakna (Meaningful Learning):</strong>
                  <p className="text-amber-950 text-xs sm:text-sm">
                    {currentBab.ringkasanMateri}
                  </p>
                </div>

                <div>
                  <strong>C. Pertanyaan Pemantik (Inquiry Trigger):</strong>
                  <p className="italic text-slate-700 mt-1 pl-3 border-l-2 border-emerald-600">
                    "Bagaimana ajaran dalam {currentBab.title} dapat membimbing seorang pelajar SMPN 5 Brebes hidup lebih tenang, berprestasi, dan tidak mudah terpengaruh hal negatif?"
                  </p>
                </div>
              </div>

              {/* C. SINTAKS KEGIATAN PEMBELAJARAN DENGAN PENDEKATAN DEEP LEARNING */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-1 uppercase text-xs tracking-wider">
                  III. KEGIATAN PEMBELAJARAN (SINTAKS DEEP LEARNING)
                </h4>

                <div className="space-y-3">
                  {/* Mindful */}
                  <div className="p-4 rounded-lg bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-800 text-white text-xs font-bold flex items-center justify-center">1</span>
                      <h5 className="font-bold text-emerald-950 text-sm">Mindful Learning (Berkesadaran Penuh & Kehadiran Diri)</h5>
                    </div>
                    <p className="text-xs text-slate-700 pl-8">
                      {currentBab.deepLearningApproach.mindful}
                    </p>
                    <ul className="list-disc pl-12 text-xs text-slate-600 space-y-0.5">
                      <li>Guru membuka dengan salam santun, doa bersama, dan pembiasaan tadarus Al-Qur'an 5 menit.</li>
                      <li>Ice-breaking hening terfokus: Menghadirkan niat belajar ikhlas lillahi ta'ala.</li>
                    </ul>
                  </div>

                  {/* Meaningful */}
                  <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-800 text-white text-xs font-bold flex items-center justify-center">2</span>
                      <h5 className="font-bold text-amber-950 text-sm">Meaningful Learning (Pembelajaran Bermakna & Otentik)</h5>
                    </div>
                    <p className="text-xs text-slate-700 pl-8">
                      {currentBab.deepLearningApproach.meaningful}
                    </p>
                    <ul className="list-disc pl-12 text-xs text-slate-600 space-y-0.5">
                      <li>Eksplorasi konsep dan dalil Al-Qur'an melalui studi kasus kontekstual kehidupan sekolah SMPN 5 Brebes.</li>
                      <li>Diskusi kelompok kecil memecahkan dilema moral, hukum tajwid, atau tata cara ibadah.</li>
                    </ul>
                  </div>

                  {/* Joyful */}
                  <div className="p-4 rounded-lg bg-teal-50/60 border border-teal-200 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-teal-800 text-white text-xs font-bold flex items-center justify-center">3</span>
                      <h5 className="font-bold text-teal-950 text-sm">Joyful Learning (Pembelajaran Menyenangkan & Gamifikasi)</h5>
                    </div>
                    <p className="text-xs text-slate-700 pl-8">
                      {currentBab.deepLearningApproach.joyful}
                    </p>
                    <ul className="list-disc pl-12 text-xs text-slate-600 space-y-0.5">
                      <li>Peserta didik mengakses Game Edukasi (Susun Ayat, Sortir Cepat Tajwid, Quiz Tantangan).</li>
                      <li>Apresiasi bintang prestasi GEMILANG bagi siswa dan kelompok yang berkolaborasi aktif.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* D. ASESMEN */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-1 uppercase text-xs tracking-wider">
                  IV. ASESMEN DAN EVALUASI
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong>1. Asesmen Diagnostik:</strong> Tes lisan awal dan survei kesiapan mental belajar siswa.
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong>2. Asesmen Formatif:</strong> Pengamatan sikap Profil Pelajar Pancasila, keaktifan diskusi, dan penyelesaian LKPD interaktif.
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <strong>3. Asesmen Sumatif:</strong> Tes tertulis CBT terstandar pada akhir materi dan penilaian unjuk kerja praktik.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. ALUR TUJUAN PEMBELAJARAN (ATP) */}
        {activeSubTab === 'atp' && (
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold uppercase tracking-wide text-slate-900">
                ALUR TUJUAN PEMBELAJARAN (ATP) PAI & BUDI PEKERTI
              </h3>
              <p className="text-xs font-semibold text-emerald-800">
                Fase D (Kelas VII) · Semester Gasal · Total Alokasi: 30 JP Tatap Muka
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200">
                <thead className="bg-slate-100 text-slate-800 font-bold">
                  <tr>
                    <th className="p-2.5 border border-slate-200">Bab / Alur</th>
                    <th className="p-2.5 border border-slate-200">Elemen</th>
                    <th className="p-2.5 border border-slate-200">Alur Tujuan Pembelajaran (ATP)</th>
                    <th className="p-2.5 border border-slate-200">Profil Pancasila</th>
                    <th className="p-2.5 border border-slate-200">Waktu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {CHAPTERS_DATA.map((ch) => (
                    <tr key={ch.id} className="hover:bg-slate-50">
                      <td className="p-2.5 border border-slate-200 font-bold whitespace-nowrap">
                        {ch.babNumber}
                      </td>
                      <td className="p-2.5 border border-slate-200 whitespace-nowrap text-emerald-800 font-semibold">
                        {ch.element}
                      </td>
                      <td className="p-2.5 border border-slate-200">
                        <ul className="list-disc pl-4 space-y-0.5">
                          {ch.tujuanPembelajaran.slice(0, 2).map((tp, idx) => (
                            <li key={idx}>{tp}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-2.5 border border-slate-200">
                        Beriman, Bertakwa, Bernalar Kritis, Mandiri
                      </td>
                      <td className="p-2.5 border border-slate-200 font-mono font-semibold whitespace-nowrap">
                        {ch.alokasiWaktu}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. CAPAIAN PEMBELAJARAN (CP) */}
        {activeSubTab === 'cp' && (
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold uppercase tracking-wide text-slate-900">
                CAPAIAN PEMBELAJARAN (CP) PAI-BP FASE D
              </h3>
              <p className="text-xs font-semibold text-emerald-800">
                Berdasarkan Keputusan BSKAP Kemendikbudristek untuk Jenjang SMP
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <p className="leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-200">
                <strong>Rasional Capaian Pembelajaran:</strong> Pada akhir Fase D, peserta didik memahami hukum bacaan Al-Qur'an, mampu membaca dengan tartil, menghafal ayat pilihan, serta menginternalisasi nilai-nilai Asmaul Husna, akhlak terpuji (ikhlas, sabar, pemaaf), fikih ibadah yang khusyuk melalui sujud, dan meneladani peradaban emas Daulah Bani Umayyah sebagai bekal karakter luhur Profil Pelajar Pancasila.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-slate-200 rounded-lg space-y-1">
                  <h4 className="font-bold text-emerald-900">1. Elemen Al-Qur'an Hadis</h4>
                  <p className="text-xs text-slate-600">
                    Memahami hukum bacaan Alif Lam Syamsiyah dan Qamariyah, melafalkan secara tartil, serta mengamalkan pesan kitab suci dalam interaksi sosial.
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg space-y-1">
                  <h4 className="font-bold text-emerald-900">2. Elemen Akidah</h4>
                  <p className="text-xs text-slate-600">
                    Mendalami hakikat iman melalui 4 Asmaul Husna (Al-'Alim, Al-Khabir, As-Sami', Al-Bashir) dan menumbuhkan rasa muraqabah dalam keseharian.
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg space-y-1">
                  <h4 className="font-bold text-emerald-900">3. Elemen Akhlak</h4>
                  <p className="text-xs text-slate-600">
                    Menerapkan sifat ikhlas, sabar dalam ketaatan dan musibah, serta kemuliaan pemaaf untuk menciptakan iklim sekolah yang damai tanpa kekerasan.
                  </p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg space-y-1">
                  <h4 className="font-bold text-emerald-900">4. Elemen Fikih & SPI</h4>
                  <p className="text-xs text-slate-600">
                    Mempraktikkan ketentuan sujud sahwi, sujud tilawah, dan sujud syukur, serta meneladani kemajuan ilmu dan keadilan Daulah Bani Umayyah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. PROTA & PROMES */}
        {activeSubTab === 'prota_promes' && (
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold uppercase tracking-wide text-slate-900">
                PROGRAM SEMESTER (PROMES) GASAL - TAHUN PELAJARAN 2026/2027
              </h3>
              <p className="text-xs font-semibold text-emerald-800">
                SMP Negeri 5 Brebes · Distribusi Alokasi Waktu 18 Pekan Efektif (36 JP)
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200">
                <thead className="bg-slate-100 text-slate-800 font-bold">
                  <tr>
                    <th className="p-2 border border-slate-200">No</th>
                    <th className="p-2 border border-slate-200">Materi Pokok / Bab Pembelajaran</th>
                    <th className="p-2 border border-slate-200">Alokasi Waktu</th>
                    <th className="p-2 border border-slate-200">Bulan Pelaksanaan</th>
                    <th className="p-2 border border-slate-200">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2 border border-slate-200 font-mono">1</td>
                    <td className="p-2 border border-slate-200 font-semibold">Bab 1: Al-Qur'an & Iman (Hukum Alif Lam)</td>
                    <td className="p-2 border border-slate-200 font-mono">6 JP</td>
                    <td className="p-2 border border-slate-200">Juli - Agustus</td>
                    <td className="p-2 border border-slate-200 text-emerald-700">Tuntas Pekan 1-3</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-mono">2</td>
                    <td className="p-2 border border-slate-200 font-semibold">Bab 2: Akidah (Asmaul Husna Al-'Alim, Khabir, Sami', Bashir)</td>
                    <td className="p-2 border border-slate-200 font-mono">6 JP</td>
                    <td className="p-2 border border-slate-200">Agustus - September</td>
                    <td className="p-2 border border-slate-200 text-emerald-700">Tuntas Pekan 4-6</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-mono">3</td>
                    <td className="p-2 border border-slate-200 font-semibold">Asesmen Tengah Semester (STS) Gasal</td>
                    <td className="p-2 border border-slate-200 font-mono">2 JP</td>
                    <td className="p-2 border border-slate-200">September Pekan 3</td>
                    <td className="p-2 border border-slate-200">Evaluasi Formatif</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-mono">4</td>
                    <td className="p-2 border border-slate-200 font-semibold">Bab 3: Akhlak (Ikhlas, Sabar, dan Pemaaf)</td>
                    <td className="p-2 border border-slate-200 font-mono">6 JP</td>
                    <td className="p-2 border border-slate-200">Oktober</td>
                    <td className="p-2 border border-slate-200 text-emerald-700">Tuntas Pekan 8-10</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-mono">5</td>
                    <td className="p-2 border border-slate-200 font-semibold">Bab 4: Fikih (Ketentuan Sujud Sahwi, Tilawah, Syukur)</td>
                    <td className="p-2 border border-slate-200 font-mono">6 JP</td>
                    <td className="p-2 border border-slate-200">November</td>
                    <td className="p-2 border border-slate-200 text-emerald-700">Tuntas Pekan 11-13</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-mono">6</td>
                    <td className="p-2 border border-slate-200 font-semibold">Bab 5: Sejarah Peradaban (Daulah Bani Umayyah)</td>
                    <td className="p-2 border border-slate-200 font-mono">6 JP</td>
                    <td className="p-2 border border-slate-200">November - Desember</td>
                    <td className="p-2 border border-slate-200 text-emerald-700">Tuntas Pekan 14-16</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-slate-200 font-mono">7</td>
                    <td className="p-2 border border-slate-200 font-semibold">Sumatif Akhir Semester (SAS) Gasal & Remedial</td>
                    <td className="p-2 border border-slate-200 font-mono">4 JP</td>
                    <td className="p-2 border border-slate-200">Desember</td>
                    <td className="p-2 border border-slate-200">Pekan 17-18</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 5. KKTP */}
        {activeSubTab === 'kktp' && (
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold uppercase tracking-wide text-slate-900">
                KRITERIA KETERCAPAIAN TUJUAN PEMBELAJARAN (KKTP)
              </h3>
              <p className="text-xs font-semibold text-emerald-800">
                Pendekatan Interval Nilai dan Deskriptor Kinerja Peserta Didik
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <span className="font-bold text-red-800 block text-sm">0 - 64%</span>
                <strong className="text-slate-800">Perlu Bimbingan</strong>
                <p className="text-slate-600 mt-1">
                  Belum mencapai kriteria minimal, memerlukan intervensi pendampingan khusus dan bimbingan remedial oleh guru.
                </p>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <span className="font-bold text-amber-800 block text-sm">65 - 74%</span>
                <strong className="text-slate-800">Cukup Berkembang</strong>
                <p className="text-slate-600 mt-1">
                  Mencapai sebagian besar tujuan pembelajaran, perlu penguatan pada konsep yang masih keliru.
                </p>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                <span className="font-bold text-emerald-800 block text-sm">75 - 89%</span>
                <strong className="text-slate-800">Mahir (Kriteria Standar)</strong>
                <p className="text-slate-600 mt-1">
                  Mencapai seluruh tujuan pembelajaran dengan baik, mampu menerapkan konsep secara mandiri.
                </p>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <span className="font-bold text-blue-800 block text-sm">90 - 100%</span>
                <strong className="text-slate-800">Sangat Mahir</strong>
                <p className="text-slate-600 mt-1">
                  Melampaui kriteria, mampu menganalisis studi kasus kompleks dan menjadi tutor sebaya.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tanda Tangan Pengesahan Resmi */}
        <div className="pt-10 mt-8 border-t border-slate-200 grid grid-cols-2 text-center text-xs text-slate-800">
          <div className="space-y-1">
            <p>Mengetahui,</p>
            <p className="font-semibold">Kepala SMP Negeri 5 Brebes</p>
            <div className="h-16 flex items-center justify-center">
              <span className="text-[10px] text-slate-400 italic">(Tanda Tangan & Cap Sekolah)</span>
            </div>
            <p className="font-bold text-slate-900 underline">Drs. H. Bambang Sutrisno, M.Pd.</p>
            <p className="font-mono text-slate-600">NIP. 19680712 199403 1 005</p>
          </div>

          <div className="space-y-1">
            <p>Brebes, Juli 2026</p>
            <p className="font-semibold">Guru Mata Pelajaran PAI-BP</p>
            <div className="h-16 flex items-center justify-center">
              <span className="text-[10px] text-slate-400 italic">(Tanda Tangan Guru Pengampu)</span>
            </div>
            <p className="font-bold text-slate-900 underline">{TEACHER_DATA.name}</p>
            <p className="font-mono text-slate-600">NIP. {TEACHER_DATA.nip}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
