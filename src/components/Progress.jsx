export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
}) {
  return (
    <header className="progress">
      <p>
        Вопрос <strong>{index + 1}</strong> / {numQuestions}{" "}
      </p>

      <p>
        <strong>{points}</strong> /{maxPossiblePoints}
      </p>
    </header>
  );
}
