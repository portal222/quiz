import { useEffect, useState } from "react";
import useSound from "use-sound";
import wrong from "../assets/jazzy-chords.wav";

export default function Timer({ setStop, questionNumber }) {
    const [timer, setTimer] = useState(45);
    const [wrongAnswer] = useSound(wrong);


    useEffect(() => {
        if (timer === 0) {return setStop(true),
        wrongAnswer() }

const interval = setInterval(() => {
    setTimer((prev) => prev -1);
  
}, 1000);
return () => clearInterval(interval);
    }, [setStop, timer]);

    useEffect(() => {
        setTimer(45);
    }, [questionNumber]);

    return timer;
   
}