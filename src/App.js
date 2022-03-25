import { useEffect } from "react";
import Product from "./components/products/product";
import SelectedItem from "./components/selectedItem";

function App() {
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/phones?search=samsung`)
            .then((res) => res.json())
            .then((data) => console.log(data?.data))
            .catch((e) => console.log(e.message));
    }, []);

    return (
        <div>
            <h1 className="py-4 text-4xl font-semibold text-center text-white bg-blue-500">
                Phone Shop
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-4">
                <div className="col-span-2 sm:col-span-3">
                    <Product />
                </div>
                <div className="col-span-1">
                    <SelectedItem />
                </div>
            </div>
        </div>
    );
}

export default App;
