import Link from "next/link";

export default function Card({
  title,
  desc,
  href,
}: { title: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      style={{
        display: "block",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: 16,
        textDecoration: "none",
        color: "inherit",
        transition: "transform .06s ease, box-shadow .06s ease",
      }}
    >
      <h3 style={{ margin: "0 0 6px" }}>{title}</h3>
      <p style={{ margin: 0, color: "#6b7280" }}>{desc}</p>
    </Link>
  );
}
