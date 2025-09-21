import Link from "next/link";
import { SEMESTERS } from "@/lib/constants";

export default function SQPBranch({ params }: { params: { branch: string } }) {
  const { branch } = params;
  return (
    <>
      <h1>Solved QPs — {branch.toUpperCase()}</h1>
      <ul>{SEMESTERS.map(s => <li key={s}><Link href={`/solved-qps/${branch}/${s.toLowerCase()}`}>{s}</Link></li>)}</ul>
    </>
  );
}
