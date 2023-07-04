import { Link, NavLink } from "react-router-dom";

import React from "react";
import {
  FaChartBar,
  FaChevronRight,
  FaCalendarAlt,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaCar,
} from "react-icons/fa";
import profile from "../assets/Admin.png";

const Sidebar = () => {
  return (
    <div className="bg-primary h-screen px-4 ">
      <div className="flex flex-col items-center relative pt-5">
        <div className="h-[100px] w-[100px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative">
          <img
            src={profile}
            alt=""
            className="h-[100px] w-[100px] rounded-full"
          />
        </div>
        <p className="font-semibold text-lg">M E N D</p>
        <span className="text-sm font-semi">CARGO ADMIN</span>
      </div>

      <NavLink to="/">
        <div className="flex items-center gap-4 pt-5 ">
          <FaChartBar color="white" />
          <p className="text-base leading-6 font-bold text-white">Dashboard</p>
        </div>
      </NavLink>

      <div>
        <Link to="user">
          <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
            <div className="flex items-center gap-4">
              <FaCar className="text-white " />
              <p className="text-base leading-6 font-normal text-white">
                Car information
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-between gap-4  cursor-pointer">
        <NavLink to="/reservations">
          <div className="flex items-center gap-4">
            <FaCalendarAlt className="text-white" />
            <p className="text-base leading-6 font-normal text-white">
              Reservations
            </p>
          </div>
        </NavLink>
      </div>

      <div className="pt-4 border-b border-gray-300/30">
        <div className="flex items-center justify-between gap-4  cursor-pointer">
          <div className="flex items-center gap-4">
            <FaStickyNote className="text-white" />
            <p className="text-base leading-6 font-normal text-white">Pages</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
          <div className="flex items-center gap-4">
            <FaRegChartBar className="text-white" />
            <p className="text-base leading-6 font-normal text-white">Charts</p>
          </div>
          <FaChevronRight className="text-white" />
        </div>
        <div className="flex items-center gap-4 py-4">
          <FaRegCalendarAlt className="text-white" />
          <p className="text-base leading-6 font-normal text-white">Tables</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
