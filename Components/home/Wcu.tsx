import React from "react";
import { PiMapPinLineFill } from "react-icons/pi";
import { BsFillBuildingFill } from "react-icons/bs";
import { FaHospital, FaAmbulance, FaPeopleCarry } from "react-icons/fa";
import { SiReadthedocs } from "react-icons/si";

const Wcu = () => {
  return (
    <div style={{backgroundImage: `url("/bg.jpg")`}} className="pt-4 px-4 pb-6 sm:px-6 lg:px-8">
      <h1 className="text-5xl bg-blue text-gray-200 rounded-md p-8">
        Why choose us?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
        <div
          id="lokasi"
          className="max-w-md group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <PiMapPinLineFill className="h-10 w-10 text-white transition-all" />
            </span>
            <div className="pt-5 text-xl font-semibold leading-7">
              <h1 className="text-sky-500 transition-all duration-300 group-hover:text-white">
                Lokasi Strategis
              </h1>
            </div>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>Lokasi yang mudah di Jangkau dengan Transportasi Umum</p>
            </div>
          </div>
        </div>

        <div
          id="fasilitas"
          className="max-w-md group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <BsFillBuildingFill className="h-10 w-10 text-white transition-all" />
            </span>
            <div className="pt-5 text-xl font-semibold leading-7">
              <h1 className="text-sky-500 transition-all duration-300 group-hover:text-white">
                Fasilitas Memadai
              </h1>
            </div>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>Fasilitas pendukung yang memeadai untuk kenyamanan pasien</p>
            </div>
          </div>
        </div>

        <div
          id="tenaga"
          className="max-w-md group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <FaHospital className="h-10 w-10 text-white transition-all" />
            </span>
            <div className="pt-5 text-xl font-semibold leading-7">
              <h1 className="text-sky-500 transition-all duration-300 group-hover:text-white">
                Tenaga Medis Berpengalaman
              </h1>
            </div>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
                Tenaga medis kami adalah lulusan terbaik di kebidanan dan telah
                berpengalaman
              </p>
            </div>
          </div>
        </div>

        <div
          id="integrasi"
          className="max-w-md group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <FaAmbulance className="h-10 w-10 text-white transition-all" />
            </span>
            <div className="pt-5 text-xl font-semibold leading-7">
              <h1 className="text-sky-500 transition-all duration-300 group-hover:text-white">
                INTEGRASI DENGAN RS TERDEKAT
              </h1>
            </div>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
                Kami bekerjasama dengan layanan Rumah Sakit Terdekat dan Layanan
                Mobil Ambulance EMERGENCY Layanan Transportasi untuk kepulangan
                setelah melahirkan
              </p>
            </div>
          </div>
        </div>

        <div
          id="tenaga"
          className="max-w-md group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <SiReadthedocs className="h-10 w-10 text-white transition-all" />
            </span>
            <div className="pt-5 text-xl font-semibold leading-7">
              <h1 className="text-sky-500 transition-all duration-300 group-hover:text-white">
                Legalitas Diakui
              </h1>
            </div>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>Kami sudah dilengkapi dengan perizinan</p>
            </div>
          </div>
        </div>

        <div
          id="tenaga"
          className="max-w-md group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
        >
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <FaPeopleCarry className="h-10 w-10 text-white transition-all" />
            </span>
            <div className="pt-5 text-xl font-semibold leading-7">
              <h1 className="text-sky-500 transition-all duration-300 group-hover:text-white">
                Pelayanan Masksimal
              </h1>
            </div>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <p>
                Kerjasama tim yang akan selalu siap melakukan pelayanan maksimal
                setiap saat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wcu;
