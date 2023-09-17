import React,{ useState } from 'react';
import { Routes, Route } from "react-router-dom";
//Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { HomeData } from "./components/HomeData";
import { ProductData } from "./components/ProductData";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



const App = () => {

    const [product, setProduct] = useState(ProductData);
    const [detail, setDetail] = useState([]);
    const [close, setClose] = useState(false);
    const [cart, setCart] = useState([]);

    const searchBtn = (product) => {
        const change = ProductData.filter(x => x.Cat === product);
        setProduct(change);
    }
    const view = (product) => {
        setDetail([{...product}])
        setClose(true)
    }
    const addToCart = (product) => {
        const exist = cart.find(x => x.id === product.id);
        if (exist){
            alert("This Product Is Already Added To Cart");
        } else {
            setCart([...cart, {...product, quantity: 1}]);
            alert("Product Is Added To Cart");
        }
    }

    return (
        <>
            <Nav searchBtn={searchBtn}/>
            <Routes>
                <Route  path="/" element={<Home HomeData={HomeData} detail={detail} view={view} close={close} setClose={setClose} addToCart={addToCart}/>}/>
                <Route  path="/product" element={<Product ProductData={ProductData}
                        product={product} setProduct={setProduct} detail={detail}
                        view={view} close={close} setClose={setClose} cart={cart}
                        setCart={setCart} addToCart={addToCart}/>}/>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;
