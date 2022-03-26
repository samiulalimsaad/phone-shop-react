import React from "react";

const SelectedItem = ({ selectedProducts, removeFromSelectedProduct }) => {
    return (
        <div className="">
            <h2 className="p-2 font-semibold text-center sm:text-2xl">
                Selected Item Page
            </h2>
            <hr className="my-4 border-slate-500" />

            <div>
                {selectedProducts?.map((product) => (
                    <div
                        key={product.slug}
                        className="grid items-center grid-cols-3 px-2 my-4 space-x-2"
                    >
                        <div className="flex col-span-2 space-x-2">
                            <img
                                src={product.image}
                                alt={product.phone_name}
                                className="w-8 h-8 rounded-full"
                            />
                            <h2 className="text-2xl">{product.phone_name}</h2>
                        </div>
                        <div>
                            <button
                                className="p-2 text-white rounded-full bg-slate-500 hover:bg-slate-900"
                                onClick={() =>
                                    removeFromSelectedProduct(product.slug)
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="my-4 border-slate-500" />
            <div className="p-2">
                <div>
                    <button className="w-full py-4 my-4 border border-green-500 rounded-md hover:bg-green-500 hover:text-white">
                        Choose 1
                    </button>
                </div>
                <div>
                    <button className="w-full py-4 mb-4 border border-red-500 rounded-md hover:bg-red-500 hover:text-white">
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectedItem;
