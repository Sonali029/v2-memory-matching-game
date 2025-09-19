import react, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const NumberGameComponent = ({content}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <>
        <div className = "cursor" onClick = {handleClick} >
            <div className="game-name"> MemoryMatching.com</div>
            <div className = "second-game-heading game-name">"AWESOME BRAIN GAMES"</div>
        </div>
        <div className = "addition-heading">
                {content}
        </div>
        </>
    )
}

export default NumberGameComponent;