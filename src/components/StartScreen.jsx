export default function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Добро пожаловать на викторину по React</h2>
      <h3>{numQuestions} вопросов, чтобы проверить свои знания</h3>
      <button className="btn btn-ui">Давайте начнем!</button>
    </div>
  );
}
