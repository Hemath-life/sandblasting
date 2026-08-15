import { useCallback, useId, useRef, useState } from "react"
import { ChevronsLeftRight } from "lucide-react"
import { images } from "../data/images"

export function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const frame = useRef<HTMLDivElement>(null)
  const labelId = useId()

  const updatePosition = useCallback((clientX: number) => {
    const rect = frame.current?.getBoundingClientRect()
    if (!rect) return
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(98, Math.max(2, next)))
  }, [])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true)
    ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging || e.buttons > 0) {
      updatePosition(e.clientX)
    }
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div
        ref={frame}
        className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-charcoal shadow-2xl select-none touch-none sm:aspect-[16/9]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* AFTER: Clean Blasted Steel (Base Layer) */}
        <img
          src={images.cleanSteel}
          alt="Clean blasted structural steel surface with Sa 2.5 white-metal profile"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300"
          draggable={false}
          loading="lazy"
        />

        {/* After Badge */}
        <div className="pointer-events-none absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-graphite/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-md shadow-lg sm:right-6 sm:top-6 sm:px-4 sm:py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>After Blasting (Sa 2.5)</span>
        </div>

        {/* BEFORE: Rusted Steel (Overlay Layer with clip-path) */}
        <div
          className="absolute inset-0 select-none overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={images.rust}
            alt="Corroded and heavily rusted structural steel surface before preparation"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
            loading="lazy"
          />

          {/* Before Badge */}
          <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-graphite/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-md shadow-lg sm:left-6 sm:top-6 sm:px-4 sm:py-2">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span>Before (Heavy Rust &amp; Scale)</span>
          </div>
        </div>

        {/* Glowing Divider Line */}
        <div
          className="pointer-events-none absolute inset-y-0 z-20 w-[3px] bg-gradient-to-b from-amber-400 via-white to-emerald-400 shadow-[0_0_15px_rgba(255,255,255,0.85)]"
          style={{ left: `calc(${pos}% - 1.5px)` }}
        />

        {/* Drag Handle Button */}
        <div
          className={`pointer-events-none absolute top-1/2 z-30 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand bg-graphite text-brand shadow-[0_0_20px_rgba(238,155,0,0.5)] backdrop-blur-md transition-transform duration-150 sm:h-14 sm:w-14 ${
            isDragging ? "scale-110 border-white text-white shadow-[0_0_25px_rgba(255,255,255,0.8)]" : "group-hover:scale-105"
          }`}
          style={{ left: `${pos}%` }}
        >
          <ChevronsLeftRight className="h-6 w-6 stroke-[2.5]" />
          <span className="sr-only">Drag to compare</span>
        </div>

        {/* Accessibility Range Input */}
        <label className="sr-only" htmlFor={labelId}>
          Compare surface preparation: before (corroded rust) and after (sandblasted clean steel)
        </label>
        <input
          id={labelId}
          type="range"
          min={2}
          max={98}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 z-40 cursor-ew-resize opacity-0"
          aria-valuemin={2}
          aria-valuemax={98}
          aria-valuenow={Math.round(pos)}
          aria-label="Before and after comparison slider"
        />
      </div>

      {/* Caption & instructions below */}
      <div className="mt-3 flex items-center justify-between px-2 text-[12px] text-offwhite/60">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          Pre-treatment rust &amp; mill scale
        </span>
        <span className="hidden text-offwhite/40 sm:inline">↔ Drag slider or use arrow keys to inspect surface profile</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          Sa 2.5 Near-white blasted profile
        </span>
      </div>
    </div>
  )
}
