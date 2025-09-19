import react from "react";
import CommonGamesComponent from "./CommonGames";

const GameForKids = () => {
    return (
        <>
        <CommonGamesComponent 
        content = "kids"
        games = {[
            {icon : "🐢", name : "Animals"},
            {icon : "💠", name : "Shapes"},
            {icon : "123", name : "Numbers"},
            {icon : "abc", name : "Letters"},
            {icon : "🍊", name : "Fruits and vegetables"},
            {icon : "🛩", name : "Transport"},
            {icon : "👵", name : "People"},
        ]}
        />
        </>
    )

}

export default GameForKids;