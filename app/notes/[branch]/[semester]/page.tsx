import Link from "next/link";
import { getResources } from "@/data/resources";

export default function SemesterPage({
  params,
}: { params: { branch: string; semester: string } }) {
  const { branch, semester } = params;
  const items = getResources("notes", branch, semester);

  return (
    <>
      <h1>Notes — {branch.toUpperCase()} — {semester.toUpperCase()}</h1>

      {items.length === 0 ? (
        <p>No notes added yet for this semester.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id} style={{ marginBottom: 8 }}>
              <Link href={item.href} target="_blank">
                {item.title}
              </Link>
              {item.tags?.length ? (
                <small style={{ marginLeft: 8, color: "#6b7280" }}>
                  {item.tags.join(" · ")}
                </small>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
