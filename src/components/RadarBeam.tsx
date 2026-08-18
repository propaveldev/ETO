export function RadarBeam({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden>
      <div className="relative mx-auto h-40 w-40">
        <span className="radar-beam-source absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-accent-400 shadow-[0_0_12px_2px_rgba(232,121,42,0.8)]" />
        <div
          className="radar-beam absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 bg-gradient-to-b from-accent-400/70 via-accent-400/20 to-transparent"
          style={{ clipPath: "polygon(50% 0%, 20% 100%, 80% 100%)" }}
        />
        <div
          className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 bg-gradient-to-b from-accent-400/25 via-transparent to-transparent"
          style={{ clipPath: "polygon(50% 0%, 20% 100%, 80% 100%)" }}
        />
      </div>
    </div>
  );
}
