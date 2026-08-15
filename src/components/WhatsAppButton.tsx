import { company } from "../data/company"

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-pulse fixed right-4 bottom-24 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg md:bottom-8"
      aria-label="WhatsApp GK Coatings"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="currentColor">
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.7L1 23l5.4-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.2.7.7-3.1-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6c.1-.2.2-.3.3-.5s0-.4 0-.5-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3s-1 1-1 2.4 1 2.8 1.1 3 .2.3 2 3.1a13.4 13.4 0 0 0 3.2 1.9c.4.2.8.1 1.1.1s1.6-.7 1.8-1.3.2-1.2.1-1.3-.2-.2-.5-.3z" />
      </svg>
    </a>
  )
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-graphite/95 backdrop-blur md:hidden">
      <a
        href={company.primaryPhone.tel}
        className="flex min-h-14 items-center justify-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.18em]"
      >
        Call Now
      </a>
      <a
        href={company.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-14 items-center justify-center bg-brand text-[12px] font-extrabold uppercase tracking-[0.18em]"
      >
        WhatsApp
      </a>
    </div>
  )
}
