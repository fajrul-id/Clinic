"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CountUp } from "use-count-up";
import AOS from "aos";
import "aos/dist/aos.css";
const Stats = () => {
  const [isCounting, setisCounting] = useState(false)
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 65,
    });
  }, []);
  
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    if (offset > 1212) {
      setisCounting(true);
    }
    else{
      setisCounting(false);
    }
    console.log(offset)
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return (
    <div className="my-8"  data-aos="fade-left"
    data-aos-delay="1000">
      <h1 className="text-2xl md:text-5xl bg-blue text-gray-200 rounded-md md:p-8 p-4">
        Statistik Pasien
      </h1>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 my-8">
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
                Persalinan normal
              </p>
              <div className="text-lg font-semibold text-gray-700 ">
              <CountUp
          start={0}
          end={350}
          easing="linear"
          duration={undefined}
          isCounting={isCounting}
          formatter={(value) => value.toLocaleString()}
        >
          {({ value }) => value}
        </CountUp>+
              </div>
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
                Pemeriksaan kehamilan
              </p>
              <div className="text-lg font-semibold text-gray-700 ">
              <CountUp
          start={0}
          end={1000}
          easing="linear"
          duration={undefined}
          isCounting={isCounting}
          formatter={(value) => value.toLocaleString()}
        >
          {({ value }) => value}
        </CountUp>+
              </div>
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
              <p className="mb-2 text-sm font-medium text-gray-600 ">KB</p>
              <div className="text-lg font-semibold text-gray-700 ">
              <CountUp
          start={0}
          end={1000}
          easing="linear"
          duration={undefined}
          isCounting={isCounting}
          formatter={(value) => value.toLocaleString()}
        >
          {({ value }) => value}
        </CountUp>+
              </div>
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
              <p className="mb-2 text-sm font-medium text-gray-600 ">KIA</p>
              <div className="text-lg font-semibold text-gray-700 ">
              <CountUp
          start={0}
          end={5000}
          easing="linear"
          duration={undefined}
          isCounting={isCounting}
          formatter={(value) => value.toLocaleString()}
        >
          {({ value }) => value}
        </CountUp>+
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
