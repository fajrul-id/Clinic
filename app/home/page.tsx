import TopNavBar from "@/Components/Layout/Header/TopNavBar";
import Hero from "@/Components/home/Hero";
import SejarahSingkat from "@/Components/home/SejarahSingkat";
import Wcu from "@/Components/home/Wcu";

export default function Home() {
  return (
    <>
      <main>
        <div className="mt-20 mx-auto">
          <Hero />
          <div className="mx-auto">
            <Wcu/>
            <SejarahSingkat/>
          </div>
        </div>
      </main>
    </>
  );
}
