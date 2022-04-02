import { useContext, createContext, useReducer } from "react";

const productListContext = createContext();


const FilteredProductProvider = ({ children }) => {


    const productFilterFunc = (state,action) => {

        switch(action.type) {
            case "SORT_PRICE":
                return{...state,sort:action.payload};
            case "FILTER_BY_PRICE":
                return{...state,initialPrice:action.payload};
            case "FILTER_BY_DELIVERY":
                return{...state,fastDelivery:action.payload};
            case "FILTER_BY_RATING":
                return{...state,initialRating:action.payload};
            case "FILTER_BY_STOCK":
                return{...state,inStock:action.payload};
            case "FILTER_BY_CATEGORY":
                if (!state.category.includes(...action.payload)){
                    return{...state,category:[...state.category,...action.payload]};    
                }else{
                    const array = state.category.filter(item => item !== action.payload[0]);
                    return {...state,category:array};
                };
            case "SEARCH_QUERY":
                return{...state,searchQuery:action.payload};
            case "CLEAR_DATA":
                return{
                    sort:null,
                    category:[],
                    searchQuery:null,
                    initialPrice:0,
                    initialRating:0,
                    fastDelivery:false,
                    inStock:false
                };
            default:
                return state;          
        };
    };
    

    const [ productState, dispatchProductState ] = useReducer(productFilterFunc,{
        sort:null,
        category:[],
        searchQuery:null,
        initialPrice:0,
        initialRating:0,
        fastDelivery:false,
        inStock:false
    });

    return(
        <productListContext.Provider value={{ productState, dispatchProductState }}>
            { children }
        </productListContext.Provider>
    );
};

const useFilteredProduct = () => useContext(productListContext);

export { FilteredProductProvider, useFilteredProduct };