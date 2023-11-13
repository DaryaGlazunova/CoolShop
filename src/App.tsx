import React from "react";

import { Header } from "./components/header";
import HomePage from "./pages/home";
import { CartPage } from "./pages/cart";
import { Routes, Route } from "react-router-dom";

import { NotFound } from "./pages/not-found";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
