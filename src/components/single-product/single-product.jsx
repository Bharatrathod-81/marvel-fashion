import "./single-product.css";


const SingleProductFunc = ({data}) => {

    return(
        <div className="cards">
            <div>
            <img className="card-Img" src={data.image}/>
            <button className="heart-Btn">&#10084;</button>
            </div>
            <div className="card-text">
                <p className="card-name">{data.categoryName}</p>
                <small>{data.model}</small>
                <small>{data.inStock? "Instock":"Out of stock"}</small>
                <small>{data.fastDelivery? "Fast Delivery":"Normal Delivery"}</small>
                <small>Rating {data.rating}</small>
                <p className="product-price">₹{data.price}</p>
                <button className="card-Btn">Add to Cart</button>
            </div>
        </div>
    );
};

export { SingleProductFunc } ;