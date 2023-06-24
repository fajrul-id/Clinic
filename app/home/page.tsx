import TopNavBar from "@/components/Layout/Header/TopNavBar";
import Hero from "@/components/home/Hero";
import SejarahSingkat from "@/components/home/SejarahSingkat";
import Wcu from "@/components/home/Wcu";

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
