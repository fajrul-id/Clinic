"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Stats = () => {
  const [list, setlist] = useState([]);
  const [valueKirim, setValue] = useState("");

  useEffect(() => {
    getData()
    kirimPesan();
  }, []);
  

  const getData = async () => {
    let config = {
      method: "get",
      url: `https://result.fajrul.id/api/result/u?userId=klinik`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios(config).then((json) => {
      const data = json.data.data;
      setlist(data);
    });
  };

  const kirimPesan = async () => {
    const kirim = {
      email:"'",
      userId: "klinik",
    };
    let config = {
      method: "post",
      url: `https://result.fajrul.id/api/result`,
      headers: {
        "Content-Type": "application/json",
      },
      data: kirim,
    };
    axios(config)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log("debug err", err);
      });
  };
  return (
    <div className="my-8">
      <h1 className="text-2xl md:text-5xl bg-blue text-gray-200 rounded-md md:p-8 p-4">
        Statistik
      </h1>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 my-8">
        <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white ">
          <div className="p-4 flex items-center">
            <div className="p-3 rounded-full text-white dark:text-orange-100 bg-teal-500 dark:bg-orange-500 mr-4">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 ">
                Total Pengunjung
              </p>
              <p className="text-lg font-semibold text-gray-700 ">{list?.length}</p>
            </div>
          </div>
        </div>
        <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white ">
          <div className="p-4 flex items-center">
            <div className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 ">
                Dihubungi Melalui Web
              </p>
              <p className="text-lg font-semibold text-gray-700 ">35</p>
            </div>
          </div>
        </div>
        <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white ">
          <div className="p-4 flex items-center">
            <div className="p-3 rounded-full text-white dark:text-white bg-blue dark:bg-orange-500 mr-4">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 ">
                Total clients
              </p>
              <p className="text-lg font-semibold text-gray-700 ">6389</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
