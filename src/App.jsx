import { useEffect, useState } from "react";
import Products from "./components/products";
import SelectedItem from "./components/selectedItem";

function App() {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        fetch(`/products.json`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((e) => console.log(e.message));
    }, []);

    console.log({ products });

    const addToSelectedProduct = (prod) => {
        setSelectedProducts((p) => [...p, prod]);
    };

    const removeFromSelectedProduct = (slug) => {
        const temp = selectedProducts.filter((p) => p.slug !== slug);
        setSelectedProducts(temp);
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
                </div>
                <div className="h-full col-span-1 bg-cyan-200">
                    <SelectedItem
                        selectedProducts={selectedProducts}
                        removeFromSelectedProduct={removeFromSelectedProduct}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
