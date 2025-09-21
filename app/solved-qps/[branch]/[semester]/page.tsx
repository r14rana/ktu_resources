export default function SQPSem({ params }: { params: { branch: string; semester: string } }) {
  const { branch, semester } = params;
  return (
    <>
      <h1>Solved QPs — {branch.toUpperCase()} — {semester.toUpperCase()}</h1>
      <p>Placeholder: list solutions here.</p>
    </>
  );
}
