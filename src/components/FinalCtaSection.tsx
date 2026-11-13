import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Sparkles, Globe, DollarSign } from 'lucide-react';
import { AFFILIATE_LINK, UNIFIED_CTA_TEXT } from '../data/landingData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Background glow illumination */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-emerald-500/15 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-xs font-bold text-emerald-400">
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          <span>CIERRE DE OPORTUNIDAD · CORTE SEMANAL EN CURSO</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight text-balance">
          Construye tu negocio digital hoy mismo y genera ingresos semanales en dólares
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Completa tu prerregistro 100% gratuito. Bloquea tu posición antes del corte de este jueves a medianoche y accede al sistema que está transformando la vida de miles de familias en más de 200 países.
        </p>

        {/* Benefits checklist recap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto text-left text-xs sm:text-sm text-slate-300 pt-2">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>Prerregistro 100% gratuito sin costo de entrada</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>Posicionamiento inmediato en la Powerline global</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>Sistema automatizado llave en mano desde tu móvil</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>Pagos puntuales semanales y mensuales en dólares</span>
          </div>
        </div>

        {/* Giant Final CTA Button (strictly linking to AFFILIATE_LINK with UNIFIED_CTA_TEXT) */}
        <div className="pt-4 space-y-4">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-xl font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-2xl shadow-2xl shadow-emerald-500/30 uppercase tracking-wide focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          >
            <span>{UNIFIED_CTA_TEXT}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Conexión 100% segura con cifrado SSL
            </span>
            <span className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Sin compras forzadas ni autoenvíos
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Presencia en más de 200 países
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
