import { useEffect } from "react";
import applause from "../assets/applause.flac";
import useSound from "use-sound";

const Applause = () => {

    const [finish] = useSound(applause);

    useEffect(() => {
        finish();
    }, [finish])

}
export default Applause;