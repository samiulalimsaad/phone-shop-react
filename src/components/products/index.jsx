import React from "react";
import Product from "./product";

const Products = ({ products }) => {
    console.log(products);
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {products?.map((product) => (
                <Product key={product.slug} product={product} />
            ))}
        </div>
    );
};

export default Products;
