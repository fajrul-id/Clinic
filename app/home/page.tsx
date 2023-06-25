import TopNavBar from "@/components/Layout/Header/TopNavBar";
import Hero from "@/components/home/Hero";
import SejarahSingkat from "@/components/home/SejarahSingkat";
import Stats from "@/components/home/Stats";
import Testimoni from "@/components/home/Testimoni";
import Wcu from "@/components/home/Wcu";

export default function Home() {
  return (
    <>
      <main>
        <div className="mt-20 mx-auto">
          <Hero />

          <div
            style={{ backgroundImage: `url("/bg.jpg")` }}
            className="pt-4 px-4 pb-6 sm:px-6 lg:px-8 mx-auto"
          >
            <Wcu />
            <SejarahSingkat />
            <Stats/>
            <Testimoni/>
          </div>
        </div>
      </main>
    </>
  );
}
