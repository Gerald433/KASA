import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
import Apropos from "./pages/Apropos/Apropos";
import Home from "./pages/Home/Home";
import Card from "./pages/Card/Card";
import "./assets/css/reset.css";
import "./assets/css/general.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/card/:cardId" element={<Card />} />
      <Route path="/a-propos" element={<Apropos />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

reportWebVitals();
