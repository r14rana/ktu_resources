import Link from "next/link";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { getResources } from "@/data/resources";

export default function SemesterPage({
  params,
}: { params: { branch: string; semester: string } }) {
  const { branch, semester } = params;
  const items = getResources("notes", branch, semester);

  return (
    <>
      <Breadcrumbs
        parts={[
          { label: "Notes", href: "/notes" },
          { label: branch.toUpperCase(), href: `/notes/${branch}` },
          { label: semester.toUpperCase() },
        ]}
      />

      <h1>
        Notes — {branch.toUpperCase()} — {semester.toUpperCase()}
      </h1>

      {items.length === 0 ? (
        <p>No notes added yet for this semester.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} style={{ marginBottom: 8 }}>
              <Link href={item.href} target="_blank">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
