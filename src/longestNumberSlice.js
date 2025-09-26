import { createSlice } from '@reduxjs/toolkit';

export const getRandomNumber = (length) => {
    const min = Math.pow(10, length-1);
    const max = Math.pow(10, length) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const initialState = {
    score : 0,
    started : false,
    learnNumber : false,
    correctNumber : false,
    wrongNumber : false,
    numberToRemember : '',
    inputValue : '',
    digitLength : 1
}

const longestNumberSlice = createSlice({
    name : 'longestNumber',
    initialState,
    reducers : {
        startGame(state) {
            state.score = 0;
            state.started = true;
            state.learnNumber = false;
            state.correctNumber = false;
            state.wrongNumber = false;
            state.inputValue = '';
            state.digitLength = 1;
        },
        setNumberToRemember(state, action) {
            state.numberToRemember = action.payload;
        },
        setInputValue(state, action) {
            state.inputValue = action.payload;
        },
        incrementScore(state)  {
            state.score += 1;
        },
        setLearnNumber(state, action) {
            state.learnNumber = action.payload;
        }, 
        setCorrectNumber(state, action) {
            state.correctNumber = action.payload;
        }, 
        setWrongNumber(state, action) {
            state.wrongNumber = action.payload;
        },
        incrementDigitLength(state) {
            state.digitLength += 1;
        }
    }
})

export const {
    startGame,
    setNumberToRemember,
    setInputValue,
    incrementScore,
    setLearnNumber,
    setCorrectNumber,
    setWrongNumber,
    incrementDigitLength
} = longestNumberSlice.actions;
    
export default longestNumberSlice.reducer;
