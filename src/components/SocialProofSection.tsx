import React from 'react';
import { TESTIMONIALS_DATA, AFFILIATE_LINK, UNIFIED_CTA_TEXT } from '../data/landingData';
import { Quote, ArrowRight, MapPin, Sparkles, TrendingUp } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header strictly formatted */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-xs font-bold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>HISTORIAS REALES DE ÉXITO Y LIBERTAD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            Emprendedores reales que construyeron un ingreso sólido desde casa
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Sin perseguir amigos ni acumular cajas en su hogar. Conoce a miembros que aprovecharon el sistema automatizado para cambiar su realidad financiera.
          </p>
        </div>

        {/* Testimonials Grid (2x2 on desktop / 4 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-5 relative group shadow-xl"
            >
              <div className="space-y-4">
                {/* Header with Avatar, Name & Rank Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${t.avatarGradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                      >
                        {t.avatarInitials}
                      </div>
                      <span className="absolute -bottom-1 -right-1 text-sm bg-slate-950 rounded-full px-0.5 border border-slate-700 leading-none">
                        {t.flag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                        {t.name}
                      </h3>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-500" aria-hidden="true" />
                        <span>{t.location}</span>
                      </p>
                    </div>
                  </div>

                  <Quote className="w-5 h-5 text-emerald-400/40 shrink-0" aria-hidden="true" />
                </div>

                {/* Rank & 5 Stars */}
                <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-800/60">
                  <span
                    className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md border tracking-wider ${t.rankColor}`}
                  >
                    Rango: {t.rank}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                  </div>
                </div>

                {/* Key result micro-tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-semibold text-emerald-300">
                  <Sparkles className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                  <span>{t.keyResult}</span>
                </div>

                {/* Before state */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-400">
                  <span className="font-bold text-slate-300 block mb-0.5">Situación previa:</span>
                  <span>{t.before}</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer & Income Verified */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span>Ingreso reportado:</span>
                  </span>
                  <span className="font-bold text-emerald-400 tabular-nums">
                    {t.income}
                  </span>
                </div>

                <p className="text-[10px] text-slate-500 text-center font-mono">
                  {t.timeInBusiness} · Verificado
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Live Activity Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-emerald-500/30 p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="text-xs sm:text-sm font-bold text-white">
              <span className="text-emerald-400 font-black">EN VIVO:</span> Nuevos registros en la Powerline (últimos 60 min):{' '}
              <span className="text-emerald-300 font-black tabular-nums">+148 personas</span>
            </div>
          </div>

          {/* Country breakdown badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-medium">
              🇵🇪 Perú <strong className="text-emerald-400">+34</strong>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-medium">
              🇲🇽 México <strong className="text-emerald-400">+28</strong>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-medium">
              🇨🇴 Colombia <strong className="text-emerald-400">+19</strong>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-medium">
              🇨🇱 Chile <strong className="text-emerald-400">+15</strong>
            </span>
          </div>
        </div>

        {/* Action button strictly linking to AFFILIATE_LINK with UNIFIED_CTA_TEXT */}
        <div className="text-center pt-2">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-xl shadow-xl shadow-emerald-500/30 uppercase tracking-wide focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          >
            <span>{UNIFIED_CTA_TEXT}</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
