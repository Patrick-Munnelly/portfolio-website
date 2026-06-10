"use client";

import { useEffect, useSyncExternalStore } from "react";
import {
  applyAnalyticsConsent,
  getServerConsentSnapshot,
  getStoredConsent,
  storeConsent,
  subscribeToConsent,
} from "@/lib/consent";

export default function ConsentBanner() {
  const stored = useSyncExternalStore(
    subscribeToConsent,
    getStoredConsent,
    getServerConsentSnapshot,
  );

  useEffect(() => {
    // Consent mode starts denied on every load; re-apply the stored choice.
    // Choices made via the buttons land here too, through the store update.
    if (stored !== null) {
      applyAnalyticsConsent(stored);
    }
  }, [stored]);

  if (stored !== null) return null;

  return (
    <div
      role="region"
      aria-label="Cookies notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/60 bg-forest"
    >
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-4">
        <p className="font-body text-sm text-cream">
          This site uses Google Analytics to see which parts are useful. No
          analytics cookies are set unless you accept.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => storeConsent("denied")}
            className="rounded-sm border border-cream/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-cream transition-colors duration-base hover:border-cream"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => storeConsent("granted")}
            className="rounded-sm bg-gold px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink transition-colors duration-base hover:bg-cream"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
