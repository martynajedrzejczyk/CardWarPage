import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Collabs from "./pages/Collabs";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import CustomerService from "./pages/CustomerService";
import ProductView from "./pages/ProductView";
import Contact from "./pages/Contact";

function App() {
    const [cart, setCart] = useState([]); // [ { product, quantity } ]
    const [productId, setProductId] = useState("");
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="collabs" element={<Collabs />} />
                    <Route path="products" element={<Products />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="cart" element={<Cart />} />
                    <Route
                        path="customerService"
                        element={<CustomerService />}
                    />
                    <Route
                        path="productView"
                        element={<ProductView productId="" />}
                    />
                    <Route path="contact" element={<Contact />} />

                    {/* TODO - download (trials, drivers, patches, manuals, etc.),  */}
                    {/* TODO – materiały przeznaczone dla przedstawicieli mediów */}
                    {/* TODO  materiały investor-relations. */}
                </Route>
            </Routes>
        </>
    );
}

export default App;
