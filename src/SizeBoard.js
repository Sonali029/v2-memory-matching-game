import HeadingComponent from "./headingComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setSize, setCategory, setTime, setMoves, setGameStarted } from './gameSlice';

const SizeBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryName = useSelector((state) => state.game.category);

    const sizes = [
      { x: 3, y: 2 },
      { x: 4, y: 3 },
      { x: 4, y: 4 },
      { x: 5, y: 4 },
      { x: 6, y: 5 },
      { x: 8, y: 5 },
      { x: 8, y: 6 },
    ];

    const handleSizeChange = (size) => {
      dispatch(setSize({ rows: size.x, cols: size.y }));
      dispatch(setMoves(0));
      dispatch(setTime(0));
      dispatch(setGameStarted(false));
    
      if (categoryName) {
        dispatch(setCategory(categoryName));
        navigate(`/category/${categoryName}`)
      } else {
        navigate("/");
      }
    };

    return (
      <>
        <HeadingComponent content = "Select board size" />
        <div className = "size-board">
            <div className = "size-list">
                {sizes.map((size, index) => (
                    <div className = "size-item" key = {index} onClick = {() => handleSizeChange(size)}>
                        {size.x}x{size.y}
                    </div>
                ))}
            </div>
        </div>
      </>
    );
  }

  export default SizeBoard;