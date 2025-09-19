import react from "react";
import Game from './Game';

const DailyChallengeGame = () => {
    const category = undefined;
    const size = {rows: 9, cols: 6}
    return (
        <Game category = {category}  size = {size} />
    )
}

export default DailyChallengeGame;