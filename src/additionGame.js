import react, {useEffect} from "react";
import NumberGameComponent from "./numberGames";
import { useSelector, useDispatch } from "react-redux";
import { startNewGame,
    setNumber1,
    setNumber2,
    setStarted,
    setInputValue,
    incrementScore,
    decrementTime,
    setGameOver
    } from './additionGameSlice';
import { getRandomNumber } from './additionGameSlice';

const AdditionGame = () => {
    const dispatch = useDispatch();
    const additionGameState = useSelector((state) => state.additionGame)
    const {time, started, number1, number2, inputValue, score, gameOver} = additionGameState;

    useEffect(() => {
        dispatch(setNumber1(getRandomNumber()));
        dispatch(setNumber2(getRandomNumber()));
    },[])

    useEffect(() => {
        if (started && time > 0) {
            const timer = setInterval(()=> {
                dispatch(decrementTime())
            }, 1000);
            return () => clearInterval(timer);
        }
    },[started, time, dispatch]);

    useEffect(() => {
        if (time == 0) {
            dispatch(setGameOver(true));
        }
    }, [time, dispatch])
  
    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(setInputValue(value));

        if (parseInt(value) == number1+ number2) {
            dispatch(incrementScore());
            setTimeout(() => {
                dispatch(setNumber1(getRandomNumber()));
                dispatch(setNumber2(getRandomNumber()));
                dispatch(setInputValue(''));
            }, 400)
        }
    }

    const handleFocus = () => {
       if (!started) {
        dispatch(setStarted(true));
       }
    }
    
    const restartGame = () => {
        dispatch(startNewGame());
    }

    return (
        <div className="main-game">
            <NumberGameComponent content = "Addition" />
            {!gameOver && (
            <>
            <div className = "game-instructions">
                You have 30 seconds to do as many additions as you can. Type result in box below to begin!
            </div>
            <div className = "numbers"> {number1} + {number2} = </div>
            <input 
                type = "text"
                placeholder = "Type result here"
                className = "input-text"
                value = {inputValue}
                onFocus = {handleFocus}
                onChange = {handleChange}
            />
            <div className = "time">
                Time left: {time}s
            </div>
            </>)}
            
            {gameOver && (
                <>
                <div className = "level-name">Level {score} </div>
                <div className = "game-instructions">
                Great job! You have reached Level {score}. Try to be faster next time!
                </div>
                <div className = "play-button" onClick = {restartGame} >
                    Try again
                </div>
                </>
            )}
        </div>
    )
}

export default AdditionGame;