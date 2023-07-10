"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

const Footer = () => {
  
  const [list, setlist] = useState([]);
  useEffect(() => {
    getData();
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
  return (
    <footer className="bg-primary text-cream static bottom-0">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div>
            <div className="flex justify-center text-cream sm:justify-start">
              <img src="/logo.png" alt="logo" className="max-w-[200px]" />
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-background sm:max-w-xs sm:text-left">
              Praktek Mandiri Bidan Okti Susanti ( BOS ) Graha Harapan Regency
              Blok D4 No. 6, Babelan Kota, Kabupaten Bekasi, Jawa Barat 17610
            </p>
          </div>

          <ul className="flex flex-col gap-6 sm:justify-start md:gap-8">
            <li>
              <div>
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white ">
                  <div className="p-4 flex items-center">
                    <div className="p-3 rounded-full text-white dark:text-orange-100 bg-teal-500 dark:bg-orange-500 mr-4">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-5 h-5"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-gray-600 ">
                        Total Website di Kunjungi
                      </p>
                      <p className="text-lg font-semibold text-gray-700 ">
                        {list?.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-cream transition hover:text-cream/75 flex gap-4 p-4 rounded-lg border"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Bidan okti Susanti</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-background">
              <span className="block sm:inline">All rights reserved.</span>
            </p>
            <p className="mt-4 text-sm text-background sm:order-first sm:mt-0">
              © 2023 by fajrul.id
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
