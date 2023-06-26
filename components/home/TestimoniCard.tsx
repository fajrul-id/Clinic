/* eslint-disable @next/next/no-img-element */
import React from "react";
interface Testi{
  nama:string;
  desc: string
}
const TestimoniCard = ({props}:{props:Testi}) => {
  return (
    <>
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="/avatar.png"
            alt="img"
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">{props.nama}</h2>
          <p className="mt-2 text-gray-600">
            {props.desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimoniCard;
