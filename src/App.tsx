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
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/korzina" element={<CartPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes> */}

        <Routes>
          <Route path="/Products" element={<HomePage />}></Route>
          <Route path="/Products/cart" element={<CartPage />}></Route>
          <Route path="/Products/*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
