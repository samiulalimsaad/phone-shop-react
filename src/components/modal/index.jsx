import React from "react";

const Modal = ({ selectedProducts, length, selectOne, closeModal }) => {
    return (
        <div className="absolute inset-0 backdrop-blur-[1px] bg-transparent z-[51] overflow-y-auto h-screen w-screen flex items-center justify-center">
            <div className="relative w-2/3 bg-white border rounded h-2/3 border-slate-600/50">
                <button
                    className="absolute right-2 top-2 text-slate-500"
                    onClick={() => closeModal(false)}
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {selectOne?.slug && (
                    <div className="flex items-center justify-center w-full h-full py-4 space-x-4 text-4xl text-center">
                        <div className="flex items-center justify-center my-4 transition-transform duration-300 hover:scale-110">
                            <img
                                src={selectOne.image}
                                alt={selectOne.phone_name}
                            />
                        </div>
                        <div className="p-2 my-2 mb-14">
                            <h2 className="text-2xl">{selectOne.phone_name}</h2>
                            <p>
                                Price:{" "}
                                <span className="font-medium">
                                    ${selectOne.price}
                                </span>
                            </p>
                        </div>
                    </div>
                )}

                {length && (
                    <div className="flex items-center justify-center w-full h-full py-4 text-4xl text-center">
                        You can add only 4 items in the cart
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
