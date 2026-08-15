import { useCallback, useId, useRef, useState } from "react"
import { images } from "../data/images"

export function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const frame = useRef<HTMLDivElement>(null)
  const labelId = useId()

  const update = useCallback((clientX: number) => {
    const rect = frame.current?.getBoundingClientRect()
    if (!rect) return
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(98, Math.max(2, next)))
  }, [])

  return (
    <div
      ref={frame}
      className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-charcoal select-none"
      onPointerDown={(e) => {
        ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
        update(e.clientX)
      }}
      onPointerMove={(e) => {
        if (e.buttons) update(e.clientX)
      }}
    >
      <img
        src={images.cleanSteel}
        alt="Clean blasted steel surface after preparation"
        className="img-grade absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="absolute right-4 top-4 border border-white/20 bg-graphite/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
        After
      </div>
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={images.rust}
          alt="Rusted steel surface before preparation"
          className="img-grade absolute inset-0 h-full w-full max-w-none object-cover"
          style={{ width: frame.current ? `${frame.current.clientWidth}px` : "100%", minWidth: "100%" }}
          draggable={false}
        />
        <div className="absolute left-4 top-4 border border-white/20 bg-graphite/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
          Before
        </div>
      </div>
      <div className="absolute inset-y-0 z-10 w-0.5 bg-metal" style={{ left: `${pos}%` }} />
      <label className="sr-only" htmlFor={labelId}>
        Compare before and after surface preparation
      </label>
      <input
        id={labelId}
        type="range"
        min={2}
        max={98}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 z-20 cursor-ew-resize opacity-0"
        aria-valuemin={2}
        aria-valuemax={98}
        aria-valuenow={Math.round(pos)}
      />
      <div
        className="pointer-events-none absolute top-1/2 z-10 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-metal bg-graphite text-[10px] font-bold uppercase tracking-widest text-metal-light"
        style={{ left: `${pos}%` }}
      >
        Drag
      </div>
    </div>
  )
}
