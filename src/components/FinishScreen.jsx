export default function FinishScreen({ points, maxPosibblePoints, highscore }) {
  const percentage = (points / maxPosibblePoints) * 100;

  //показ эмодзи с учетом количества баллов за ответы
  let emoji;
  if (percentage === 100) emoji = "🏆";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🥉";
  if (percentage >= 0 && percentage < 50) emoji = "🥈";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>Ты набрал <strong>{points}</strong> баллов из{" "}
        {maxPosibblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Лучший счет: {highscore} баллов)</p>
    </>
  );
}
