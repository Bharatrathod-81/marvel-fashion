import "./productListing.css"
import { useProductList } from "../../contexts/product-context";
import { useFilteredProduct } from "../../contexts/filter-product-Context";
import { SingleProductFunc } from "../../components/single-product/single-product";
import { useWishlistCartContext } from "../../contexts/WishList-Cart";
import { useState } from "react";


const getFilteredProducts = () => {

    const { productList } = useProductList();
    let copyOfProductList = [...productList];

    const { productState: {
        sort,
        category,
        searchQuery,
        initialPrice,
        initialRating,
        fastDelivery,
        inStock } } = useFilteredProduct();

    if (fastDelivery) {
        copyOfProductList = copyOfProductList.filter(({ fastDelivery }) => fastDelivery);
    };

    if (inStock) {
        copyOfProductList = copyOfProductList.filter(({ inStock }) => inStock);
    };

    if (initialPrice) {
        copyOfProductList = copyOfProductList.filter(({ price }) => (initialPrice - 1) < price);
    };

    if (initialRating) {
        copyOfProductList = copyOfProductList.filter(({ rating }) => rating > initialRating);
    };

    if (searchQuery) {
        copyOfProductList = copyOfProductList.filter(({ categoryName }) => categoryName.toLowerCase().includes(searchQuery.toLowerCase()));
    };


    if (category[0] !== undefined) {
        copyOfProductList = copyOfProductList.filter(({ categoryName }) => category.includes(categoryName));
    };

    if (sort) {
        copyOfProductList = copyOfProductList.sort((a, b) => sort === "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price);
    };

    return copyOfProductList;
};

const RendingProducts = ({ func }) => {

    const { setShowSideBar } = func;

    return (
        <div className="productlisting-container">

            <div className="container-heading">
                <h4>Showing All Products {getFilteredProducts().length}</h4>
            </div>

            <div
                onClick={() => setShowSideBar(prev => !prev)}
                className="sideBar-Btn">
                <i class="fa fa-reorder"></i>
            </div>

            <div className="filter-products">
                {getFilteredProducts().map(item => {
                    return (
                        <div key={item.id}>
                            <SingleProductFunc data={item} />
                        </div>
                    );
                })}
            </div>
            
        </div>
    );

};

export { RendingProducts };

