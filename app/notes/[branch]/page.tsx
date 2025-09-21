import Link from "next/link";
import { SEMESTERS, BRANCHES } from "@/lib/constants"; // keep if you already have it
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";

export default function Branch({ params }: { params: { branch: string } }) {
  const branch = params.branch.toLowerCase();
  if (!BRANCHES.map(b => b.toLowerCase()).includes(branch)) notFound();

  return (
    <>
      <Breadcrumbs parts={[{ label: "Notes", href: "/notes" }, { label: branch.toUpperCase() }]} />

      <h1>Notes — {branch.toUpperCase()}</h1>
      <ul>
        {SEMESTERS.map((s) => (
          <li key={s}>
            <Link href={`/notes/${branch}/${s.toLowerCase()}`}>{s}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
