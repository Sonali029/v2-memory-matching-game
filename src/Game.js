import react, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { initializeBoard,
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
    getRandomColor,
    generateSquares,
    restartGame} from './gameSlice';
import Board from './Board';
import CommonHeading from "./CommonHeading";
import PairMatchDetails from "./PairMatchDetails";
import ScoreBoard from "./ScoreBoard";
import WinScreen from "./WinScreen";
import BottomMenu from "./BottomMenu";

const Game = () => {
    const dispatch = useDispatch();
    const gameState = useSelector((state) => state.game);
    const { squares,size, moves, time, gameStarted, flippedCards, matchedCards, allMatched, ranking, heading, symbol, description, color, bestScore, category } = gameState;
    const {rows, cols} = size;

   const handleClick = (rowIndex, colIndex) => {
    const cell = squares[rowIndex][colIndex];

    if (flippedCards.length >= 2 || cell.matched || cell.flipped) {
        return;
    }

    if(matchedCards) {
        dispatch(setMatchedCards(false));
    }

    dispatch(incrementMoves());

    if (!gameStarted) {
        dispatch(setGameStarted(true));
    }
 
    const updatedSquares = squares.map((row, rowIdx) => 
        row.map((cell, colIdx) => {
            if ((rowIndex == rowIdx) && (colIndex == colIdx)) {
                return {...cell, flipped : true}
            }
            return cell;
        })
    )
    dispatch(setSquares(updatedSquares));
    const newFlipped = [...flippedCards, { rowIndex, colIndex }];
    dispatch(setFlippedCards(newFlipped));
   }

    const restartGameHandler = () => {
        dispatch(restartGame());
        dispatch(setMoves(0));
        dispatch(setTime(0));
        dispatch(setColor(getRandomColor()));
        dispatch(setAllMatched(false));
        dispatch(setFlippedCards([]));
        dispatch(setMatchedCards(false));
        dispatch(setGameStarted(false));
        const squares = generateSquares(category, rows, cols);
        dispatch(setSquares(squares));


    }

    const playSameLevel = () => {
        restartGameHandler();
    }

    const playNextLevel = () => {
        const newRows = rows + 1;
        const newCols = cols + 1;
        dispatch(setSize({ rows: newRows, cols: newCols }));
        restartGameHandler();

        const squares = generateSquares(category, newRows, newCols);
        dispatch(setSquares(squares));
    }

    //Initialize the board
    useEffect(() => {
        dispatch(initializeBoard({ category }));
        dispatch(setColor(getRandomColor()));

        const key = `ranking-${category}-${rows}-${cols}`;
        const existingScores = JSON.parse(localStorage.getItem(key)) || [];
        if (existingScores.length) {
            dispatch(setBestScore(existingScores[0].moves));
            dispatch(setRanking(existingScores));
        } else {
            dispatch(setBestScore(0));
            dispatch(setRanking([]));
        }

    }, [dispatch, category, rows, cols])
    
    //Flipped Cards Logic
    useEffect(() => {
        if (flippedCards.length == 2) {
            const [first, second] = flippedCards;
            const firstCard = squares[first.rowIndex][first.colIndex].card;
            const secondCard = squares[second.rowIndex][second.colIndex].card;
            
            if(!firstCard || !secondCard) {
                return;
            }
            if (firstCard.symbol == secondCard.symbol) {
                const updated = squares.map((row, rowIdx) => 
                    row.map((cell, colIdx) => {
                        if (
                            ((rowIdx == first.rowIndex) && (colIdx == first.colIndex)) ||
                            ((rowIdx == second.rowIndex) && (colIdx == second.colIndex))
                        ) {
                            return {...cell, matched : true}
                        }
                        return cell;
                    })
                )
                dispatch(setSquares(updated));
                dispatch(setMatchedCards(true));
                dispatch(setFlippedCards([]));
                dispatch(setSymbol(firstCard.symbol));
                dispatch(setDescription(firstCard.description));
            } else {
                setTimeout(() => {
                    const updated = squares.map((row, rowIdx) =>
                        row.map((cell, colIdx) => {
                            if (
                                ((rowIdx == first.rowIndex) && (colIdx == first.colIndex)) ||
                                ((rowIdx == second.rowIndex) && (colIdx == second.colIndex))
                            ) {
                                return {...cell, flipped : false}
                            }
                            return cell;
                        })
                    )
                    dispatch(setSquares(updated));
                    dispatch(setFlippedCards([]));
                }, 700)
            }
        }
    }, [flippedCards, squares, dispatch])
       
    //Check if all cards matched
    useEffect(() => {
        const isAllMatched = squares.flat().every(cell => cell.matched);
        if (isAllMatched) {
            dispatch(setHeading(true));
        }
        dispatch(setAllMatched(isAllMatched));
    }, [squares, dispatch]);
          
    // Timer Logic
    useEffect(() => {
        if (!gameStarted) return;

        const timer = setInterval(() => {
            dispatch(incrementTime());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [gameStarted, dispatch]);
    
    // Stop timer when all matched
    useEffect (() => {
        if (allMatched && gameStarted) {
            dispatch(setGameStarted(false));
        }
    }, [gameStarted, allMatched, dispatch])
    
    // Hide heading after 1.5 sec
    useEffect(() => {
        if (heading) {
            setTimeout(() => {
                dispatch(setMatchedCards(false));
            }, 1500);
            }
    },[heading, dispatch])
    
    // Update ranking and best score in local storage
    useEffect(() => {
        const isAllMatched = squares.flat().every(cell => cell.matched);
    
        dispatch(setAllMatched(isAllMatched));
    
        if (isAllMatched) {
            dispatch(setHeading(true));
            dispatch(setGameStarted(false));
    
            // Update ranking right here
            const finalScore = { moves, time };
            const key = `ranking-${category}-${rows}-${cols}`;
            const currentScore = { moves, time };
            const existingScores = JSON.parse(localStorage.getItem(key)) || [];
            const updatedScores = [...existingScores, currentScore]
                .sort((a, b) => a.moves - b.moves || a.time - b.time)
                .slice(0, 3);
            localStorage.setItem(key, JSON.stringify(updatedScores));
            dispatch(setRanking(updatedScores));
            dispatch(setBestScore(updatedScores[0]?.moves || 0));
        }
    }, [allMatched]);

    return (
    <div className = "game-background">
        {!matchedCards && (
            <CommonHeading />
        )}
        
        {matchedCards && <PairMatchDetails symbol={symbol} description={description} />}
        
        {!matchedCards && (
            <div className="dashed-line"></div>
        )}
        
        <div className="main-game">
            <ScoreBoard moves={moves} time={time} bestScore={bestScore} />
            {!allMatched && (
                <Board 
                squares = {squares} 
                color = {color} 
                rows  = {rows} 
                cols = {cols} 
                handleClick = {handleClick}
                />
            )}
            
            {allMatched && ranking.length > 0 && (
                <WinScreen 
                ranking= {ranking}
                moves= {moves}
                time= {time}
                rows= {rows}
                cols= {cols}
                playSameLevel={playSameLevel}
                playNextLevel={playNextLevel}
                />
            )}
            {!allMatched && (
                <BottomMenu restartGameHandler={restartGameHandler} category={category} />
            )}
        </div>
    </div>
    )
}

export default Game;

