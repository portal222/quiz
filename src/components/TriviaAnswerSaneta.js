import React, { useState } from "react";

const TriviaAnswer = (props) => {


    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [styleWrong, setStyleWrong] = useState("answer")



    console.log("dolazi broj", props.number)

    const handleClick = (cor) => {
        console.log("klil handleClick", cor)
        setSelectedAnswer(cor);
        setClassName("answer correct");
    };


    if (props.number == 1) {
        return (
            <>
                <div className={setSelectedAnswer === props.correct ? className : "answer"}
                    onClick={() => handleClick(props.correct)}>{props.correct}</div>
                <div className={styleWrong}>{props.incorrect?.[0]}</div>
                <div className="answer">{props.incorrect?.[1]}</div>
                <div className="answer">{props.incorrect?.[2]}</div>
            </>
        )

    } else if (props.number == 2) {
        return (
            <>
                <div className="answer">{props.incorrect?.[0]}</div>
                <div className={setSelectedAnswer === props.correct ? className : "answer"}
                    onClick={() => handleClick(props.correct)}>{props.correct}</div>
                <div className="answer">{props.incorrect?.[1]}</div>
                <div className="answer">{props.incorrect?.[2]}</div>
            </>
        )

    } else if (props.number == 3) {
        return (
            <>
                <div className="answer">{props.incorrect?.[0]}</div>
                <div className="answer">{props.incorrect?.[1]}</div>
                <div className={setSelectedAnswer === props.correct ? className : "answer"}
                    onClick={() => handleClick(props.correct)}>{props.correct}</div>
                <div className="answer">{props.incorrect?.[2]}</div>

            </>
        )
    } else if (props.number == 0) {
        return (
            <>
                <div className="answer">{props.incorrect?.[0]}</div>
                <div className="answer">{props.incorrect?.[1]}</div>
                <div className="answer">{props.incorrect?.[2]}</div>
                <div className={setSelectedAnswer === props.correct ? className : "answer"}
                    onClick={() => handleClick(props.correct)}>{props.correct}</div>
            </>
        )
    }

}
export default TriviaAnswer;