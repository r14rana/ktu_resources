import Link from "next/link";
import { BRANCHES } from "@/lib/constants";

export default function SQP() {
  return (
    <>
      <h1>Solved Question Papers</h1>
      <p>Select your branch:</p>
      <ul>{BRANCHES.map(b => <li key={b}><Link href={`/solved-qps/${b.toLowerCase()}`}>{b}</Link></li>)}</ul>
    </>
  );
}
