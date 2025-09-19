import react, {useEffect} from "react";
import NumberGameComponent from "./numberGames";
import { useSelector, useDispatch } from "react-redux";
import {startGame,
    setNumberToRemember,
    setInputValue,
    incrementScore,
    setLearnNumber,
    setCorrectNumber,
    setWrongNumber,
    incrementDigitLength} from './longestNumberSlice';

import { getRandomNumber } from "./longestNumberSlice";

const LongestNumberGame = () => {
   const dispatch = useDispatch();
   const longestNumberState = useSelector((state) => state.longestNumber);
   const { score, started, learnNumber, correctNumber, wrongNumber, numberToRemember, inputValue, digitLength } = longestNumberState;
   console.log("digit length", digitLength)


    useEffect(() => {
        const newNum = getRandomNumber(digitLength);
        dispatch(setNumberToRemember(String(newNum)));
    },[digitLength, dispatch])

    const newGame = () => {
        dispatch(startGame());
    }

    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(setInputValue(value));
        if (value == numberToRemember) {
            dispatch(incrementScore());
        } 
    }

    const rememberNumber = () => {
        dispatch(setLearnNumber(true));
    }

    const writeNumber = () => {
        if (inputValue == numberToRemember) {
            dispatch(setCorrectNumber(true));
        } else {
            dispatch(setWrongNumber(true));
        }
    }

    const playNewLevel = () => {
        dispatch(setLearnNumber(false));
        dispatch(setCorrectNumber(false));
        dispatch(incrementDigitLength());
        dispatch(setInputValue(''));
    }

    const playFromSameLevel = () => {
        dispatch(setLearnNumber(false));
        dispatch(setWrongNumber(false));
        dispatch(setInputValue(''));
    }

    const ClassComponent = ({options}) => {
        return (
            <>
            {options.map((option, index) => (
                <div key = {index} >
                <div className = {`game-instructions ${option.className} || ''}`} >
                    {option.content}
                </div>
                <div className = "numbers answer" key = {index} >
                    {option.number}
                </div> 
                </div>
            ))}
            </>
        )
    }

    const MainComponent = ({heading, para, onClick, button, className, children, buttonClass}) => {
        return (
            <>
            <div className = {className ? `numbers ${className}` : "numbers"} >
                {heading}
            </div>
            <div className="game-instructions">
                {para}
            </div>
            {children}
            <div className = {buttonClass ? `play-button ${buttonClass}` : "play-button"} onClick = {onClick} >
                {button}
            </div>
            </>
        )
    }

    return (
        <div className="main-game">
            <NumberGameComponent content = "Longest number" />
            {!started && (
                <>
                <MainComponent heading = "How good is your memory?" 
                para = "The average person can remember 7 numbers at once. Can you do more?"
                onClick = {newGame}
                button = "Play"
                />
                </>
            )}

            {started && !learnNumber && (
                <>
                <MainComponent heading = {numberToRemember}
                className = "newNumber"
                para = " Remember this number and click Next when you are ready"
                onClick = {rememberNumber}
                button = "Next"
                buttonClass = "answer"
                />
                </>
            )}

            {learnNumber && (!correctNumber && !wrongNumber) && (
                <>
                <MainComponent heading = "What was the number?"
                para = " Type your number and press Next"
                onClick = {writeNumber}
                button = "Next"
                buttonClass = "answer"
                >
                <input 
                type = "text"
                placeholder = "Type number here"
                className = "input-text"
                value = {inputValue}
                onChange = {handleChange}
                />
                </MainComponent>
                </>
            )}

            {correctNumber && (
                <>
                 <div className = "level-name">Level {score} </div>
                 <div className = "game-instructions">
                    Perfect! You remembered that number was
                 </div>
                 <div className = "numbers answer">
                    {numberToRemember}
                 </div>
                 <div className = "game-instructions add-margin" >
                    Are you ready for level {score + 1}?
                 </div>
                 <div className = "play-button answer" onClick = {playNewLevel}>
                    Next
                 </div>
                </>
            )}

            {wrongNumber && (
                <>
                <div className = "level-name">Level {score + 1} </div>
                <ClassComponent 
                const options = {[
                    {content : "Number was", number : numberToRemember},
                    {content : "Your answer", number : inputValue, className : "add-margin"}
                ]}
                />    
                <div className = "display choose-option">
                    <div className = "play-button play-again option-width add-margin" onClick = {newGame} >
                        Play Level 1
                    </div>
                    <div className = "play-button option-width add-margin" onClick = {playFromSameLevel} >
                        Try again
                    </div>
                </div>
                </>
            )}

        </div>
    )
}

export default LongestNumberGame;