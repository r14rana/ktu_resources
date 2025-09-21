import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "KTU Resources — 2019 Scheme",
  description: "Notes, QPs, SQPs, Lab resources",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        <header
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
            padding: "12px 20px",
            borderBottom: "1px solid #e5e7eb",
            position: "sticky",
            top: 0,
            background: "white",
            zIndex: 10,
          }}
        >
          <Link href="/" style={{ fontWeight: 700 }}>KTU Resources</Link>
          <nav style={{ display: "flex", gap: 16 }}>
            <Link href="/notes">Notes</Link>
            <Link href="/question-papers">Question Papers</Link>
            <Link href="/solved-qps">Solved QPs</Link>
            <Link href="/lab">Lab</Link>
          </nav>
        </header>
        <main style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>{children}</main>
        <footer style={{ padding: 24, color: "#6b7280" }}>
          © {new Date().getFullYear()} KTU 2019 Scheme (community project)
        </footer>
      </body>
    </html>
  );
}
