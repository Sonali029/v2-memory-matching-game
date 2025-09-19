import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from './gameSlice';
import Game from './Game';


const CategoryPage = () => {
  const dispatch = useDispatch();
    const { name } = useParams();

    useEffect(() => {
      dispatch(setCategory(name))
      }, [name, dispatch]);
    
    return (
      <div>
        <Game category = {name} />
      </div>
    );
  };
export default CategoryPage