"use client";
import React, { useEffect, useState } from "react";
import "./Slider.css";
import { Button } from "../Button";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      image: "bg1.jpg",
      title:
        "Selamat Datang di Klinik Bidan Praktek Mandiri Okti Susanti Amd.keb",
      text: `Selamat datang di bidan pratik mandiri BOS, yang didirikan
      oleh bidan OKTI SUSANTI Amd.keb sejak tahun 2013 yang
      berlokasi di Graha harapan Regency Blok d4 no 6 rt 005 rw 012
      babelan kota, kabupaten bekasi. Memberdayakan wanita sejak masa pranikah hingga menuju persalinan yang tenang, nyaman dan penuh kasih sayang hingga saat ini”`,
    },
    {
      image: "bg2.jpg",title:
      "Mengapa Harus Kami?",
      text: `Kami sudah mendampingi ibu mengikhtiarkan fitrah selama lebih
      dari 10 tahun dalam membantu proses persalinan dan memberikan
      pelayanan lainnya. Selain itu, kami juga memiliki fasilitas
      yang cukup mumpuni standar klinik kebidanan sesuai yang d
      butuhkan, untuk membantu menangani proses persalinan yang
      aman, sehat dan bersih di klinik.`,
    },
  ];
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [totalImages]);

  return (
    <section id="hero" className="mx-auto">
      <div className="slider-background">
        <div className="overlayslider z-10"></div>
        {images.map((image, index) => (
          <>
            <div
              key={index}
              className={`slider-background__slide ${
                index === currentIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${image.image})` }}
            />
            <div className="absolute z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
              <div className="ml-8 max-w-sm md:max-w-3xl flex flex-col gap-8">
                <h1
                  className={`text-5xl text-blue slider ${
                    index === currentIndex ? "active block" : ""
                  }`}
                >{image.title}</h1>
                <p
                  className={`text-transparent bg-clip-text bg-gray-200 text-sm md:text-base slider ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  {image.text}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Hero;
