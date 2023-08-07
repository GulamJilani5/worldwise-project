// import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
// import Form "./components/Form";
export default function App() {
  // const [cities, setCities] = useState({}); // If empty object then we will get error in initally applying map method to cities object because it will be empty object not empty array, So we use [].
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = "http://localhost:9000";
  //http://localhost:9000/cities
  useEffect(function () {
    async function fethCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        console.log("API cities data", data);
        setCities(data);
      } catch {
        console.log("There was an error while getting city data");
      } finally {
        setIsLoading(false);
      }
    }
    fethCities();
  }, []);

  return (
    <div>
      <h1> World wise project</h1>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            {/* Index route is default route */}
            {/* <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            /> */}

            {/* Navigate component is more like a redirect to certain path */}
            <Route index element={<Navigate replace to="cities" />} />

            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            {/* // <Route path="form" element={<Form />} /> */}
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
