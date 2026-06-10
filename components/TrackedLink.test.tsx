import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TrackedLink from "@/components/TrackedLink";

describe("TrackedLink", () => {
  it("renders a plain anchor with its attributes", () => {
    render(
      <TrackedLink href="/Patrick_Munnelly_CV.pdf" event="cv_download">
        Download CV
      </TrackedLink>,
    );
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "href",
      "/Patrick_Munnelly_CV.pdf",
    );
  });

  it("sends the GA event on click", async () => {
    window.gtag = vi.fn();
    const user = userEvent.setup();
    render(
      <TrackedLink href="#contact" event="linkedin_click">
        LinkedIn
      </TrackedLink>,
    );

    await user.click(screen.getByRole("link", { name: "LinkedIn" }));

    expect(window.gtag).toHaveBeenCalledWith("event", "linkedin_click");
  });

  it("does not throw when gtag is absent", async () => {
    const user = userEvent.setup();
    render(
      <TrackedLink href="#contact" event="contact_email_click">
        Email
      </TrackedLink>,
    );

    await user.click(screen.getByRole("link", { name: "Email" }));
    expect(window.localStorage.length).toBe(0);
  });
});
