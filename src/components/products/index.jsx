import React from "react";
import Product from "./product";

const Products = ({ products, addToSelectedProduct }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products?.map((product) => (
                <Product
                    key={product.slug}
                    product={product}
                    addToSelectedProduct={addToSelectedProduct}
                />
            ))}
        </div>
    );
};

export default Products;
