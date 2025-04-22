import { Route, Routes } from "react-router-dom";
import React from "react";
import Products from "../Pages/Products/Products";
import ProductByID from "../Pages/ProductBYID/ProductBYID";


export const RootRouter = () => (
    <Routes>
        <Route path={'/'} element={<Products/>} />
        <Route path="/product/:id" element={<ProductByID/>} />
        <Route path='*' element={<h2>Ресурс не найден!</h2>} />
    </Routes>
);