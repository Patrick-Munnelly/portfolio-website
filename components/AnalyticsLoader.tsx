"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useSyncExternalStore } from "react";
import {
  getServerConsentSnapshot,
  getStoredConsent,
  subscribeToConsent,
} from "@/lib/consent";

/**
 * Mounts GA4 only once analytics consent has been granted, so visitors who
 * decline (or never answer) trigger no Google requests at all. To load gtag.js
 * unconditionally instead (consent-mode cookieless pings), render
 * <GoogleAnalytics gaId={gaId} /> directly and drop the consent gate.
 */
export default function AnalyticsLoader({ gaId }: { gaId?: string }) {
  const stored = useSyncExternalStore(
    subscribeToConsent,
    getStoredConsent,
    getServerConsentSnapshot,
  );

  if (!gaId || stored !== "granted") return null;
  return <GoogleAnalytics gaId={gaId} />;
}
