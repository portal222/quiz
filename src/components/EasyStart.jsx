import React, { useState, useEffect, useMemo } from "react";
import Trivia from "./Trivia";
import axios from "axios"
import Timer from "./Timer";
import Buttons from "./Buttons";

function EasyStart() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);
  const [earned, setEarned] = useState("$ 0");

  useEffect(() => {
    getTrivia();
  }, []);

  const getTrivia = async () => {

    const url = `https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple`

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
export default EasyStart;
