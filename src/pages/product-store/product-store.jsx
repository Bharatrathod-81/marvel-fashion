import "./product-store.css";
import Filter from "../../components/filter/filter";
import { RendingProducts } from "../../components/product-listing/productListing";



const ProductStore = () => {


    return (
        <div className="productMain-container">
            <Filter />
            <RendingProducts />
        </div>
    );
};

export default ProductStore;