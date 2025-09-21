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
          href="/academicCalender.pdf"
        />
        <Card
          title="B.Tech Regulations (2019)"
          desc="Credits, attendance, evaluation, and rules."
          href="/bTechRegulations.pdf"
        />
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Browse Materials</h2>
        <ul>
          <li><a href="/notes">Notes</a></li>
          <li><a href="/question-papers">Question Papers</a></li>
          <li><a href="/solved-qps">Solved Question Papers</a></li>
          <li><a href="/lab">Lab</a></li>
        </ul>
      </section>
    </>
  );
}
