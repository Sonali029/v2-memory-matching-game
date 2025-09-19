import react from "react";
import CommonHeading from "./CommonHeading";
import {useNavigate} from "react-router-dom";

const CommonGamesComponent = ({content, games}) => {
    const navigate = useNavigate();

    return (
        <>
        <CommonHeading />
        <div className="dashed-line"></div>
        <div className = "main-game new-width">
            <div className = "numbers main-heading">
                Play free memory matching games for {content}
            </div>
            <div className = "game-instructions para">
                This is top list of our most popular memory puzzles for {content}.
            </div>
            <div className = "size-list">
            {games.map((game, index) => (
                <div 
                key = {index}
                className = "size-item no-border"
                onClick = {() => navigate(`/category/${game.name}`)}
                >
                    <div className = "category-design">
                        <div className = "category-image">
                            {game.icon}
                        </div>
                        <div className = "category-name">
                            {game.name}
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default CommonGamesComponent;