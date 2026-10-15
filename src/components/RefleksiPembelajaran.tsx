import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Check, Trash2, Printer, Heart, Smile, Meh, Frown, Award } from 'lucide-react';
import { CHAPTERS_DATA, TEACHER_DATA } from '../data/curriculumData';
import { ReflectionEntry } from '../types';
import { soundEffects } from '../utils/audioEffects';

export const RefleksiPembelajaran: React.FC = () => {
  const [entries, setEntries] = useState<ReflectionEntry[]>([]);
  const [namaSiswa, setNamaSiswa] = useState('');
  const [kelas, setKelas] = useState('VII-A');
  const [selectedBab, setSelectedBab] = useState<number>(1);
  const [tigaHal, setTigaHal] = useState('');
  const [duaHal, setDuaHal] = useState('');
  const [satuHal, setSatuHal] = useState('');
  const [mood, setMood] = useState<ReflectionEntry['moodBelajar']>('sangat_semangat');
  const [komitmenAkhlak, setKomitmenAkhlak] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('smpn5_pai_reflections');
      if (stored) {
        setEntries(JSON.parse(stored));
      }
    } catch {
      // Local storage disabled or error
    }
  }, []);

  const handleSaveReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!namaSiswa.trim() || !tigaHal.trim() || !duaHal.trim()) {
      alert('Mohon isi nama dan poin-poin refleksi terlebih dahulu.');
      return;
    }

    const newEntry: ReflectionEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      namaSiswa,
      kelas,
      babId: selectedBab,
      tigaHalDipahami: tigaHal,
      duaHalBermakna: duaHal,
      satuHalPerluBimbingan: satuHal,
      moodBelajar: mood,
      komitmenAkhlak,
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    try {
      localStorage.setItem('smpn5_pai_reflections', JSON.stringify(updated));
    } catch {
      // silent
    }

    soundEffects.playVictory();
    setIsSaved(true);
    setTigaHal('');
    setDuaHal('');
    setSatuHal('');
    setKomitmenAkhlak('');
    setTimeout(() => setIsSaved(false), 4000);
  };

  const handleDeleteEntry = (id: string) => {
    soundEffects.playClick();
    const filtered = entries.filter((e) => e.id !== id);
    setEntries(filtered);
    try {
      localStorage.setItem('smpn5_pai_reflections', JSON.stringify(filtered));
    } catch {
      // silent
    }
  };

  const getMoodLabel = (m: ReflectionEntry['moodBelajar']) => {
    switch (m) {
      case 'sangat_semangat':
        return '🌟 Sangat Antusias & Terinspirasi';
      case 'paham_senang':
        return '😊 Paham & Menyenangkan';
      case 'cukup_paham':
        return '😐 Cukup Paham, Perlu Muroja\'ah';
      case 'butuh_bimbingan':
        return '🤔 Butuh Bimbingan Tambahan';
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            Mindful Learning · Kurikulum Merdeka
          </div>
          <h1 className="text-2xl font-bold text-slate-900">
            Jurnal Refleksi Pembelajaran Siswa
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Model Refleksi 3-2-1 Deep Learning PAI & Budi Pekerti SMP Negeri 5 Brebes
          </p>
        </div>
      </div>

      {/* Form Refleksi 3-2-1 */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="text-lg font-bold text-slate-900">
            Tuliskan Refleksi Bermakna Hari Ini
          </h3>
          <p className="text-xs text-slate-500">
            Refleksi diri yang jujur melatih kesadaran batin (Mindful) dan menumbuhkan akhlak mulia.
          </p>
        </div>

        <form onSubmit={handleSaveReflection} className="space-y-5">
          {/* Identitas Siswa */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nama Lengkap Siswa:
              </label>
              <input
                type="text"
                required
                value={namaSiswa}
                onChange={(e) => setNamaSiswa(e.target.value)}
                placeholder="Contoh: Muhammad Rafanda"
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Kelas:
              </label>
              <select
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
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

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Bab yang Direfleksikan:
              </label>
              <select
                value={selectedBab}
                onChange={(e) => setSelectedBab(Number(e.target.value))}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none"
              >
                {CHAPTERS_DATA.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.babNumber}: {ch.title.split(':')[0]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mood Belajar */}
          <div className="space-y-2 pt-1">
            <label className="block text-xs font-bold text-slate-700">
              Bagaimana suasana hati & pemahamanmu belajar PAI hari ini?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { val: 'sangat_semangat', label: 'Sangat Antusias', icon: '🌟' },
                { val: 'paham_senang', label: 'Paham & Riang', icon: '😊' },
                { val: 'cukup_paham', label: 'Cukup Paham', icon: '😐' },
                { val: 'butuh_bimbingan', label: 'Perlu Bimbingan', icon: '🤔' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.val}
                  onClick={() => setMood(item.val as typeof mood)}
                  className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    mood === item.val
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Poin 3-2-1 Deep Learning */}
          <div className="space-y-4 pt-2">
            <div className="space-y-1">
              <label className="block text-xs font-bold text-emerald-900">
                3 Hal baru yang berhasil saya pahami dengan baik dari materi ini:
              </label>
              <textarea
                rows={2}
                required
                value={tigaHal}
                onChange={(e) => setTigaHal(e.target.value)}
                placeholder="1. Perbedaan tasydid pada syamsiyah dan sukun pada qamariyah...&#10;2. Makna Al-Khabir menuntut ketelitian..."
                className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-amber-900">
                2 Hal yang paling menyentuh hati saya dan ingin saya amalkan (Meaningful):
              </label>
              <textarea
                rows={2}
                required
                value={duaHal}
                onChange={(e) => setDuaHal(e.target.value)}
                placeholder="1. Selalu memaafkan teman sekelas tanpa rasa dendam...&#10;2. Tidak menyontek karena yakin Allah Maha Melihat (Al-Bashir)..."
                className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-800">
                1 Pertanyaan atau hal yang masih membingungkan / ingin saya tanyakan ke Pak Sandi Arifin:
              </label>
              <textarea
                rows={2}
                value={satuHal}
                onChange={(e) => setSatuHal(e.target.value)}
                placeholder="Contoh: Bagaimana cara menentukan jumlah rakaat jika imam lupa sujud tilawah?"
                className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-800">
                Komitmen Akhlak Siswa GEMILANG Minggu Ini:
              </label>
              <input
                type="text"
                value={komitmenAkhlak}
                onChange={(e) => setKomitmenAkhlak(e.target.value)}
                placeholder="Contoh: Datang tepat waktu ke musala dan rajin membaca Al-Qur'an setiap maghrib."
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            {isSaved && (
              <span className="text-xs text-emerald-800 font-bold flex items-center gap-1">
                <Check className="w-4 h-4" />
                Refleksi berhasil disimpan ke portofolio belajar!
              </span>
            )}
            {!isSaved && <span className="text-xs text-slate-500">Portofolio tersimpan di perangkat ini.</span>}

            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer"
            >
              Simpan Jurnal Refleksi
            </button>
          </div>
        </form>
      </div>

      {/* Riwayat Refleksi Siswa */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">
            Riwayat Refleksi Tersimpan ({entries.length})
          </h3>
          {entries.length > 0 && (
            <button
              onClick={() => window.print()}
              className="text-xs font-semibold text-emerald-800 hover:underline flex items-center gap-1 cursor-pointer no-print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Rekap Jurnal Refleksi</span>
            </button>
          )}
        </div>

        {entries.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-xs text-slate-500">
            Belum ada catatan refleksi yang tersimpan. Ayo isi formulir di atas untuk memulai jurnal belajarmu!
          </div>
        ) : (
          <div className="space-y-4">
            {entries.map((entry) => {
              const bab = CHAPTERS_DATA.find((c) => c.id === entry.babId) || CHAPTERS_DATA[0];
              return (
                <div
                  key={entry.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        {entry.namaSiswa} ({entry.kelas})
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {bab.babNumber}: {bab.title.split(':')[0]} · {entry.timestamp}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-medium">
                        {getMoodLabel(entry.moodBelajar)}
                      </span>
                      <button
                        onClick={() => handleDeleteEntry(entry.id)}
                        className="text-slate-400 hover:text-red-600 p-1 rounded hover:bg-slate-100 cursor-pointer no-print"
                        title="Hapus Catatan"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                    <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-150 space-y-1">
                      <strong className="text-emerald-950 block">3 Hal Baru yang Dipahami:</strong>
                      <p className="whitespace-pre-line text-slate-700">{entry.tigaHalDipahami}</p>
                    </div>

                    <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-150 space-y-1">
                      <strong className="text-amber-950 block">2 Hal yang Bermakna & Diamalkan:</strong>
                      <p className="whitespace-pre-line text-slate-700">{entry.duaHalBermakna}</p>
                    </div>
                  </div>

                  {entry.satuHalPerluBimbingan && (
                    <div className="text-xs bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-700">
                      <strong>Pertanyaan untuk Pak Sandi Arifin:</strong> {entry.satuHalPerluBimbingan}
                    </div>
                  )}

                  {entry.komitmenAkhlak && (
                    <div className="text-xs text-emerald-800 font-medium">
                      ★ Komitmen Karakter GEMILANG: "{entry.komitmenAkhlak}"
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
