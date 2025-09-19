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
    restartGame} from './gameSlice';
import Board from './Board';
import { Link } from "react-router-dom";
import CommonHeading from "./CommonHeading";
import { getRandomColor } from "./gameSlice";
import { generateSquares } from "./gameSlice";

const Game = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.game.category);
    console.log("dispatch", dispatch)
    const { rows, cols } = useSelector((state) => state.game.size);

    const gameState = useSelector((state) => state.game);
    const { squares, moves, time, gameStarted, flippedCards, matchedCards, allMatched, ranking, heading, symbol, description, color, bestScore } = gameState;
    // console.log("category", category);
    // console.log("rows, cols", rows, cols);
    // console.log("gaemstate", gameState)
    useEffect(() => {
        dispatch(initializeBoard({ category }));
        dispatch(setColor(getRandomColor()));
    }, [dispatch, category])
 
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


    useEffect(() => {
        const isAllMatched = squares.flat().every(cell => cell.matched);
        if (isAllMatched) {
            dispatch(setHeading(true));
        }
        dispatch(setAllMatched(isAllMatched));
      }, [squares, dispatch]);
      
      
    useEffect(() => {
        if (gameStarted) {
            const timer = setInterval(() => {
                dispatch(incrementTime());
            }, 1000);
            return () => {
                clearInterval(timer);
            }
        }
    }, [gameStarted, dispatch]);
    
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const BottomHeading = ({options}) => {
        return (
            <>
            {options.map((option, index) => (
                <div className="bottom-menu" key = {index}>
                <Link to = {option.link}> {option.content} </Link>
                </div>
            ))}
            </>
        )
    }

    const restartGameHandler = () => {
        dispatch(restartGame());
        dispatch(setColor(getRandomColor()));
    }

    const playSameLevel = () => {
        dispatch(setAllMatched(false));
        dispatch(setFlippedCards([]));
        dispatch(setMatchedCards(false));
        dispatch(restartGame());
        const squares = generateSquares(category, rows, cols);
        dispatch(setSquares(squares));
    }

    const playNextLevel = () => {
        const newRows = rows + 1;
        const newCols = cols + 1;
        dispatch(setSize({ rows: newRows, cols: newCols }));
        dispatch(setAllMatched(false));
        dispatch(setFlippedCards([]));
        dispatch(setMatchedCards(false));
        dispatch(restartGame());
        const squares = generateSquares(category, newRows, newCols);
        dispatch(setSquares(squares));
    }

    useEffect (() => {
        if (allMatched && gameStarted) {
            dispatch(setGameStarted(false));
        }
    }, [gameStarted, allMatched, dispatch])

    useEffect(() => {
        if (heading) {
            setTimeout(() => {
                dispatch(setMatchedCards(false));
            }, 1500);
        }
    },[heading])

    useEffect(() => {
        if (allMatched && gameStarted) {
            const key = `ranking-${category}-${rows}-${cols}`;
            const currentScore = {moves, time};
            const existingScores = JSON.parse(localStorage.getItem(key)) || [];
            const updatedScores = [...existingScores, currentScore]
                .sort((a, b) => a.moves - b.moves || a.time - b.time)
                .slice(0, 3);
            localStorage.setItem(key, JSON.stringify(updatedScores));
            dispatch(setRanking(updatedScores));
            dispatch(setBestScore(updatedScores[0].moves || 0));
        }
    }, [allMatched])

    const winIcons = ["🥇", "🥈", "🥉"];
      
    return (
        <div className = "game-background">
            {!matchedCards && (
                <CommonHeading />
            )}

            {matchedCards && (
                <div className = "pair-match">
                    <div className = "discovered">
                        Discovered
                    </div>
                    <div className = "display pair-details">
                        <div> {symbol} </div>
                        <div> {description} </div>
                    </div>
                </div>
            )}

             {!matchedCards && (
            <div className="dashed-line"></div>
             )}

            <div className="main-game">
                <div className = "second-heading display">
                    <div className="score-heading display">
                        <img className="trophy-image" src = "https://th.bing.com/th/id/OIP.2NkmdMG4mAZgAr8mlxnO2gHaKK?rs=1&pid=ImgDetMain" />
                        <div className="best-score">{bestScore} </div>
                    </div>
                    <div className="time-heading display">
                        <div> Time: </div>
                        <div> {formatTime(time)}</div>
                    </div>
                    <div className="moves-heading display">
                        <div> Moves: </div>
                        <div> {moves} </div>
                    </div>
                </div>

                {!allMatched && (
                <Board 
                    squares = {squares} 
                    color = {color} 
                    rows  = {rows} 
                    cols = {cols} 
                    handleClick = {handleClick}
                />)}

                {allMatched && (
                    <div className = "board" style = {{padding : 0}} >
                        <div className = "win-text">
                            <div className="win-info"> 
                                <div className="win-icon"> 🏆 </div>
                                <div className="headline"> You win! </div>
                                <div className = "display current-result">
                                    <div className="current-result-item">
                                        Moves:
                                        <div className="highlight"> {moves} </div>
                                    </div>
                                    <div className="current-result-item">
                                        Time:
                                        <div className="highlight"> {formatTime(time)} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "ranking-header"> Your ranking for board  size: 
                            <span className = "ranking-size">  {rows}x{cols} </span>
                        </div>

                        {ranking.length > 0 && (
                            <table>
                                <thead>
                                    <tr>
                                    <th> Rank: </th>
                                    <th> Moves: </th>
                                    <th> Time: </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ranking.map((score, index) => (
                                        <tr key = {index}>
                                            <td> {winIcons[index]} </td>
                                            <td> {score.moves} </td>
                                            <td> {formatTime(score.time)} </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        <div className = "display show-button win-text">
                            <div className = "play-another-game" onClick = {playSameLevel} >
                                Retry 
                            </div>
                            <div className = "play-another-game" onClick = {playNextLevel} >
                                Play next 
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="bottom-heading display">
                    <div className="bottom-menu" onClick = {restartGameHandler} >Restart</div>
                    <BottomHeading
                    options={[
                        {
                          link: '/category',
                          content: '🖼 Category',
                        },
                        { link: `/category/${category}/size`,
                        content: 'Size' },
                      ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Game;

