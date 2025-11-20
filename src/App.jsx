import { useEffect, useReducer } from "react";
import Header from "./Header";
import "./index.css";
import Mainpg from "./mainpg";
export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      <Header />

      <Mainpg className="main">
        <p>1/15</p>
        <p>Вопрос</p>
      </Mainpg>
    </div>
  );
}
