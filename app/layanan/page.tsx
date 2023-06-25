import { Card } from "@/components/Card";

const layanan = [
  {
    id: 1,
    title: "Atenatal Care",
    desc: (
      <>
        <p>
          Periksakan kehamilan bunda secara rutin di Klinik kami: Pemeriksaan
          Kehamilan, Pemeriksaan Nifas, Pemeriksaan Bayi Baru Lahir, Keluarga
          Berencana
        </p>
        <p className="mt-4">
          Setiap Hari: Pagi : 08.00 -11.00; Sore : 16.00 -21.00; Jumat : 08.00
          -11.00
        </p>
      </>
    ),
    img: "/layanan/atenatal.jpg",
  },
  {
    id: 2,
    title: "Persalinan Normal",
    desc: (
      <>
        <p>
          Persalinan normal di Klinik Bidan Atria dapat ditangani oleh dokter
          spesial kandungan dan Bidan. Percayakan persalinan normal bunda kepada
          klinik kami.
        </p>
        <p className="mt-4 font-bold">Pelayanan 24 Jam</p>
      </>
    ),
    img: "/layanan/persalinan.jpg",
  },
  {
    id: 3,
    title: "USG 2D/4D",
    desc: (
      <>
        <p>
          Bunda bisa cek perkembangan sikecil dengan USG 2D/4D dengan dokter
          SPOG.
        </p>
        <p className="mt-4">
          Setiap Hari: Pagi : 08.00 -11.00; Sore : 16.00 -21.00; Jumat : 08.00
          -11.00
        </p>
      </>
    ),
    img: "/layanan/usg.jpeg",
  },
  {
    id: 4,
    title: "Imunisasi",
    desc: (
      <>
        <p>Cara terbaik untuk melindungi buah hati anda dari penyakit</p>
        <p className="mt-4">
          Setiap Hari: Pagi : 08.00 -11.00; Sore : 16.00 -21.00; Jumat : 08.00
          -11.00
        </p>
      </>
    ),
    img: "/layanan/imunisasi.webp",
  },
  {
    id: 5,
    title: "Kesehatan Keluarga",
    desc: (
      <>
        <p>
          Pemeriksaan umum; Senam Hamil; Konseling Kesehatan Ibu dan Bayi;
          Laktasi Carea;{" "}
        </p>
        <p className="mt-4">
          Setiap Hari: Pagi : 08.00 -11.00; Sore : 16.00 -21.00; Jumat : 08.00
          -11.00
        </p>
      </>
    ),
    img: "/layanan/keshatakeluarga.jpeg",
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
            <h1 className="text-2xl md:text-5xl bg-blue text-gray-200 rounded-md md:p-6 p-4">
             Layanan
            </h1>
            {layanan.map((e) => (
              <>
                <Card key={e.id} props={e} />
              </>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
