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
              Edukasi
            </h1>
            {video?.map((e) => (
              <>
                <div
                  style={{ backgroundImage: `url("/bg.jpg")` }}
                  className="w-full min-h-[50vh] bg-no-repeat p-4 relative"
                >
                  <iframe
                    src={e.link}
                    frameBorder="0"
                    key={e.id}
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </>
            ))}
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
