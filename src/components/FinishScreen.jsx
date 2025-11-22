export default function FinishScreen({ points, maxPosibblePoints }) {
  const percentage = (points / maxPosibblePoints) * 100;
  return (
    <p className="result">
      Ты набрал <strong>{points}</strong> из {maxPosibblePoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}
