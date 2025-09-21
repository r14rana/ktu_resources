"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export type Item = { id: string; title: string; href: string; tags?: string[] };

export default function ResourceList({ items }: { items: Item[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter(i =>
      i.title.toLowerCase().includes(term) ||
      (i.tags ?? []).some(t => t.toLowerCase().includes(term))
    );
  }, [q, items]);

  return (
    <div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filter by title or tag…"
        style={{
          width: "100%", padding: "10px 12px", margin: "8px 0 16px",
          border: "1px solid #e5e7eb", borderRadius: 8
        }}
      />
      {filtered.length === 0 ? (
        <p>No matching items.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {filtered.map(i => (
            <li key={i.id}
                style={{ border: "1px solid #e5e7eb", borderRadius: 12,
                         padding: 12, marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <Link href={i.href} target="_blank" style={{ fontWeight: 600 }}>
                  {i.title}
                </Link>
                <span style={{ fontSize: 12, color: "#6b7280" }}>PDF</span>
              </div>
              {i.tags?.length ? (
                <div style={{ marginTop: 6, fontSize: 12, color: "#6b7280" }}>
                  {i.tags.join(" · ")}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
