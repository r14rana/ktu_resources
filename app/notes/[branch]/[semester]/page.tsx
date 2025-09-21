import Breadcrumbs from "../../../../components/Breadcrumbs";
import ResourceList from "../../../../components/ResourceList";
import { getResources } from "@/data/resources";

export default function SemesterPage({ params }: { params: { branch: string; semester: string } }) {
  const { branch, semester } = params;
  const items = getResources("notes", branch, semester).map(r => ({
    id: r.id, title: r.title, href: r.href, tags: r.tags
  }));

  return (
    <>
      <Breadcrumbs parts={[
        { label: "Notes", href: "/notes" },
        { label: branch.toUpperCase(), href: `/notes/${branch}` },
        { label: semester.toUpperCase() },
      ]} />
      <h1>Notes — {branch.toUpperCase()} — {semester.toUpperCase()}</h1>
      <ResourceList items={items} />
    </>
  );
}
