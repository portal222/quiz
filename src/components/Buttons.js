import React from "react";
import { useNavigate } from "react-router-dom";


const Buttons = () => {

    const navigate = useNavigate();

    const handleHome = () => {
        const LinkTo = '/';
        navigate(LinkTo);
    }

    return (
        <>
            <div className="buttons">
                <div className="button"
                    onClick={() => handleHome()}>
                    New Game</div>
            </div>
        </>
    )
}
export default Buttons