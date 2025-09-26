import { createSlice } from '@reduxjs/toolkit';
import cardList from './memory matching json data';

export const getRandomColor = () => {
    const backgroundColors = ['#818cf8', '#fb923c', '#4ade80', '#f87171', '#38bdf8'];
    const colors = ['#4338ca', '#9a3412', '#166534', '#991b1b', '#0369a1'];
    const randomIndex = Math.floor(Math.random() * backgroundColors.length);
    return {
        backgroundColor : backgroundColors[randomIndex],
        color : colors[randomIndex]
    }
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        if (!array[i] || !array[j]) {
            continue;
        }
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const generateSquares = (category, rows, cols) => {
    const newCategory = category ? category.replace(/\s+/g, '') : '';
    let numCards = rows * cols;

    let shuffleCards;
    if (category && cardList[newCategory]) {
        const selectedCategoryCards = cardList[newCategory];
        shuffleCards = shuffleArray([...selectedCategoryCards]);
    } else {
        const allCards = Object.values(cardList).flat();
        shuffleCards = shuffleArray([...allCards]);
    }
      
    const selectedCards = shuffleCards.slice(0, (numCards / 2));
    const duplicatedCards = [...selectedCards, ...selectedCards];
    const finalShuffledCards = shuffleArray(duplicatedCards);
      
    return Array.from({ length: rows }, () => {
        return Array.from({ length: cols }, () => ({
            card: finalShuffledCards.pop() || null,
            flipped: false,
            matched: false,
        }));
    });
}

const initialState = {
    size: { rows: 5, cols: 4 },
    category : null,
    squares: [],
    bestScore: 0,
    time: 0,
    moves: 0,
    gameStarted: false,
    flippedCards: [],
    matchedCards: false,
    allMatched: false,
    heading: false,
    ranking: [],
    color: null,
    symbol: null,
    description: null,
};

const gameSlice = createSlice({
    name : 'game',
    initialState,
    reducers : {
        initializeBoard(state, action) {
            const { category } = action.payload;
            const { rows, cols } = state.size;
            state.squares = generateSquares(category, rows, cols);
            state.color = getRandomColor();
        }, 
        setCategory(state, action) {
            state.category = action.payload;
        },
        setColor(state, action) {
            state.color = action.payload;
        },
        setSize(state, action) {
            state.size = action.payload;
        },
        setMoves(state, action) {
            state.moves = action.payload;
        }, 
        incrementMoves(state) {
            state.moves += 1;
        },
        setTime(state, action) {
            state.time = action.payload;
        },
        incrementTime(state) {
            state.time += 1;
        },
        setFlippedCards(state, action) {
            state.flippedCards = action.payload;
        },
        setMatchedCards(state, action) {
            state.matchedCards = action.payload;
        },
        setAllMatched(state, action) {
            state.allMatched = action.payload;
        },
        setGameStarted(state, action) {
            state.gameStarted = action.payload;
        },
        setHeading(state, action) {
            state.heading = action.payload;
        },
        setRanking(state, action) {
            state.ranking = action.payload;
        },
        setBestScore(state, action) {
            state.bestScore = action.payload;
        }, 
        setSymbol(state, action) {
            state.symbol = action.payload;
        },
        setDescription(state, action) {
            state.description = action.payload;
        },
        setSquares(state, action) {
            state.squares = action.payload;
        },
        restartGame(state) {
            state.moves = 0;
            state.time = 0;
            state.color = getRandomColor();
            state.gameStarted = false;
            state.flippedCards = [];
            state.matchedCards = false;
            state.allMatched = false;
            state.heading = false;
            state.symbol = null;
            state.description = null;
        }
    }
})

export const {
    initializeBoard,
    setSize,
    setCategory,
    setMoves,
    incrementMoves,
    setTime,
    incrementTime,
    setColor,
    setFlippedCards,
    setMatchedCards,
    setAllMatched,
    setGameStarted,
    setHeading,
    setRanking,
    setBestScore,
    setSymbol,
    setDescription,
    setSquares,
    restartGame
} = gameSlice.actions;

export default gameSlice.reducer;