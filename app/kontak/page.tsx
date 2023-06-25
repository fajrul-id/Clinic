import Form from "@/components/kontak/Form";

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
              Kontak
            </h1>
            <div className="flex flex-wrap">
              <div className="md:w-1/3"><Form /></div>
              <div className="md:px-5 md:py-2 my-4 pb-10 md:pb-0 md:my-8 w-full md:w-2/3">
                <h1 className="md:text-2xl bg-white text-blue rounded-t-md md:p-2 p-1">
                  Maps
                </h1>
                <iframe
                  className="border-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.747535932688!2d107.02771517426413!3d-6.1645551938226655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69892cbf1f1057%3A0xa365d01b2cf00756!2sPraktek%20Mandiri%20Bidan%20Okti%20Susanti%20(%20BOS%20)!5e0!3m2!1sen!2sid!4v1687704056702!5m2!1sen!2sid"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
