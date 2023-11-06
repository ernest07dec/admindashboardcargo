import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

export const ReservationsDetails = () => {
  const reservationID = window.location.pathname.split("/")[2];
  const [reservationDetails, setReservationDetails] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [carDetails, setCarDetails] = useState({});
  const [paid, setPaid] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://cargo-bq9d.onrender.com/reservation/retrieveAll";
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
        setReservationDetails(
          data.filter((el) => {
            return el._id === reservationID;
          })[0]
        );
        const userID = await data.filter((el) => {
          return el._id === reservationID;
        })[0].userid;
        const carID = await data.filter((el) => {
          return el._id === reservationID;
        })[0].carid;
        const fetchUserData = async (userID) => {
          // console.log(userID);
          const url = "https://cargo-bq9d.onrender.com/user/retrieve/" + userID;
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
            setUserDetails(data);
            const fetchCarrData = async (carID) => {
              // console.log(userID);
              const url =
                "https://cargo-bq9d.onrender.com/car/retrieve/" + carID;
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
                setCarDetails(data);
                // console.log(data);
              } catch (error) {
                console.log("error", error);
              }
            };
            fetchCarrData(carID);
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchUserData(userID);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async (status) => {
    try {
      let url =
        "https://cargo-bq9d.onrender.com/reservation/update/" + reservationID;
      let method = "PUT";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.7FsnIbm2Zks_9G_4oGACqrbyMkIOGlC-5k7BCQFKFn0",
        },
        body: JSON.stringify({
          set: {
            paymentstatus: status,
          },
        }),
      });
      if (res.ok) {
        alert("Reservation Updated Successfully");
      } else {
        console.log("Error updating data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const handleApprove = async () => {
    handleUpdate("Approved");
  };
  const handleCancel = async (e) => {
    handleUpdate("Cancelled");
  };
  const handlePaid = async (e) => {
    setPaid(e.target.value);
  };
  const handleUpdatePayment = async () => {
    try {
      let url =
        "https://cargo-bq9d.onrender.com/reservation/update/" + reservationID;
      let method = "PUT";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.7FsnIbm2Zks_9G_4oGACqrbyMkIOGlC-5k7BCQFKFn0",
        },
        body: JSON.stringify({
          set: {
            totalpaid: paid,
          },
        }),
      });
      if (res.ok) {
        alert("Reservation Updated Successfully");
      } else {
        console.log("Error updating data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="basis-[14%]">
          <Sidebar />
        </div>
        <div className="flex flex-col  basis-[86%]   px-20 pt-5">
          <h2 className="text-2xl font-bold">Customer Details</h2>

          <div className="grid grid-cols-3  py-2">
            <div className="flex ">
              <p className="font-bold pr-2">Name: </p>
              <p>{userDetails.firstname + " " + userDetails.lastname}</p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2">Mobile: </p>
              <p>{userDetails.phonenumber}</p>
            </div>
            <div className="flex ">
              <p className="font-bold pr-2">Age: </p>
              <p>{userDetails.age} years old</p>
            </div>
          </div>

          <div className="grid  grid-cols-3 py-2">
            <div className="flex">
              <p className="font-bold pr-2">Nationality: </p>
              <p>{userDetails.nationality}</p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2">Gender: </p>
              <p>{userDetails.gender}</p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2">Email: </p>
              <p>{userDetails.email}</p>
            </div>
          </div>

          <div className="grid  grid-cols-3 py-2">
            <div className="flex">
              <p className="font-bold pr-2">Birthdate: </p>
              <p>
                {userDetails.birthday ? userDetails.birthday.slice(0, 10) : " "}
              </p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2">Address: </p>
              <p>
                {userDetails.street +
                  " " +
                  userDetails.city +
                  " " +
                  userDetails.firstname}
              </p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2">CivilStatus: </p>
              <p>{userDetails.maritalstatus}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold pt-6">Booking Details</h2>

          <div className="grid grid-cols-3 py-2">
            <div className="flex ">
              <p className="font-bold pr-2">Booking ID:: </p>
              <p>{reservationDetails._id}</p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2">Car Type: </p>
              <p>{reservationDetails.cartype}</p>
            </div>
            <div className="flex ">
              <p className="font-bold pr-2">Driving Preference: </p>
              <p>
                {reservationDetails.hasdriver === "false"
                  ? "Self Drive"
                  : "Has a Driver"}
              </p>
            </div>
          </div>

          <div className="grid  grid-cols-3 py-2">
            <div className="flex">
              <p className="font-bold pr-2">Unit: </p>
              <p> {carDetails._id}</p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2">Pick-Up Date: </p>
              <p>
                {reservationDetails.datetimestart
                  ? reservationDetails.datetimestart.slice(0, 10)
                  : reservationDetails.datetimestart}
              </p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2">Return Date: </p>
              <p>
                {reservationDetails.datetimefinish
                  ? reservationDetails.datetimefinish.slice(0, 10)
                  : reservationDetails.datetimefinish}
              </p>
            </div>
          </div>

          <div className="grid  grid-cols-3 py-2">
            <div className="flex">
              <p className="font-bold pr-2">Name: </p>
              <p>{carDetails.carname}</p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2">Daily Price: </p>
              <p>Php {carDetails.initialrateperday}</p>
            </div>
            <div className="flex">
              <p className="font-bold pr-2">CarGo Protect: </p>
              <p>{reservationDetails.insurance}</p>
            </div>
          </div>
          <div>
            <div className="pt-2 flex">
              <p className="font-bold pr-2">Total Days: </p>
              <p>
                {(Date.parse(reservationDetails.datetimefinish) -
                  Date.parse(reservationDetails.datetimestart)) /
                  86400000 +
                  1}{" "}
                Days
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-end mt-4">
            <div className="">
              <label className=" text-sm font-medium text-gray-700">
                Payment
              </label>
              <input
                type="number"
                id="username"
                className="mt-1   focus:ring-indigo-500 focus:border-indigo-500 py-1 border-indigo-200 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Input Payment"
                onChange={handlePaid}
              />
            </div>
            <div
              onClick={handleUpdatePayment}
              className="mr-5  py-2 px-8 bg-button rounded-lg"
            >
              Update Payment
            </div>
            <div
              onClick={handleApprove}
              className="mr-5  py-2 px-8 bg-button rounded-lg"
            >
              Approve
            </div>
            <div
              onClick={handleCancel}
              className="py-2 px-8 bg-button rounded-lg"
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
