export default function QPSem({ params }: { params: { branch: string; semester: string } }) {
  const { branch, semester } = params;
  return (
    <>
      <h1>QPs — {branch.toUpperCase()} — {semester.toUpperCase()}</h1>
      <p>Placeholder: list/download past papers here.</p>
    </>
  );
}
