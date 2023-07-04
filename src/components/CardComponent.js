import React from "react";
import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";

const CardComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6 pb-4">
      {/* First Card */}
      <div className="h-[100px] rounded-lg bg-white border-l-4 border-blue-600 flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
        <div>
          <h2 className="text-purple-500 text-xs leading-4 font-bold">
            EARNINGS (MONTHLY)
          </h2>
          <h1 className="text-md leading-6 font-bold text-gray-600 mt-1">
            $40,000
          </h1>
        </div>
        <FaRegCalendarMinus className="text-3xl" color="" />
      </div>
      {/* End of First Card */}

      {/* Second Card */}
      <div className="h-[100px] rounded-lg bg-white border-l-4 border-blue-600 flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
        <div>
          <h2 className="text-lime-500 text-xs leading-4 font-bold">
            PENDING RESERVATIONS
          </h2>
          <h1 className="text-md leading-6 font-bold text-gray-600 mt-1">
            30 Tasks
          </h1>
        </div>
        <FaRegCalendarMinus className="text-3xl" color="" />
      </div>
      {/* End of Second Card */}

      {/* Third Card */}
      <div className="h-[100px] rounded-lg bg-white border-l-4 border-blue-600 flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
        <div>
          <h2 className="text-purple-500 text-xs leading-4 font-bold">
            ACTIVE BOOKING
          </h2>
          <h1 className="text-md leading-6 font-bold text-gray-600 mt-1">
            24 Tasks
          </h1>
        </div>
        <FaRegCalendarMinus className="text-3xl" color="" />
      </div>
      {/* End of Third Card */}

      {/* Fourth Card */}
      <div className="h-[100px] rounded-lg bg-white border-l-4 border-blue-600 flex items-center justify-between px-7 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
        <div>
          <h2 className="text-lime-500 text-xs leading-4 font-bold">
            COMPLETED RESERVATION
          </h2>
          <h1 className="text-md leading-6 font-bold text-gray-600 mt-1">
            100
          </h1>
        </div>
        <FaRegCalendarMinus className="text-3xl" color="" />
      </div>
      {/* End of Fourth Card */}
    </div>
  );
};

export default CardComponent;
