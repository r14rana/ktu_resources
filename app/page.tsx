import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <nav style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <Link href="/">Home</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/question-papers">Question Papers</Link>
        <Link href="/solved-qps">Solved QPs</Link>
        <Link href="/lab">Lab</Link>
      </nav>

      <h1>KTU Resources — 2019 Scheme</h1>
      <p>Coming soon: Academic Calendar &amp; B.Tech Regulations</p>
    </main>
  );
}
