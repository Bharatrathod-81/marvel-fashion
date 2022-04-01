import "./filter.css";
import { useProductList } from "../../contexts/product-context";
import { useCategories } from "../../contexts/categoryContext";
import { useFilteredProduct } from "../../contexts/filter-product-Context";
import { useState } from "react";

const Filter = () => {
    const { categoryItems } = useCategories();

    const { productList } = useProductList();
    const maxPrice = productList.reduce((acc,cur) => cur.price>acc.price? cur:acc);
    const minPrice = productList.reduce((acc,cur) => cur.price>acc.price? acc:cur);

    const [ price, setPrice] = useState(minPrice.price);

    const { productState:{sort, category, fastDelivery, inStock, initialRating},
    dispatchProductState } = useFilteredProduct();

    return(
        <div className="side-bar">
            <div className="heading">
                <h3>Filters</h3>
                <button 
                className="clear-btn btn"
                onClick={() => dispatchProductState({type:"CLEAR_DATA"})}
                >Clear</button>
            </div>
            <div className="slidebar">
                <h3>Price</h3>
                <div className="slide-input">
                    <div>₹{price}</div>
                    <div>₹{maxPrice.price}</div>
                </div>
                <input 
                className="range-input" 
                type="range" 
                min={minPrice.price}
                max={maxPrice.price}
                onChange={event => {
                dispatchProductState({type:"FILTER_BY_PRICE",payload:event.target.value})
                setPrice(event.target.value)}}
                />
            </div>
            <div className="Category-container">
                <h3>Category</h3>
                
                {categoryItems.map(({categoryName}) => 
                    <div className="category-block">
                        <input 
                        className="checkbox-input" 
                        type="checkbox"
                        key={categoryName}
                        checked={category.includes(categoryName)}
                        onClick={() => dispatchProductState({type:"FILTER_BY_CATEGORY",payload:[categoryName]})}
                        />
                        <p>{categoryName}</p>
                    </div>
                )}
            </div>
            <div className="availability-bar">
                <h3>Availability</h3>

                <div className="category-block">
                    <input 
                    className="availability-input" 
                    type="checkbox"
                    checked={inStock}
                    onClick={() => dispatchProductState({type:"FILTER_BY_STOCK",payload:!inStock})}/>
                    <p>Instcok</p>
                </div>

                <div className="category-block ">
                    <input 
                    className="availability-input" 
                    type="checkbox"
                    checked={fastDelivery}
                    onClick={() => dispatchProductState({type:"FILTER_BY_DELIVERY",payload:!fastDelivery})}/>
                    <p>Fast Delivery</p>
                </div>

            </div>
            <div className="rating-bar">
                <h3>Rating</h3>

                <input 
                className="rating-input"  
                type="radio"
                checked={initialRating===4}
                onClick={() => dispatchProductState({type:"FILTER_BY_RATING",payload:4})}/>
                <label for="rating-input">4 Stars & above</label><br/>

                <input 
                className="rating-input" 
                type="radio"
                checked={initialRating===3}
                onClick={() => dispatchProductState({type:"FILTER_BY_RATING",payload:3})}/>
                <label for="rating-input">3 Stars & above</label><br/>

                <input 
                className="rating-input" 
                type="radio"
                checked={initialRating===2}
                onClick={() => dispatchProductState({type:"FILTER_BY_RATING",payload:2})}/>
                <label for="rating-input">2 Stars & above</label><br/>

                <input 
                className="rating-input" 
                type="radio"
                checked={initialRating===1}
                onClick={() => dispatchProductState({type:"FILTER_BY_RATING",payload:1})}/>
                <label for="rating-input">1 Stars & above</label>
                
            </div>
            <div className="shortng-bar">
                <h3>Short by</h3>

                <input 
                className="short-input" 
                name="short-input" 
                type="radio"
                checked={sort === "LOW_TO_HIGH"}
                onClick={() => dispatchProductState({type:"SORT_PRICE",payload:"LOW_TO_HIGH"})}
                />
                <label for="short-input">Price-Low to High</label><br/>

                <input 
                className="short-input" 
                name="short-input" 
                type="radio"
                checked={sort === "HIGH_TO_LOW"}
                onClick={() => dispatchProductState({type:"SORT_PRICE",payload:"HIGH_TO_LOW"})}
                />
                <label for="short-input">Price-Low to Low</label><br/>
            </div>
        </div>
    );
};

export default Filter ;