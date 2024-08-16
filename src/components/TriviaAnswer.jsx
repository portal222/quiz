import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import wrong from "../assets/jazzy-chords.wav";
import correct2 from "../assets/correct.wav";
import play2 from "../assets/sound_jingle_1.wav";

const TriviaAnswer = ({
    number,
    setQuestionNumber,
    setStop,
    incorrect,
    correct
}) => {

    const [styleWrong, setStyleWrong] = useState("answer")
    const [styleWrong1, setStyleWrong1] = useState("answer")
    const [styleWrong2, setStyleWrong2] = useState("answer")
    const [styleCorrect, setStyleCorrect] = useState("answer");

    const [correctAnswer] = useSound(correct2);
    const [wrongAnswer] = useSound(wrong);
    const [letsPlay] = useSound(play2);






    console.log(number)

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    const handleCorrect = () => {
        setStyleCorrect("answer active");
        setTimeout(() => { setStyleCorrect("answer correct") }, 1000);
        setTimeout(() => { setQuestionNumber((prev) => prev + 1) }, 5000);
        setTimeout(() => { setStyleCorrect("answer") }, 5000);
        setTimeout(() => { correctAnswer() }, 3000);
        setStyleCorrect("answer");
    };

    const handleWrong = () => {
        setStyleWrong("answer active");
        setTimeout(() => { setStyleWrong("answer wrong") }, 1000);
        setTimeout(() => { setStop(true) }, 5000);
        setTimeout(() => { wrongAnswer() }, 3000);

    };

    const handleWrong1 = () => {
        setStyleWrong1("answer active");
        setTimeout(() => { setStyleWrong1("answer wrong") }, 1000);
        setTimeout(() => { setStop(true) }, 5000);
        setTimeout(() => { wrongAnswer() }, 3000);

    };

    const handleWrong2 = () => {
        setStyleWrong2("answer active");
        setTimeout(() => { setStyleWrong2("answer wrong") }, 1000);
        setTimeout(() => { setStop(true) }, 5000);
        setTimeout(() => { wrongAnswer() }, 3000);

    };




    if (number == 1) {
        return (
            <>
                <div className={styleCorrect}
                    onClick={handleCorrect}
                    dangerouslySetInnerHTML={{ __html: correct }}></div>
                <div className={styleWrong}
                    onClick={handleWrong}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[0] }}></div>
                <div className={styleWrong1}
                    onClick={handleWrong1}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[1] }}></div>
                <div className={styleWrong2}
                    onClick={handleWrong2}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[2] }}></div>
            </>
        )

    } else if (number == 2) {
        return (
            <>
                <div className={styleWrong}
                    onClick={handleWrong}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[0] }}></div>
                <div className={styleCorrect}
                    onClick={handleCorrect}
                    dangerouslySetInnerHTML={{ __html: correct }}></div>
                <div className={styleWrong1}
                    onClick={handleWrong1}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[1] }}></div>
                <div className={styleWrong2}
                    onClick={handleWrong2}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[2] }}></div>
            </>
        )

    } else if (number == 3) {
        return (
            <>
                <div className={styleWrong}
                    onClick={handleWrong}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[0] }}></div>
                <div className={styleWrong1}
                    onClick={handleWrong1}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[1] }}></div>
                <div className={styleCorrect}
                    onClick={handleCorrect}
                    dangerouslySetInnerHTML={{ __html: correct }}></div>
                <div className={styleWrong2}
                    onClick={handleWrong2}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[2] }}></div>

            </>
        )
    } else if (number == 0) {
        return (
            <>
                <div className={styleWrong}
                    onClick={handleWrong}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[0] }}></div>
                <div className={styleWrong1}
                    onClick={handleWrong1}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[1] }}></div>
                <div className={styleWrong2}
                    onClick={handleWrong2}
                    dangerouslySetInnerHTML={{ __html: incorrect?.[2] }}></div>
                <div className={styleCorrect}
                    onClick={handleCorrect}
                    dangerouslySetInnerHTML={{ __html: correct }}></div>
            </>
        )
    }

}
export default TriviaAnswer;