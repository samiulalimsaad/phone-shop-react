import React from "react";

const Product = ({ product, addToSelectedProduct }) => {
    return (
        <div className="relative h-full border rounded-md border-slate-500">
            <div className="flex items-center justify-center my-4 transition-transform duration-300 hover:scale-110">
                <img src={product.image} alt={product.phone_name} />
            </div>
            <div className="p-2 my-2 mb-14">
                <h2 className="text-2xl">{product.phone_name}</h2>
                <p>
                    Price: <span className="font-medium">${product.price}</span>
                </p>
            </div>
            <button
                className="absolute bottom-0 flex items-center justify-center w-full py-2 text-white transition-colors duration-300 bg-blue-500 hover:bg-cyan-500"
                onClick={() => {
                    addToSelectedProduct(product);
                }}
            >
                add to cart{" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Product;
