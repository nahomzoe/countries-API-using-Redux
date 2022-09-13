import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import CountriesList from "./components/CountriesList";
import SingleCountry from "./components/SingleCountry";
import FavList from "./components/FavList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countriesList" element={<CountriesList />} />
          <Route path="countriesList/:id" element={<SingleCountry />} />
          <Route path="favList" element={<FavList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
