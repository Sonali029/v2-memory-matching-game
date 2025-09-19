import react, {useState, useEffect} from "react";
import HeadingComponent from "./headingComponent";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const AllGames = () => {
    const navigate = useNavigate();
    const GameType = ({icon, name, link}) => {
        return (
            <Link to = {link} className="game-type display">
                    <span>{icon}</span>
                    <span className = "game-category">{name}</span>
            </Link>
        )
    }

    const GameSection = ({title, description, games, className = ""}) => {
        return (
            <div className = {`all-games-box ${className}`}>
                <div className = "games-heading">{title}</div>
                {description && <div className = "para-detail">{description}</div>}
                {games.map((game, index) => (
                    <GameType key = {index} icon = {game.icon} name = {game.name} link = {game.link} />
                ))}
            </div>
        )
    }
    return (
        <>
        <HeadingComponent content = "What to play today?" />

        <div className = "size-board">
            <div className = "text-xs">
                All games are 
                <strong> FREE to play </strong>
            </div>

            <GameSection 
            title = "Matching games"
            games = {[
                { icon: "🎨", name: "Games for adults", link : "/games-for-adults"},
                { icon: "🧩", name: "Games for teenagers", link : "/games-for-teenagers"},
                { icon: "🧸", name: "Games for kids", link : "/games-for-kids" },
            ]}
            />  

        <div onClick={() => navigate('/daily-challenge')}>
            <GameSection
            title = "Daily challenges"
            description = "The Daily Challenge is our most challenging memory matching puzzle, featuring a larger board size than any other game option."
            games = {[
                {icon : "🎭", name : "Play daily challenge"}
            ]}
            className="bg-yellow"
            />
        </div>

            <GameSection
            title = "Totally different memory games"
            description = "Can you remember longest number in the world? How fast you can do math?"
            games = {[
                {icon : "🚀", name : "Longest number", link : "/longest-number"},
                {icon : "🔢", name : "Numbers: Addition - Fast paced", link : "/addition"}
            ]}
            />
        </div>
        </>
    )
}

export default AllGames