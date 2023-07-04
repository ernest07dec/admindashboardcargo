import React from "react";
import { Link } from "react-router-dom";

export const ReservationCard = ({ reservation }) => {
  const detailsLink = "/reservationsdetails/";
  return (
    <div>
      <div className="grid grid-cols-6 justify-center   border-b border-solid border-gray-500 py-2">
        <div>
          <Link to={detailsLink + reservation._id}>
            <p className="text-primary font-semibold">{reservation._id}</p>
          </Link>
        </div>
        <div>
          <p>{reservation.date}</p>
        </div>
        <div>
          <p>{reservation.userid}</p>
        </div>
        <div>
          <p>{reservation.paymentstatus}</p>
        </div>
        <div>
          <p>{reservation.datetimestart}</p>
        </div>
        <div>
          <p>{reservation.datetimefinish}</p>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
