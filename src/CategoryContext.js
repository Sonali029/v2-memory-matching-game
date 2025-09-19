import { createContext, useContext, useState } from "react";

const categoryContext = createContext();

export const useCategory = () => useContext(categoryContext);

export const CategoryProvider = ({children}) => {
    const[categoryName, setCategoryName] = useState("");
    
    return (
        <categoryContext.Provider value = {{categoryName, setCategoryName}} >
            {children}
        </categoryContext.Provider>
    )
}
