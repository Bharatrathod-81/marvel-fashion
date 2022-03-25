import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const categoriesContext = createContext();

const CategoryProvider = ({ children }) => {

    const [categoryItems,setCategoryItems] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const categoryData = await axios.get("/api/categories");
                setCategoryItems(categoryData.data.categories);
            }catch (error){
                console.log(error);
            }
        })();
    },[]);

    return(
        <categoriesContext.Provider value={{categoryItems}}>
            {children}
        </categoriesContext.Provider>
    );
};
const useCategories = () => useContext(categoriesContext);

export {useCategories,CategoryProvider} ;