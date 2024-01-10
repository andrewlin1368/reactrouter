import { useState } from "react";
import "./App.css";
import Blue from "./components/blue";
import Red from "./components/red";
import Header from "./components/header";
import Error from "./components/error";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/red" element={<Red></Red>}></Route>
          <Route path="/blue" element={<Blue></Blue>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
