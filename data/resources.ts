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
  // Notes — ECE S1
  {
    id: "ae-u1",
    section: "notes",
    branch: "ece",
    semester: "s1",
    title: "Analog Electronics — Unit 1",
    href: "/notes/ece/s1/analog-electronics-unit1.pdf",
    tags: ["analog","unit1"]
  },
  {
    id: "math-basics",
    section: "notes",
    branch: "ece",
    semester: "s1",
    title: "Engineering Mathematics — Basics",
    href: "/notes/ece/s1/engineering-mathematics-basics.pdf",
    tags: ["maths"]
  },

  // Question Papers — ECE S1
  {
    id: "ece-s8-jun2023",
    section: "question-papers",
    branch: "ece",
    semester: "s8",
    title: "KTU ECE S8 Question Paper — June 2023",
    href: "/question-papers/ece/s8/ktu-ece-s8-June-2023.pdf",
    tags: ["KTU","2023","S8"]
  },

  // Solved QPs — ECE S1
  {
    id: "ece-s1-dec2021-solved",
    section: "solved-qps",
    branch: "ece",
    semester: "s1",
    title: "Solved KTU ECE S1 — Dec 2021",
    href: "/solved-qps/ece/s1/ece-s1-dec-2021-solved.pdf",
    tags: ["solutions","S1","2021"]
  },
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
