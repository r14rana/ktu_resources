import Link from "next/link";

export default function Breadcrumbs({
  parts,
}: { parts: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="breadcrumbs" style={{ margin: "8px 0 16px" }}>
      {parts.map((p, i) => (
        <span key={i}>
          {p.href ? <Link href={p.href}>{p.label}</Link> : <span>{p.label}</span>}
          {i < parts.length - 1 ? " / " : ""}
        </span>
      ))}
    </nav>
  );
}
