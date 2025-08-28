export default function ExerciseList() {
  const box: React.CSSProperties = { padding: "16px" };
  const item: React.CSSProperties = { marginBottom: "6px" };

  const exercises = [
    { name: "Agachamento", reps: "3x12" },
    { name: "Flexão", reps: "3x10" },
    { name: "Prancha", reps: "3x30s" },
  ];

  return (
    <section style={box}>
      <h2>Exercícios do dia</h2>
      <ul>
        {exercises.map((ex) => (
          <li key={ex.name} style={item}>
            {ex.name} — {ex.reps}
          </li>
        ))}
      </ul>
    </section>
  );
}