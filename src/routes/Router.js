import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Main from "../components/Main";
import { Reservations, View, ReservationsDetails } from "../Pages";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Main />} />
          </Route>
          <Route path="reservations" element={<Reservations />}></Route>
          <Route path="view" element={<View />}></Route>
          <Route
            path="reservationsdetails/:id"
            element={<ReservationsDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
