import React from "react";

import "./scss/app.scss";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Cart } from "./pages/Cart";

// import Skeleton from "./components/PizzaBlock/skeleton";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/cart.html" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
