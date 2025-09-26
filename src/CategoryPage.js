import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory, setTime, setMoves, setGameStarted } from './gameSlice';
import Game from './Game';


const CategoryPage = () => {
  const dispatch = useDispatch();
  const { name } = useParams();

  dispatch(setTime(0));
  dispatch(setMoves(0));
  dispatch(setGameStarted(false));
  
  useEffect(() => {
    dispatch(setCategory(name))
  }, [name, dispatch]);
  
  return (
  <div>
    <Game/>
  </div>
  );
};
export default CategoryPage