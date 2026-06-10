import { render, screen } from "@testing-library/react";
import ExperienceCard from "@/components/ExperienceCard";
import type { Role } from "@/content/experience";

const role: Role = {
  id: "test-co",
  company: "Test Co",
  title: "Staff Engineer",
  startIso: "2020",
  endIso: "2023-06",
  startLabel: "2020",
  endLabel: "June 2023",
  context: "A one-line company context.",
  bullets: ["Shipped the first thing.", "Shipped the second thing."],
  tech: ["React", "TypeScript"],
};

describe("ExperienceCard", () => {
  it("renders the role as an article labelled by the company heading", () => {
    render(<ExperienceCard role={role} />);
    expect(
      screen.getByRole("article", { name: "Test Co" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Test Co" }),
    ).toBeInTheDocument();
  });

  it("renders the role title and company context", () => {
    render(<ExperienceCard role={role} />);
    expect(screen.getByText("Staff Engineer")).toBeInTheDocument();
    expect(screen.getByText("A one-line company context.")).toBeInTheDocument();
  });

  it("renders dates as <time> elements with machine-readable values", () => {
    const { container } = render(<ExperienceCard role={role} />);
    const times = container.querySelectorAll("time");
    expect(times).toHaveLength(2);
    expect(times[0]).toHaveAttribute("dateTime", "2020");
    expect(times[0]).toHaveTextContent("2020");
    expect(times[1]).toHaveAttribute("dateTime", "2023-06");
    expect(times[1]).toHaveTextContent("June 2023");
  });

  it("renders every achievement bullet", () => {
    render(<ExperienceCard role={role} />);
    for (const bullet of role.bullets) {
      expect(screen.getByText(bullet)).toBeInTheDocument();
    }
  });

  it("renders the tech tag list", () => {
    render(<ExperienceCard role={role} />);
    const techList = screen.getByRole("list", { name: /technologies/i });
    expect(techList).toBeInTheDocument();
    for (const tag of role.tech) {
      expect(screen.getByText(tag)).toBeInTheDocument();
    }
  });
});
