import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import ReservationCard from "../components/ReservationCard";

export const Reservations = () => {
  const [allUserReservations, setAllUserReservations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://cargo-bq9d.onrender.com/reservation/retrieveAll/";
      const method = "GET";
      const header = {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.7FsnIbm2Zks_9G_4oGACqrbyMkIOGlC-5k7BCQFKFn0",
      };
      try {
        const response = await fetch(url, {
          method,
          headers: header,
        });
        const data = await response.json();
        const allReservations = await data;
        setAllUserReservations(allReservations.reverse());
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(allUserReservations);
  return (
    <div>
      <div className="flex">
        <div className="basis-[14%]">
          <Sidebar />
        </div>
        <div className="flex flex-col  basis-[86%]   px-20 pt-20">
          <h2 className="text-xl font-bold">Reservation Record</h2>
          <div className="flex gap-5">
            <div className="flex flex-col">
              <label htmlFor="customer" className="py-2 font-semibold">
                Customer
              </label>
              <input
                type="text"
                id="customer"
                placeholder="Enter Customer name"
                className="border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="booking" className="py-2 font-semibold">
                Booking ID
              </label>
              <input
                type="text"
                id="booking"
                placeholder="Enter Booking ID"
                className="border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="status" className="py-2 font-semibold">
                Status
              </label>
              <input
                type="text"
                id="status"
                placeholder="Status"
                className="border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 font-bold border-b border-solid border-gray-500 py-2">
            <div>
              <p>Booking ID</p>
            </div>
            <div>
              <p>Date</p>
            </div>
            <div>
              <p>Customer</p>
            </div>
            <div>
              <p>Status</p>
            </div>
            <div>
              <p>Pick-Up Date</p>
            </div>
            <div>
              <p>Return Date</p>
            </div>
          </div>

          {allUserReservations.map((reservation) => {
            return (
              <ReservationCard
                key={Math.floor(Math.random() * 10000000000)}
                reservation={reservation}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
