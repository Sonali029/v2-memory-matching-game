import formatTime from "./formatTime"
const WinScreen = ({ranking, moves, time, rows, cols, playSameLevel, playNextLevel}) => {
    const winIcons = ["🥇", "🥈", "🥉"];
    return (
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
    )
}

export default WinScreen;