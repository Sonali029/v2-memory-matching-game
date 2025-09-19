import react from "react";
import Square from './Square';

const Board = ({squares, color, rows, cols, handleClick}) => {
    const renderSquare = (row, col, card, flipped, matched) => {
        return (
        <Square key = {`${row}-${col}`} 
            color = {color} 
            card = {card} 
            onClick = {() => handleClick(row, col)}
            flipped = {flipped}
            matched = {matched}
        />
        )
    }

    const gridStyle = {
        display : 'grid',
        gap : '5px',
        gridTemplateRows : `repeat(${rows}, 1fr)`,
        gridTemplateColumns : `repeat(${cols}, 1fr)`,
    }

    return (
        <>
        <div className = "board" style = {gridStyle} >
            {squares.map((row, rowIndex) => (
                row.map((cell, colIndex) => (renderSquare(rowIndex, colIndex, cell.card, cell.flipped, cell.matched)))
            ))}
        </div>
        </>
    )
}

export default Board;