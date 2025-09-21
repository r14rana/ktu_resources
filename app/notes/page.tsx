import Link from "next/link";

const branches = ["CSE","ECE","EEE","ME","CE","AI","IT"];
export default function Notes() {
  return (
    <>
      <h1>Notes</h1>
      <p>Select your branch:</p>
      <ul>
        {branches.map(b => (
          <li key={b}><Link href={`/notes/${b.toLowerCase()}`}>{b}</Link></li>
        ))}
      </ul>
    </>
  );
}
