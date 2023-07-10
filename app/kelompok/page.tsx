import { namaKelompok } from "@/dummy/menu";
import React from "react";

const page = () => {
  return (
    <>
      <main>
        <div className="mt-20 mx-auto">
          <div
            style={{ backgroundImage: `url("/bg4.jpg")` }}
            className="pt-4 px-8 pb-6 sm:px-6 lg:px-8 bg-no-repeat bg-cover bg-center flex flex-col gap-4 md:gap-8"
          >
            <h1 className="text-2xl md:text-5xl bg-blue text-gray-200 rounded-md md:p-8 p-4">
              Nama-Nama Kelompok
            </h1>
            <div className="rounded-xl bg-white p-4 py-8 flex flex-wrap justify-center md:items-start md:flex-col">
              <div className="md:max-h-[50vh] flex flex-col flex-wrap gap-4 font-semibold">
                {namaKelompok.map((e, i) => (
                  <div key={i}>
                    <p>{e}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
