import "./homePage.css";
import "../../App.css"
import React from "react";
import { useCategories } from "../../contexts/categoryContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { categoryItems} = useCategories();
    return(
      <div>
        <div class="top-container">
          {categoryItems.map(({categoryName,image}) => {
            return(
              <div class="top-contains">
                  <img class="topContain-Img" src={image}/>
                  <p class="topContain-text">{categoryName}</p>
              </div>
            );
          })}
        </div>
        <div class="bottom-container">
            <div class="heading-text">
                <h2>Best sale</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a class="shop-btn" href="/Product-Listing-Page/Listing-page.html">Shop Now</a>
            </div>
            <img class="bottomContain-Img" src="./images/project-product1.jpg" alt="img"/>
        </div>
      </div>
    );

};

export default Home ;