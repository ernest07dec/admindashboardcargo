import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
import PieComponent from "./PieComponent";
import CardComponent from "./CardComponent";
import ProjectOverviewComponent from "./ProjectOverviewComponent";

const data = [
  {
    name: "January",
    uv: Math.floor(Math.random() * 100 + 150),
    pv: Math.floor(Math.random() * 100 + 50),
    amt: 2400,
  },
  {
    name: "February",
    uv: Math.floor(Math.random() * 100 + 150),
    pv: Math.floor(Math.random() * 100 + 50),
    amt: 2210,
  },
  {
    name: "March",
    uv: Math.floor(Math.random() * 100 + 150),
    pv: Math.floor(Math.random() * 100 + 50),
    amt: 2290,
  },
  {
    name: "April",
    uv: Math.floor(Math.random() * 100 + 150),
    pv: Math.floor(Math.random() * 100 + 50),
    amt: 2000,
  },
  {
    name: "May",
    uv: Math.floor(Math.random() * 100 + 150),
    pv: Math.floor(Math.random() * 100 + 50),
    amt: 2181,
  },
  {
    name: "June",
    uv: Math.floor(Math.random() * 100 + 150),
    pv: Math.floor(Math.random() * 100 + 50),
    amt: 2500,
  },
  {
    name: "July",
    uv: 100,
    pv: 50,
    amt: 2100,
  },
];

const Main = () => {
  return (
    /* Dashboard and generate Report Section */
    <div className="pt-6 px-6 bg-gray-100 ">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-600 text-lg leading-9 font-normal cursor-pointer">
          Dashboard
        </h1>
        <button className="bg-blue-600 h-8 rounded text-white flex items-center justify-center px-4 cursor-pointer">
          Generate Report
        </button>
      </div>

      <CardComponent />

      {/* For the Chart */}

      <div className="flex flex-col mt-6 gap-8 md:flex-row md:gap-0">
        <div className=" basis-[70%] border bg-white shadow-md cursor-pointer rounded-md">
          <div className="bg-gray-100 flex items-center justify-between py-4 px-5 border-b border-gray-300 mb-5">
            <h2>Reservation Overview</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <LineChart
            width={1000}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        {/* End of Line Chart */}

        {/* Start of Pie Chart */}
        <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-md">
          <div className="bg-gray-100 flex items-center justify-between py-4 px-5 border-b border-gray-300 mb-5">
            <h2>Reservation for the Month</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-7">
            <PieComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
