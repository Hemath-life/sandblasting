import { useState, type FormEvent, type ReactNode } from "react"
import { company } from "../data/company"
import { services } from "../data/services"

const serviceOptions = [...services.map((s) => s.title), "Other"]
const projectTypes = [
  "PEB Structure",
  "Structural Steel",
  "Industrial Metal",
  "Machinery / Equipment",
  "Temple / Stone",
  "Other",
]

type Status = "idle" | "loading" | "success" | "error"

type FormState = {
  name: string
  phone: string
  email: string
  companyName: string
  service: string
  projectType: string
  message: string
}

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  companyName: "",
  service: "",
  projectType: "",
  message: "",
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<Status>("idle")
  const [statusMessage, setStatusMessage] = useState("")

  function validate(next: FormState): Partial<FormState> {
    const result: Partial<FormState> = {}
    if (!next.name.trim()) result.name = "Enter your full name."
    if (!/^[0-9+\-\s]{8,}$/.test(next.phone.trim())) result.phone = "Enter a valid phone number."
    if (next.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) result.email = "Enter a valid email."
    if (!next.service) result.service = "Select a service."
    return result
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus("error")
      setStatusMessage("Please correct the highlighted fields.")
      return
    }

    setStatus("loading")
    setStatusMessage("Sending enquiry…")
    const payload = {
      ...values,
      source: "gk-coating-website",
    }
    const endpoint = company.contactApiUrl

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
        if (!response.ok) throw new Error("Request failed")
      }
      setStatus("success")
      setStatusMessage("Enquiry ready. For a faster response, call or continue on WhatsApp.")
      setValues(empty)
    } catch {
      setStatus("error")
      setStatusMessage("The form could not be sent. Please call or WhatsApp us instead.")
    }
  }

  const field =
    "min-h-12 w-full border border-white/15 bg-graphite px-4 text-sm text-offwhite placeholder:text-white/35"

  return (
    <form id="quote" onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name *" error={errors.name}>
          <input
            className={field}
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            autoComplete="name"
            required
          />
        </Field>
        <Field label="Phone Number *" error={errors.phone}>
          <input
            className={field}
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            className={field}
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            autoComplete="email"
          />
        </Field>
        <Field label="Company / Organization">
          <input
            className={field}
            value={values.companyName}
            onChange={(e) => setValues({ ...values, companyName: e.target.value })}
            autoComplete="organization"
          />
        </Field>
        <Field label="Service Required *" error={errors.service}>
          <select
            className={field}
            value={values.service}
            onChange={(e) => setValues({ ...values, service: e.target.value })}
            required
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Project Type">
          <select
            className={field}
            value={values.projectType}
            onChange={(e) => setValues({ ...values, projectType: e.target.value })}
          >
            <option value="">Select project type</option>
            {projectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Message">
        <textarea
          className={`${field} min-h-32 py-3`}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
      </Field>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-12 items-center justify-center bg-metal px-6 text-[11px] font-extrabold uppercase tracking-[0.2em] text-graphite disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Enquiry →"}
      </button>
      {status !== "idle" ? (
        <p role="status" className={status === "success" ? "text-brand" : "text-metal-light"}>
          {statusMessage}{" "}
          {status === "success" ? (
            <a className="underline" href={company.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
          ) : null}
        </p>
      ) : null}
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-offwhite/70">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-sm text-metal-light">{error}</span> : null}
    </label>
  )
}
