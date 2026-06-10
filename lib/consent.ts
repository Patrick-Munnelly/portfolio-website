export type ConsentChoice = "granted" | "denied";

export const CONSENT_STORAGE_KEY = "pm-analytics-consent";

const listeners = new Set<() => void>();

function notify(): void {
  for (const listener of listeners) {
    listener();
  }
}

export function subscribeToConsent(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getStoredConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

/**
 * Snapshot used during SSR/hydration, where the stored choice is unknowable.
 * "denied" keeps the banner out of the prerendered HTML and matches the
 * consent-mode default; the real value takes over after hydration.
 */
export function getServerConsentSnapshot(): ConsentChoice {
  return "denied";
}

export function storeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage unavailable (private mode, blocked) — consent simply isn't persisted.
  }
  notify();
}

export function applyAnalyticsConsent(choice: ConsentChoice): void {
  window.gtag?.("consent", "update", { analytics_storage: choice });
}
