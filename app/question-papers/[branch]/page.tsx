import Link from "next/link";
import { SEMESTERS } from "@/lib/constants";

export default function QPBranch({ params }: { params: { branch: string } }) {
  const { branch } = params;
  return (
    <>
      <h1>QPs — {branch.toUpperCase()}</h1>
      <ul>{SEMESTERS.map(s => <li key={s}><Link href={`/question-papers/${branch}/${s.toLowerCase()}`}>{s}</Link></li>)}</ul>
    </>
  );
}
