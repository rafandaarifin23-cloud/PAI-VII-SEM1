/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderNavbar } from './components/HeaderNavbar';
import { HeroSection } from './components/HeroSection';
import { PerangkatAjar } from './components/PerangkatAjar';
import { MateriBabSection } from './components/MateriBabSection';
import { MediaPembelajaran } from './components/MediaPembelajaran';
import { GameEvaluasi } from './components/GameEvaluasi';
import { AsesmenPortal } from './components/AsesmenPortal';
import { RefleksiPembelajaran } from './components/RefleksiPembelajaran';
import { TeacherProfileModal } from './components/TeacherProfileModal';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Bar Contract Navigation */}
      <HeaderNavbar
        activeTab={activeTab}
        onSelectTab={handleNavigate}
        onOpenTeacherModal={() => setIsTeacherModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'beranda' && (
          <HeroSection
            onNavigate={handleNavigate}
            onOpenTeacher={() => setIsTeacherModalOpen(true)}
          />
        )}

        {activeTab === 'perangkat' && <PerangkatAjar />}

        {activeTab === 'materi' && (
          <MateriBabSection
            onNavigateToGame={() => handleNavigate('game')}
          />
        )}

        {activeTab === 'media' && <MediaPembelajaran />}

        {activeTab === 'game' && <GameEvaluasi />}

        {activeTab === 'asesmen' && <AsesmenPortal />}

        {activeTab === 'refleksi' && <RefleksiPembelajaran />}
      </main>

      {/* Teacher Profile Modal */}
      <TeacherProfileModal
        isOpen={isTeacherModalOpen}
        onClose={() => setIsTeacherModalOpen(false)}
      />

      {/* Footer Section */}
      <FooterSection
        onSelectTab={handleNavigate}
        onOpenTeacher={() => setIsTeacherModalOpen(true)}
      />
    </div>
  );
}
