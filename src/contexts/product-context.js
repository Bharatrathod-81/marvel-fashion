import { useContext, createContext, useEffect, useState} from "react";
import axios from "axios";

const productContext = createContext();

const ProductContextProvider  = ({ children }) => {

    const [productList, setProductList] = useState([{}]);

    useEffect(() => {
        (async () => {
            try{
                const response = await axios.get("/api/products");
                setProductList(response.data.products);
            }
            catch(error){
                console.log(error);
            };
        })();
    },[]);


    return(
        <productContext.Provider value={{ productList }}>
            { children }
        </productContext.Provider>
    );
};

const useProductList = () => useContext(productContext);

export { useProductList,ProductContextProvider} ;