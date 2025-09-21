export default function SemesterPage({
  params,
}: { params: { branch: string; semester: string } }) {
  const { branch, semester } = params;
  return (
    <>
      <h1>
        Notes — {branch.toUpperCase()} — {semester.toUpperCase()}
      </h1>
      <p>Placeholder: list notes here.</p>
    </>
  );
}
