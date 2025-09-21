import Breadcrumbs from "../../../../components/Breadcrumbs";
import ResourceList from "../../../../components/ResourceList";
import { getResources } from "@/data/resources";

export default function QPSem({ params }: { params: { branch: string; semester: string } }) {
  const { branch, semester } = params;
  const items = getResources("question-papers", branch, semester).map(r => ({
    id: r.id, title: r.title, href: r.href, tags: r.tags
  }));

  return (
    <>
      <Breadcrumbs parts={[
        { label: "Question Papers", href: "/question-papers" },
        { label: branch.toUpperCase(), href: `/question-papers/${branch}` },
        { label: semester.toUpperCase() },
      ]} />
      <h1>QPs — {branch.toUpperCase()} — {semester.toUpperCase()}</h1>
      <ResourceList items={items} />
    </>
  );
}
