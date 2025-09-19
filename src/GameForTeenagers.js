import react from "react";
import CommonGamesComponent from "./CommonGames";

const GameForTeenagers = () => {
    return (
        <>
        <CommonGamesComponent
        content = "teenagers"
        games = {[
            {icon : "🧥", name : "Clothing"},
            {icon : "🤌", name : "Hand signs"},
            {icon : "🏀", name : "Sport"},
            {icon : "⌛", name : "Time"},
        ]}
        />
        </>
    )

}

export default GameForTeenagers;