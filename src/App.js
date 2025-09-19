import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import SizeBoard from './SizeBoard';
import Game from './Game';
import CategoryBoard from './GameCategory';
import CategoryPage from './CategoryPage';
import AllGames from './AllGamesCategory';
import AdditionGame from './additionGame';
import LongestNumberGame from "./longestNumber";
import DailyChallengeGame from "./DailyChallenge";
import GameForAdults from "./GameForAdults";
import GameForTeenagers from "./GameForTeenagers";
import GameForKids from "./GameForKids";

const AddWrapper = () => {
  return (
        <Router>
          <App />
        </Router>
  )
}

function App() {
  
  return (
      <Routes>
        <Route path = "/" element = {<Game/>} />
        <Route path = "/allGames" element = {<AllGames/>} />
        <Route path = "/category/:name/size" element = {<SizeBoard/>} />
        <Route path = "/category" element = {<CategoryBoard/>} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path = "/addition" element = {<AdditionGame/>} />
        <Route path = "/longest-number" element = {<LongestNumberGame/>} />
        <Route path = "/daily-challenge" element = {<DailyChallengeGame/>} />
        <Route path = "/games-for-adults" element = {<GameForAdults />} />
        <Route path = "/games-for-teenagers" element = {<GameForTeenagers />} />
        <Route path = "/games-for-kids" element = {<GameForKids />} />
      </Routes>
  );
}

export default AddWrapper;
