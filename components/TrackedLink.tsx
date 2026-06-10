"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackEvent, type GaEventName } from "@/lib/analytics";

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  event: GaEventName;
}

export default function TrackedLink({
  event,
  onClick,
  children,
  ...rest
}: TrackedLinkProps) {
  function handleClick(mouseEvent: MouseEvent<HTMLAnchorElement>) {
    trackEvent(event);
    onClick?.(mouseEvent);
  }

  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
