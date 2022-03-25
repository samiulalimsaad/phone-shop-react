import { useEffect, useState } from "react";
import Products from "./components/products";
import SelectedItem from "./components/selectedItem";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/phones?search=samsung`)
            .then((res) => res.json())
            .then((data) => setProducts(data?.data))
            .catch((e) => console.log(e.message));
    }, []);

    return (
        <div>
            <h1 className="sticky top-0 z-50 py-4 text-4xl font-semibold text-center text-white bg-blue-500">
                Phone Shop
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-4">
                <div className="container col-span-2 px-10 my-5 sm:col-span-3">
                    <Products products={products} />
                </div>
                <div className="sticky col-span-1 top-5 bg-cyan-200">
                    <SelectedItem />
                </div>
            </div>
        </div>
    );
}

export default App;
