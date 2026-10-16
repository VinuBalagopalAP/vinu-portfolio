// /llms.txt — plain-markdown summary for LLMs and AI answer engines (https://llmstxt.org).
// Generated from the same data as the home page so the two never drift apart.
import { site, projects, experience, metrics } from "../data/profile";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `- Role: ${site.jobTitle}`,
    `- Currently building: [${site.currentCompany.name}](${site.currentCompany.url})`,
    `- Location: ${site.region}, India`,
    `- Email: ${site.email}`,
    `- Website: ${site.url}`,
    `- Education: ${site.education.degree}, ${site.education.school} (${site.education.university})`,
    "",
    "## Highlights",
    "",
    ...metrics.map((m) => `- ${m.num} ${m.label}`),
    "",
    "## Projects",
    "",
    ...projects.flatMap((p) => [
      `### ${p.name}`,
      "",
      `${p.category}. ${p.description}`,
      "",
      `Tech: ${p.tags.join(", ")}`,
      ...p.links.map((l) => `- [${l.label}](${l.url})`),
      ""
    ]),
    "## Experience",
    "",
    ...experience.flatMap((job) => [
      `### ${job.role} — ${job.org} (${job.dates})`,
      "",
      job.summary,
      ""
    ]),
    "## Profiles",
    "",
    ...site.socials.map((s) => `- [${s.label}](${s.url})`),
    ""
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
