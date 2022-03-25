import React from "react";

const Product = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt="" />
            <h2>{product.phone_name}</h2>
            <button className="bg-blue-600 w-full text-white">add to cart</button>
        </div>
    );
};

export default Product;
