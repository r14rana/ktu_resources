export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <header style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <a href="/">Home</a>
        <a href="/notes">Notes</a>
        <a href="/question-papers">Question Papers</a>
        <a href="/solved-qps">Solved QPs</a>
        <a href="/lab">Lab</a>
      </header>
      <h1>KTU Resources — 2019 Scheme</h1>
      <p>Coming soon: Academic Calendar & B.Tech Regulations</p>
    </main>
  );
}
