import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { AFFILIATE_LINK, UNIFIED_CTA_TEXT } from '../data/landingData';

export const OfferDescriptionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-xs font-bold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>EL MODELO QUE ESTÁ TRANSFORMANDO LA INDUSTRIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            ¿Por qué este sistema supera a los negocios tradicionales?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminamos todo lo que la gente odia de los negocios por catálogo y el mercadeo antiguo: 
            <strong> cero compras obligatorias, cero inventarios acumulados y un sistema 100% digital</strong> con herramientas listas para operar.
          </p>
        </div>

        {/* Side-by-Side Model Comparison (Zero Product Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Old Traditional Model Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-950 border border-rose-900/40 relative flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-rose-400 uppercase">
                  Negocios Tradicionales Obsoletos
                </span>
                <XCircle className="w-6 h-6 text-rose-500" aria-hidden="true" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Compras forzadas, inventarios y estrés constante
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p>
                    <strong>Autoenvío obligatorio de $150 - $200 USD al mes</strong> para mantener tu rango o calificar para comisiones.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p>
                    <strong>Garajes y armarios llenos de cajas</strong> de productos caros que nadie quiere comprar por sus precios inflados.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p>
                    <strong>Perseguir familiares y amigos</strong> y hacer llamadas incómodas para intentar vender por catálogo.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p>
                    <strong>Más del 90% de deserción</strong> debido a que los costos mensuales superan los ingresos generados.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-rose-400 font-semibold">
              Un sistema desgastante donde la mayoría pierde dinero y tiempo.
            </div>
          </div>

          {/* LiveGood Disruptive Digital Model Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/50 shadow-2xl shadow-emerald-950/30 relative flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
                  El Modelo Digital LiveGood
                </span>
                <CheckCircle2 className="w-6 h-6 text-emerald-400" aria-hidden="true" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                100% online, accesible y con retención récord
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p>
                    <strong>Cero compras obligatorias</strong>: Cuota de club de solo <strong>$9.95 USD/mes</strong> sin exigencias de compras de stock.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p>
                    <strong>Sistema automatizado llave en mano</strong>: Embudo digital y páginas oficiales listas para compartir desde tu móvil.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p>
                    <strong>Cobros puntuales semanales en dólares</strong>: 6 formas de ganar incluyendo bono de inicio rápido del 50%.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p>
                    <strong>Retención superior al 85%</strong>: La gente ama pertenecer al club porque ahorra dinero real y el negocio es sostenible.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-emerald-300 font-semibold flex items-center justify-between">
              <span>Negocio digital escalable en más de 200 países.</span>
            </div>
          </div>
        </div>

        {/* Mid-Section Unified Call To Action Button */}
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
          <p className="text-xs text-slate-400 mt-3">
            Prerregistro 100% gratuito · Posición garantizada en la línea de poder global
          </p>
        </div>
      </div>
    </section>
  );
};
