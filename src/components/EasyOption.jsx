import React, { useState, useEffect, useMemo } from "react";
import Trivia from "./Trivia";
import axios from "axios"
import Timer from "./Timer";
import Buttons from "./Buttons";
import { useParams } from "react-router-dom";
import Confetti from "react-confetti";
import Applause from "./Applause";

function EasyOption() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);
  const [earned, setEarned] = useState("$ 0");

  const params = useParams();
  const number = params.event;

  useEffect(() => {
    getTrivia();
  }, []);

  const getTrivia = async () => {

    const url = `https://opentdb.com/api.php?amount=10&category=${number}&difficulty=easy&type=multiple`

    try {
      const response = await axios.get(url);
      const data = response.data

      setDatas(data.results);

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
        { id: 5, amount: "$ 800" },
        { id: 6, amount: "$ 1300" },
        { id: 7, amount: "$ 2100" },
        { id: 8, amount: "$ 3400" },
        { id: 9, amount: "$ 5500" },
        { id: 10, amount: "$ 10000" }
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber])

  if (earned === "$ 10000") {
    return (
        <div className="app">
          <div className="main2">
            <h1 className="congratulations">CONGRATULATIONS</h1>
            <h1 className="endText">  You have answered all the questions, <br></br>
              you have reached the end<br></br>
              and won: {earned}
            </h1>
            <Buttons />
            <Confetti gravity={0.04} numberOfPieces={250}
              initialVelocityX={4} 
          
              colors={["#FF4500", "#C9FFE5", "#FF0800", "#89CFF0", "#8A2BE2", "#C4D8E2", "#30BFBF",
                "#FFF600", "#FFAE42", "#32CD32", "#FE5A1D", "#FFCC99"]}
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
export default EasyOption;
