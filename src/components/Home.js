import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




const Home = () => {

    const [category, setCategory] = useState([]);
    const [category2, setCategory2] = useState([]);
    const [category3, setCategory3] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`./trivia.json`).then(res => {
            const data = res.data;
            setCategory(data)
        });
    }, []);

    useEffect(() => {
        axios.get(`./trivia2.json`).then(res => {
            const data = res.data;
            setCategory2(data)
        });
    }, []);

    useEffect(() => {
        axios.get(`./trivia3.json`).then(res => {
            const data = res.data;
            setCategory3(data)
        });
    }, []);

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

    const handleOption = (event) => {
        const LinkTo = `/option/${event.target.value}`;
        navigate(LinkTo);
    }

    const handleOption2 = (event) => {
        const LinkTo = `/option2/${event.target.value}`;
        navigate(LinkTo);
    }

    const handleOption3 = (event) => {
        const LinkTo = `/option3/${event.target.value}`;
        navigate(LinkTo);
    }

    return (
        <>
            <div className="home">
                <div className="title">Welcome<br></br>
                    Test your general knowledge,<br></br>
                    you have 45 seconds for each answer.<br></br>
                    Choose the difficulty of general random questions. </div>
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
                    <div className="title">
                        Or choose questions <br></br>
                        by difficulty and category.
                    </div>
                    <div className="buttons">
                        <select onChange={handleOption} className="select">
                            {category.map((categ) => (
                                <option key={categ.id} value={categ.numb}>
                                    {categ.title}
                                </option>
                            ))}
                        </select>
                        <select onChange={handleOption2} className="select">
                            {category2.map((categ) => (
                                <option key={categ.id} value={categ.numb}>
                                    {categ.title}
                                </option>
                            ))}
                        </select>
                        <select onChange={handleOption3} className="select">
                            {category3.map((categ) => (
                                <option key={categ.id} value={categ.numb}>
                                    {categ.title}
                                </option>
                            ))}
                        </select>
                    </div>
            </div>
        </>
    )

}
export default Home;