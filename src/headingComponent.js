import react, {useState, useEffect} from "react";
import AllGames from "./AllGamesCategory";
import SizeBoard from "./SizeBoard";
import CategoryBoard from './GameCategory';
import {useNavigate} from "react-router-dom";

const HeadingComponent = ({content}) => {
    const navigate = useNavigate();

    const clickCrossOption = () => {
        navigate("/");
      }
  
    return (
    <>
    <div className="board-size main-game">
    <div className = "display game-heading sizeBoard-width">
        <div className = "boardSize-heading">
            {content}
        </div>
        <img className = "cross-image" 
        src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAABNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU0N3NIOAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC" 
        onClick = {clickCrossOption}
        />
    </div>
    </div>
    </>
    )
}

export default HeadingComponent;