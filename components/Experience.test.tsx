import { render, screen, within } from "@testing-library/react";
import Experience from "@/components/Experience";
import { roles } from "@/content/experience";

describe("Experience", () => {
  it("renders a section headed 'Experience'", () => {
    render(<Experience />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Experience" }),
    ).toBeInTheDocument();
  });

  it("renders one article per role, in content order", () => {
    render(<Experience />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(roles.length);
    roles.forEach((role, index) => {
      expect(
        within(articles[index]).getByRole("heading", {
          level: 3,
          name: role.company,
        }),
      ).toBeInTheDocument();
    });
  });

  it("renders title, dates, every bullet and every tech tag for each role", () => {
    render(<Experience />);
    const articles = screen.getAllByRole("article");
    roles.forEach((role, index) => {
      const article = within(articles[index]);
      expect(article.getByText(role.title)).toBeInTheDocument();
      const times = articles[index].querySelectorAll("time");
      expect(times[0]).toHaveAttribute("dateTime", role.startIso);
      expect(times[1]).toHaveAttribute("dateTime", role.endIso);
      for (const bullet of role.bullets) {
        expect(article.getByText(bullet)).toBeInTheDocument();
      }
      for (const tag of role.tech) {
        expect(article.getByText(tag)).toBeInTheDocument();
      }
    });
  });
});
