import React from "react";
import TestimoniCard from "./TestimoniCard";
const Testimoni = () => {
  return (
    <div className="my-8">
      <h1 className="text-2xl md:text-5xl bg-blue text-gray-200 rounded-md md:p-8 p-4">
        Testimoni
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md: gap-8 mt-10">
      <TestimoniCard props={
        {nama:"",
         desc:"Pelayanannya bagus, tempat nya nyaman.  Bidan juga ngejelasinnya jelas dan ramah"
        }
        }/>
        <TestimoniCard props={
        {nama:"",
         desc:"Pelayanannya bagus banget, harga terjangkau, bidannya teliti, detail, juga ramah. Kebersihan di klinik ini bener-bener dijaga banget."
        }
        }/>
        <TestimoniCard props={
        {nama:"",
         desc:`Pelayanannya responsif dan sangat profesional. Suasana yang sangat
         kondusif sehingga merasa aman dan nyaman.`
        }
        }/>
      </div>
    </div>
  );
};

export default Testimoni;
