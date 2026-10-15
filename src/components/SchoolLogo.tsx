import React from 'react';

interface SchoolLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 48,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm select-none"
        aria-label="Logo SMP Negeri 5 Brebes GEMILANG"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="60" y1="5" x2="60" y2="115" gradientUnits="userSpaceOnUse">
            <stop stopColor="#047857" />
            <stop offset="0.65" stopColor="#065F46" />
            <stop offset="1" stopColor="#064E3B" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="0.5" stopColor="#EAB308" />
            <stop offset="1" stopColor="#CA8A04" />
          </linearGradient>
          <linearGradient id="flameGrad" x1="60" y1="22" x2="60" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EF4444" />
            <stop offset="0.5" stopColor="#F97316" />
            <stop offset="1" stopColor="#FBBF24" />
          </linearGradient>
        </defs>

        {/* Outer Pentagon Shield */}
        <polygon
          points="60,6 112,25 96,104 60,116 24,104 8,25"
          fill="url(#shieldGrad)"
          stroke="url(#goldGrad)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner Border Ring */}
        <polygon
          points="60,14 104,30 90,97 60,108 30,97 16,30"
          fill="none"
          stroke="#F8FAFC"
          strokeWidth="1.2"
          strokeDasharray="3 2"
          opacity="0.8"
        />

        {/* Top Five Golden Stars (representing Pancasila & SMP 5) */}
        <g fill="url(#goldGrad)">
          <polygon points="60,16 62,21 67,21 63,24 65,29 60,26 55,29 57,24 53,21 58,21" />
          <polygon points="46,20 47.5,23.5 51,23.5 48,25.5 49.5,29 46,27 42.5,29 44,25.5 41,23.5 44.5,23.5" transform="scale(0.85) translate(8, 3)" />
          <polygon points="74,20 75.5,23.5 79,23.5 76,25.5 77.5,29 74,27 70.5,29 72,25.5 69,23.5 72.5,23.5" transform="scale(0.85) translate(14, 3)" />
        </g>

        {/* Torch of Knowledge (Obor Semangat Belajar) */}
        <path
          d="M60 22 C64 29, 67 34, 63 42 C60 41, 57 43, 60 46 C55 45, 54 40, 56 36 C58 32, 55 27, 60 22 Z"
          fill="url(#flameGrad)"
        />
        {/* Torch Handle */}
        <polygon points="58,45 62,45 61,54 59,54" fill="url(#goldGrad)" />

        {/* Open Book (Al-Qur'an & Ilmu Pengetahuan) */}
        <g transform="translate(0, 4)">
          {/* Left page */}
          <path
            d="M60,62 C51,55 38,55 31,58 L31,80 C38,77 51,77 60,84 Z"
            fill="#F8FAFC"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
          {/* Right page */}
          <path
            d="M60,62 C69,55 82,55 89,58 L89,80 C82,77 69,77 60,84 Z"
            fill="#F1F5F9"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
          {/* Book Spine */}
          <line x1="60" y1="62" x2="60" y2="84" stroke="url(#goldGrad)" strokeWidth="2.5" />

          {/* Book Page Lines */}
          <line x1="36" y1="64" x2="55" y2="67" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
          <line x1="36" y1="69" x2="54" y2="72" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
          <line x1="36" y1="74" x2="52" y2="76" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />

          <line x1="65" y1="67" x2="84" y2="64" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
          <line x1="66" y1="72" x2="84" y2="69" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
          <line x1="68" y1="76" x2="84" y2="74" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* Golden Ribbon Banner (Pita Sekolah) */}
        <path
          d="M24,93 L60,88 L96,93 L92,102 L60,98 L28,102 Z"
          fill="url(#goldGrad)"
          stroke="#92400E"
          strokeWidth="0.8"
        />
        <text
          x="60"
          y="95.5"
          fontSize="6"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          fill="#1E293B"
          textAnchor="middle"
          letterSpacing="0.6"
        >
          SMPN 5 BREBES
        </text>

        {/* GEMILANG Motto Micro Tag */}
        <rect x="42" y="103" width="36" height="7" rx="3.5" fill="#047857" stroke="#FDE047" strokeWidth="0.8" />
        <text
          x="60"
          y="108.2"
          fontSize="5"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          fill="#FEF08A"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          GEMILANG
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg leading-tight">
              SMP Negeri 5 Brebes
            </span>
            <span className="text-[10px] font-extrabold tracking-wider bg-amber-100 text-amber-800 border border-amber-300 rounded px-1.5 py-0.2">
              GEMILANG
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            PAI & Budi Pekerti · Kurikulum Merdeka
          </p>
        </div>
      )}
    </div>
  );
};
