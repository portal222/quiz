import { useEffect, useState } from "react"
import TriviaAnswer from "./TriviaAnswer";

export default function Trivia({
    title,
    data,
    setStop,
    questionNumber,
    setQuestionNumber
}) {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber]);

    return (
        <div className="trivia">
                <h2 dangerouslySetInnerHTML={{ __html: title }} className="category"></h2>

            <div className="question" dangerouslySetInnerHTML={{ __html: question?.question }}></div>
            <div className="answers">
                <TriviaAnswer correct={question?.correct_answer} incorrect={question?.incorrect_answers}
                    setQuestionNumber={setQuestionNumber} number={Math.floor(Math.random() * 4)} setStop={setStop} />
            </div>
        </div>
    )
}