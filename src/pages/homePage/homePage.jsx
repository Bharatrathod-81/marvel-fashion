import "./homePage.css";
import "../../App.css"
import React from "react";
import { useCategories } from "../../contexts/categoryContext";
import { Link } from "react-router-dom";
import { useFilteredProduct } from "../../contexts/filter-product-Context";

const Home = () => {

  const { dispatchProductState } = useFilteredProduct();

  const { categoryItems} = useCategories();
    return(
      <div>
        <div className="top-container">
          {categoryItems.map(({categoryName,image}) => {
            return(
                 <Link to="products">
                  <div 
                  className="top-contains"
                  onClick={() => dispatchProductState({type:"FILTER_BY_CATEGORY", payload : categoryName})}
                   >
                      <img className="topContain-Img" src={image}/>
                      <p className="topContain-text">{categoryName}</p>
                  </div>
                 </Link> 
            );
          })}
        </div>
        <div className="bottom-container">
            <div className="heading-text">
                <h2>Best sale</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a className="shop-btn" href="/">Shop Now</a>
            </div>
            <img className="bottomContain-Img" src="./images/project-product1.jpg" alt="img"/>
        </div>
      </div>
    );

};

export default Home ;