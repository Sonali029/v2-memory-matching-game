import react, {useState, useEffect} from "react";
import HeadingComponent from "./headingComponent";
import { useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setCategory } from './gameSlice';

const CategoryBoard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = [
        {icon : "🏁", name : "Flags"},
        {icon : "🍉", name : "Food and drinks"},
        {icon : "🐢", name : "Animals"},
        {icon : "💠", name : "Shapes"},
        {icon : "123", name : "Numbers"},
        {icon : "abc", name : "Letters"},
        {icon : "🍊", name : "Fruits and vegetables"},
        {icon : "🧥", name : "Clothing"},
        {icon : "🤌", name : "Hand signs"},
        {icon : "🏀", name : "Sport"},
        {icon : "⛈", name : "Sky and weather"},
        {icon : "⌛", name : "Time"},
        {icon : "🛩", name : "Transport"},
        {icon : "🌍", name : "Travel and places"},
        {icon : "👵", name : "People"},
        {icon : "🔧", name : "Tools"},
    ]

    const handleCategoryClick = (categoryName) => {
        dispatch(setCategory(categoryName));
        navigate(`/category/${categoryName}`);
    }

    return (
        <>
        <HeadingComponent content = "Select game category" />
        <div className = "size-board">
            <div className="size-list">
                {categories.map((category, index) => (
                    <div key = {index} className="size-item" onClick = {() => handleCategoryClick(category.name)}>
                    <div className="category-design">
                        <div className = "category-image"> {category.icon} </div>
                        <div className = "category-name"> {category.name} </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default CategoryBoard;