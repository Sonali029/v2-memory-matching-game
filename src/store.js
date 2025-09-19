import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './gameSlice';
import additionGameReducer from './additionGameSlice';
import additionGame from "./additionGame";
import longestNumberReducer from "./longestNumberSlice";
import longestNumberGame from "./longestNumber";

export const store = configureStore({
    reducer : {
        game : gameReducer,
        additionGame : additionGameReducer,
        longestNumber : longestNumberReducer,
    }
})