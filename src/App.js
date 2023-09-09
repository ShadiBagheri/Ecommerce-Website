import React from 'react';
import { Routes, Route } from "react-router-dom";
//Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import { HomeData } from "./components/HomeData";


const App = () => {
    return (
        <>
            <Nav/>
            <Routes>
                <Route  path="/" element={<Home HomeData={HomeData} />}/>
            </Routes>
        </>
    );
};

export default App;

// https://github.com/ShadiBagheri/Ecommerce-Website.git