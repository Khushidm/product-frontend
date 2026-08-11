import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/EditProduct";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <main>
                <Routes>

                    {/* Home Page */}
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    {/* All Products */}
                    <Route
                        path="/products"
                        element={<Products />}
                    />

                    {/* Create Product */}
                    <Route
                        path="/products/create"
                        element={<CreateProduct />}
                    />

                    {/* View Single Product */}
                    <Route
                        path="/products/:id"
                        element={<ProductDetails />}
                    />

                    {/* Edit Product */}
                    <Route
                        path="/products/:id/edit"
                        element={<EditProduct />}
                    />

                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;