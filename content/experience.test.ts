import { roles, sideProject, skillGroups } from "@/content/experience";

describe("experience content", () => {
  it("contains exactly the four roles from Employment-History.md, most recent first", () => {
    expect(roles.map((role) => role.company)).toEqual([
      "RavenPack",
      "Trilateral Research",
      "Boyne Park Fitout",
      "Pramerica",
    ]);
  });

  it("uses the employment dates from Employment-History.md", () => {
    expect(
      roles.map((role) => [role.startIso, role.endIso]),
    ).toEqual([
      ["2024", "2026-04"],
      ["2021", "2024"],
      ["2018", "2021"],
      ["2016", "2018"],
    ]);
  });

  it("keeps every role card within the spec's bullet budget", () => {
    for (const role of roles) {
      expect(role.bullets.length).toBeGreaterThanOrEqual(2);
      expect(role.bullets.length).toBeLessThanOrEqual(4);
      expect(role.tech.length).toBeGreaterThan(0);
      expect(role.context).not.toHaveLength(0);
    }
  });

  it("describes Lugh as the side project", () => {
    expect(sideProject.name).toBe("Lugh");
    expect(sideProject.url).toBe("https://lughonline.com");
    expect(sideProject.tech).toEqual(
      expect.arrayContaining(["TypeScript", "Hono", "Supabase"]),
    );
  });

  it("groups skills per the spec's five categories", () => {
    expect(skillGroups.map((group) => group.name)).toEqual([
      "Frontend",
      "Backend",
      "Testing",
      "CI/CD & Cloud",
      "AI Engineering",
    ]);
  });
});
