import React from 'react';
import { ArrowRight, CheckCircle2, DollarSign, Globe, Sparkles, Laptop, ShieldCheck } from 'lucide-react';
import { AFFILIATE_LINK, UNIFIED_CTA_TEXT } from '../data/landingData';
import { VideoFacade } from './VideoFacade';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-radial from-slate-900 via-slate-950 to-slate-950">
      {/* Background glow illumination */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-10 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Direct High-Converting UGC Business Headline & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7">
            {/* Header & Title */}
            <div className="space-y-4">
              {/* Direct Value Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-bold text-emerald-400 tracking-wide">
                <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>NEGOCIO DIGITAL DESDE CASA · SISTEMA AUTOMATIZADO</span>
              </div>

              {/* Main Promise Headline aligned with UGC Ads */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
                Construye un{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300">
                  negocio rentable desde casa
                </span>{' '}
                y genera{' '}
                <span className="underline decoration-emerald-500/60 decoration-wavy decoration-2">
                  ingresos en dólares
                </span>{' '}
                cada semana
              </h1>

              {/* Subtitle reinforcing transformation and ease */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Descubre el sistema paso a paso que permite a miles de personas en más de 200 países generar ingresos recurrentes desde su celular o computadora.{' '}
                <strong>Sin compras forzadas, sin perseguir amigos, sin acumular inventarios y con un sistema automatizado que hace el trabajo pesado por ti.</strong>
              </p>
            </div>

            {/* Mobile Video Placement (Visible on mobile/tablet, hidden on desktop) */}
            <div className="block lg:hidden my-1">
              <VideoFacade
                videoId="inNRR1jofjA"
                title="Presentación Oficial del Modelo de Negocio LiveGood"
                duration="05:42"
              />
            </div>

            {/* Prominent Unified Call To Action Button strictly "Regístrate ahora" */}
            <div className="pt-2 space-y-3">
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-5 text-base sm:text-lg font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-2xl shadow-xl shadow-emerald-500/30 text-center uppercase tracking-wide focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
              >
                <span>{UNIFIED_CTA_TEXT}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>

              <p className="text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Prerregistro 100% gratuito en la Powerline global. Asegura tu posición hoy.</span>
              </p>
            </div>

            {/* Micro-reassurance trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Laptop className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>100% online desde tu móvil</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Cobros semanales en dólares</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Presencia en 200+ países</span>
              </div>
            </div>
          </div>

          {/* Desktop-only Video Column (5 cols on lg) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <VideoFacade
              videoId="inNRR1jofjA"
              title="Presentación Oficial del Modelo de Negocio LiveGood"
              duration="05:42"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
