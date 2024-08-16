import React from "react";
import { useNavigate } from "react-router-dom";




const Home = () => {

    const navigate = useNavigate();

    const handleEasy = () => {
        const LinkTo = '/easy';
        navigate(LinkTo);
    }

    const handleMedium = () => {
        const LinkTo = '/medium';
        navigate(LinkTo);
    }

    const handleHard = () => {
        const LinkTo = '/hard';
        navigate(LinkTo);
    }

    return (
        <>
            <div className="home">
                <div className="title">Welcome<br></br>
                    Test your general knowledge,<br></br>
                    you have 45 seconds for each answer.<br></br>
                    Choose the difficulty of random questions. </div>
                <div className="buttons" >
                    <div className="button"
                        onClick={() => handleEasy()}>
                        Easy</div>
                    <div className="button"
                        onClick={() => handleMedium()}>
                        Medium</div>
                    <div className="button"
                        onClick={() => handleHard()}>
                        Hard</div>
                </div>
            </div>
        </>
    )

}
export default Home;