export const GA_EVENTS = {
  cvDownload: "cv_download",
  contactEmailClick: "contact_email_click",
  linkedinClick: "linkedin_click",
} as const;

export type GaEventName = (typeof GA_EVENTS)[keyof typeof GA_EVENTS];

export function trackEvent(name: GaEventName): void {
  window.gtag?.("event", name);
}
