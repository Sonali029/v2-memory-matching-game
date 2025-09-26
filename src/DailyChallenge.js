import react from "react";
import Game from './Game';
import { useDispatch } from "react-redux";
import { setCategory, setSize } from "./gameSlice";

const DailyChallengeGame = () => {
    const dispatch = useDispatch();
    const category = null;
    const size = {rows: 9, cols: 6};
    dispatch(setCategory(category));
    dispatch(setSize(size))
    return (
        <Game category = {category}  size = {size} />
    )
}

export default DailyChallengeGame;