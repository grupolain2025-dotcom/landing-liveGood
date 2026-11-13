import React, { useState } from 'react';
import { Play, Sparkles, Volume2, ShieldCheck } from 'lucide-react';
import localFallbackImg from '../assets/images/livegood_wellness_hero_1794174245259.jpg';

interface VideoFacadeProps {
  videoId?: string;
  title?: string;
  duration?: string;
  className?: string;
}

export const VideoFacade: React.FC<VideoFacadeProps> = ({
  videoId = 'inNRR1jofjA',
  title = 'Presentación Oficial: Cómo Construir Tu Negocio Rentable con LiveGood',
  duration = '05:42',
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  // High-res YouTube thumbnail with fallback to HQ, then to bundled local asset
  const primaryThumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const [currentThumb, setCurrentThumb] = useState(primaryThumb);

  const handleThumbError = () => {
    if (currentThumb === primaryThumb) {
      setCurrentThumb(fallbackThumb);
    } else if (currentThumb === fallbackThumb) {
      setCurrentThumb(localFallbackImg);
    } else {
      setThumbError(true);
    }
  };

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden border border-emerald-500/40 bg-slate-950 shadow-2xl shadow-emerald-950/40 group ${className}`}
    >
      {/* Decorative top illumination bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 z-20" />

      <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
        {isPlaying ? (
          /* Active YouTube Embed mounted ONLY after user clicks play (Lazy Load Facade) */
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0 absolute inset-0 z-20"
          />
        ) : (
          /* High-Performance Facade Cover */
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Reproducir video: ${title}`}
            className="w-full h-full relative cursor-pointer flex items-center justify-center select-none text-left border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          >
            {/* Background Thumbnail */}
            {!thumbError ? (
              <img
                src={currentThumb}
                alt={title}
                onError={handleThumbError}
                referrerPolicy="no-referrer"
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            ) : (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950" />
            )}

            {/* Dark Scrim overlay for contrast */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30 group-hover:via-slate-950/40 transition-colors"
              aria-hidden="true"
            />

            {/* Top Badge Overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 text-xs font-bold text-emerald-400 shadow-lg">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>VIDEO EXPLICATIVO OFICIAL</span>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-700 text-[11px] font-mono font-semibold text-slate-300">
                {duration}
              </div>
            </div>

            {/* Center Animated Play Button */}
            <div className="relative z-10 flex flex-col items-center gap-4 text-center px-4">
              <div className="relative flex items-center justify-center">
                {/* Glowing ripple animation */}
                <span className="absolute -inset-4 rounded-full bg-emerald-500/30 animate-ping group-hover:bg-emerald-500/50" />
                <span className="absolute -inset-2 rounded-full bg-emerald-400/20 blur-sm" />

                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-400 text-slate-950 group-hover:bg-emerald-300 group-hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-emerald-500/60 flex items-center justify-center">
                  <Play className="w-9 h-9 sm:w-10 sm:h-10 fill-current ml-1" aria-hidden="true" />
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-sm sm:text-base font-extrabold text-white drop-shadow-md">
                  Haz clic para ver el video explicativo
                </p>
                <p className="text-xs text-emerald-300/90 font-medium flex items-center justify-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Sonido activado · 100% en español</span>
                </p>
              </div>
            </div>

            {/* Bottom Title Bar */}
            <div className="absolute bottom-3 left-4 right-4 z-10 text-left">
              <p className="text-xs sm:text-sm font-bold text-slate-200 line-clamp-1 drop-shadow">
                {title}
              </p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
