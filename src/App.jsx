import { useEffect, useState } from "react";
import Modal from "./components/modal";
import Products from "./components/products";
import QnA from "./components/QnA";
import SelectedItem from "./components/selectedItem";

function App() {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showModal, setModal] = useState(false);
    const [selectOne, setSelectOne] = useState({});

    useEffect(() => {
        fetch(`/products.json`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((e) => console.error(e.message));
    }, []);

    const addToSelectedProduct = (prod) => {
        if (selectedProducts.length < 4) {
            setSelectedProducts((p) => [...p, prod]);
        } else {
            setSelectOne({});
            setModal(true);
        }
    };

    const removeFromSelectedProduct = (slug) => {
        const temp = selectedProducts.filter((p) => p.slug !== slug);
        setSelectedProducts(temp);
    };

    const clearSelectedProduct = () => {
        setSelectedProducts([]);
    };

    const selectOneFromSelectedProduct = () => {
        const temp = Math.round(Math.random() * selectedProducts?.length);
        setSelectOne(selectedProducts[temp]);
        setModal(true);
    };

    return (
        <div>
            <h1 className="sticky top-0 z-50 py-4 text-4xl font-semibold text-center text-white bg-blue-500">
                Phone Shop
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
                <div className="container h-[85vh] col-span-1 sm:col-span-2 px-10 my-5 overflow-y-scroll md:col-span-3">
                    <Products
                        products={products}
                        addToSelectedProduct={addToSelectedProduct}
                    />
                    <hr className="my-14 border-slate-500" />
                    <QnA />
                </div>
                <div className="h-full col-span-1 bg-cyan-200">
                    <SelectedItem
                        selectedProducts={selectedProducts}
                        removeFromSelectedProduct={removeFromSelectedProduct}
                        clearSelectedProduct={clearSelectedProduct}
                        selectOneFromSelectedProduct={
                            selectOneFromSelectedProduct
                        }
                    />
                </div>
            </div>
            {showModal && (
                <Modal
                    selectedProducts={selectedProducts}
                    length={selectedProducts.length >= 4}
                    selectOne={selectOne}
                    closeModal={setModal}
                />
            )}
        </div>
    );
}

export default App;
