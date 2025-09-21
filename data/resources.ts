// data/resources.ts
export type Section = "notes" | "question-papers" | "solved-qps" | "lab";

export type ResourceItem = {
  id: string;
  section: Section;
  branch: string;     // e.g. "cse"
  semester: string;   // e.g. "s1"
  title: string;
  href: string;       // absolute URL or /public path starting with /
  tags?: string[];
};

export const RESOURCES: ResourceItem[] = [
  {
    id: "em-u1",
    section: "notes",
    branch: "cse",
    semester: "s1",
    title: "Engineering Mechanics — Unit 1",
    href: "/notes/cse/s1/engineering-mechanics-unit1.pdf",
    tags: ["mechanics","unit1"]
  },
  {
    id: "maths-formulas",
    section: "notes",
    branch: "ece",
    semester: "s1",
    title: "Applied Mathematics Formula Sheet",
    href: "/notes/ece/s1/emaths.pdf",
  },
];

export function getResources(section: Section, branch: string, semester: string) {
  const b = branch.toLowerCase();
  const s = semester.toLowerCase();
  return RESOURCES.filter(
    r => r.section === section && r.branch === b && r.semester === s
  );
}
