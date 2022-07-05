import "./product-store.css";
import Filter from "../../components/filter/filter";
import { RendingProducts } from "../../components/product-listing/productListing";
import { useState } from "react";



const ProductStore = () => {

    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <div className="productMain-container">
            <Filter func={{showSideBar}}/>
            <RendingProducts func={{setShowSideBar}}/>
        </div>
    );
};

export default ProductStore;