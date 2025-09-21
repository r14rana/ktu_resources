import Link from "next/link";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <h1>KTU 2019 Scheme — Resources</h1>
      <p>Start here for calendars and regulations.</p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
          marginTop: 16,
        }}
      >
        <Card
          title="Academic Calendar (2024–25)"
          desc="Official term dates, exams, and holidays."
          href="/academic-calendar-2024-25.pdf"
        />
        <Card
          title="B.Tech Regulations (2019)"
          desc="Credits, attendance, evaluation, and rules."
          href="/btech-regulations-2019.pdf"
        />
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Browse Materials</h2>
        <ul>
          <li><Link href="/notes">Notes</Link></li>
          <li><Link href="/question-papers">Question Papers</Link></li>
          <li><Link href="/solved-qps">Solved Question Papers</Link></li>
          <li><Link href="/lab">Lab</Link></li>
        </ul>
      </section>
    </>
  );
}
