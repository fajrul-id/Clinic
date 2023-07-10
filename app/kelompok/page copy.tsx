import { CardKecil } from "@/components/Card";

const layanan = [
  {
    id: 1,
    title: "Lokasi Strategis",
    img: "/fasilitas/lokasi.jpeg",
  },
  {
    id: 2,
    title: "Ruang Pendaftaran",
    img: "/fasilitas/ruangpendaftaran.jpeg",
  },
  {
    id: 3,
    title: "Ruang Tunggu Indoor",
    img: "/fasilitas/ruangtungguindoor.jpeg",
  },
  {
    id: 4,
    title: "Ruang Tunggu Outdoor",
    img: "/fasilitas/ruangtungguoutdoor.jpeg",
  },
  {
    id: 5,
    title: "Kids corner",
    img: "/fasilitas/kidscorner.jpeg",
  },
  {
    id: 6,
    title: "Ruang bersalin",
    img: "/fasilitas/ruangbersalin.jpeg",
  },
  {
    id: 7,
    title: "Meja Pemeriksaan Bayi",
    img: "/fasilitas/mejapemeriksaanbayi.jpeg",
  },
  {
    id: 8,
    title: "Ruang Pemeriksaan",
    img: "/fasilitas/ruangpemeriksaan.jpeg",
  },
  {
    id: 9,
    title: "Ruang Tunggu",
    img: "/fasilitas/ruangtunggu.jpeg",
  },
  {
    id: 10,
    title: "Kamar Nifas",
    img: "/fasilitas/kamarnifas.jpeg",
  },
];
export default function Home() {
  return (
    <>
      <main>
        <div className="mt-20 mx-auto">
          <div
            style={{ backgroundImage: `url("/bg4.jpg")` }}
            className="pt-4 px-8 pb-6 sm:px-6 lg:px-8 bg-no-repeat bg-cover bg-center flex flex-col gap-4 md:gap-8"
          >
            <h1 className="text-2xl md:text-5xl bg-blue text-gray-200 rounded-md md:p-8 p-4">
              Fasilitas
            </h1>
            <div className="flex flex-wrap justify-center md:flex-col md:max-h-[500vh] gap-8 md:items-center">
            {layanan.map((e) => (
              <>
                <CardKecil key={e.id} props={e} />
              </>
            ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
