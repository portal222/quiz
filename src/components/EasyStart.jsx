import React, { useState, useEffect, useMemo } from "react";
import Trivia from "./Trivia";
import axios from "axios"
import Timer from "./Timer";
import Buttons from "./Buttons";
import Confetti from "react-confetti";
import Applause from "./Applause";



function EasyStart() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);
  const [earned, setEarned] = useState("$ 0");
  const [title, setTitle] = useState([]);


  useEffect(() => {
    getTrivia();
  }, []);

  const getTrivia = async () => {

    const url = `https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple`

    try {
      const response = await axios.get(url);
      const data = response.data
      setTitle(data.results.category)

      setDatas(data.results);
      console.log("rezultat trivia", data.results);
    } catch (err) {
      setError(err);
    }
  }

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" }
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber])

  if (earned === "$ 1000000") {
    return (
      <div className="app">
        <div className="main2">
          <h1 className="congratulations">CONGRATULATIONS</h1>
          <h1 className="endText"> You have answered all the questions, <br></br>
            you made it to the end and won <br></br> a fantastic MILLION dollars.
          </h1>
          <Buttons />
          <Confetti gravity={0.04} numberOfPieces={250}
            initialVelocityX={4}
            colors={["#FF4500", "#C9FFE5", "#FF0800", "#89CFF0", "#8A2BE2", "#C4D8E2", "#30BFBF",
              "#FFF600", "#FFAE42", "#32CD32", "#C5B358"]}
          />
          <Applause />
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="main">
        {stop ? (<><h1 className="endText">You earned: {earned}</h1>
          <Buttons /></>) : (
          <> <div className="top">
            <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
          </div>
            <div className="bottom"><Trivia
              title={title}
              data={datas}
              setStop={setStop}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber} />
            </div>
          </>
        )}

      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}
              key={m.id}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default EasyStart;
