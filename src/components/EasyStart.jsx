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
  const [title, setTitle] = useState([]);


  useEffect(() => {
    getTrivia();
  }, []);

  const getTrivia = async () => {

    const url = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`

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
        { id: 2, amount: "$ 300" },
        { id: 3, amount: "$ 900" },
        { id: 4, amount: "$ 3000" },
        { id: 5, amount: "$ 9000" },
        { id: 6, amount: "$ 30000" },
        { id: 7, amount: "$ 90000" },
        { id: 8, amount: "$ 300000" },
        { id: 9, amount: "$ 900000" },
        { id: 10, amount: "$ 3000000" }
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
