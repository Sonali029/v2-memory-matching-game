import { createSlice } from '@reduxjs/toolkit';

export const getRandomNumber = () => {
    return Math.floor(Math.random() * 9) + 1;
}

const initialState = {
    time : 30,
    started : false,
    number1 : 0,
    number2 : 0,
    inputValue : '',
    score : 0,
    gameOver : false,
}

const additionSlice = createSlice({
    name : 'additionGame',
    initialState,
    reducers : {
        startNewGame(state) {
            state.time = 30;
            state.started = false;
            state.score = 0;
            state.inputValue = '';
            state.gameOver = false;
            state.number1 = getRandomNumber();
            state.number2 = getRandomNumber();
        }, 
        setNumber1(state, action) {
            state.number1 = action.payload;
        },
        setNumber2(state, action) {
            state.number2 = action.payload;
        },
        setStarted(state, action) {
            state.started = action.payload;
        }, 
        setInputValue(state, action) {
            state.inputValue = action.payload;
        },
        incrementScore(state) {
            state.score += 1;
        },
        decrementTime(state) {
            state.time -= 1;
        },
        setGameOver(state, action) {
            state.gameOver = action.payload;
        }
    }
})

export const {
    startNewGame,
    setNumber1,
    setNumber2,
    setStarted,
    setInputValue,
    incrementScore,
    decrementTime,
    setGameOver
} = additionSlice.actions;

export default additionSlice.reducer;