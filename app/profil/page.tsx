/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <main>
        <div className="mt-20 mx-auto">
          <div
            style={{ backgroundImage: `url("/bg4.jpg")` }}
            className="pt-4 px-8 pb-6 sm:px-6 lg:px-8 bg-no-repeat bg-cover bg-center items-center flex flex-col gap-4 md:gap-8"
          >
            <h1 className="w-full text-2xl md:text-5xl bg-blue text-gray-200 rounded-md md:p-6 p-4">
              Profil
            </h1>
            <div className="max-w-lg">
              <div className="bg-white shadow-xl rounded-lg py-3">
                <div className="photo-wrapper p-2">
                  <img
                    className="w-48 h-82 rounded-full mx-auto"
                    src="/profile.jpg"
                    alt="John Doe"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                    Okti Susanti Amd.keb
                  </h3>
                  <div className="text-center text-gray-400 text-xs font-semibold">
                    <p>
                      Menempuh pendidikan DIII kebidanan di STIk Sint Carolus
                      lulus tahun 2008, dan sedang menempuh pendidikan serjana
                      kebidanan di STIKES ABDI NUSANTARA{" "}
                    </p>
                  </div>
                  <table className="text-xs my-3">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          NO STR
                        </td>
                        <td className="px-2 py-2">13 02 5 2 2 20-3298233</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          NO SIPB
                        </td>
                        <td className="px-2 py-2">1302522203298233</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Berlaku sampai
                        </td>
                        <td className="px-2 py-2">Oktober 2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const video = [
  {
    id: 1,
    link: "https://www.youtube.com/embed/xV5FnWQ6g4g",
  },
  {
    id: 2,
    link: "https://www.youtube.com/embed/AHzG3AHSFW4",
  },
  {
    id: 3,
    link: "https://www.youtube.com/embed/y2MB0Qg8P2w",
  },
  {
    id: 4,
    link: "https://www.youtube.com/embed/xK6O8wT6m1c",
  },
];
