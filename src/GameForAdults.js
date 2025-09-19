import react from "react";
import CommonGamesComponent from "./CommonGames";

const GameForAdults = () => {
    return (
        <>
        <CommonGamesComponent
        content = "adults"
        games = {[
            {icon : "🏁", name : "Flags"},
            {icon : "🍉", name : "Food and drinks"},
            {icon : "🍊", name : "Fruits and vegetables"},
            {icon : "🏀", name : "Sport"},
            {icon : "⛈", name : "Sky and weather"},
            {icon : "🛩", name : "Transport"},
            {icon : "🌍", name : "Travel and places"},
            {icon : "🔧", name : "Tools"},
        ]} 
        />
        </>
    )

}

export default GameForAdults;