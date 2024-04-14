import React from "react";
import Nav from "./components/Nav";
import Addnewdata from "../src/pages/Addnewdata";
import Edit from "../src/pages/Edit";
import Home from "../src/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/Addnewdata" element={<Addnewdata />} />
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
