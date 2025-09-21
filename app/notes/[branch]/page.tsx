import Link from "next/link";

const semesters = ["S1","S2","S3","S4","S5","S6","S7","S8"];

export default function BranchPage({ params }: { params: { branch: string } }) {
  const { branch } = params;
  return (
    <>
      <h1>Notes — {branch.toUpperCase()}</h1>
      <p>Select semester:</p>
      <ul>
        {semesters.map(s => (
          <li key={s}>
            <Link href={`/notes/${branch}/${s.toLowerCase()}`}>{s}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
