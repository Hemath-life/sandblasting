/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string
  readonly VITE_GOOGLE_MAPS_URL: string
  readonly VITE_CONTACT_API_URL: string
  readonly VITE_COMPANY_NAME: string
  readonly VITE_COMPANY_SHORT_NAME: string
  readonly VITE_PROPRIETOR: string
  readonly VITE_GSTIN: string
  readonly VITE_LOCATION: string
  readonly VITE_SERVICE_AREA: string
  readonly VITE_SERVICES_LINE: string
  readonly VITE_ADDRESS_LINE1: string
  readonly VITE_ADDRESS_LINE2: string
  readonly VITE_ADDRESS_LINE3: string
  readonly VITE_ADDRESS_LINE4: string
  readonly VITE_ADDRESS_LOCALITY: string
  readonly VITE_ADDRESS_REGION: string
  readonly VITE_ADDRESS_POSTAL_CODE: string
  readonly VITE_ADDRESS_COUNTRY: string
  readonly VITE_ADDRESS_STREET: string
  readonly VITE_ADDRESS_COMPACT: string
  readonly VITE_ADDRESS_FULL: string
  readonly VITE_PHONE_PRIMARY: string
  readonly VITE_PHONE_SECONDARY: string
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_WHATSAPP_MESSAGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
