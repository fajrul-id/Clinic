/* eslint-disable @next/next/no-img-element */
import React from "react";

const SejarahSingkat = () => {
  return (
    <div
      style={{ backgroundImage: `url("/bg.jpg")` }}
      className="pt-4 px-4 pb-6 sm:px-6 lg:px-8 bg-no-repeat"
    >
      <div className="flex flex-col md:flex-row gap-8 py-8">
        <div className="flex justify-center md:w-1/2">
          <img src="/profile.jpg" alt="sejarahsingkat" className="max-h-[300px] md:max-h-[400px]" />
        </div>
        <div className="flex flex-col gap-4 md:gap-8 md:w-1/2">
          <div>
            <h3 className="text-secondary">TENTANG KAMI</h3>
            <h1 className="text-4xl font-semibold">Sejarah Singkat</h1>
          </div>
          <p className="text-justify">
            Tempat praktik mandiri bidan <b>Okti Susanti Amd.keb</b> berdiri
            sejak tahun 2013 merupakan sebuah klinik Bidan Praktek Mandiri yang
            memberikan pelayanan secara holistik kepada ibu dan anak . mulai
            dari fase Kehamilan, Persalinan, dan Nifas, KB, kemudian Bayi Baru
            Lahir, Imunisasi, dan KIA, Dalam PMB terdiri dari 1 lantai. Lantai 1
            terdapat beberapa ruangan yaitu, ruang tunggu pasien, ruang
            pendaftaran, dan alat kesehatan , ruang periksa, ruang nifas
            tertutup terdapat kamar mandi di fasilitasi dengan AC dan kipas
            angin dan hanya terdapat 1 bed nifas dalam ruangan dan, 1 ruang
            bersalin terdapat kamar mandi dalam, ruang dan Pantry Ruang
            serbaguna yang dapat dipakai untuk kelas hamil ,senam hamil dan
            ruang baby spa,Pendidikan terakhir D III Kebidanan STIK Sint Carolus
            . saat ini sedang melanjutkan pendidikan S1 Kebidanan dan Profesi di
            Stikes Abdi Nusantara Jakarta. sejak lulus 2008 lalu, di awal karir
            saya senang mencari pengalaman di bidang kebidanan di mulai bekerja
            bekerja di RS St Carolus selama 2 tahun,kemudian bekerja di RS mitra
            keluarga bekasi dari 2011-2022 dan mulai praktek mandiri mulai dari
            2013 sambil kerja di rumah sakit dan sejak tahun 2022 mulai focus ke
            praktek mandiri. saat ini menjadi bidan full time di praktik bidan
            okti . Klinik yang dirintis oleh Bidan Okti terletak di jalan Graha
            Harapan Regency blok D1 No.38 Rt 005 Rw 012 Desa Babelan Kota ,
            Kecamatan Babelan, Kabupaten Bekasi, Provinsi Jawa Barat 17610
          </p>
        </div>
      </div>
    </div>
  );
};

export default SejarahSingkat;
