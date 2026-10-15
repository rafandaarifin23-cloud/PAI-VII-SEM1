import React, { useState } from 'react';
import { SchoolLogo } from './SchoolLogo';
import { User, Menu, X, BookOpen } from 'lucide-react';

interface HeaderNavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenTeacherModal: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenTeacherModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'perangkat', label: 'Perangkat Ajar' },
    { id: 'materi', label: 'Materi 5 Bab' },
    { id: 'media', label: 'Media Pembelajaran' },
    { id: 'game', label: 'Game Evaluasi' },
    { id: 'asesmen', label: 'Asesmen CBT' },
    { id: 'refleksi', label: 'Refleksi' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single brand wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <SchoolLogo size={42} />
            <button
              onClick={() => onSelectTab('beranda')}
              className="text-left cursor-pointer group"
            >
              <span className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors whitespace-nowrap leading-none">
                SMPN 5 Brebes
              </span>
              <span className="text-xs font-semibold text-emerald-800 tracking-wider">
                PAI GEMILANG
              </span>
            </button>
          </div>

          {/* Zone 2: Single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`cursor-pointer whitespace-nowrap transition-colors py-1 relative ${
                    isActive
                      ? 'text-emerald-700 font-semibold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenTeacherModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <User className="w-3.5 h-3.5 text-emerald-800" />
              <span>Sandi Arifin, S.Pd.I</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-100 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-md font-medium ${
                  activeTab === item.id
                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTeacherModal();
                }}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium text-emerald-800 bg-emerald-50 rounded-md"
              >
                <User className="w-4 h-4" />
                <span>Profil Guru: Sandi Arifin, S.Pd.I</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
