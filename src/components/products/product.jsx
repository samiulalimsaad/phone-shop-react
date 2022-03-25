import React from "react";

const getPrice = () => Math.round(Math.random() * 1000);

const Product = ({ product }) => {
    return (
        <div className="border rounded-md border-slate-500">
            <div className="flex items-center justify-center my-4 transition-transform duration-300 hover:scale-110">
                <img src={product.image} alt={product.phone_name} />
            </div>
            <div className="p-2">
                <h2>{product.phone_name}</h2>
                <p>
                    Price: <span className="font-medium">${getPrice()}</span>
                </p>
            </div>
            <button className="w-full py-2 text-white transition-colors duration-300 bg-blue-500 hover:bg-cyan-500 ">
                add to cart
            </button>
        </div>
    );
};

export default Product;
