import Link from "next/link";
import { BRANCHES } from "@/lib/constants";

export default function QP() {
  return (
    <>
      <h1>Question Papers</h1>
      <p>Select your branch:</p>
      <ul>{BRANCHES.map(b => <li key={b}><Link href={`/question-papers/${b.toLowerCase()}`}>{b}</Link></li>)}</ul>
    </>
  );
}
