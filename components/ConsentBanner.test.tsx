import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConsentBanner from "@/components/ConsentBanner";
import { CONSENT_STORAGE_KEY } from "@/lib/consent";

function getBanner() {
  return screen.queryByRole("region", { name: /cookies/i });
}

describe("ConsentBanner", () => {
  it("shows the banner when no choice has been stored", () => {
    render(<ConsentBanner />);
    expect(getBanner()).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /accept/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /decline/i })).toBeInTheDocument();
  });

  it("stays hidden when consent was previously granted, and re-applies it to gtag", () => {
    window.gtag = vi.fn();
    window.localStorage.setItem(CONSENT_STORAGE_KEY, "granted");
    render(<ConsentBanner />);
    expect(getBanner()).not.toBeInTheDocument();
    expect(window.gtag).toHaveBeenCalledWith("consent", "update", {
      analytics_storage: "granted",
    });
  });

  it("stays hidden when consent was previously denied, without granting anything", () => {
    window.gtag = vi.fn();
    window.localStorage.setItem(CONSENT_STORAGE_KEY, "denied");
    render(<ConsentBanner />);
    expect(getBanner()).not.toBeInTheDocument();
    expect(window.gtag).not.toHaveBeenCalledWith("consent", "update", {
      analytics_storage: "granted",
    });
  });

  it("grants consent, persists it and hides the banner on Accept", async () => {
    window.gtag = vi.fn();
    const user = userEvent.setup();
    render(<ConsentBanner />);

    await user.click(screen.getByRole("button", { name: /accept/i }));

    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe("granted");
    expect(window.gtag).toHaveBeenCalledWith("consent", "update", {
      analytics_storage: "granted",
    });
    expect(getBanner()).not.toBeInTheDocument();
  });

  it("persists denial and hides the banner on Decline, never granting consent", async () => {
    window.gtag = vi.fn();
    const user = userEvent.setup();
    render(<ConsentBanner />);

    await user.click(screen.getByRole("button", { name: /decline/i }));

    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe("denied");
    expect(window.gtag).not.toHaveBeenCalledWith("consent", "update", {
      analytics_storage: "granted",
    });
    expect(getBanner()).not.toBeInTheDocument();
  });

  it("still stores the choice when gtag is not on the page (GA blocked or unset)", async () => {
    const user = userEvent.setup();
    render(<ConsentBanner />);

    await user.click(screen.getByRole("button", { name: /accept/i }));

    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe("granted");
    expect(getBanner()).not.toBeInTheDocument();
  });
});
