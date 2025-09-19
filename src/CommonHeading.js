import react from "react";
import { Link } from "react-router-dom";

const CommonHeading = () => {
    return (
        <div className = "main-game">
        <div className = "game-heading display">
            <div className = "game-name">MemoryMatching.com</div>
            <div className="games-menu display">
                <Link to = "/allGames"> All games </Link>
                <div className="arrow-down"></div>
            </div>
        </div>
        </div>
    )
}

export default CommonHeading;