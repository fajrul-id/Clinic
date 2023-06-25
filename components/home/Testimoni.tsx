import React from "react";
import TestimoniCard from "./TestimoniCard";
const Testimoni = () => {
  return (
    <div className="my-8">
      <h1 className="text-2xl md:text-5xl bg-blue text-gray-200 rounded-md md:p-8 p-4">
        Testimoni
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
        <TestimoniCard />
      </div>
    </div>
  );
};

export default Testimoni;
