import formatTime from "./formatTime"

const ScoreBoard = ({moves, time, bestScore}) => {
    return (
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
    )
}

export default ScoreBoard;